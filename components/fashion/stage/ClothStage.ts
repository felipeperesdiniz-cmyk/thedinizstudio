import * as THREE from 'three'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
import { gsap } from '@/lib/gsap'
import { DYES, VARIANTS } from '@/components/fashion/content'
import { LABEL_RECT, labelTexture, maskTexture, weaveTexture, type Fonts } from './textures'

/**
 * Where the cloth sits and what state it is in. x and y are fractions of the
 * viewport from its centre (y up), s is the cloth's height as a fraction of
 * the viewport height. Every value interpolates, so the scroll can scrub it.
 */
export type Pose = {
  x: number
  y: number
  s: number
  rx: number
  ry: number
  rz: number
  /** Slow swells, floating free. */
  wind: number
  /** A travelling wave, as a flag in flight. */
  flutter: number
  /** Hanging folds from the top edge. */
  drape: number
  /** Twist around the vertical axis. */
  twist: number
  /** How much of the cloth is woven, from the hem up. */
  weave: number
  /** Bare warp threads shown above the woven part, as on the loom. */
  warp: number
  /** 0 a whole length of cloth, 1 cut to the garment's outline. */
  cut: number
  stitch: number
  /** Index into DYES; the fraction is how far the next dye has risen. */
  dye: number
  /** Blend toward the collection garment's own colour. */
  vary: number
  hanger: number
  /** Weight of the idle sway and pointer response. */
  idle: number
}

export const POSE_KEYS = [
  'x',
  'y',
  's',
  'rx',
  'ry',
  'rz',
  'wind',
  'flutter',
  'drape',
  'twist',
  'weave',
  'warp',
  'cut',
  'stitch',
  'dye',
  'vary',
  'hanger',
  'idle',
] as const

export const REST_POSE: Pose = {
  x: 0,
  y: 0,
  s: 0.6,
  rx: 0,
  ry: 0,
  rz: 0,
  wind: 1,
  flutter: 0,
  drape: 0,
  twist: 0,
  weave: 1,
  warp: 0,
  cut: 0,
  stitch: 0,
  dye: 0,
  vary: 0,
  hanger: 0,
  idle: 1,
}

const W = 2
const H = 2.5

const VERT_HEAD = /* glsl */ `
  uniform float uTime;
  uniform float uWind;
  uniform float uFlutter;
  uniform float uDrape;
  uniform float uTwist;
  uniform vec3 uPointer;
  varying vec2 vCUv;

  vec3 clothPos(vec2 uv) {
    vec3 p = vec3((uv.x - 0.5) * ${W.toFixed(1)}, (uv.y - 0.5) * ${H.toFixed(1)}, 0.0);
    float t = uTime;
    float hang = 1.0 - uv.y;

    // Floating free: slow crossing swells, like silk under water.
    float swell = sin(uv.x * 4.2 + t * 1.1 + uv.y * 1.7) * 0.55
      + sin(uv.y * 5.3 - t * 1.4 + uv.x * 2.6) * 0.35
      + sin((uv.x + uv.y) * 10.0 + t * 2.1) * 0.1;
    p.z += swell * uWind * 0.26;

    // In flight: a wave runs off the trailing edge.
    p.z += sin(uv.x * 8.0 - t * 7.0 + uv.y * 1.5) * uFlutter * 0.28 * (0.3 + uv.x);
    p.y += sin(uv.x * 6.0 - t * 7.0) * uFlutter * 0.06 * uv.x;

    // Hanging: folds that deepen toward the hem and gather it in.
    float folds = sin(uv.x * 25.13 + sin(t * 0.7 + uv.y * 3.0) * 0.8);
    p.z += folds * uDrape * 0.09 * pow(hang, 1.3);
    p.x *= 1.0 - uDrape * 0.06 * hang;
    p.x += sin(t * 0.8) * 0.05 * uDrape * hang * hang;

    // The pointer presses a soft dent into the cloth.
    vec2 d = (uv - uPointer.xy) * vec2(1.0, 1.25);
    p.z -= exp(-dot(d, d) * 22.0) * uPointer.z * 0.3;

    float a = uTwist * (uv.y - 0.5) * 3.14159;
    float ca = cos(a);
    float sa = sin(a);
    p.xz = vec2(p.x * ca - p.z * sa, p.x * sa + p.z * ca);
    return p;
  }
`

const VERT_NORMAL = /* glsl */ `
  vCUv = uv;
  vec3 cP = clothPos(uv);
  vec3 objectNormal = normalize(cross(clothPos(uv + vec2(0.003, 0.0)) - cP, clothPos(uv + vec2(0.0, 0.003)) - cP));
  #ifdef USE_TANGENT
    vec3 objectTangent = vec3(tangent.xyz);
  #endif
`

const FRAG_HEAD = /* glsl */ `
  uniform float uTime;
  uniform float uWeave;
  uniform float uWarp;
  uniform float uCut;
  uniform float uStitch;
  uniform float uDipT;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uRaw;
  uniform vec3 uThread;
  uniform sampler2D uMask;
  uniform sampler2D uLabel;
  uniform vec4 uLabelRect;
  varying vec2 vCUv;
  float cHash(float n) { return fract(sin(n) * 43758.5453); }
`

const FRAG_MAP = /* glsl */ `
  #include <map_fragment>
  vec2 cu = vCUv;
  float weaveTone = diffuseColor.r;

  // Loom: woven below the line, bare warp threads above it, a ragged fringe between.
  float thread = floor(cu.x * 120.0);
  float line = uWeave * 1.16 - 0.1 + (cHash(thread) - 0.5) * 0.03;
  bool bare = cu.y > line;
  if (bare) {
    float warpMask = smoothstep(0.32, 0.0, abs(fract(cu.x * 120.0) - 0.5));
    float fringe = 1.0 - smoothstep(0.0, 0.04 + cHash(thread + 7.0) * 0.04, cu.y - line);
    if (warpMask * max(fringe, uWarp) < 0.5) discard;
  }

  // Cut: the scissors sweep diagonally, taking away what is outside the outline.
  vec4 mk = texture(uMask, cu);
  float sweep = cu.x * 0.55 + (1.0 - cu.y) * 0.45;
  if (mk.r < 0.5 && sweep < uCut * 1.1 - 0.05) discard;

  // Dye: the next colour rises from the hem with a darker wet edge.
  float dipLine = uDipT * 1.2 - 0.1 + sin(cu.x * 11.0 + uTime * 0.8) * 0.012;
  float dipped = smoothstep(dipLine + 0.008, dipLine - 0.008, cu.y);
  vec3 dye = mix(uColorA, uColorB, dipped);
  float wet = dipped * exp(-pow((dipLine - cu.y) * 22.0, 2.0)) * step(0.001, uDipT) * step(uDipT, 0.999);
  dye *= 1.0 - wet * 0.35;

  diffuseColor.rgb = (bare ? uRaw : dye) * (0.45 + 0.65 * weaveTone);
  diffuseColor.rgb = mix(diffuseColor.rgb, uThread, mk.g * uStitch * step(0.5, mk.r));

  vec2 lu = (cu - uLabelRect.xy) / (uLabelRect.zw - uLabelRect.xy);
  if (!bare && gl_FrontFacing && lu.x >= 0.0 && lu.x <= 1.0 && lu.y >= 0.0 && lu.y <= 1.0) {
    diffuseColor.rgb = texture(uLabel, lu).rgb;
  }
  if (!gl_FrontFacing) diffuseColor.rgb *= 0.8;
`

export class ClothStage {
  private renderer: THREE.WebGLRenderer
  private scene = new THREE.Scene()
  private camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100)
  private root = new THREE.Group()
  private cloth!: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshPhysicalMaterial>
  private hanger = new THREE.Group()
  private uniforms = {
    uTime: { value: 0 },
    uWind: { value: 1 },
    uFlutter: { value: 0 },
    uDrape: { value: 0 },
    uTwist: { value: 0 },
    uPointer: { value: new THREE.Vector3(0.5, 0.5, 0) },
    uWeave: { value: 1 },
    uWarp: { value: 0 },
    uCut: { value: 0 },
    uStitch: { value: 0 },
    uDipT: { value: 0 },
    uColorA: { value: new THREE.Color() },
    uColorB: { value: new THREE.Color() },
    uRaw: { value: new THREE.Color(DYES[0].cloth) },
    uThread: { value: new THREE.Color('#e9dcc1') },
    uMask: { value: null as THREE.Texture | null },
    uLabel: { value: null as THREE.Texture | null },
    uLabelRect: { value: new THREE.Vector4(...LABEL_RECT) },
  }
  private dyes = DYES.map((d) => new THREE.Color(d.cloth))
  private variantColor = new THREE.Color(DYES[VARIANTS[0]!.dye]!.cloth)
  private masks: THREE.CanvasTexture[] = []
  private disposables: { dispose(): void }[] = []

  private target: Pose = { ...REST_POSE }
  private current: Pose = { ...REST_POSE }
  private pointer = { x: 0, y: 0, sx: 0, sy: 0, dent: 0, active: false }
  private ray = new THREE.Raycaster()
  private plane = new THREE.Plane()
  private hit = new THREE.Vector3()
  private inverse = new THREE.Matrix4()
  private time = 0
  private visH = 1
  private visW = 1
  private variant = 0

  /** Extra turn used to hide garment swaps. */
  spin = 0
  /** Entrance offset, 1 before the intro plays. */
  intro = 1

  constructor(private canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' })
    this.renderer.setClearColor(0x000000, 0)
    this.renderer.toneMapping = THREE.NeutralToneMapping
    this.renderer.toneMappingExposure = 1.05
    this.camera.position.set(0, 0, 14)
    this.scene.add(this.root)
  }

  async init(fonts: Fonts) {
    const pmrem = new THREE.PMREMGenerator(this.renderer)
    const env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
    this.scene.environment = env
    this.scene.environmentIntensity = 0.55
    pmrem.dispose()
    this.disposables.push(env)

    const key = new THREE.DirectionalLight(0xfff1de, 2.4)
    key.position.set(-5, 6, 7)
    const rim = new THREE.DirectionalLight(0xdbe6ff, 2.2)
    rim.position.set(6, 3, -5)
    const fill = new THREE.DirectionalLight(0xffffff, 0.5)
    fill.position.set(4, -3, 6)
    this.scene.add(key, rim, fill, new THREE.AmbientLight(0xffffff, 0.2))

    const aniso = this.renderer.capabilities.getMaxAnisotropy()
    const weave = weaveTexture()
    weave.repeat.set(10, 12.5)
    weave.anisotropy = aniso
    const label = labelTexture(fonts, aniso)
    this.masks = VARIANTS.map((v) => maskTexture(v.id))
    this.uniforms.uLabel.value = label
    this.uniforms.uMask.value = this.masks[0]!
    this.disposables.push(weave, label, ...this.masks)

    const mat = new THREE.MeshPhysicalMaterial({
      map: weave,
      bumpMap: weave,
      bumpScale: 1.6,
      roughness: 0.86,
      sheen: 1,
      sheenRoughness: 0.45,
      sheenColor: new THREE.Color('#bfb8ab'),
      side: THREE.DoubleSide,
    })
    mat.onBeforeCompile = (shader) => {
      Object.assign(shader.uniforms, this.uniforms)
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', `#include <common>\n${VERT_HEAD}`)
        .replace('#include <beginnormal_vertex>', VERT_NORMAL)
        .replace('#include <begin_vertex>', '#include <begin_vertex>\ntransformed = cP;')
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', `#include <common>\n${FRAG_HEAD}`)
        .replace('#include <map_fragment>', FRAG_MAP)
    }
    const geo = new THREE.PlaneGeometry(W, H, 110, 136)
    this.cloth = new THREE.Mesh(geo, mat)
    // The shader moves every vertex; bounds from the flat sheet would cull it wrongly.
    this.cloth.frustumCulled = false
    this.root.add(this.cloth)
    this.disposables.push(geo, mat)

    this.buildHanger()
    this.resize()
    // Compile shaders now so the first scroll frame does not stall.
    this.renderer.compile(this.scene, this.camera)
  }

  /** A wooden bar behind the garment and a wire hook above it, in cloth units. */
  private buildHanger() {
    const wood = new THREE.MeshStandardMaterial({ color: 0x3b2a1d, roughness: 0.55 })
    const wire = new THREE.MeshStandardMaterial({ color: 0xcfc8ba, metalness: 1, roughness: 0.28 })
    const bar = new THREE.TubeGeometry(
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.66, 0.95, -0.08),
        new THREE.Vector3(-0.32, 1.07, -0.08),
        new THREE.Vector3(0, 1.12, -0.08),
        new THREE.Vector3(0.32, 1.07, -0.08),
        new THREE.Vector3(0.66, 0.95, -0.08),
      ]),
      48,
      0.035,
      12,
    )
    const hook = new THREE.TubeGeometry(
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 1.1, -0.06),
        new THREE.Vector3(0, 1.32, -0.04),
        new THREE.Vector3(0.06, 1.42, -0.03),
        new THREE.Vector3(0.0, 1.5, -0.03),
        new THREE.Vector3(-0.07, 1.45, -0.03),
      ]),
      40,
      0.012,
      8,
    )
    this.hanger.add(new THREE.Mesh(bar, wood), new THREE.Mesh(hook, wire))
    this.hanger.visible = false
    this.root.add(this.hanger)
    this.disposables.push(wood, wire, bar, hook)
  }

  setTarget(p: Pose) {
    this.target = p
  }

  /** Jump straight to the target, used when motion is reduced. */
  snap() {
    this.current = { ...this.target }
  }

  /** Pointer in normalised device coordinates. */
  setPointer(x: number, y: number) {
    this.pointer.x = x
    this.pointer.y = y
    this.pointer.active = true
  }

  setVariant(i: number) {
    if (i === this.variant || !this.masks[i]) return
    this.variant = i
    gsap.killTweensOf(this, 'spin')
    gsap.to(this, { spin: Math.round(this.spin / (Math.PI * 2)) * Math.PI * 2 + Math.PI * 2, duration: 1.2, ease: 'expo.inOut' })
    // Swap the outline while the cloth is edge on.
    gsap.delayedCall(0.3, () => {
      if (this.variant === i) this.uniforms.uMask.value = this.masks[i]!
    })
    const c = new THREE.Color(DYES[VARIANTS[i]!.dye]!.cloth)
    gsap.to(this.variantColor, { r: c.r, g: c.g, b: c.b, duration: 0.9, ease: 'power2.inOut' })
  }

  resize() {
    const w = this.canvas.clientWidth
    const h = this.canvas.clientHeight
    if (!w || !h) return
    const mobile = w < 768
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, mobile ? 1.5 : 2))
    this.renderer.setSize(w, h, false)
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
    this.visH = 2 * this.camera.position.z * Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2))
    this.visW = this.visH * this.camera.aspect
  }

  update(dt: number) {
    this.time += dt
    const k = 1 - Math.exp(-dt * 6)
    const c = this.current
    // Hide at once when asked to, so the snap below runs before it reappears elsewhere.
    if (this.target.s < 0.005) c.s = 0
    // While hidden, jump to the target so the cloth never sweeps across the screen as it reappears.
    if (c.s < 0.005) for (const key of POSE_KEYS) if (key !== 's') c[key] = this.target[key]
    for (const key of POSE_KEYS) c[key] += (this.target[key] - c[key]) * k

    const p = this.pointer
    const pk = 1 - Math.exp(-dt * 4)
    p.sx += (p.x - p.sx) * pk
    p.sy += (p.y - p.sy) * pk

    const scale = (c.s * this.visH) / H
    const visible = scale > 0.002
    this.root.visible = visible
    const idle = c.idle * (1 - this.intro)
    const float = Math.sin(this.time * 0.9) * 0.012 * idle
    this.root.position.set(c.x * this.visW, (c.y + float + this.intro * 1.2) * this.visH, 0)
    this.root.scale.setScalar(scale)
    this.root.rotation.set(
      c.rx - p.sy * 0.18 * idle - this.intro * 1.2,
      c.ry + Math.sin(this.time * 0.35) * 0.18 * idle + this.spin + p.sx * 0.35 * idle + this.intro * 2.2,
      c.rz - p.sx * 0.05 * idle + this.intro * 0.8,
      'XYZ',
    )
    this.root.updateMatrixWorld()

    // Where the pointer meets the (flat) cloth, in uv.
    let dent = 0
    if (visible && p.active && idle > 0.2) {
      this.ray.setFromCamera(new THREE.Vector2(p.x, p.y), this.camera)
      this.plane.setFromNormalAndCoplanarPoint(new THREE.Vector3(0, 0, 1).transformDirection(this.root.matrixWorld), this.root.position)
      if (this.ray.ray.intersectPlane(this.plane, this.hit)) {
        this.hit.applyMatrix4(this.inverse.copy(this.root.matrixWorld).invert())
        const u = this.hit.x / W + 0.5
        const v = this.hit.y / H + 0.5
        if (u > -0.1 && u < 1.1 && v > -0.1 && v < 1.1) {
          const ptr = this.uniforms.uPointer.value
          ptr.x += (u - ptr.x) * 0.25
          ptr.y += (v - ptr.y) * 0.25
          dent = idle
        }
      }
    }
    p.dent += (dent - p.dent) * (1 - Math.exp(-dt * 3))

    const u = this.uniforms
    u.uTime.value = this.time
    u.uWind.value = c.wind
    u.uFlutter.value = c.flutter + this.intro * 1.2
    u.uDrape.value = c.drape
    u.uTwist.value = c.twist
    u.uPointer.value.z = p.dent
    u.uWeave.value = c.weave
    u.uWarp.value = c.warp
    u.uCut.value = c.cut
    u.uStitch.value = c.stitch

    const last = this.dyes.length - 1
    const d = THREE.MathUtils.clamp(c.dye, 0, last)
    const i = Math.min(Math.floor(d), last - 1)
    u.uDipT.value = d - i
    u.uColorA.value.copy(this.dyes[i]!).lerp(this.variantColor, c.vary)
    u.uColorB.value.copy(this.dyes[i + 1]!).lerp(this.variantColor, c.vary)

    this.hanger.visible = visible && c.hanger > 0.5
    this.hanger.position.y = (1 - c.hanger) * 0.8

    this.renderer.render(this.scene, this.camera)
  }

  dispose() {
    gsap.killTweensOf(this)
    gsap.killTweensOf(this.variantColor)
    for (const d of this.disposables) d.dispose()
    this.renderer.dispose()
  }
}

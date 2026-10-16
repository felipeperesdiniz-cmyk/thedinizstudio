import * as THREE from 'three'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
import { gsap } from '@/lib/gsap'
import { VARIANTS } from '@/components/matcha/content'
import { brushedTexture, labelTexture, lidTopTexture, powderTexture, shadowTexture, type Fonts } from './textures'

/**
 * Where the tin sits on screen. x and y are fractions of the viewport from its
 * centre (y up), s is the tin's height as a fraction of the viewport height.
 */
export type Pose = {
  x: number
  y: number
  s: number
  rx: number
  ry: number
  rz: number
  /** 0 closed, 1 lid lifted off. */
  lid: number
  /** 0 to 1 progress of powder streaming into the tin. */
  pour: number
  /** How full the tin is. */
  fill: number
  /** Weight of the idle spin, float and pointer tilt. */
  idle: number
  /** Contact shadow opacity. */
  shadow: number
  /** Floating dust in the air. */
  motes: number
}

export const POSE_KEYS = ['x', 'y', 's', 'rx', 'ry', 'rz', 'lid', 'pour', 'fill', 'idle', 'shadow', 'motes'] as const

const TIN_H = 2.71
const BODY_TOP = 1.2

const STREAM_VERT = /* glsl */ `
  attribute vec4 aSeed;
  uniform float uPour;
  uniform vec3 uStart;
  uniform vec3 uEnd;
  uniform float uPx;
  uniform float uTime;
  varying float vAlpha;
  varying float vShade;
  void main() {
    float delay = aSeed.x * 0.78;
    float t = clamp((uPour - delay) / 0.2, 0.0, 1.0);
    float alive = step(0.0001, t) * (1.0 - step(0.9999, t));
    vec2 j = (aSeed.yz - 0.5);
    vec3 a = uStart + vec3(j.x * 0.22, 0.0, j.y * 0.22);
    vec3 b = uEnd + vec3(j.x * 0.9, 0.0, j.y * 0.9);
    vec3 p = mix(a, b, t * t);
    float swirl = (1.0 - t) * 0.07;
    p.x += sin(t * 9.0 + aSeed.w * 40.0 + uTime * 2.0) * swirl;
    p.z += cos(t * 7.0 + aSeed.w * 30.0) * swirl;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = (0.5 + aSeed.w * 1.4) * uPx / -mv.z;
    vAlpha = alive * smoothstep(0.0, 0.08, t) * (1.0 - smoothstep(0.82, 1.0, t));
    vShade = aSeed.w;
  }
`

const MOTES_VERT = /* glsl */ `
  attribute vec4 aSeed;
  uniform float uTime;
  uniform float uPx;
  uniform vec2 uSpan;
  varying float vAlpha;
  varying float vShade;
  void main() {
    vec3 p = vec3((aSeed.x - 0.5) * uSpan.x, (aSeed.y - 0.5) * uSpan.y, (aSeed.z - 0.5) * 6.0);
    float drift = uTime * (0.03 + aSeed.w * 0.05);
    p.y = mod(p.y + drift + uSpan.y * 0.5, uSpan.y) - uSpan.y * 0.5;
    p.x += sin(uTime * 0.3 + aSeed.w * 20.0) * 0.25;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = (0.4 + aSeed.w * 1.6) * uPx / -mv.z;
    vAlpha = 0.25 + 0.5 * aSeed.w;
    vShade = aSeed.w;
  }
`

const DOT_FRAG = /* glsl */ `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform float uOpacity;
  varying float vAlpha;
  varying float vShade;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    float a = smoothstep(0.5, 0.0, d);
    gl_FragColor = vec4(mix(uColorA, uColorB, vShade), a * vAlpha * uOpacity);
    #include <colorspace_fragment>
  }
`

function seeds(count: number, seed: number) {
  let s = seed
  const rand = () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
  const data = new Float32Array(count * 4)
  for (let i = 0; i < data.length; i++) data[i] = rand()
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(count * 3), 3))
  geo.setAttribute('aSeed', new THREE.BufferAttribute(data, 4))
  return geo
}

export const REST_POSE: Pose = {
  x: 0,
  y: 0,
  s: 0.5,
  rx: 0,
  ry: 0,
  rz: 0,
  lid: 0,
  pour: 0,
  fill: 1,
  idle: 1,
  shadow: 0,
  motes: 0,
}

export class TinStage {
  private renderer: THREE.WebGLRenderer
  private scene = new THREE.Scene()
  private camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100)
  private root = new THREE.Group()
  private tin = new THREE.Group()
  private lid = new THREE.Group()
  private powder!: THREE.Mesh
  private labelMat!: THREE.MeshPhysicalMaterial
  private lidMat!: THREE.MeshPhysicalMaterial
  private lidTopMat!: THREE.MeshPhysicalMaterial
  private shadow!: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>
  private stream!: THREE.Points<THREE.BufferGeometry, THREE.ShaderMaterial>
  private motes!: THREE.Points<THREE.BufferGeometry, THREE.ShaderMaterial>
  private labels: THREE.CanvasTexture[] = []
  private disposables: { dispose(): void }[] = []

  private target: Pose = { ...REST_POSE }
  private current: Pose = { ...REST_POSE }
  private pointer = { x: 0, y: 0, sx: 0, sy: 0 }
  private idleAngle = 0
  private time = 0
  private visH = 1
  private visW = 1
  private variant = 0

  /** Extra spin used to hide label swaps. */
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
    this.root.add(this.tin)
  }

  async init(fonts: Fonts) {
    const pmrem = new THREE.PMREMGenerator(this.renderer)
    const env = pmrem.fromScene(new RoomEnvironment(), 0.035).texture
    this.scene.environment = env
    this.scene.environmentIntensity = 0.75
    pmrem.dispose()
    this.disposables.push(env)

    const key = new THREE.DirectionalLight(0xfff3e0, 2.2)
    key.position.set(-4, 6, 6)
    const rim = new THREE.DirectionalLight(0xdfe9ff, 1.6)
    rim.position.set(5, 2, -4)
    this.scene.add(key, rim, new THREE.AmbientLight(0xffffff, 0.15))

    const aniso = this.renderer.capabilities.getMaxAnisotropy()
    this.labels = VARIANTS.map((v) => labelTexture(v, fonts, aniso))
    const brushed = brushedTexture()
    const lidTop = lidTopTexture()
    const powderBump = powderTexture()
    powderBump.wrapS = powderBump.wrapT = THREE.RepeatWrapping
    powderBump.repeat.set(3, 3)
    this.disposables.push(...this.labels, brushed, lidTop, powderBump)

    const v = VARIANTS[0]!
    this.labelMat = new THREE.MeshPhysicalMaterial({
      map: this.labels[0],
      roughness: 0.62,
      clearcoat: 0.35,
      clearcoatRoughness: 0.45,
      sheen: 0.3,
      sheenRoughness: 0.8,
    })
    this.lidMat = new THREE.MeshPhysicalMaterial({
      color: v.lid,
      metalness: 1,
      roughness: 0.26,
      roughnessMap: brushed,
      anisotropy: 0.7,
      anisotropyRotation: Math.PI / 2,
    })
    this.lidTopMat = new THREE.MeshPhysicalMaterial({
      color: v.lid,
      metalness: 1,
      roughness: 0.32,
      roughnessMap: lidTop,
      bumpMap: lidTop,
      bumpScale: 1.4,
    })
    const darkMetal = new THREE.MeshStandardMaterial({ color: 0x2a2a26, metalness: 1, roughness: 0.45 })
    const innerMat = new THREE.MeshStandardMaterial({ color: 0x9a978e, metalness: 1, roughness: 0.38, side: THREE.BackSide })
    const powderMat = new THREE.MeshStandardMaterial({
      color: 0x86a83a,
      roughness: 1,
      bumpMap: powderBump,
      bumpScale: 2,
    })
    this.disposables.push(this.labelMat, this.lidMat, this.lidTopMat, darkMetal, innerMat, powderMat)

    const add = (geo: THREE.BufferGeometry, mat: THREE.Material | THREE.Material[], parent: THREE.Object3D) => {
      this.disposables.push(geo)
      const m = new THREE.Mesh(geo, mat)
      parent.add(m)
      return m
    }

    const body = new THREE.Group()
    body.position.y = -(TIN_H / 2 - BODY_TOP)
    this.tin.add(body)

    // Body, thetaStart π so the front of the label faces the camera.
    add(new THREE.CylinderGeometry(1, 1, 2.4, 160, 1, true, Math.PI), this.labelMat, body)
    add(new THREE.CylinderGeometry(0.985, 0.985, 2.38, 96, 1, true), innerMat, body)
    const base = add(new THREE.CircleGeometry(1, 96), darkMetal, body)
    base.rotation.x = Math.PI / 2
    base.position.y = -1.2
    const rimTop = add(new THREE.TorusGeometry(0.993, 0.02, 16, 160), this.lidMat, body)
    rimTop.rotation.x = Math.PI / 2
    rimTop.position.y = 1.2
    const rimBottom = add(new THREE.TorusGeometry(0.995, 0.03, 16, 160), this.lidMat, body)
    rimBottom.rotation.x = Math.PI / 2
    rimBottom.position.y = -1.19
    this.powder = add(new THREE.CircleGeometry(0.985, 96), powderMat, body)
    this.powder.rotation.x = -Math.PI / 2

    // Lid, pivoting from the body's top edge.
    this.lid.position.y = 1.2
    body.add(this.lid)
    const lidShell = add(new THREE.CylinderGeometry(1.035, 1.035, 0.62, 160, 1, false), [this.lidMat, this.lidTopMat, darkMetal], this.lid)
    lidShell.position.y = -0.01
    const lidEdge = add(new THREE.TorusGeometry(1.022, 0.02, 16, 160), this.lidMat, this.lid)
    lidEdge.rotation.x = Math.PI / 2
    lidEdge.position.y = 0.3
    const lidLip = add(new THREE.TorusGeometry(1.03, 0.012, 12, 160), this.lidMat, this.lid)
    lidLip.rotation.x = Math.PI / 2
    lidLip.position.y = -0.31

    const shadowTex = shadowTexture()
    const shadowMat = new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false, opacity: 0 })
    this.shadow = add(new THREE.PlaneGeometry(1, 1), shadowMat, this.scene) as THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>
    this.shadow.renderOrder = -1
    this.disposables.push(shadowTex, shadowMat)

    const dotUniforms = (a: string, b: string) => ({
      uColorA: { value: new THREE.Color(a) },
      uColorB: { value: new THREE.Color(b) },
      uOpacity: { value: 1 },
      uPx: { value: 1 },
      uTime: { value: 0 },
    })

    const streamMat = new THREE.ShaderMaterial({
      vertexShader: STREAM_VERT,
      fragmentShader: DOT_FRAG,
      transparent: true,
      depthWrite: false,
      uniforms: {
        ...dotUniforms('#5f7f22', '#b5cf5a'),
        uPour: { value: 0 },
        uStart: { value: new THREE.Vector3() },
        uEnd: { value: new THREE.Vector3() },
      },
    })
    this.stream = new THREE.Points(seeds(5200, 11), streamMat)
    this.stream.frustumCulled = false
    this.scene.add(this.stream)

    const motesMat = new THREE.ShaderMaterial({
      vertexShader: MOTES_VERT,
      fragmentShader: DOT_FRAG,
      transparent: true,
      depthWrite: false,
      uniforms: { ...dotUniforms('#6f8f2c', '#c4d98a'), uSpan: { value: new THREE.Vector2(10, 7) } },
    })
    this.motes = new THREE.Points(seeds(420, 23), motesMat)
    this.motes.frustumCulled = false
    this.scene.add(this.motes)
    this.disposables.push(this.stream.geometry, streamMat, this.motes.geometry, motesMat)

    this.resize()
    // Compile shaders now so the first scroll frame does not stall.
    this.renderer.compile(this.scene, this.camera)
  }

  setTarget(p: Pose) {
    this.target = p
  }

  /** Jump straight to the target, used when motion is reduced. */
  snap() {
    this.current = { ...this.target }
  }

  setPointer(x: number, y: number) {
    this.pointer.x = x
    this.pointer.y = y
  }

  setVariant(i: number) {
    if (i === this.variant || !this.labels[i]) return
    this.variant = i
    const v = VARIANTS[i]!
    gsap.killTweensOf(this, 'spin')
    gsap.to(this, { spin: Math.round(this.spin / (Math.PI * 2)) * Math.PI * 2 + Math.PI * 2, duration: 1.2, ease: 'expo.inOut' })
    gsap.delayedCall(0.45, () => {
      if (this.variant !== i) return
      this.labelMat.map = this.labels[i]!
      this.labelMat.needsUpdate = true
    })
    const lid = new THREE.Color(v.lid)
    for (const m of [this.lidMat, this.lidTopMat]) gsap.to(m.color, { r: lid.r, g: lid.g, b: lid.b, duration: 1, ease: 'power2.inOut' })
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
    const px = h * this.renderer.getPixelRatio() * 0.06
    this.stream.material.uniforms.uPx!.value = px
    this.motes.material.uniforms.uPx!.value = px
    ;(this.motes.material.uniforms.uSpan!.value as THREE.Vector2).set(this.visW * 1.1, this.visH * 1.1)
  }

  update(dt: number) {
    this.time += dt
    const k = 1 - Math.exp(-dt * 7)
    const c = this.current
    // While hidden, jump to the target so the tin never sweeps across the screen as it reappears.
    if (c.s < 0.005) for (const key of POSE_KEYS) if (key !== 's') c[key] = this.target[key]
    for (const key of POSE_KEYS) c[key] += (this.target[key] - c[key]) * k

    const pk = 1 - Math.exp(-dt * 4)
    this.pointer.sx += (this.pointer.x - this.pointer.sx) * pk
    this.pointer.sy += (this.pointer.y - this.pointer.sy) * pk
    this.idleAngle = Math.sin(this.time * 0.42) * 0.55 * c.idle

    const scale = (c.s * this.visH) / TIN_H
    const visible = scale > 0.002
    this.tin.visible = visible

    const float = Math.sin(this.time * 1.1) * 0.012 * c.idle
    this.tin.position.set(c.x * this.visW, (c.y + float + this.intro * 1.1) * this.visH, 0)
    this.tin.scale.setScalar(scale)
    this.tin.rotation.set(
      c.rx + this.pointer.sy * 0.22 * c.idle + this.intro * 1.6,
      c.ry + this.idleAngle + this.spin + this.pointer.sx * 0.5 * c.idle + this.intro * 2.4,
      c.rz - this.pointer.sx * 0.08 * c.idle - this.intro * 0.6,
      'XYZ',
    )

    this.lid.position.set(-c.lid * 1.25, 1.2 + c.lid * 1.75, c.lid * 0.2)
    this.lid.rotation.set(0, 0, c.lid * 0.55)
    this.powder.position.y = THREE.MathUtils.lerp(-1.17, 1.07, THREE.MathUtils.clamp(c.fill, 0, 1))
    this.powder.visible = c.fill > 0.01

    // Shadow sits under the tin, shrinking as the tin lifts away from it.
    const sm = this.shadow.material
    sm.opacity = visible ? c.shadow * (1 - this.intro) : 0
    this.shadow.visible = sm.opacity > 0.01
    this.shadow.position.set(this.tin.position.x, this.tin.position.y - (TIN_H / 2) * scale * 1.02, -1)
    this.shadow.scale.set(scale * 3.4, scale * 0.7, 1)

    this.tin.updateMatrixWorld()
    const su = this.stream.material.uniforms
    su.uPour!.value = c.pour
    su.uTime!.value = this.time
    ;(su.uStart!.value as THREE.Vector3).set(this.tin.position.x, this.visH * 0.3, 0)
    this.powder.getWorldPosition(su.uEnd!.value as THREE.Vector3)
    this.stream.visible = c.pour > 0.001 && c.pour < 0.999 && c.lid > 0.5 && visible

    const mu = this.motes.material.uniforms
    mu.uTime!.value = this.time
    mu.uOpacity!.value = c.motes
    this.motes.visible = c.motes > 0.01

    this.renderer.render(this.scene, this.camera)
  }

  dispose() {
    gsap.killTweensOf(this)
    for (const d of this.disposables) d.dispose()
    this.renderer.dispose()
  }
}

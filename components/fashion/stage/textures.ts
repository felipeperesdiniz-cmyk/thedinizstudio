import * as THREE from 'three'
import type { Garment } from '@/components/fashion/content'

export type Fonts = { display: string; mono: string }

function canvas(w: number, h: number) {
  const c = document.createElement('canvas')
  c.width = w
  c.height = h
  const ctx = c.getContext('2d')
  if (!ctx) throw new Error('2D canvas unavailable')
  return { c, ctx }
}

/** Seeded PRNG so every visit weaves the same cloth. */
function rng(seed: number) {
  let s = seed >>> 0
  return () => {
    s = (s + 0x6d2b79f5) >>> 0
    let t = s
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const CELL = 16
// 15 cells: a multiple of the 3 thread twill repeat, so the tile has no seam.
const CELLS = 15

/**
 * A 2/1 twill, one tile of 15 by 15 threads. Greyscale: used as the colour
 * modulation and the bump map, so the dye shows the weave through it.
 */
export function weaveTexture() {
  const size = CELL * CELLS
  const { c, ctx } = canvas(size, size)
  const r = rng(7)
  // Linen is uneven: every thread has its own thickness and tone.
  const warp = Array.from({ length: CELLS }, () => 0.86 + r() * 0.2)
  const weft = Array.from({ length: CELLS }, () => (r() < 0.18 ? 0.74 : 0.88 + r() * 0.16))
  const img = ctx.createImageData(size, size)
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = Math.floor(x / CELL)
      const j = Math.floor(y / CELL)
      const lx = (x % CELL) / CELL
      const ly = (y % CELL) / CELL
      // Twill: the warp floats over two wefts, then under one, stepping each row.
      const warpOver = (i + j) % 3 !== 0
      const across = Math.sin(Math.PI * (warpOver ? lx : ly))
      const along = 0.78 + 0.22 * Math.sin(Math.PI * (warpOver ? ly : lx))
      const shade = warpOver ? warp[i]! : weft[j]!
      const v = 0.4 + 0.6 * Math.pow(across, 0.7) * along * shade + (r() - 0.5) * 0.05
      const o = (y * size + x) * 4
      const b = Math.max(0, Math.min(255, v * 255))
      img.data[o] = img.data[o + 1] = img.data[o + 2] = b
      img.data[o + 3] = 255
    }
  }
  ctx.putImageData(img, 0, 0)
  const tex = new THREE.CanvasTexture(c)
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.colorSpace = THREE.NoColorSpace
  tex.anisotropy = 8
  return tex
}

/** The woven neck label: name, city and season, with a stitched edge. */
export function labelTexture(fonts: Fonts, anisotropy: number) {
  const w = 512
  const h = 256
  const { c, ctx } = canvas(w, h)
  ctx.fillStyle = '#ece6da'
  ctx.fillRect(0, 0, w, h)
  // Fine horizontal ribs, as a woven label has.
  ctx.fillStyle = 'rgba(20,18,15,0.06)'
  for (let y = 0; y < h; y += 4) ctx.fillRect(0, y, w, 1.5)

  ctx.strokeStyle = '#141311'
  ctx.lineWidth = 3
  ctx.setLineDash([12, 9])
  ctx.strokeRect(18, 18, w - 36, h - 36)
  ctx.setLineDash([])

  ctx.fillStyle = '#141311'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.font = `500 104px ${fonts.display}`
  spaced(ctx, 'TRAMA', w / 2, h * 0.44, 10)
  ctx.font = `400 24px ${fonts.mono}`
  spaced(ctx, 'PORTO  /  AW26', w / 2, h * 0.76, 5)

  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = anisotropy
  return tex
}

function spaced(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, spacing: number) {
  const chars = [...text]
  const widths = chars.map((ch) => ctx.measureText(ch).width)
  const total = widths.reduce((a, b) => a + b, 0) + spacing * (chars.length - 1)
  let cx = x - total / 2
  ctx.textAlign = 'left'
  chars.forEach((ch, i) => {
    ctx.fillText(ch, cx, y)
    cx += widths[i]! + spacing
  })
  ctx.textAlign = 'center'
}

type Shape = {
  /** Outline in a 100 by 125 box, y down, matching the cloth's proportions. */
  outline: string
  /** Seams, pockets and plackets, sewn as dashed stitches. */
  seams: string[]
  /** Button centres. */
  buttons?: [number, number][]
}

export const SHAPES: Record<Garment, Shape> = {
  overshirt: {
    outline: 'M40 7 Q50 13 60 7 L76 13 L93 84 L81 88 L71 38 L72 116 Q50 119 28 116 L29 38 L19 88 L7 84 L24 13 Z',
    seams: ['M50 13 L50 115', 'M56 28 L66 28 L66 40 L56 40 Z', 'M26 22 L74 22', 'M8.5 79 L19.5 83', 'M91.5 79 L80.5 83'],
    buttons: [24, 40, 56, 72, 88, 104].map((y) => [52.5, y] as [number, number]),
  },
  jacket: {
    outline: 'M39 6 Q50 12 61 6 L79 12 L95 76 L82 80 L73 40 L75 102 L25 102 L27 40 L18 80 L5 76 L21 12 Z',
    seams: [
      'M50 12 L50 101',
      'M31 30 L43 30 L43 42 L31 42 Z',
      'M57 30 L69 30 L69 42 L57 42 Z',
      'M29 64 L45 64 L45 84 L29 84 Z',
      'M55 64 L71 64 L71 84 L55 84 Z',
      'M26 94 L74 94',
      'M7 71 L19 75',
      'M93 71 L81 75',
    ],
  },
  trouser: {
    outline: 'M25 6 L75 6 L86 120 L56 120 L50 50 L44 120 L14 120 Z',
    seams: ['M25.5 13 L74.5 13', 'M53 13 L53 38 Q53 44 50 46', 'M38 13 L36 40', 'M62 13 L64 40', 'M27 13 L31 32', 'M73 13 L69 32', 'M15.5 113 L44.5 113', 'M55.5 113 L84.5 113'],
  },
  coat: {
    outline: 'M38 5 Q50 12 62 5 L77 11 L92 82 L80 86 L71 36 L83 123 L17 123 L29 36 L20 86 L8 82 L23 11 Z',
    seams: ['M38 5 L46 46', 'M62 5 L54 46', 'M54 46 L54 122', 'M30 84 L42 86', 'M70 84 L58 86', 'M9.5 77 L21 81', 'M90.5 77 L79 81'],
    buttons: [
      [46, 56],
      [58, 56],
      [46, 76],
      [58, 76],
    ],
  },
}

/** Where the label sits, in cloth uv: x0, y0, x1, y1. Inside every garment's outline. */
export const LABEL_RECT = [0.43, 0.82, 0.57, 0.88] as const

/**
 * Red: the garment's outline, used to cut the cloth.
 * Green: its stitches, a dashed line just inside the edge plus the seams.
 */
export function maskTexture(garment: Garment) {
  const w = 512
  const h = 640
  const k = w / 100
  const { c, ctx } = canvas(w, h)
  ctx.fillStyle = '#000'
  ctx.fillRect(0, 0, w, h)
  ctx.scale(k, k)
  const shape = SHAPES[garment]
  const outline = new Path2D(shape.outline)

  ctx.fillStyle = '#f00'
  ctx.fill(outline)

  // Edge stitch: a dashed band inset from the outline, cut out of a thicker stroke.
  ctx.save()
  ctx.clip(outline)
  const layer = canvas(w, h)
  const l = layer.ctx
  l.scale(k, k)
  l.lineJoin = 'round'
  l.strokeStyle = '#0f0'
  l.setLineDash([1.6, 1.2])
  l.lineWidth = 3.8
  l.stroke(outline)
  l.setLineDash([])
  l.globalCompositeOperation = 'destination-out'
  l.lineWidth = 2.9
  l.stroke(outline)
  l.globalCompositeOperation = 'source-over'
  l.lineWidth = 0.5
  l.lineCap = 'round'
  l.setLineDash([1.6, 1.2])
  for (const d of shape.seams) l.stroke(new Path2D(d))
  l.setLineDash([])
  l.fillStyle = '#0f0'
  for (const [x, y] of shape.buttons ?? []) {
    l.beginPath()
    l.arc(x, y, 1.2, 0, Math.PI * 2)
    l.fill()
  }
  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.globalCompositeOperation = 'lighter'
  ctx.drawImage(layer.c, 0, 0)
  ctx.restore()

  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.NoColorSpace
  return tex
}

import * as THREE from 'three'
import type { Variant } from '@/components/matcha/content'

export type Fonts = { display: string; mono: string }

// The label wraps the whole body: 2π·r around by the body height, so 2.62 : 1.
const LABEL_W = 2560
const LABEL_H = 976
// The lid covers the top 13% of the body; label art stays below it.
const LABEL_TOP = LABEL_H * 0.15

function canvas(w: number, h: number) {
  const c = document.createElement('canvas')
  c.width = w
  c.height = h
  const ctx = c.getContext('2d')
  if (!ctx) throw new Error('2D canvas unavailable')
  return { c, ctx }
}

/** Seeded PRNG so every visit prints the same paper. */
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

function spaced(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, spacing: number) {
  const chars = [...text]
  const widths = chars.map((ch) => ctx.measureText(ch).width)
  const total = widths.reduce((a, b) => a + b, 0) + spacing * (chars.length - 1)
  let cx = x - total / 2
  const align = ctx.textAlign
  ctx.textAlign = 'left'
  chars.forEach((ch, i) => {
    ctx.fillText(ch, cx, y)
    cx += widths[i]! + spacing
  })
  ctx.textAlign = align
}

/** Brush ensō: a ring that thins toward its open tail. */
export function drawEnso(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, color: string, weight: number) {
  ctx.save()
  ctx.strokeStyle = color
  ctx.lineCap = 'round'
  const start = -Math.PI * 0.42
  const sweep = Math.PI * 1.86
  const steps = 90
  for (let i = 0; i < steps; i++) {
    const t0 = i / steps
    const t1 = (i + 1) / steps
    ctx.lineWidth = weight * (1.15 - 0.85 * t0 * t0)
    ctx.beginPath()
    ctx.arc(x, y, r * (1 + 0.02 * Math.sin(t0 * 9)), start + sweep * t0, start + sweep * t1 + 0.01)
    ctx.stroke()
  }
  ctx.restore()
}

function paper(ctx: CanvasRenderingContext2D, w: number, h: number, base: string, seed: number) {
  ctx.fillStyle = base
  ctx.fillRect(0, 0, w, h)
  const r = rng(seed)
  // Washi fibres: short, faint strokes in both directions.
  for (let i = 0; i < 2600; i++) {
    const light = r() > 0.5
    ctx.strokeStyle = light ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)'
    ctx.lineWidth = 0.6 + r() * 1.2
    const x = r() * w
    const y = r() * h
    const a = r() * Math.PI
    const l = 6 + r() * 26
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.quadraticCurveTo(x + Math.cos(a) * l * 0.5 + r() * 4, y + Math.sin(a) * l * 0.5, x + Math.cos(a) * l, y + Math.sin(a) * l)
    ctx.stroke()
  }
  for (let i = 0; i < 26000; i++) {
    ctx.fillStyle = r() > 0.5 ? 'rgba(255,255,255,0.035)' : 'rgba(0,0,0,0.05)'
    ctx.fillRect(r() * w, r() * h, 1.4, 1.4)
  }
}

function clockIcon(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, time: string, color: string) {
  const [hh, mm] = time.split(':').map(Number) as [number, number]
  ctx.save()
  ctx.strokeStyle = color
  ctx.lineWidth = 3
  ctx.beginPath()
  ctx.arc(x, y, r, 0, Math.PI * 2)
  ctx.stroke()
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2
    ctx.beginPath()
    ctx.moveTo(x + Math.sin(a) * r * 0.8, y - Math.cos(a) * r * 0.8)
    ctx.lineTo(x + Math.sin(a) * r * 0.9, y - Math.cos(a) * r * 0.9)
    ctx.stroke()
  }
  const hand = (angle: number, len: number, wgt: number) => {
    ctx.lineWidth = wgt
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x + Math.sin(angle) * len, y - Math.cos(angle) * len)
    ctx.stroke()
  }
  hand(((hh % 12) + mm / 60) * (Math.PI / 6), r * 0.5, 4)
  hand(mm * (Math.PI / 30), r * 0.72, 2.5)
  ctx.restore()
}

export function labelTexture(v: Variant, fonts: Fonts, maxAnisotropy: number): THREE.CanvasTexture {
  const { c, ctx } = canvas(LABEL_W, LABEL_H)
  paper(ctx, LABEL_W, LABEL_H, v.label, v.no.charCodeAt(1) * 7919)

  const W = LABEL_W
  const H = LABEL_H
  const mid = LABEL_TOP + (H - LABEL_TOP) / 2

  // Foil rules top and bottom, all the way round.
  ctx.fillStyle = v.accent
  ctx.fillRect(0, LABEL_TOP + 26, W, 3)
  ctx.fillRect(0, LABEL_TOP + 38, W, 1.5)
  ctx.fillRect(0, H - 52, W, 3)
  ctx.fillRect(0, H - 64, W, 1.5)

  ctx.textBaseline = 'middle'
  ctx.textAlign = 'center'

  // Front: the mark.
  const fx = W * 0.5
  ctx.fillStyle = v.ink
  ctx.font = `500 300px ${fonts.display}`
  ctx.fillText('露', fx, mid - 70)
  ctx.font = `400 62px ${fonts.display}`
  spaced(ctx, 'TSUYU', fx, mid + 150, 30)
  ctx.fillStyle = v.accent
  ctx.font = `400 22px ${fonts.mono}`
  spaced(ctx, 'CEREMONIAL MATCHA', fx, mid + 214, 9)
  ctx.font = `400 20px ${fonts.mono}`
  spaced(ctx, `NO. ${v.no}  ${v.name.toUpperCase()}`, fx, LABEL_TOP + 92, 8)

  // Left panel: origin, set vertically.
  const lx = W * 0.3
  ctx.fillStyle = v.ink
  ctx.font = `500 74px ${fonts.display}`
  ;['宇', '治', '抹', '茶'].forEach((ch, i) => ctx.fillText(ch, lx, LABEL_TOP + 170 + i * 104))
  ctx.save()
  ctx.translate(lx - 92, mid)
  ctx.rotate(-Math.PI / 2)
  ctx.fillStyle = v.accent
  ctx.font = `400 20px ${fonts.mono}`
  spaced(ctx, 'UJI  KYOTO  JAPAN', 0, 0, 8)
  ctx.restore()

  // Right panel: the facts, and the hour this tea is named for.
  const rx = W * 0.7
  clockIcon(ctx, rx, LABEL_TOP + 190, 62, v.time, v.ink)
  ctx.fillStyle = v.ink
  ctx.font = `500 54px ${fonts.display}`
  ctx.fillText(v.kanji, rx, LABEL_TOP + 318)
  ctx.font = `400 19px ${fonts.mono}`
  ctx.fillStyle = v.accent
  ;['SHADED 21 DAYS', 'STONE MILLED', 'FIRST FLUSH 2026', 'NET WT 30 G'].forEach((line, i) =>
    spaced(ctx, line, rx, LABEL_TOP + 420 + i * 46, 6),
  )

  // Back: the ensō, split across the seam so it wraps cleanly.
  for (const bx of [0, W]) drawEnso(ctx, bx, mid, 150, v.ink, 22)

  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = maxAnisotropy
  tex.wrapS = THREE.RepeatWrapping
  return tex
}

/** Lathe-turned lid top with a pressed ensō, used as a bump and roughness map. */
export function lidTopTexture(): THREE.CanvasTexture {
  const S = 1024
  const { c, ctx } = canvas(S, S)
  ctx.fillStyle = '#8a8a8a'
  ctx.fillRect(0, 0, S, S)
  const r = rng(42)
  for (let i = 0; i < 700; i++) {
    const g = 110 + Math.floor(r() * 50)
    ctx.strokeStyle = `rgba(${g},${g},${g},0.5)`
    ctx.lineWidth = 0.5 + r()
    ctx.beginPath()
    ctx.arc(S / 2, S / 2, r() * S * 0.5, 0, Math.PI * 2)
    ctx.stroke()
  }
  drawEnso(ctx, S / 2, S / 2, S * 0.24, '#e8e8e8', 26)
  ctx.strokeStyle = '#d0d0d0'
  ctx.lineWidth = 6
  ctx.beginPath()
  ctx.arc(S / 2, S / 2, S * 0.46, 0, Math.PI * 2)
  ctx.stroke()
  const tex = new THREE.CanvasTexture(c)
  tex.anisotropy = 8
  return tex
}

/** Fine circumferential brushing for the metal sides. */
export function brushedTexture(): THREE.CanvasTexture {
  const { c, ctx } = canvas(8, 512)
  const r = rng(7)
  for (let y = 0; y < 512; y++) {
    const g = 150 + Math.floor(r() * 26)
    ctx.fillStyle = `rgb(${g},${g},${g})`
    ctx.fillRect(0, y, 8, 1)
  }
  return new THREE.CanvasTexture(c)
}

/** Matcha surface: soft clumps for the bump map. */
export function powderTexture(): THREE.CanvasTexture {
  const S = 512
  const { c, ctx } = canvas(S, S)
  ctx.fillStyle = '#808080'
  ctx.fillRect(0, 0, S, S)
  const r = rng(99)
  for (let i = 0; i < 4000; i++) {
    const g = Math.floor(90 + r() * 90)
    ctx.fillStyle = `rgba(${g},${g},${g},0.35)`
    ctx.beginPath()
    ctx.arc(r() * S, r() * S, 1 + r() * 5, 0, Math.PI * 2)
    ctx.fill()
  }
  return new THREE.CanvasTexture(c)
}

/** Soft contact shadow. */
export function shadowTexture(): THREE.CanvasTexture {
  const S = 256
  const { c, ctx } = canvas(S, S)
  const g = ctx.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2)
  g.addColorStop(0, 'rgba(20,24,16,0.55)')
  g.addColorStop(0.45, 'rgba(20,24,16,0.22)')
  g.addColorStop(1, 'rgba(20,24,16,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, S, S)
  return new THREE.CanvasTexture(c)
}

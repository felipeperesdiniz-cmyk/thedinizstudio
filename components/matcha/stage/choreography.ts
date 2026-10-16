import { gsap, type ScrollTrigger } from '@/lib/gsap'
import { POSE_KEYS, REST_POSE, type Pose } from './TinStage'

// Sections register their ScrollTrigger here; the tin's path is written
// against those triggers so it stays correct when pin spacing changes.
const triggers = new Map<string, ScrollTrigger>()

export function registerSection(name: string, st: ScrollTrigger) {
  triggers.set(name, st)
  return () => {
    if (triggers.get(name) === st) triggers.delete(name)
  }
}

type Key = {
  /** Section name and progress through its trigger, 0 to 1. */
  at: [string, number]
  pose: Partial<Pose>
  /** Narrow portrait screens. */
  portrait?: Partial<Pose>
  /** Ease used on the way into this key. */
  ease?: string
}

const TAU = Math.PI * 2

const KEYS: Key[] = [
  // Hero: the tin stands over the word mark and follows the pointer.
  { at: ['hero', 0], pose: { ...REST_POSE, y: -0.05, s: 0.6, rx: 0.08, shadow: 0.85 }, portrait: { s: 0.4, y: -0.04 } },
  { at: ['hero', 1], pose: { y: 0.42, s: 0.42, rx: 0.7, ry: 1.3, rz: 0.4, idle: 0.15, shadow: 0 }, portrait: { s: 0.32 }, ease: 'power1.in' },

  // Fall: it leaves through the top, then drops back through the type and lands.
  { at: ['fall', 0.16], pose: { x: 0.16, y: 0.9, s: 0.38, rx: 1.5, ry: 2.6, rz: 1.2, idle: 0 }, ease: 'power1.in' },
  { at: ['fall', 0.24], pose: { x: -0.1, y: 0.95, rx: -0.9, ry: 3.4, rz: -1.1 }, ease: 'none' },
  { at: ['fall', 0.78], pose: { x: 0, y: -0.17, s: 0.44, rx: 0.1, ry: TAU * 1.5, rz: 0 }, portrait: { s: 0.32 }, ease: 'power2.in' },
  { at: ['fall', 0.84], pose: { y: -0.13, shadow: 0.9 }, ease: 'power2.out' },
  { at: ['fall', 0.9], pose: { y: -0.17, idle: 0.5 }, ease: 'power2.in' },

  // Pause: it falls through the floor and the page goes quiet.
  { at: ['pause', 0], pose: {} },
  { at: ['pause', 0.07], pose: { y: -1.05, rx: 0.9, rz: 0.5, shadow: 0, idle: 0 }, ease: 'power2.in' },
  { at: ['pause', 0.08], pose: { s: 0 }, ease: 'none' },

  // Mill: the open tin rises under the stream and fills.
  { at: ['mill', 0], pose: { s: 0, x: 0, y: -0.9, rx: 0.5, ry: TAU * 2, rz: 0, lid: 1, fill: 0, pour: 0 }, ease: 'none' },
  { at: ['mill', 0.01], pose: { s: 0.34, motes: 0.9 }, portrait: { s: 0.22, x: 0.2 }, ease: 'none' },
  { at: ['mill', 0.14], pose: { y: -0.25 }, ease: 'power3.out' },
  { at: ['mill', 0.82], pose: { pour: 1, fill: 1, ry: TAU * 2 + 0.5 }, ease: 'none' },
  { at: ['mill', 0.92], pose: { lid: 0, rx: 0.15 }, ease: 'power2.inOut' },
  { at: ['mill', 1], pose: { y: 0.95, rx: -0.6, motes: 0 }, ease: 'power2.in' },
  { at: ['ritual', 0], pose: { s: 0, pour: 0 }, ease: 'none' },

  // Collection: it waits beside the list and changes with the hovered tea.
  { at: ['collection', 0.12], pose: { s: 0, x: 0.95, y: 0, rx: 0.12, ry: 0, rz: -0.3, idle: 1, shadow: 0 }, ease: 'none' },
  { at: ['collection', 0.13], pose: { s: 0.5 }, portrait: { s: 0.2 }, ease: 'none' },
  { at: ['collection', 0.32], pose: { x: 0.27, y: -0.02, rz: 0 }, portrait: { x: 0.28, y: 0.27 }, ease: 'power3.out' },
  { at: ['collection', 0.78], pose: {} },
  { at: ['collection', 0.97], pose: { y: 0.9, rx: -0.6, idle: 0 }, ease: 'power2.in' },
  { at: ['collection', 1], pose: { s: 0 }, ease: 'none' },

  // Finale: it drops into its place under the name.
  { at: ['finale', 0], pose: { s: 0, x: 0, y: 0.9, rx: 0.9, ry: -2, rz: -0.9 }, ease: 'none' },
  { at: ['finale', 0.01], pose: { s: 0.4 }, portrait: { s: 0.26 }, ease: 'none' },
  { at: ['finale', 0.5], pose: { y: -0.1, rx: 0.08, ry: 0, rz: 0, shadow: 0.85 }, portrait: { y: 0.02 }, ease: 'power3.in' },
  { at: ['finale', 0.56], pose: { y: -0.07 }, portrait: { y: 0.05 }, ease: 'power2.out' },
  { at: ['finale', 0.62], pose: { y: -0.1, idle: 0.7 }, portrait: { y: 0.02 }, ease: 'power2.in' },
  { at: ['footer', 0], pose: {} },
  { at: ['footer', 1], pose: { y: 0.9 }, portrait: { y: 0.96 }, ease: 'none' },
]

type Resolved = { pos: number; pose: Pose; ease: (t: number) => number }

/** Fills every key with the values carried over from the keys before it. */
function resolvePoses(portrait: boolean): { at: [string, number]; pose: Pose; ease: (t: number) => number }[] {
  let carry: Pose = { ...REST_POSE }
  return KEYS.map((k) => {
    carry = { ...carry, ...k.pose, ...(portrait ? k.portrait : undefined) }
    return { at: k.at, pose: { ...carry }, ease: gsap.parseEase(k.ease ?? 'power2.inOut') }
  })
}

export function createChoreography() {
  let portrait = false
  let keys = resolvePoses(false)
  const out: Pose = { ...REST_POSE }

  const layout = () => {
    portrait = window.innerWidth / window.innerHeight < 0.8
    keys = resolvePoses(portrait)
  }
  layout()

  return {
    layout,
    /** The tin's pose at a scroll position. */
    at(scroll: number): Pose {
      const resolved: Resolved[] = []
      for (const k of keys) {
        const st = triggers.get(k.at[0])
        if (!st) continue
        resolved.push({ pos: st.start + (st.end - st.start) * k.at[1], pose: k.pose, ease: k.ease })
      }
      if (!resolved.length) return out
      if (scroll <= resolved[0]!.pos) return Object.assign(out, resolved[0]!.pose)

      for (let i = 0; i < resolved.length - 1; i++) {
        const a = resolved[i]!
        const b = resolved[i + 1]!
        if (scroll >= b.pos) continue
        const span = b.pos - a.pos
        const t = span <= 0 ? 1 : b.ease((scroll - a.pos) / span)
        for (const key of POSE_KEYS) out[key] = a.pose[key] + (b.pose[key] - a.pose[key]) * t
        return out
      }
      return Object.assign(out, resolved[resolved.length - 1]!.pose)
    },
  }
}

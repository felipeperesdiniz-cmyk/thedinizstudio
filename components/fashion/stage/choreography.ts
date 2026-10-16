import { gsap, type ScrollTrigger } from '@/lib/gsap'
import { POSE_KEYS, REST_POSE, type Pose } from './ClothStage'

// Sections register their ScrollTrigger here; the cloth's path is written
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
  // Hero: a length of raw linen floats over the name and answers the pointer.
  { at: ['hero', 0], pose: { ...REST_POSE, wind: 1.3, y: -0.02, s: 0.64, rx: -0.12, ry: -0.3, rz: 0.08 }, portrait: { s: 0.34, y: -0.1 } },
  { at: ['hero', 1], pose: { y: 0.38, s: 0.5, rx: 0.5, ry: 0.9, rz: 0.4, wind: 1.3, flutter: 0.5, idle: 0.15 }, portrait: { s: 0.36 }, ease: 'power1.in' },

  // Plot: it is caught by the wind and flies between the lines, then settles.
  { at: ['plot', 0.12], pose: { x: 0.3, y: 0.55, s: 0.42, rx: 1.1, ry: 2.2, rz: -0.8, flutter: 1, twist: 0.4, idle: 0 }, portrait: { x: 0.15, s: 0.3 }, ease: 'power1.in' },
  { at: ['plot', 0.36], pose: { x: -0.32, y: 0.14, rx: -0.5, ry: 3.8, rz: 0.9, twist: 0.9 }, portrait: { x: -0.18 }, ease: 'sine.inOut' },
  { at: ['plot', 0.6], pose: { x: 0.28, y: -0.2, rx: 0.6, ry: 5.4, rz: -0.4, twist: -0.7 }, portrait: { x: 0.16 }, ease: 'sine.inOut' },
  { at: ['plot', 0.86], pose: { x: 0, y: 0.02, s: 0.5, rx: -0.08, ry: TAU, rz: 0, flutter: 0, twist: 0, wind: 0.7, idle: 0.6 }, portrait: { s: 0.36 }, ease: 'power3.out' },

  // Thread: it unravels from the top down to a single thread.
  { at: ['thread', 0.02], pose: {} },
  { at: ['thread', 0.34], pose: { weave: 0, wind: 0.3, idle: 0.2 }, ease: 'power1.in' },
  { at: ['thread', 0.35], pose: { s: 0 }, ease: 'none' },

  // Loom: bare warp appears and the weave climbs it.
  { at: ['loom', 0], pose: { s: 0, x: 0.22, y: 0, rx: 0, ry: -0.18, rz: 0, wind: 0.04, flutter: 0, weave: 0, warp: 1, idle: 0.15 }, portrait: { x: 0, y: -0.2 }, ease: 'none' },
  { at: ['loom', 0.02], pose: { s: 0.72 }, portrait: { s: 0.42 }, ease: 'none' },
  { at: ['loom', 0.9], pose: { weave: 1 }, ease: 'none' },
  { at: ['loom', 1], pose: { warp: 0 }, ease: 'none' },

  // Dye: it hangs and is dipped four times, the colour rising from the hem.
  { at: ['dye', 0.08], pose: { x: 0.2, y: 0, s: 0.66, ry: -0.35, rx: 0.04, drape: 1, wind: 0.15, idle: 0.5 }, portrait: { x: 0, y: -0.2, s: 0.4 } },
  { at: ['dye', 0.12], pose: { dye: 0 } },
  { at: ['dye', 0.28], pose: { dye: 1, ry: -0.15 }, ease: 'power1.inOut' },
  { at: ['dye', 0.34], pose: {} },
  { at: ['dye', 0.5], pose: { dye: 2, ry: -0.35 }, ease: 'power1.inOut' },
  { at: ['dye', 0.56], pose: {} },
  { at: ['dye', 0.72], pose: { dye: 3, ry: -0.15 }, ease: 'power1.inOut' },
  { at: ['dye', 0.78], pose: {} },
  { at: ['dye', 0.94], pose: { dye: 4, ry: -0.3 }, ease: 'power1.inOut' },

  // Cut: laid flat on the table, cut to the overshirt, then sewn.
  { at: ['cut', 0.04], pose: { x: 0.22, y: -0.02, s: 0.7, rx: 0, ry: 0, rz: 0, drape: 0, wind: 0.06, idle: 0.1 }, portrait: { x: 0, y: -0.2, s: 0.4 } },
  { at: ['cut', 0.2], pose: { cut: 0 } },
  { at: ['cut', 0.6], pose: { cut: 1 }, ease: 'none' },
  { at: ['cut', 0.68], pose: { stitch: 0 } },
  { at: ['cut', 0.9], pose: { stitch: 1 }, ease: 'none' },

  // Collection: it goes onto a hanger beside the list and changes with the hovered piece.
  { at: ['collection', 0.04], pose: {} },
  { at: ['collection', 0.16], pose: { x: 0.27, y: -0.03, s: 0.62, drape: 0.45, wind: 0.12, hanger: 1, vary: 1, idle: 1, rz: 0 }, portrait: { x: 0.3, y: 0.3, s: 0.24 }, ease: 'power3.inOut' },
  { at: ['collection', 0.78], pose: {} },
  { at: ['collection', 0.97], pose: { y: 0.95, rx: -0.4, idle: 0 }, ease: 'power2.in' },
  { at: ['collection', 1], pose: { s: 0 }, ease: 'none' },

  // Finale: a new length of raw linen falls in under the name.
  {
    at: ['finale', 0],
    pose: { s: 0, x: 0, y: 0.95, rx: 1, ry: -2.4, rz: -0.9, wind: 1, flutter: 1, drape: 0, cut: 0, stitch: 0, dye: 0, vary: 0, hanger: 0, idle: 0 },
    ease: 'none',
  },
  { at: ['finale', 0.01], pose: { s: 0.46 }, portrait: { s: 0.32 }, ease: 'none' },
  { at: ['finale', 0.55], pose: { y: -0.14, rx: -0.1, ry: 0.3, rz: 0.06, flutter: 0, idle: 1 }, portrait: { y: 0.02 }, ease: 'power3.out' },
  { at: ['footer', 0], pose: {} },
  { at: ['footer', 1], pose: { y: 0.9 }, portrait: { y: 0.96 }, ease: 'none' },
]

type Resolved = { pos: number; pose: Pose; ease: (t: number) => number }

/** Fills every key with the values carried over from the keys before it. */
function resolvePoses(portrait: boolean) {
  let carry: Pose = { ...REST_POSE }
  return KEYS.map((k) => {
    carry = { ...carry, ...k.pose, ...(portrait ? k.portrait : undefined) }
    return { at: k.at, pose: { ...carry }, ease: gsap.parseEase(k.ease ?? 'power2.inOut') }
  })
}

export function createChoreography() {
  let keys = resolvePoses(false)
  const out: Pose = { ...REST_POSE }
  let last = 0

  const layout = () => {
    keys = resolvePoses(window.innerWidth / window.innerHeight < 0.8)
  }
  layout()

  return {
    layout,
    /**
     * True when the scroll since the last call passed a point where the cloth
     * is hidden, so it should jump to its new state rather than morph into it.
     */
    crossedHidden: false,
    /** The cloth's pose at a scroll position. */
    at(scroll: number): Pose {
      const resolved: Resolved[] = []
      for (const k of keys) {
        const st = triggers.get(k.at[0])
        if (!st) continue
        resolved.push({ pos: st.start + (st.end - st.start) * k.at[1], pose: k.pose, ease: k.ease })
      }
      const lo = Math.min(last, scroll)
      const hi = Math.max(last, scroll)
      this.crossedHidden = lo !== hi && resolved.some((r) => r.pose.s < 0.005 && r.pos >= lo && r.pos <= hi)
      last = scroll
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

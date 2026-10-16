'use client'

import { useRef } from 'react'
import { gsap, SplitText } from '@/lib/gsap'
import { DYES } from '../content'
import { useSectionMotion } from '../context'
import { registerSection } from '../stage/choreography'

// Progress through the section where each dye takes over: the middle of each
// dip in the cloth's choreography, so the page changes as the colour rises.
const CUTS = [0, 0.2, 0.42, 0.64, 0.86]

/** The hanging cloth is dipped four times; the room changes colour with it. */
export function Dye() {
  const ref = useRef<HTMLElement>(null)

  useSectionMotion(ref, () => {
    const panels = gsap.utils.toArray<HTMLElement>('.t-dye-panel')
    const pips = gsap.utils.toArray<HTMLElement>('.t-dye-pip')
    const splits = panels.map((p) => SplitText.create(p.querySelector('.t-dye-name'), { type: 'chars', mask: 'chars', charsClass: 't-c' }))
    gsap.set(panels.slice(1), { autoAlpha: 0 })

    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      scrollTrigger: { trigger: ref.current, start: 'top top', end: '+=420%', pin: true, scrub: true, invalidateOnRefresh: true },
    })
    // Keep the timeline exactly 1 long so CUTS read as section progress.
    tl.to({}, { duration: 1 }, 0)
    panels.forEach((panel, i) => {
      const at = CUTS[i]!
      if (i > 0) tl.set(panels[i - 1]!, { autoAlpha: 0 }, at).set(panel, { autoAlpha: 1 }, at)
      tl.set(pips, { opacity: 0.35 }, at).set(pips.filter((p) => p.dataset.i === String(i)), { opacity: 1 }, at)
      // The first panel is already showing as the section scrolls in.
      if (i === 0) return
      tl.from(splits[i]!.chars, { yPercent: 110, stagger: 0.008, duration: 0.07 }, at + 0.005).from(
        panel.querySelectorAll('.t-dye-meta'),
        { autoAlpha: 0, y: 14, stagger: 0.01, duration: 0.06 },
        at + 0.02,
      )
    })
    const unregister = registerSection('dye', tl.scrollTrigger!)
    return () => {
      unregister()
      splits.forEach((s) => s.revert())
    }
  })

  return (
    <section ref={ref} className="relative overflow-hidden motion:h-svh" aria-label="The dye">
      {DYES.map((d, i) => (
        <article
          key={d.id}
          className="t-dye-panel flex flex-col justify-start gap-10 md:justify-between px-[var(--gutter-x)] py-[14vh] motion:absolute motion:inset-0 motion:py-[12vh]"
          style={{ backgroundColor: d.bg, color: d.fg }}
        >
          <div className="flex items-start justify-between gap-6 md:w-1/2">
            <p className="t-dye-meta t-label opacity-60">03 The dye</p>
            <ol className="flex gap-4" aria-label="Dyes">
              {DYES.map((x, j) => (
                <li key={x.id} data-i={j} className={`t-dye-pip t-label ${j === i ? 'opacity-100' : 'opacity-35'}`}>
                  0{j + 1}
                </li>
              ))}
            </ol>
          </div>
          <div className="md:w-1/2">
            <h3 className="t-dye-name font-display italic leading-[0.82] tracking-[-0.04em] text-[clamp(4.6rem,15vw,15rem)]">{d.name}</h3>
            <div className="mt-8 grid max-w-md grid-cols-2 gap-6 border-t border-current/20 pt-5">
              <div className="t-dye-meta">
                <p className="t-label opacity-55">Recipe</p>
                <p className="mt-2 text-[0.95rem] leading-snug">{d.recipe}</p>
              </div>
              <div className="t-dye-meta">
                <p className="t-label opacity-55">In the vat</p>
                <p className="mt-2 text-[0.95rem] leading-snug">{d.time}</p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}

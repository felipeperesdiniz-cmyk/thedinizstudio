'use client'

import { useEffect, useRef } from 'react'
import { gsap, SplitText } from '@/lib/gsap'
import type { Dictionary } from '@/content/copy/types'

/**
 * The heading lights up letter by letter and grows a little as it is scrolled
 * through. The paragraphs beside it use a different move: each line is masked
 * and lifts into place once, so the two columns never feel like one animation.
 */
export function Intro({ t }: { t: Dictionary }) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const heading = section.querySelector<HTMLElement>('[data-intro-heading]')
    const kicker = section.querySelector<HTMLElement>('[data-intro-kicker]')
    const paragraphs = gsap.utils.toArray<HTMLElement>('[data-intro-line]', section)
    if (!heading) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced) {
      gsap.set([heading, kicker, ...paragraphs], { opacity: 1, color: '' })
      return
    }

    let splits: SplitText[] = []

    const ctx = gsap.context(() => {
      // Split words as well as characters, or the words break mid-word on wrap.
      const headingSplit = new SplitText(heading, {
        type: 'words,chars',
        charsClass: 'intro-char',
      })
      splits.push(headingSplit)

      // Scrubbed: the light travels through the letters as the section passes.
      gsap.fromTo(
        headingSplit.chars,
        { color: '#3b3b3b' },
        {
          color: '#ececec',
          ease: 'none',
          stagger: { each: 0.35, from: 'start' },
          scrollTrigger: {
            // Anchored to the heading, not the padded section, so the sweep
            // only starts once the words are actually on screen.
            trigger: heading,
            start: 'top 72%',
            end: 'bottom 40%',
            scrub: 0.8,
          },
        },
      )

      // The type grows slightly across the same stretch of scroll.
      gsap.fromTo(
        heading,
        { scale: 0.93 },
        {
          scale: 1,
          transformOrigin: '0% 50%',
          ease: 'none',
          scrollTrigger: {
            trigger: heading,
            start: 'top 85%',
            end: 'bottom 40%',
            scrub: 0.8,
          },
        },
      )

      if (kicker) {
        gsap.fromTo(
          kicker,
          { opacity: 0, x: -12 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: heading, start: 'top 80%' },
          },
        )
      }

      // Played once, per line, so the body reads rather than shimmers.
      paragraphs.forEach((paragraph, i) => {
        // Whole words stay in each line, so screen readers can read the lines as they are;
        // the default aria-label is not allowed on a <p>.
        const split = new SplitText(paragraph, { type: 'lines', mask: 'lines', aria: 'none' })
        splits.push(split)

        gsap.fromTo(
          split.lines,
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.3,
            stagger: 0.12,
            delay: 0.15 + i * 0.18,
            ease: 'expo.out',
            // Tied to the heading so both columns move as you arrive, with the
            // body following a beat behind.
            scrollTrigger: { trigger: heading, start: 'top 75%' },
          },
        )
      })
    }, section)

    return () => {
      ctx.revert()
      splits.forEach((split) => split.revert())
      splits = []
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      aria-labelledby="intro-title"
      className="container-studio py-[var(--section-padding)]"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-[var(--gutter)]">
        <div className="md:col-span-7">
          <p data-intro-kicker className="label">
            {t.home.intro.kicker}
          </p>
          <h2
            data-intro-heading
            id="intro-title"
            className="mt-6 max-w-[12ch] font-display text-5xl leading-[1] text-primary will-change-transform"
          >
            {t.home.intro.title}
          </h2>
        </div>

        <div className="flex flex-col gap-7 md:col-span-5 md:col-start-8 md:pt-12">
          {t.home.intro.body.map((paragraph) => (
            <p
              key={paragraph}
              data-intro-line
              className="max-w-[46ch] text-lg leading-relaxed text-secondary md:text-xl"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

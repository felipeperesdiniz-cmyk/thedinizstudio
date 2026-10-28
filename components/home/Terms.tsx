import type { ReactNode } from 'react'
import { Reveal } from '@/components/ui/Reveal'
import type { HomeStory } from '@/content/copy/home-story'

/** Each note's paper colour, tilt and pen sketch, in the order of the copy: price, time, languages, ownership. */
const NOTES: { paper: string; tilt: string; sketch: ReactNode }[] = [
  {
    paper: '#f7e796',
    tilt: '-2.4deg',
    // A price tag on its string, ticked.
    sketch: (
      <>
        <path d="M9 33 L29 13 L51 12 L52 34 L32 54 Z" />
        <path d="M10 34 L30 14" opacity="0.5" />
        <circle cx="44" cy="20" r="3.2" />
        <path d="M44 17 C47 9 54 5 60 6" />
        <path d="M21 34 L28 41 L41 26" />
      </>
    ),
  },
  {
    paper: '#f4d2c8',
    tilt: '1.8deg',
    // A calendar page, days crossed off, launch day circled.
    sketch: (
      <>
        <path d="M10 16 C24 15 40 15 54 16 L53 54 C39 55 24 55 11 54 Z" />
        <path d="M11 25 C25 24 40 24 53 25" />
        <path d="M21 10 L21 19 M43 10 L43 19" />
        <path d="M16 31 l5 5 m0 -5 l-5 5 M27 31 l5 5 m0 -5 l-5 5 M38 31 l5 5 m0 -5 l-5 5 M16 42 l5 5 m0 -5 l-5 5" />
        <path d="M41 39 C47 37 50 42 48 47 C45 52 36 51 35 46 C34 41 39 38 44 39" />
      </>
    ),
  },
  {
    paper: '#d9e7c6',
    tilt: '-1.1deg',
    // Three speech bubbles, one per language.
    sketch: (
      <>
        <path d="M6 20 C6 11 30 10 31 19 C32 27 18 29 13 27 L8 31 L10 25 C7 24 6 22 6 20 Z" />
        <path d="M33 30 C33 21 58 21 58 30 C58 38 44 39 40 37 L35 41 L37 35 C34 34 33 32 33 30 Z" />
        <path d="M10 46 C10 37 34 37 34 46 C34 54 20 55 16 53 L11 57 L13 51 C11 50 10 48 10 46 Z" />
        <g stroke="none" fill="currentColor" fontFamily="var(--ff-hand), cursive" fontSize="10" fontWeight="600">
          <text x="12" y="23">EN</text>
          <text x="39" y="33">PT</text>
          <text x="16" y="49">ES</text>
        </g>
      </>
    ),
  },
  {
    paper: '#d3e2ec',
    tilt: '2.6deg',
    // A key, handed over.
    sketch: (
      <>
        <path d="M18 11 C26 10 30 17 28 24 C26 31 15 32 11 26 C7 19 11 12 19 11" />
        <circle cx="19" cy="20" r="3" />
        <path d="M26 28 L53 55" />
        <path d="M43 45 L48 40 M48 50 L53 45" />
      </>
    ),
  },
]

/**
 * Price, time, languages and ownership, each pen-sketched on its own sticky note,
 * as if left on the desk for someone about to write in. Written in the studio's hand, not its typeface.
 */
export function Terms({ terms }: { terms: HomeStory['terms'] }) {
  return (
    <section aria-label={terms.kicker} className="border-b border-line bg-surface">
      {/* A slight wobble on every pen line, so the sketches read as drawn rather than plotted. */}
      <svg aria-hidden="true" className="absolute h-0 w-0">
        <filter id="pen-wobble">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="7" />
          <feDisplacementMap in="SourceGraphic" scale="2.2" />
        </filter>
      </svg>

      <div className="container-studio py-[clamp(4rem,7vw,7rem)]">
        <p className="label text-center">{terms.kicker}</p>

        <ul className="mx-auto mt-12 grid max-w-[68rem] grid-cols-2 gap-x-4 gap-y-7 sm:gap-x-7 lg:mt-16 lg:grid-cols-4 lg:gap-9">
          {terms.notes.map((note, i) => {
            const look = NOTES[i % NOTES.length]!
            return (
              <li key={note.title} className="sticky-note" style={{ ['--tilt' as string]: look.tilt }}>
                <Reveal delay={i * 0.07} className="h-full">
                  <div className="sticky-note-paper" style={{ ['--paper' as string]: look.paper }}>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 64 64"
                      className="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      filter="url(#pen-wobble)"
                    >
                      {look.sketch}
                    </svg>
                    <p className="mt-3 font-hand text-[1.6rem] font-semibold leading-[1.05] sm:text-[2rem]">{note.title}</p>
                    <p className="mt-2 font-hand text-[1.15rem] font-medium leading-[1.2] sm:text-[1.35rem]">{note.text}</p>
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

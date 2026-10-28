import { Reveal } from '@/components/ui/Reveal'
import type { HomeStory } from '@/content/copy/home-story'

/**
 * Price, time, languages and ownership, set as one signed paragraph rather than four boxes.
 * The terms themselves are in full ink; the sentences around them stay grey, so a skim still lands on them.
 */
export function Terms({ terms }: { terms: HomeStory['terms'] }) {
  const parts = terms.text.split(/\*(.+?)\*/)

  return (
    <section aria-label={terms.kicker} className="border-b border-line">
      <div className="container-studio grid grid-cols-1 gap-8 py-[clamp(4.5rem,8vw,8rem)] md:grid-cols-12 md:gap-[var(--gutter)]">
        <Reveal className="md:col-span-3 md:col-start-2">
          <p className="label md:pt-[0.6em]">{terms.kicker}</p>
        </Reveal>

        <Reveal delay={0.08} className="md:col-span-7 md:col-start-5">
          <p className="font-serif text-2xl leading-[1.5] text-secondary md:text-4xl md:leading-[1.45]">
            {parts.map((part, i) =>
              i % 2 === 1 ? (
                <strong key={i} className="font-normal text-primary">
                  {part}
                </strong>
              ) : (
                part
              ),
            )}
          </p>
          <p className="mt-10 font-serif text-xl italic text-primary">— {terms.signature}</p>
        </Reveal>
      </div>
    </section>
  )
}

import { Reveal } from '@/components/ui/Reveal'
import type { HomeStory } from '@/content/copy/home-story'

/**
 * Price, running costs, editing, time and ownership, set like the terms page of a printed estimate:
 * a short heading on the left, the terms ruled off one under the other on the right.
 */
export function Terms({ terms }: { terms: HomeStory['terms'] }) {
  return (
    <section aria-labelledby="terms-title" className="border-b border-line">
      <div className="container-studio grid grid-cols-1 gap-10 py-[clamp(4.5rem,8vw,8rem)] md:grid-cols-12 md:gap-[var(--gutter)]">
        <Reveal className="md:col-span-4">
          <p className="label">{terms.kicker}</p>
          <h2 id="terms-title" className="mt-5 text-4xl md:max-w-[16ch]">
            {terms.title}
          </h2>
        </Reveal>

        <dl className="border-b border-line md:col-span-7 md:col-start-6">
          {terms.items.map((item, i) => (
            <Reveal
              key={item.term}
              delay={i * 0.06}
              className="grid grid-cols-1 gap-2 border-t border-line py-6 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:items-baseline sm:gap-8 md:py-7"
            >
              <dt className="font-serif text-2xl">{item.term}</dt>
              <dd className="max-w-[44ch] text-secondary">{item.text}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}

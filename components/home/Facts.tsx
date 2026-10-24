import { Reveal } from '@/components/ui/Reveal'
import type { HomeStory } from '@/content/copy/home-story'

/** Four things people want settled before they write: price, time, languages and what they own. */
export function Facts({ facts }: { facts: HomeStory['facts'] }) {
  return (
    <section className="border-b border-line">
      <ul className="container-studio grid grid-cols-2 lg:grid-cols-4">
        {facts.map((fact, i) => (
          <li
            key={fact.value}
            className={`border-line py-10 text-center md:py-12 ${i % 2 === 1 ? 'border-l' : ''} ${i >= 2 ? 'border-t lg:border-t-0' : ''} ${i === 2 ? 'lg:border-l' : ''}`}
          >
            <Reveal delay={i * 0.06} className="flex flex-col items-center px-3">
              <p className="font-serif text-2xl">{fact.value}</p>
              <p className="mt-3 max-w-[26ch] text-sm text-secondary">{fact.text}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}

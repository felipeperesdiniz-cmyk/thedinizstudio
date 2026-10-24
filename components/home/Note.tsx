import { Reveal } from '@/components/ui/Reveal'
import { Character } from '@/components/ui/Character'
import type { HomeStory } from '@/content/copy/home-story'

/** A few plain lines from the person who does the work, before the work itself. */
export function Note({ story }: { story: HomeStory['note'] }) {
  return (
    <section className="container-studio pt-[var(--section-padding)]">
      <Reveal className="mx-auto max-w-[40rem]">
        <p className="label">{story.kicker}</p>
        <p className="mt-6 font-serif text-2xl leading-[1.6]">{story.text}</p>
        <p className="mt-8 flex items-center gap-3 text-primary">
          <Character className="h-5 w-[19px] shrink-0" />
          <span className="label text-primary">Felipe Diniz</span>
        </p>
      </Reveal>
    </section>
  )
}

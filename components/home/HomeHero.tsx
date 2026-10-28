import Image from 'next/image'
import Link from 'next/link'
import type { HomeStory } from '@/content/copy/home-story'
import { contactPath, type Locale } from '@/lib/i18n'

interface HomeHeroProps {
  locale: Locale
  h1: string
  line: string
  cta: string
  story: HomeStory['hero']
}

/**
 * The embroidered leaf from Bordados com Amor, set on a ground the colour of the soil it lies on.
 * The photograph's edges fade into that ground, so the leaf reads as lying in the page rather than in a frame.
 * Phones stack the photograph above the words; wider screens put the words in the open ground to its left.
 */
export function HomeHero({ locale, h1, line, cta, story }: HomeHeroProps) {
  return (
    <section
      aria-labelledby="home-title"
      className="relative mt-[var(--nav-height)] overflow-hidden bg-[#1b1814] text-white lg:h-[calc(88svh-var(--nav-height))] lg:min-h-[34rem]"
    >
      <div className="relative aspect-[4/3] w-full lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[68%] [mask-image:linear-gradient(to_bottom,black_70%,transparent)] lg:[mask-image:linear-gradient(to_right,transparent,black_30%,black_92%,transparent),linear-gradient(to_bottom,transparent,black_12%,black_86%,transparent)] lg:[mask-composite:intersect]">
        <Image
          src="/images/work/bordados/hero-leaf.webp"
          alt={story.alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 68vw"
          quality={90}
          className="hero-settle object-cover object-[50%_52%] lg:object-[28%_50%]"
        />
      </div>

      <div className="hero-rise relative flex h-full flex-col justify-end px-[var(--content-padding)] pb-14 pt-2 lg:max-w-[min(34rem,42%)] lg:pb-[clamp(3rem,9vh,6rem)] lg:pt-0">
        <h1 id="home-title" className="sr-only">
          {h1}
        </h1>
        <p aria-hidden="true" className="max-w-[16ch] font-serif text-5xl leading-[1.15] tracking-[0.01em]">
          {story.title}
        </p>
        <p className="mt-6 max-w-[40ch] text-sm font-light leading-relaxed text-white/75">{line}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#work" className="btn btn-light">
            {story.viewWork}
          </a>
          <Link href={contactPath(locale)} className="btn btn-light">
            {cta}
          </Link>
        </div>
      </div>

      <p className="label absolute bottom-6 right-[var(--content-padding)] hidden text-white/45 lg:block">{story.credit}</p>
    </section>
  )
}

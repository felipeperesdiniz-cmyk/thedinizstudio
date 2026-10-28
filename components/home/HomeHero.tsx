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

/** One photograph of a client's work, the full width of the screen, with the studio's offer set quietly on it. */
export function HomeHero({ locale, h1, line, cta, story }: HomeHeroProps) {
  return (
    <section aria-labelledby="home-title" className="relative mt-[var(--nav-height)] h-[calc(88svh-var(--nav-height))] min-h-[30rem] overflow-hidden bg-ink text-white">
      {/* On phones the photograph stops above the words and fades into the ink, so the title never sits on the embroidery. */}
      <div className="absolute inset-x-0 top-0 h-[62%] [mask-image:linear-gradient(to_bottom,black_70%,transparent)] md:h-full md:[mask-image:none]">
        <Image
          src="/images/work/bordados/hero-amor.webp"
          alt={story.alt}
          fill
          priority
          sizes="(max-width: 768px) 700px, 100vw"
          quality={90}
          className="hero-settle object-cover object-[50%_78%]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/0" />

      <div className="hero-rise absolute inset-x-0 bottom-0 [text-shadow:0_1px_24px_rgba(0,0,0,0.45)] flex flex-col items-center px-[var(--content-padding)] pb-[clamp(3rem,8vh,5.5rem)] text-center">
        <h1 id="home-title" className="sr-only">
          {h1}
        </h1>
        <p aria-hidden="true" className="max-w-[24ch] font-serif text-5xl leading-[1.2] tracking-[0.01em]">
          {story.title}
        </p>
        <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-white/90">{line}</p>
        {/* One primary action; the work is a quieter second path. */}
        <div className="mt-8 flex flex-col items-center gap-5 sm:flex-row sm:gap-8">
          <Link href={contactPath(locale)} className="btn btn-light-solid">
            {cta}
          </Link>
          <a href="#work" className="label border-b border-white/60 pb-1 text-white transition-colors hover:border-white">
            {story.viewWork}
          </a>
        </div>
      </div>

      <p className="label absolute bottom-5 left-[var(--content-padding)] hidden text-white/60 md:block">{story.credit}</p>
    </section>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/ui/Reveal'
import type { Dictionary } from '@/content/copy/types'
import { aboutPath, projectPath, type Locale } from '@/lib/i18n'

const PORTRAIT_BLUR =
  'data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAACwAQCdASoKAA4AA4BaJZwAAuc1OzQAAP74FXARUous8MzUNzKe83ajWD/3PHn3J88j3yvf/3zSz+uBFAA='

/** Who does the work, then what a client said about it. */
export function Founder({ locale, t, capacity }: { locale: Locale; t: Dictionary; capacity: string }) {
  const { founder } = t.home
  const quote = t.projects[t.home.quote.project]!.quote

  return (
    <section aria-labelledby="founder-title" className="border-t border-line">
      <div className="container-studio py-[var(--section-padding)]">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-[var(--gutter)]">
          <Reveal as="image" className="relative aspect-[1200/1679] overflow-hidden bg-white md:col-span-5 md:col-start-2">
            <Image
              src="/images/studio/felipe-diniz.webp"
              alt={founder.title}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              quality={90}
              placeholder="blur"
              blurDataURL={PORTRAIT_BLUR}
              className="object-cover"
            />
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col md:col-span-5 md:col-start-8">
            <p className="label">{founder.kicker}</p>
            <h2 id="founder-title" className="mt-5 text-5xl">
              {founder.title}
            </h2>
            <div className="mt-7 flex max-w-[46ch] flex-col gap-4 text-secondary">
              {founder.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="label mt-8 text-primary">{capacity}</p>
            <Link href={aboutPath(locale)} className="btn btn-ghost mt-8 self-start">
              {founder.link}
            </Link>
          </Reveal>
        </div>

        <Reveal>
          <figure className="mx-auto mt-[var(--section-padding)] flex max-w-[46rem] flex-col items-center text-center">
            <p className="label">{t.home.quote.kicker}</p>
            <blockquote className="mt-8 font-serif text-3xl italic leading-[1.45]">“{quote.text}”</blockquote>
            <figcaption className="label mt-8">
              {quote.name} · {quote.role}
            </figcaption>
            <Link
              href={projectPath(locale, t.home.quote.project)}
              className="label mt-6 border-b border-current pb-1 text-primary transition-opacity hover:opacity-60"
            >
              {t.home.quote.link}
            </Link>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}

import Link from 'next/link'
import { Reveal } from '@/components/ui/Reveal'
import { CtaBand } from '@/components/ui/CtaBand'
import { PageHead } from '@/components/pages/ServiceViews'
import { faqGroupLabel, faqItemsFor } from '@/content/copy'
import { FAQ_GROUPS, faqItemPath, faqPath, type FaqGroup, type Locale } from '@/lib/i18n'
import type { Dictionary } from '@/content/copy/types'

export function FaqIndexView({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <article>
      <PageHead kicker={t.faq.kicker} title={t.faq.title} lede={t.faq.lede} />

      {FAQ_GROUPS.map((group, gi) => (
        <section
          key={group}
          aria-label={faqGroupLabel(t, group)}
          className={
            gi === 0
              ? 'container-studio pb-[var(--section-padding)]'
              : 'container-studio border-t border-line py-[var(--section-padding)]'
          }
        >
          <Reveal>
            <p className="label">{faqGroupLabel(t, group)}</p>
          </Reveal>

          <ul className="mt-8 border-t border-line">
            {faqItemsFor(t, group).map((item, i) => (
              <li key={item.slug}>
                <Reveal delay={i * 0.06}>
                  <Link
                    href={faqItemPath(locale, group, i)}
                    className="group grid grid-cols-1 gap-4 border-b border-line py-8 md:grid-cols-12 md:items-baseline md:gap-8"
                  >
                    <span className="label md:col-span-1">{String(i + 1).padStart(2, '0')}</span>
                    <h2 className="font-display text-2xl leading-snug text-primary md:col-span-6">
                      <span className="link-underline pb-1">{item.q}</span>
                    </h2>
                    <p className="max-w-[46ch] font-light text-secondary md:col-span-4">
                      {item.a}
                    </p>
                    <span
                      aria-hidden="true"
                      className="font-display text-2xl text-secondary transition-[translate,color] duration-500 group-hover:translate-x-2 group-hover:text-primary md:col-span-1 md:justify-self-end"
                    >
                      →
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <CtaBand locale={locale} t={t} />
    </article>
  )
}

export function FaqItemView({
  locale,
  t,
  group,
  index,
}: {
  locale: Locale
  t: Dictionary
  group: FaqGroup
  index: number
}) {
  const items = faqItemsFor(t, group)
  const item = items[index]!
  const otherItems = items.map((other, i) => ({ other, i })).filter(({ i }) => i !== index)

  return (
    <article>
      <header className="container-studio pb-16 pt-[calc(var(--nav-height)+5rem)] md:pb-24 md:pt-[calc(var(--nav-height)+8rem)]">
        <Reveal>
          <Link
            href={faqPath(locale)}
            className="label -my-3 inline-flex items-center gap-2 py-3 transition-colors hover:text-primary"
          >
            <span aria-hidden="true">←</span> {t.faq.backLink}
          </Link>
        </Reveal>

        <Reveal delay={0.05} className="mt-16 md:mt-24">
          <p className="label">{faqGroupLabel(t, group)}</p>
          <h1 className="mt-6 max-w-[24ch] font-display text-4xl leading-[1.05] text-primary sm:text-5xl md:text-6xl">
            {item.q}
          </h1>
        </Reveal>
      </header>

      <section className="container-studio pb-[var(--section-padding)]">
        <Reveal delay={0.1}>
          <p className="max-w-[62ch] text-xl font-light leading-relaxed text-primary/90 md:text-2xl">
            {item.a}
          </p>
        </Reveal>
      </section>

      {otherItems.length > 0 && (
        <section aria-label={t.faq.moreQuestions} className="border-t border-line">
          <div className="container-studio py-[var(--section-padding)]">
            <Reveal>
              <p className="label">{t.faq.moreQuestions}</p>
            </Reveal>

            <ul className="mt-10 border-t border-line">
              {otherItems.map(({ other, i }, position) => (
                <li key={other.slug}>
                  <Reveal delay={position * 0.05}>
                    <Link
                      href={faqItemPath(locale, group, i)}
                      className="group grid grid-cols-1 gap-4 border-b border-line py-8 md:grid-cols-12 md:items-baseline md:gap-8"
                    >
                      <h3 className="font-display text-xl text-primary md:col-span-10">
                        <span className="link-underline pb-1">{other.q}</span>
                      </h3>
                      <span
                        aria-hidden="true"
                        className="font-display text-xl text-secondary transition-[translate,color] duration-500 group-hover:translate-x-2 group-hover:text-primary md:col-span-2 md:justify-self-end"
                      >
                        →
                      </span>
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaBand locale={locale} t={t} />
    </article>
  )
}

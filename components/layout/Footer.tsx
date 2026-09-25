import Link from 'next/link'
import { SITE } from '@/lib/site'
import {
  SERVICE_KEYS,
  aboutPath,
  contactPath,
  faqPath,
  projectPath,
  servicePath,
  servicesPath,
  workPath,
  type Locale,
} from '@/lib/i18n'
import { PROJECTS } from '@/content/projects'
import type { Dictionary } from '@/content/copy/types'

export function Footer({ locale, t }: { locale: Locale; t: Dictionary }) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-background">
      <div className="container-studio grid grid-cols-2 gap-10 py-16 md:grid-cols-4 md:gap-8">
        <div className="col-span-2 flex flex-col gap-3 md:col-span-1">
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-primary">
            {SITE.wordmark}
          </span>
          <span className="label max-w-[26ch]">{t.meta.tagline}</span>
        </div>

        <nav aria-label={t.footer.sections.work} className="flex flex-col gap-1 md:gap-3">
          <Link href={workPath(locale)} className="label py-2 transition-colors hover:text-primary md:py-0">
            {t.footer.sections.work}
          </Link>
          {PROJECTS.map((project) => (
            <Link
              key={project.slug}
              href={projectPath(locale, project.slug)}
              className="label py-2 transition-colors hover:text-primary md:py-0"
            >
              {project.title}
            </Link>
          ))}
        </nav>

        <nav aria-label={t.footer.sections.services} className="flex flex-col gap-1 md:gap-3">
          <Link href={servicesPath(locale)} className="label py-2 transition-colors hover:text-primary md:py-0">
            {t.footer.sections.services}
          </Link>
          {SERVICE_KEYS.map((key) => (
            <Link
              key={key}
              href={servicePath(locale, key)}
              className="label py-2 transition-colors hover:text-primary md:py-0"
            >
              {t.services.cards[key].title}
            </Link>
          ))}
        </nav>

        <nav aria-label={t.footer.sections.studio} className="flex flex-col gap-1 md:gap-3">
          <Link href={aboutPath(locale)} className="label py-2 transition-colors hover:text-primary md:py-0">
            {t.nav.about}
          </Link>
          <Link href={contactPath(locale)} className="label py-2 transition-colors hover:text-primary md:py-0">
            {t.nav.contact}
          </Link>
          <Link href={faqPath(locale)} className="label py-2 transition-colors hover:text-primary md:py-0">
            {t.faq.kicker}
          </Link>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="label py-2 transition-colors hover:text-primary md:py-0"
          >
            Instagram
          </a>
          <a href={`mailto:${SITE.email}`} className="label py-2 transition-colors hover:text-primary md:py-0">
            {SITE.email}
          </a>
        </nav>
      </div>

      <div className="container-studio pb-12">
        <span className="label">
          © {year} {SITE.name}®. {t.footer.rights}
        </span>
      </div>
    </footer>
  )
}

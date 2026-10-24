import Image from 'next/image'
import Link from 'next/link'
import { SITE } from '@/lib/site'
import {
  INDUSTRY_KEYS,
  SERVICE_KEYS,
  aboutPath,
  contactPath,
  faqPath,
  homePath,
  industriesPath,
  industryPath,
  projectPath,
  servicePath,
  servicesPath,
  workPath,
  type Locale,
} from '@/lib/i18n'
import { PROJECTS } from '@/content/projects'
import type { Dictionary } from '@/content/copy/types'
import { Character } from '@/components/ui/Character'

function Column({ title, href, children }: { title: string; href: string; children: React.ReactNode }) {
  return (
    <nav aria-label={title} className="flex flex-col gap-2.5">
      <Link href={href} className="label mb-2 text-primary hover:opacity-60">
        {title}
      </Link>
      {children}
    </nav>
  )
}

const link = 'text-sm text-secondary transition-colors hover:text-primary'

export function Footer({ locale, t }: { locale: Locale; t: Dictionary }) {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface">
      <div className="container-studio grid grid-cols-2 gap-x-8 gap-y-12 py-16 md:grid-cols-3 md:py-20 lg:grid-cols-5">
        <div className="col-span-2 flex flex-col gap-5 md:col-span-3 lg:col-span-1">
          <Link href={homePath(locale)} aria-label={SITE.name} className="flex items-center gap-2.5 text-primary">
            <Character className="h-6 w-[23px] shrink-0" />
            <Image src="/brand/diniz-word.png" alt="" width={362} height={46} className="h-[14px] w-auto" />
          </Link>
          <p className="max-w-[28ch] text-sm text-secondary">{t.meta.tagline}</p>
        </div>

        <Column title={t.footer.sections.work} href={workPath(locale)}>
          {PROJECTS.map((project) => (
            <Link key={project.slug} href={projectPath(locale, project.slug)} className={link}>
              {project.title}
            </Link>
          ))}
        </Column>

        <Column title={t.footer.sections.services} href={servicesPath(locale)}>
          {SERVICE_KEYS.map((key) => (
            <Link key={key} href={servicePath(locale, key)} className={link}>
              {t.services.cards[key].title}
            </Link>
          ))}
        </Column>

        <Column title={t.footer.sections.industries} href={industriesPath(locale)}>
          {INDUSTRY_KEYS.map((key) => (
            <Link key={key} href={industryPath(locale, key)} className={link}>
              {t.industries.cards[key].title}
            </Link>
          ))}
        </Column>

        <Column title={t.nav.about} href={aboutPath(locale)}>
          <Link href={contactPath(locale)} className={link}>
            {t.nav.contact}
          </Link>
          <Link href={faqPath(locale)} className={link}>
            {t.faq.kicker}
          </Link>
          <a href={SITE.instagram} target="_blank" rel="noreferrer noopener" className={link}>
            Instagram
          </a>
          <a href={`mailto:${SITE.email}`} className={`${link} break-all`}>
            {SITE.email}
          </a>
        </Column>
      </div>

      <div className="container-studio flex flex-wrap justify-between gap-4 border-t border-line py-6">
        <span className="label">
          © {year} {SITE.name}®. {t.footer.rights}
        </span>
        <a href={SITE.instagram} target="_blank" rel="noreferrer noopener" className="label hover:text-primary">
          {SITE.handle}
        </a>
      </div>
    </footer>
  )
}

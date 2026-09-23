import type { FaqGroup, Locale } from '@/lib/i18n'
import type { Dictionary } from './types'
import { en } from './en'
import { pt } from './pt'
import { es } from './es'

const DICTIONARIES: Record<Locale, Dictionary> = { en, pt, es }

export const dictionary = (locale: Locale): Dictionary => DICTIONARIES[locale]

/** The FAQ items for a group: the home page's for `general`, a service page's otherwise. */
export const faqItemsFor = (t: Dictionary, group: FaqGroup) =>
  group === 'general' ? t.home.answers.items : t.servicePages[group].faq.items

/** Heading shown over a FAQ group, and appended to a service question's title for uniqueness. */
export const faqGroupLabel = (t: Dictionary, group: FaqGroup) =>
  group === 'general' ? t.home.answers.kicker : t.services.cards[group].title

import type { IndustryKey } from '@/lib/i18n'

export interface Industry {
  /** The case study that proves the studio can do this work. */
  project: string
  /** Places named in structured data, for pages aimed at a local market. */
  areaServed: readonly string[]
}

export const INDUSTRIES: Record<IndustryKey, Industry> = {
  'salons-med-spas': {
    project: 'blend-hair-boutique',
    areaServed: ['Miami', 'Fort Lauderdale', 'Plantation', 'Weston', 'Boca Raton', 'West Palm Beach'],
  },
  'photographers-filmmakers': {
    project: 'rafa-diniz',
    areaServed: ['United States', 'Brazil'],
  },
  'artists-makers': {
    project: 'bordados-com-amor-by-mari',
    areaServed: ['United States', 'Brazil'],
  },
  'food-events': {
    project: 'renata-estrella-patisserie',
    areaServed: ['United States', 'Brazil'],
  },
}

/** The industry page a case study belongs to, for linking back from the case study. */
export const industryForProject = (slug: string): IndustryKey | undefined =>
  (Object.keys(INDUSTRIES) as IndustryKey[]).find((key) => INDUSTRIES[key].project === slug)

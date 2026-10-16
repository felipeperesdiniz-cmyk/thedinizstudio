// Copy and product data for the Tsuyu concept. Tsuyu is a fictional brand.

export type Variant = {
  id: string
  no: string
  name: string
  kanji: string
  /** Hour of the day the tea is named for, shown as a clock. */
  time: string
  grade: string
  notes: string
  price: string
  /** Label paper, label ink, foil accent and lid metal. */
  label: string
  ink: string
  accent: string
  lid: string
}

export const VARIANTS: Variant[] = [
  {
    id: 'asa',
    no: '01',
    name: 'Asa',
    kanji: '朝',
    time: '05:40',
    grade: 'Ceremonial, first flush',
    notes: 'Umami, sweet cream, cut grass',
    price: '38',
    label: '#1c2a19',
    ink: '#ebe5d1',
    accent: '#c9b47c',
    lid: '#b8a67c',
  },
  {
    id: 'hiru',
    no: '02',
    name: 'Hiru',
    kanji: '昼',
    time: '12:00',
    grade: 'Ceremonial, daily',
    notes: 'Bright, floral, a clean finish',
    price: '29',
    label: '#cbd5b3',
    ink: '#1c2a19',
    accent: '#56722a',
    lid: '#c9c6bd',
  },
  {
    id: 'yu',
    no: '03',
    name: 'Yū',
    kanji: '夕',
    time: '17:30',
    grade: 'Hojicha, roasted powder',
    notes: 'Toasted grain, cocoa, mellow',
    price: '26',
    label: '#7b3f22',
    ink: '#f2e3cc',
    accent: '#e6b582',
    lid: '#c09372',
  },
  {
    id: 'yoru',
    no: '04',
    name: 'Yoru',
    kanji: '夜',
    time: '21:10',
    grade: 'Single cultivar, Okumidori',
    notes: 'Deep, savoury, a long finish',
    price: '46',
    label: '#121411',
    ink: '#dbe5bb',
    accent: '#9db43f',
    lid: '#45443f',
  },
]

export const RITUAL = [
  {
    no: '01',
    title: 'Sift',
    kanji: '篩',
    body: 'Two grams through a fine sieve. No lumps, no hurry.',
    bg: '#eeebe3',
    fg: '#141711',
  },
  {
    no: '02',
    title: 'Pour',
    kanji: '注',
    body: 'Seventy millilitres at eighty degrees. Never boiling.',
    bg: '#9db43f',
    fg: '#111a0d',
  },
  {
    no: '03',
    title: 'Whisk',
    kanji: '点',
    body: 'Fast, from the wrist, in the shape of a W. Fifteen seconds until the foam turns fine.',
    bg: '#111410',
    fg: '#e7e9d8',
  },
  {
    no: '04',
    title: 'Drink',
    kanji: '飲',
    body: 'Three slow sips. Then sit a while.',
    bg: '#d9cdb4',
    fg: '#1c2a19',
  },
] as const

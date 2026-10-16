// Copy and product data for the Trama concept. Trama is a fictional brand.

/** Cloth colours, in the order the dye section dips them. Index 0 is the undyed linen. */
export const DYES = [
  { id: 'raw', name: 'Raw', cloth: '#c9c1b1', bg: '#1a1815', fg: '#ece6da', recipe: 'Undyed flax, retted in the field', time: 'Day 0' },
  { id: 'moss', name: 'Moss', cloth: '#555b2b', bg: '#dfe0cd', fg: '#2b2e15', recipe: 'Weld and iron, three baths', time: '2 days' },
  { id: 'oxide', name: 'Oxide', cloth: '#9a3f22', bg: '#eedbcd', fg: '#4a1d0e', recipe: 'Madder root, simmered at 60°', time: '4 days' },
  { id: 'ink', name: 'Ink', cloth: '#1e1d1b', bg: '#e3e0da', fg: '#141311', recipe: 'Oak gall and iron, overdyed', time: '5 days' },
  { id: 'indigo', name: 'Indigo', cloth: '#22325c', bg: '#d8dde8', fg: '#121b33', recipe: 'Fermented vat, fourteen dips', time: '6 days' },
] as const

export type Garment = 'overshirt' | 'jacket' | 'trouser' | 'coat'

export type Variant = {
  id: Garment
  no: string
  name: string
  cloth: string
  /** Index into DYES. */
  dye: number
  weight: string
  price: string
  days: string
}

export const VARIANTS: Variant[] = [
  { id: 'overshirt', no: '01', name: 'Overshirt', cloth: 'Linen twill', dye: 4, weight: '340 gsm', price: '280', days: '9' },
  { id: 'jacket', no: '02', name: 'Field Jacket', cloth: 'Cotton canvas', dye: 2, weight: '420 gsm', price: '420', days: '12' },
  { id: 'trouser', no: '03', name: 'Wide Trouser', cloth: 'Wool and linen', dye: 1, weight: '380 gsm', price: '260', days: '8' },
  { id: 'coat', no: '04', name: 'Long Coat', cloth: 'Boiled wool', dye: 3, weight: '620 gsm', price: '690', days: '16' },
]

export const LOOM_STATS = [
  { label: 'Picks', to: 41580, decimals: 0, unit: '' },
  { label: 'Metres of cloth', to: 2.6, decimals: 1, unit: 'm' },
  { label: 'Hours on the loom', to: 31, decimals: 0, unit: 'h' },
]

export const CUT_STEPS = [
  { no: '01', title: 'Measure', body: 'Fourteen points, taken once, kept on file.' },
  { no: '02', title: 'Cut', body: 'Eleven pieces, cut by hand along the grain.' },
  { no: '03', title: 'Sew', body: 'Two thousand stitches, one tailor, start to finish.' },
]

export interface Picture {
  src: string
  width: number
  height: number
  /** YouTube video id: the still opens this film when clicked. */
  youtube?: string
}

export interface Clip {
  mp4: string
  webm: string
  poster: string
  width: number
  height: number
}

/** An identity shown as its type and palette, used when the logo is not the studio's work. */
export interface Specimen {
  faces: readonly string[]
  /** A line from the client's own site, set in their display face. */
  line: string
  /** Ground, second ground, accent, ink. */
  palette: readonly { hex: string }[]
}

/** A silent screen recording, played on a loop. */
export interface Loop {
  src: string
  poster: string
  width: number
  height: number
}

export interface ChapterMedia {
  /** Lay the images out as an editorial sequence rather than an even grid. */
  story?: boolean
  images?: readonly Picture[]
  video?: Clip
  /** The client's previous site beside the one the studio made. */
  compare?: { before: Loop; after: Loop }
}

export interface Project {
  slug: string
  title: string
  url: string
  /** Home page card, 4:3. */
  cover: string
  blurDataURL: string
  hero: Picture
  mark?: Picture
  /** Shown in the identity section when the logo is not the studio's own work. */
  specimen?: Specimen
  screens: readonly Picture[]
  chapters: readonly ChapterMedia[]
}

const screens = (dir: string, height = 900): Picture[] =>
  [1, 2, 3, 4].map((i) => ({ src: `/images/work/${dir}/screen-${i}.webp`, width: 1440, height }))

export const PROJECTS: readonly Project[] = [
  {
    slug: 'bordados-com-amor-by-mari',
    title: 'Bordados com Amor',
    url: 'https://bordadoscomamorbymari.com/',
    cover: '/images/work/bordados.webp',
    blurDataURL:
      'data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAACwAQCdASoMAAkAA4BaJZwAAesvQMwAAP7qVmMt5kugx4/HuxlJtc9sl+pFSyujpO07w+f6TXi/Ch6tagIAAA==',
    hero: { src: '/images/work/bordados/hero.webp', width: 1600, height: 905 },
    mark: { src: '/images/work/bordados/mark.webp', width: 760, height: 387 },
    screens: screens('bordados'),
    chapters: [
      {},
      {
        story: true,
        images: [2, 1, 4, 3, 5].map((i) => ({
          src: `/images/work/bordados/photo-${i}.webp`,
          width: 1600,
          height: 1067,
        })),
        video: {
          mp4: '/images/work/bordados/reel.mp4',
          webm: '/images/work/bordados/reel.webm',
          poster: '/images/work/bordados/reel-poster.webp',
          width: 1080,
          height: 1920,
        },
      },
    ],
  },
  {
    slug: 'b2b-ranch',
    title: 'B2B Ranch',
    url: 'https://www.b2branch.com.br/',
    cover: '/images/work/b2b.webp',
    blurDataURL:
      'data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAACwAQCdASoMAAkAA4BaJZwAApwjCz4AAP708XYK8njCf4yr3SAdtaAbYCmZI9Rzq7gBnbfhbfp1DT3XGF5BrHIpqO1K+s3vFwAAAA==',
    hero: { src: '/images/work/b2b/hero.webp', width: 1600, height: 864 },
    // The crest was the ranch's before the studio arrived, so it is never shown as the studio's work.
    specimen: {
      faces: ['Archivo', 'Instrument Sans'],
      line: 'Apaixonados por grandes cavalos.',
      palette: [{ hex: '#F1EDE6' }, { hex: '#DDD8CF' }, { hex: '#0E1A2E' }, { hex: '#0B0A09' }],
    },
    screens: screens('b2b', 778),
    chapters: [
      {
        compare: {
          before: {
            src: '/films/b2b-before.mp4',
            poster: '/films/b2b-before-poster.webp',
            width: 1120,
            height: 606,
          },
          after: {
            src: '/films/b2b-after.mp4',
            poster: '/films/b2b-after-poster.webp',
            width: 1120,
            height: 606,
          },
        },
      },
      {},
      {},
    ],
  },
  {
    slug: 'blend-hair-boutique',
    title: 'Blend Hair Boutique',
    url: 'https://www.blendhairboutique.com/',
    cover: '/images/work/blend.webp',
    blurDataURL:
      'data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAADQAQCdASoMAAkAA4BaJZwAAvxV1uqwAAD+6j5Xs9smoI/dTSvDWUWX/48rf4QofeAUAA==',
    hero: { src: '/images/work/blend/hero.webp', width: 1600, height: 1000 },
    // The logo was Blend's before the studio arrived, so it is never shown as the studio's work.
    specimen: {
      faces: ['Cormorant Garamond', 'Inter'],
      line: 'A precision cut, wash included, for every hair type.',
      palette: [{ hex: '#F9F5F0' }, { hex: '#F0EAE3' }, { hex: '#887860' }, { hex: '#1E1A17' }],
    },
    screens: screens('blend'),
    chapters: [
      {
        video: {
          mp4: '/images/work/blend/film.mp4',
          webm: '/images/work/blend/film.webm',
          poster: '/images/work/blend/film-poster.webp',
          width: 1280,
          height: 720,
        },
      },
      {},
      {},
    ],
  },
  {
    slug: 'rafa-diniz',
    title: 'Rafa Diniz',
    url: 'https://www.byrafadiniz.com/',
    cover: '/images/work/rafa.webp',
    blurDataURL:
      'data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoMAAkAA4BaJQBOgCHZsBRwAP7sWsv2Ur3m+d2ersN9CiPWEHnTrBwXwuvRAAAA',
    hero: { src: '/images/work/rafa/hero.webp', width: 1600, height: 1000 },
    mark: { src: '/images/work/rafa/mark.webp', width: 760, height: 286 },
    screens: screens('rafa'),
    chapters: [
      {
        story: true,
        // Paixão Calejada, then B2B Ranch.
        images: ['BNN8BEkgFSk', '4IPh_fbGn5g'].map((youtube, i) => ({
          src: `/images/work/rafa/film-${i + 1}.webp`,
          width: 1000,
          height: 419,
          youtube,
        })),
      },
      {},
      {},
    ],
  },
  {
    slug: 'renata-estrella-patisserie',
    title: 'Renata Estrella',
    url: 'https://renataestrellapatisserie.com/',
    cover: '/images/work/renata.webp',
    blurDataURL:
      'data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAAAQAgCdASoMAAkABUB8JYgCdAEWPXaZ84bAAP7qkN1khnmlCEQtk2kPR8ZJzGNlebc+25UscX8c47g0/2jwIyPQAAA=',
    hero: { src: '/images/work/renata/hero.webp', width: 1600, height: 864 },
    screens: screens('renata', 778),
    chapters: [
      {
        story: true,
        images: [1, 2, 3, 4].map((i) => ({
          src: `/images/work/renata/ebook-${i}.webp`,
          width: 639,
          height: 1000,
        })),
      },
      {},
    ],
  },
]

export const PROJECT_SLUGS = PROJECTS.map((project) => project.slug)

export const projectBySlug = (slug: string) => PROJECTS.find((project) => project.slug === slug)

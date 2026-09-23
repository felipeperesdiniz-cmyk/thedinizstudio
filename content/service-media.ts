import type { ServiceKey } from '@/lib/i18n'
import type { Clip, Picture } from '@/content/projects'

export interface Thumb extends Picture {
  /**
   * `light` puts a pale tile behind a mark drawn as dark ink on transparent.
   * `artwork` shows a finished piece as it is: full bleed and always in colour.
   */
  tone?: 'light' | 'artwork'
  alt: string
}

/** Proof for each service, shown beside it on the home page. */
export const SERVICE_MEDIA: Record<ServiceKey, readonly Thumb[]> = {
  'web-design': [
    {
      src: '/images/work/bordados/hero.webp',
      width: 1600,
      height: 905,
      alt: 'Bordados com Amor website homepage, "Palavras costuradas à mão" over a photo of hand embroidery',
    },
    {
      src: '/images/work/rafa/hero.webp',
      width: 1600,
      height: 1000,
      alt: 'Rafa Diniz photography and film website homepage over a sunset landscape photo',
    },
    {
      src: '/images/work/blend/hero.webp',
      width: 1600,
      height: 1000,
      alt: 'Blend Hair Boutique website homepage for a luxury hair salon in Plantation, Florida',
    },
  ],
  'brand-identity': [
    {
      src: '/images/services/logo-figurati.webp',
      width: 1200,
      height: 800,
      tone: 'artwork',
      alt: 'Figurati logo, a hand-lettered wordmark over an embroidered swimmer on a surfboard',
    },
    {
      src: '/images/work/rafa/mark.webp',
      width: 760,
      height: 286,
      tone: 'light',
      alt: 'Rafa Diniz photography and film logo mark',
    },
    {
      src: '/images/services/logo-isabellas-ranch.webp',
      width: 1200,
      height: 1200,
      tone: 'artwork',
      alt: "Isabella's Ranch logo, an illustrated horse and rider on the beach",
    },
  ],
  'marketing-seo': [
    {
      src: '/images/work/bordados/photo-3.webp',
      width: 1600,
      height: 1067,
      alt: 'Hand-embroidered leaf reading "Gratidão", photographed on grass',
    },
    {
      src: '/images/services/marketing-2.webp',
      width: 640,
      height: 1138,
      alt: 'Instagram story for an embroidery client reading "Life doesn\'t have to be perfect to be beautiful"',
    },
    {
      src: '/images/services/marketing-3.webp',
      width: 640,
      height: 1002,
      alt: 'Instagram post for Renata Estrella promoting a "Sopas e Cremes" recipe ebook',
    },
  ],
}

export interface ServicePageMedia {
  /** Full-width image under the page title. */
  hero: Thumb
  /** A few pieces of the work itself, shown between the sections. */
  gallery: readonly Thumb[]
  /** Case studies that came out of this service. */
  related: readonly string[]
  /** Reels produced for clients, shown as playable clips. `slug` credits the project. */
  reels?: readonly { clip: Clip; slug: string }[]
}

export const SERVICE_PAGE_MEDIA: Record<ServiceKey, ServicePageMedia> = {
  'web-design': {
    hero: {
      src: '/images/work/rafa/hero.webp',
      width: 1600,
      height: 1000,
      alt: 'Rafa Diniz photography and film website homepage over a sunset landscape photo',
    },
    gallery: [
      {
        src: '/images/work/bordados/screen-2.webp',
        width: 1440,
        height: 900,
        alt: 'A page from the Bordados com Amor website',
      },
      {
        src: '/images/work/blend/screen-2.webp',
        width: 1440,
        height: 900,
        alt: 'A page from the Blend Hair Boutique website',
      },
      {
        src: '/images/work/rafa/screen-2.webp',
        width: 1440,
        height: 900,
        alt: 'A page from the Rafa Diniz website',
      },
      {
        src: '/images/work/renata/screen-3.webp',
        width: 1440,
        height: 900,
        alt: 'A page from the Renata Estrella Pâtisserie website',
      },
    ],
    related: ['bordados-com-amor-by-mari', 'blend-hair-boutique', 'rafa-diniz'],
  },
  'brand-identity': {
    hero: {
      src: '/images/services/logo-figurati.webp',
      width: 1200,
      height: 800,
      tone: 'artwork',
      alt: 'Figurati logo, a hand-lettered wordmark over an embroidered swimmer on a surfboard',
    },
    gallery: [
      {
        src: '/images/work/bordados/mark.webp',
        width: 760,
        height: 387,
        tone: 'light',
        alt: 'Bordados com Amor by Mari embroidered logotype',
      },
      {
        src: '/images/services/logo-isabellas-ranch.webp',
        width: 1200,
        height: 1200,
        tone: 'artwork',
        alt: "Isabella's Ranch logo, an illustrated horse and rider on the beach",
      },
      {
        src: '/images/work/rafa/mark.webp',
        width: 760,
        height: 286,
        tone: 'light',
        alt: 'Rafa Diniz photography and film logo mark',
      },
      {
        src: '/images/work/blend/mark.webp',
        width: 900,
        height: 613,
        tone: 'light',
        alt: 'Blend Hair Boutique logo mark with a bobby pin illustration',
      },
    ],
    related: ['bordados-com-amor-by-mari', 'rafa-diniz', 'renata-estrella-patisserie'],
  },
  'marketing-seo': {
    hero: {
      src: '/images/work/bordados/photo-2.webp',
      width: 1600,
      height: 1067,
      alt: 'Embroidery hoop reading "Nada é em vão, se não é benção, é Lição", photographed on grass',
    },
    gallery: [
      {
        src: '/images/work/bordados/photo-5.webp',
        width: 1600,
        height: 1067,
        alt: 'Hand-embroidered leaf reading "Amor", photographed close up on grass',
      },
      {
        src: '/images/services/marketing-2.webp',
        width: 640,
        height: 1138,
        alt: 'Instagram story for an embroidery client reading "Life doesn\'t have to be perfect to be beautiful"',
      },
      {
        src: '/images/services/marketing-3.webp',
        width: 640,
        height: 1002,
        alt: 'Instagram post for Renata Estrella promoting a "Sopas e Cremes" recipe ebook',
      },
      {
        src: '/images/work/bordados/photo-4.webp',
        width: 1600,
        height: 1067,
        alt: 'Hand-embroidered leaf reading "Amor", photographed on a dark forest floor',
      },
    ],
    reels: [
      {
        clip: {
          mp4: '/images/work/bordados/reel.mp4',
          webm: '/images/work/bordados/reel.webm',
          poster: '/images/work/bordados/reel-poster.webp',
          width: 1080,
          height: 1920,
        },
        slug: 'bordados-com-amor-by-mari',
      },
      {
        clip: {
          mp4: '/images/work/blend/film.mp4',
          webm: '/images/work/blend/film.webm',
          poster: '/images/work/blend/film-poster.webp',
          width: 1280,
          height: 720,
        },
        slug: 'blend-hair-boutique',
      },
    ],
    related: ['bordados-com-amor-by-mari', 'renata-estrella-patisserie', 'blend-hair-boutique'],
  },
}

import type { Locale } from '@/lib/i18n'

/** Words for the home page that the dictionary does not already hold. */
export interface HomeStory {
  hero: {
    title: string
    /** Credit for the photograph behind the title. */
    credit: string
    alt: string
    viewWork: string
  }
  work: { kicker: string; view: string; visit: string }
  note: { kicker: string; text: string }
  films: { kicker: string; title: string; rafa: string; mari: string }
  services: { kicker: string }
  studio: { capacity: string }
}

export const HOME_STORY: Record<Locale, HomeStory> = {
  en: {
    hero: {
      title: 'Websites, identity and marketing, made by hand',
      credit: 'Bordados com Amor, hand embroidery',
      alt: 'A dry leaf embroidered with the word AMOR, lying on dark ground',
      viewWork: 'View the work',
    },
    work: { kicker: 'Selected work', view: 'View case study', visit: 'Visit site' },
    note: {
      kicker: 'The studio',
      text: 'I’m Felipe Diniz. I design and build websites, logos and Instagram accounts for small businesses: so far a hand embroidery artist between Weston and Rio, a salon in Plantation, a photographer in Gainesville and a pastry chef in Rio de Janeiro. Every site is written, not machine-translated, in the languages its customers speak.',
    },
    films: { kicker: 'Film', title: 'Films on the sites', rafa: 'The showreel that opens the site', mari: 'Mariana at work, behind the home page' },
    services: { kicker: 'Services' },
    studio: { capacity: 'One or two projects at a time' },
  },

  pt: {
    hero: {
      title: 'Sites, identidade e marketing, feitos à mão',
      credit: 'Bordados com Amor, bordado à mão',
      alt: 'Uma folha seca bordada com a palavra AMOR, sobre a terra escura',
      viewWork: 'Ver os projetos',
    },
    work: { kicker: 'Projetos selecionados', view: 'Ver o projeto', visit: 'Visitar o site' },
    note: {
      kicker: 'O estúdio',
      text: 'Sou Felipe Diniz. Desenho e construo sites, logos e perfis de Instagram para pequenos negócios: até agora, uma bordadeira entre Weston e o Rio, um salão em Plantation, um fotógrafo em Gainesville e uma confeiteira no Rio de Janeiro. Cada site é escrito, não traduzido por máquina, nos idiomas que os clientes falam.',
    },
    films: { kicker: 'Filme', title: 'Filmes nos sites', rafa: 'O showreel que abre o site', mari: 'Mariana bordando, por trás da página inicial' },
    services: { kicker: 'Serviços' },
    studio: { capacity: 'Um ou dois projetos por vez' },
  },

  es: {
    hero: {
      title: 'Webs, identidad y marketing, hechos a mano',
      credit: 'Bordados com Amor, bordado a mano',
      alt: 'Una hoja seca bordada con la palabra AMOR, sobre tierra oscura',
      viewWork: 'Ver los proyectos',
    },
    work: { kicker: 'Proyectos seleccionados', view: 'Ver el proyecto', visit: 'Visitar la web' },
    note: {
      kicker: 'El estudio',
      text: 'Soy Felipe Diniz. Diseño y construyo webs, logos y perfiles de Instagram para pequeños negocios: hasta ahora, una bordadora entre Weston y Río, un salón en Plantation, un fotógrafo en Gainesville y una pastelera en Río de Janeiro. Cada web está escrita, no traducida por máquina, en los idiomas que hablan sus clientes.',
    },
    films: { kicker: 'Película', title: 'Películas en las webs', rafa: 'El showreel que abre la web', mari: 'Mariana bordando, detrás de la página de inicio' },
    services: { kicker: 'Servicios' },
    studio: { capacity: 'Uno o dos proyectos a la vez' },
  },
}

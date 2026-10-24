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
  /** What a client weighs before writing: price, time, languages, ownership. All stated in the FAQ. */
  facts: readonly { value: string; text: string }[]
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
    facts: [
      { value: 'Fixed price', text: 'Quoted in writing before anything starts. No hourly billing afterwards.' },
      { value: '4 to 8 weeks', text: 'From the first conversation to launch, for most projects.' },
      { value: 'Three languages', text: 'English, Portuguese and Spanish, each at its own address.' },
      { value: 'Yours at handover', text: 'The finished site, its source code and the domain. No licence to renew.' },
    ],
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
    facts: [
      { value: 'Preço fixo', text: 'Orçado por escrito antes de começar. Sem cobrança por hora depois.' },
      { value: '4 a 8 semanas', text: 'Da primeira conversa até o ar, na maioria dos projetos.' },
      { value: 'Três idiomas', text: 'Inglês, português e espanhol, cada um no seu endereço.' },
      { value: 'Seu na entrega', text: 'O site pronto, o código-fonte e o domínio. Nenhuma licença para renovar.' },
    ],
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
    facts: [
      { value: 'Precio fijo', text: 'Presupuestado por escrito antes de empezar. Sin cobro por hora después.' },
      { value: 'De 4 a 8 semanas', text: 'Desde la primera conversación hasta la publicación, en la mayoría de los proyectos.' },
      { value: 'Tres idiomas', text: 'Inglés, portugués y español, cada uno en su propia dirección.' },
      { value: 'Tuyo en la entrega', text: 'La web terminada, su código fuente y el dominio. Ninguna licencia que renovar.' },
    ],
    films: { kicker: 'Película', title: 'Películas en las webs', rafa: 'El showreel que abre la web', mari: 'Mariana bordando, detrás de la página de inicio' },
    services: { kicker: 'Servicios' },
    studio: { capacity: 'Uno o dos proyectos a la vez' },
  },
}

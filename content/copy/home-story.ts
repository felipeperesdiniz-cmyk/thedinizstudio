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
  terms: { kicker: string; title: string; items: readonly { term: string; text: string }[] }
  films: { kicker: string; title: string; rafa: string; mari: string }
  services: { kicker: string }
  studio: { capacity: string }
}

export const HOME_STORY: Record<Locale, HomeStory> = {
  en: {
    hero: {
      title: 'Websites, identity and marketing, made with care',
      credit: 'Bordados com Amor, hand embroidery',
      alt: 'A dry leaf embroidered by hand with the word AMOR and a sprig of small red flowers, lying on grass',
      viewWork: 'View the work',
    },
    work: { kicker: 'Selected work', view: 'View case study', visit: 'Visit site' },
    terms: {
      kicker: 'Before you write',
      title: 'The terms, settled up front',
      items: [
        { term: 'Fixed price', text: 'Quoted in writing before anything starts. No hourly billing afterwards.' },
        { term: '4 to 8 weeks', text: 'From the first conversation to launch, for most projects.' },
        { term: 'Three languages', text: 'English, Portuguese and Spanish, each at its own address.' },
        { term: 'Yours at handover', text: 'The finished site, its source code and the domain. No licence to renew.' },
      ],
    },
    films: { kicker: 'Film', title: 'Films on the sites', rafa: 'The showreel that opens the site', mari: 'Mariana at work, behind the home page' },
    services: { kicker: 'Services' },
    studio: { capacity: 'One or two projects at a time' },
  },

  pt: {
    hero: {
      title: 'Sites, identidade e marketing, feitos com cuidado',
      credit: 'Bordados com Amor, bordado à mão',
      alt: 'Uma folha seca bordada à mão com a palavra AMOR e um ramo de florzinhas vermelhas, sobre a grama',
      viewWork: 'Ver os projetos',
    },
    work: { kicker: 'Projetos selecionados', view: 'Ver o projeto', visit: 'Visitar o site' },
    terms: {
      kicker: 'Antes de escrever',
      title: 'As condições, definidas de antemão',
      items: [
        { term: 'Preço fixo', text: 'Orçado por escrito antes de começar. Sem cobrança por hora depois.' },
        { term: '4 a 8 semanas', text: 'Da primeira conversa até o ar, na maioria dos projetos.' },
        { term: 'Três idiomas', text: 'Inglês, português e espanhol, cada um no seu endereço.' },
        { term: 'Seu na entrega', text: 'O site pronto, o código-fonte e o domínio. Nenhuma licença para renovar.' },
      ],
    },
    films: { kicker: 'Filme', title: 'Filmes nos sites', rafa: 'O showreel que abre o site', mari: 'Mariana bordando, por trás da página inicial' },
    services: { kicker: 'Serviços' },
    studio: { capacity: 'Um ou dois projetos por vez' },
  },

  es: {
    hero: {
      title: 'Webs, identidad y marketing, hechos con cuidado',
      credit: 'Bordados com Amor, bordado a mano',
      alt: 'Una hoja seca bordada a mano con la palabra AMOR y una rama de florecitas rojas, sobre el césped',
      viewWork: 'Ver los proyectos',
    },
    work: { kicker: 'Proyectos seleccionados', view: 'Ver el proyecto', visit: 'Visitar la web' },
    terms: {
      kicker: 'Antes de escribir',
      title: 'Las condiciones, claras desde el principio',
      items: [
        { term: 'Precio fijo', text: 'Presupuestado por escrito antes de empezar. Sin cobro por hora después.' },
        { term: 'De 4 a 8 semanas', text: 'Desde la primera conversación hasta la publicación, en la mayoría de los proyectos.' },
        { term: 'Tres idiomas', text: 'Inglés, portugués y español, cada uno en su propia dirección.' },
        { term: 'Tuyo en la entrega', text: 'La web terminada, su código fuente y el dominio. Ninguna licencia que renovar.' },
      ],
    },
    films: { kicker: 'Película', title: 'Películas en las webs', rafa: 'El showreel que abre la web', mari: 'Mariana bordando, detrás de la página de inicio' },
    services: { kicker: 'Servicios' },
    studio: { capacity: 'Uno o dos proyectos a la vez' },
  },
}

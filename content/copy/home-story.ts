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
  /**
   * What a client weighs before writing: price, time, languages, ownership. All stated in the FAQ.
   * Written as one paragraph; the words between asterisks are the ones the eye should land on.
   */
  terms: { kicker: string; text: string; signature: string }
  films: { kicker: string; title: string; rafa: string; mari: string }
  services: { kicker: string }
  studio: { capacity: string }
}

export const HOME_STORY: Record<Locale, HomeStory> = {
  en: {
    hero: {
      title: 'Websites, identity and marketing, made with care',
      credit: 'Bordados com Amor, hand embroidery',
      alt: 'A dry leaf embroidered by hand with the words All we need is love and a small red heart, lying on the forest floor',
      viewWork: 'View the work',
    },
    work: { kicker: 'Selected work', view: 'View case study', visit: 'Visit site' },
    terms: {
      kicker: 'Before you write',
      text: 'Every project has a *fixed price*, quoted in writing before anything starts, with no hourly billing afterwards. Most take *four to eight weeks* from the first conversation to launch. Sites can be built in *English, Portuguese and Spanish*, each language at its own address. And at handover *it is all yours*: the finished site, its source code and the domain, with no licence to renew.',
      signature: 'Felipe Diniz',
    },
    films: { kicker: 'Film', title: 'Films on the sites', rafa: 'The showreel that opens the site', mari: 'Mariana at work, behind the home page' },
    services: { kicker: 'Services' },
    studio: { capacity: 'One or two projects at a time' },
  },

  pt: {
    hero: {
      title: 'Sites, identidade e marketing, feitos com cuidado',
      credit: 'Bordados com Amor, bordado à mão',
      alt: 'Uma folha seca bordada à mão com as palavras All we need is love e um pequeno coração vermelho, sobre o chão da mata',
      viewWork: 'Ver os projetos',
    },
    work: { kicker: 'Projetos selecionados', view: 'Ver o projeto', visit: 'Visitar o site' },
    terms: {
      kicker: 'Antes de escrever',
      text: 'Todo projeto tem *preço fixo*, orçado por escrito antes de começar, sem cobrança por hora depois. A maioria leva *de quatro a oito semanas* da primeira conversa até o ar. Os sites podem ser feitos em *inglês, português e espanhol*, cada idioma no seu endereço. E na entrega *tudo é seu*: o site pronto, o código-fonte e o domínio, sem nenhuma licença para renovar.',
      signature: 'Felipe Diniz',
    },
    films: { kicker: 'Filme', title: 'Filmes nos sites', rafa: 'O showreel que abre o site', mari: 'Mariana bordando, por trás da página inicial' },
    services: { kicker: 'Serviços' },
    studio: { capacity: 'Um ou dois projetos por vez' },
  },

  es: {
    hero: {
      title: 'Webs, identidad y marketing, hechos con cuidado',
      credit: 'Bordados com Amor, bordado a mano',
      alt: 'Una hoja seca bordada a mano con las palabras All we need is love y un pequeño corazón rojo, sobre el suelo del bosque',
      viewWork: 'Ver los proyectos',
    },
    work: { kicker: 'Proyectos seleccionados', view: 'Ver el proyecto', visit: 'Visitar la web' },
    terms: {
      kicker: 'Antes de escribir',
      text: 'Cada proyecto tiene *precio fijo*, presupuestado por escrito antes de empezar, sin cobro por hora después. La mayoría tarda *de cuatro a ocho semanas* desde la primera conversación hasta la publicación. Las webs pueden hacerse en *inglés, portugués y español*, cada idioma en su propia dirección. Y en la entrega *todo es tuyo*: la web terminada, su código fuente y el dominio, sin ninguna licencia que renovar.',
      signature: 'Felipe Diniz',
    },
    films: { kicker: 'Película', title: 'Películas en las webs', rafa: 'El showreel que abre la web', mari: 'Mariana bordando, detrás de la página de inicio' },
    services: { kicker: 'Servicios' },
    studio: { capacity: 'Uno o dos proyectos a la vez' },
  },
}

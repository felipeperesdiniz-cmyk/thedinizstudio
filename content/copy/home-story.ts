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
  /** What a client weighs before writing: price, time, languages, ownership. All stated in the FAQ. Kept short: each is written on a sticky note. */
  terms: { kicker: string; notes: readonly { title: string; text: string }[] }
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
      notes: [
        { title: 'Fixed price', text: 'Quoted in writing before we start. No hourly billing.' },
        { title: '4 to 8 weeks', text: 'First chat to launch, for most projects.' },
        { title: '3 languages', text: 'English, Portuguese and Spanish, each at its own address.' },
        { title: 'Yours at handover', text: 'The site, its source code and the domain. Nothing to renew.' },
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
      alt: 'Uma folha seca bordada à mão com as palavras All we need is love e um pequeno coração vermelho, sobre o chão da mata',
      viewWork: 'Ver os projetos',
    },
    work: { kicker: 'Projetos selecionados', view: 'Ver o projeto', visit: 'Visitar o site' },
    terms: {
      kicker: 'Antes de escrever',
      notes: [
        { title: 'Preço fixo', text: 'Orçado por escrito antes de começar. Sem cobrança por hora.' },
        { title: '4 a 8 semanas', text: 'Da primeira conversa até o ar, na maioria dos projetos.' },
        { title: '3 idiomas', text: 'Inglês, português e espanhol, cada um no seu endereço.' },
        { title: 'Seu na entrega', text: 'O site, o código-fonte e o domínio. Nada para renovar.' },
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
      alt: 'Una hoja seca bordada a mano con las palabras All we need is love y un pequeño corazón rojo, sobre el suelo del bosque',
      viewWork: 'Ver los proyectos',
    },
    work: { kicker: 'Proyectos seleccionados', view: 'Ver el proyecto', visit: 'Visitar la web' },
    terms: {
      kicker: 'Antes de escribir',
      notes: [
        { title: 'Precio fijo', text: 'Presupuestado por escrito antes de empezar. Sin cobro por hora.' },
        { title: 'De 4 a 8 semanas', text: 'De la primera charla a la publicación, en la mayoría de los proyectos.' },
        { title: '3 idiomas', text: 'Inglés, portugués y español, cada uno en su dirección.' },
        { title: 'Tuyo en la entrega', text: 'La web, su código fuente y el dominio. Nada que renovar.' },
      ],
    },
    films: { kicker: 'Película', title: 'Películas en las webs', rafa: 'El showreel que abre la web', mari: 'Mariana bordando, detrás de la página de inicio' },
    services: { kicker: 'Servicios' },
    studio: { capacity: 'Uno o dos proyectos a la vez' },
  },
}

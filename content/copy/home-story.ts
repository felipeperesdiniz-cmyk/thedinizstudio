import type { GuideKey, Locale } from '@/lib/i18n'

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
  /** What a buyer weighs before writing: price, running costs, editing, time, ownership. All stated in the FAQ. */
  terms: {
    kicker: string
    title: string
    /** Each term links to the guide page that answers it in full. */
    items: readonly { guide: GuideKey; term: string; text: string }[]
    /** Link under the list to the guides hub. */
    more: string
  }
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
      title: 'What it costs, and what comes after',
      items: [
        { guide: 'pricing', term: 'Fixed price', text: 'One price for the whole job, in writing before anything starts. It moves with the number of pages and languages, and whether a logo or photography is included.' },
        { guide: 'running-costs', term: 'Running costs', text: 'Hosting and the domain, paid straight to their providers. No page-builder subscription and no licence to renew; the proposal lists every outside cost.' },
        { guide: 'editing', term: 'Editing after launch', text: 'A simple editor for text, photos and prices, when it is written into the proposal. Or send changes and they are made for you, priced per job.' },
        { guide: 'timeline', term: '4 to 8 weeks', text: 'From the first conversation to launch, for most projects.' },
        { guide: 'ownership', term: 'Yours at handover', text: 'The finished site, its source code and the domain, with a walkthrough.' },
      ],
      more: 'How it works, in full',
    },
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
      title: 'O que custa, e o que vem depois',
      items: [
        { guide: 'pricing', term: 'Preço fixo', text: 'Um preço para o trabalho inteiro, por escrito antes de começar. Varia com o número de páginas e idiomas, e se inclui logo ou fotografia.' },
        { guide: 'running-costs', term: 'Custos depois do ar', text: 'Hospedagem e domínio, pagos direto aos fornecedores. Sem assinatura de construtor de sites e sem licença para renovar; a proposta lista todo custo externo.' },
        { guide: 'editing', term: 'Editar depois do lançamento', text: 'Um editor simples para textos, fotos e preços, quando estiver na proposta. Ou você envia as mudanças e elas são feitas para você, com preço por pedido.' },
        { guide: 'timeline', term: '4 a 8 semanas', text: 'Da primeira conversa até o ar, na maioria dos projetos.' },
        { guide: 'ownership', term: 'Seu na entrega', text: 'O site pronto, o código-fonte e o domínio, com uma apresentação de como tudo funciona.' },
      ],
      more: 'Como funciona, em detalhe',
    },
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
      title: 'Lo que cuesta, y lo que viene después',
      items: [
        { guide: 'pricing', term: 'Precio fijo', text: 'Un precio por todo el trabajo, por escrito antes de empezar. Cambia según el número de páginas e idiomas, y si incluye logo o fotografía.' },
        { guide: 'running-costs', term: 'Costes continuos', text: 'Hosting y dominio, pagados directamente a sus proveedores. Sin suscripción a un creador de webs y sin licencia que renovar; la propuesta detalla cada coste externo.' },
        { guide: 'editing', term: 'Editar después del lanzamiento', text: 'Un editor sencillo para textos, fotos y precios, cuando está en la propuesta. O envías los cambios y se hacen por ti, con precio por encargo.' },
        { guide: 'timeline', term: 'De 4 a 8 semanas', text: 'Desde la primera conversación hasta la publicación, en la mayoría de los proyectos.' },
        { guide: 'ownership', term: 'Tuyo en la entrega', text: 'La web terminada, su código fuente y el dominio, con una explicación de cómo funciona todo.' },
      ],
      more: 'Cómo funciona, en detalle',
    },
    services: { kicker: 'Servicios' },
    studio: { capacity: 'Uno o dos proyectos a la vez' },
  },
}

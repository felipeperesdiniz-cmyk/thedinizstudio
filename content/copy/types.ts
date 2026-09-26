import type { ServiceKey } from '@/lib/i18n'

export interface Meta {
  title: string
  description: string
}

export interface Figure {
  value: string
  label: string
  note: string
}

export interface ChapterCopy {
  kicker: string
  title: string
  text: string
  /** One per image in the matching media chapter. */
  captions?: readonly string[]
  videoCaption?: string
}

export interface ProjectCopy {
  meta: Meta
  sector: string
  /** One line under the card on the home page. */
  highlight: string
  lede: string
  /** Paragraph on the home page card. */
  description: string
  alt: string
  location: string
  services: readonly string[]
  identity: {
    title: string
    text: string
    wordmark?: { name: string; sub: string }
    type: readonly { name: string; role: string }[]
  }
  figures: readonly Figure[]
  chapters: readonly ChapterCopy[]
  screens: readonly string[]
  quote: { text: string; name: string; role: string }
}

export interface ServicePageCopy {
  meta: Meta
  kicker: string
  title: string
  lede: string
  /** Two or three paragraphs, plain and specific. */
  body: readonly string[]
  included: { title: string; items: readonly { title: string; text: string }[] }
  process: { title: string; steps: readonly { title: string; text: string }[] }
  faq: { title: string; items: readonly { slug: string; q: string; a: string }[] }
}

export interface Dictionary {
  meta: {
    siteName: string
    tagline: string
  }
  nav: {
    work: string
    services: string
    about: string
    contact: string
    language: string
    skip: string
  }
  cta: {
    label: string
    /** Repeated band at the foot of most pages. */
    title: string
    text: string
    bookCall: string
  }
  home: {
    meta: Meta
    /** Visible line under the hero wordmark. */
    heroLine: string
    /** Label beside the scroll cue at the foot of the hero. */
    heroScroll: string
    h1: string
    intro: { kicker: string; title: string; body: readonly string[] }
    services: { kicker: string; title: string; text: string; link: string }
    work: { kicker: string; title: string; text: string; link: string }
    answers: {
      kicker: string
      title: string
      /** Link to the FAQ hub, where every answer also has its own page. */
      link: string
      items: readonly { slug: string; q: string; a: string }[]
    }
  }
  work: {
    meta: Meta
    kicker: string
    title: string
    lede: string
    viewProject: string
    caseStudy: string
    visitSite: string
    allWork: string
    nextProject: string
  }
  caseStudy: {
    scope: string
    where: string
    live: string
    identity: string
    type: string
    theSite: string
  }
  player: {
    soundOn: string
    soundOff: string
  }
  services: {
    meta: Meta
    kicker: string
    title: string
    lede: string
    cards: Record<
      ServiceKey,
      {
        title: string
        text: string
        /** Shown beside the service on the home page. */
        proof?: readonly { value: string; label: string }[]
      }
    >
    readMore: string
    /** Heading over the case studies shown on a service page. */
    related: string
    /** Heading over the client reels shown on a service page, when it has any. */
    reels: string
  }
  servicePages: Record<ServiceKey, ServicePageCopy>
  about: {
    meta: Meta
    kicker: string
    title: string
    lede: string
    body: readonly string[]
    facts: readonly { label: string; value: string }[]
  }
  /** The FAQ hub and each question's own page, for stronger long-tail SEO. */
  faq: {
    meta: Meta
    kicker: string
    title: string
    lede: string
    /** Back link on every individual question page, to the FAQ hub. */
    backLink: string
    moreQuestions: string
  }
  contact: {
    meta: Meta
    kicker: string
    title: string
    lede: string
    form: {
      name: string
      email: string
      project: string
      projectOptions: readonly string[]
      message: string
      submit: string
      note: string
      sending: string
      success: string
      failure: string
      errors: { name: string; email: string; message: string }
    }
    direct: { email: string; whatsapp: string; instagram: string; meeting: string; meetingText: string }
  }
  footer: {
    sections: { work: string; services: string; studio: string }
    rights: string
  }
  projects: Record<string, ProjectCopy>
}

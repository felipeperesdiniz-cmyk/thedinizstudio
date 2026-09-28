import type { Dictionary } from './types'
import { industriesEn } from './industries-en'

export const en: Dictionary = {
  meta: {
    siteName: 'The Diniz Studio',
    tagline: 'A founder-led studio for service and creative businesses, in three languages.',
  },

  nav: {
    work: 'Work',
    services: 'Services',
    about: 'Studio',
    contact: 'Contact',
    language: 'Language',
    skip: 'Skip to content',
  },

  cta: {
    label: 'Start a project',
    title: 'Have a project in mind?',
    text: 'Tell me what you sell and who you sell it to. You get a straight answer on scope and timeline, and a fixed quote in writing.',
    bookCall: 'Book a 30-minute call',
  },

  home: {
    meta: {
      title: 'The Diniz Studio | Web Design, Branding and Marketing',
      description:
        'A founder-led studio making websites, brand identities and marketing for service and creative businesses in the US and Brazil. In English, Portuguese and Spanish.',
    },
    heroLine: 'A founder-led studio for service and creative businesses. Websites, brands and marketing in English, Portuguese and Spanish.',
    heroScroll: 'Scroll',
    h1: 'The Diniz Studio. Web design, brand identity and marketing for service and creative businesses.',
    intro: {
      kicker: 'Why one studio',
      title: 'Three suppliers who never speak',
      body: [
        'One builds the site, one draws the logo, one posts to Instagram. Nothing matches, and nobody is looking at the whole picture.',
        'Here the website, the identity and the marketing come from the same person and the same decisions, so a customer who finds you on Google, on Instagram or through a friend meets the same business. You do not need all three: take the one you are missing, and it will fit with what you already have.',
        'The studio works with service and creative businesses, such as salons, makers, photographers and chefs, and especially with those whose customers speak more than one language. Sites are written in English, Portuguese and Spanish wherever the audience needs it.',
      ],
    },
    founder: {
      kicker: 'Who you work with',
      title: 'Felipe Diniz, founder',
      body: [
        'The Diniz Studio is run by Felipe Diniz. The same person answers your first message, designs the site, writes the code and picks up the phone months later when you want something changed.',
        'One or two projects at a time, in English, Portuguese and Spanish, for businesses in the United States and Brazil. No account manager between you and the work.',
      ],
      link: 'More about the studio',
    },
    quote: {
      kicker: 'From a client',
      project: 'blend-hair-boutique',
      link: 'Read the Blend case study',
    },
    services: {
      kicker: 'Services',
      title: 'Three things, done properly',
      text: 'A website, an identity to hold it together, and the search and social work around them. Hire the studio for one, or combine them.',
      link: 'See all services',
    },
    work: {
      kicker: 'Selected work',
      title: 'Four businesses, four problems',
      text: 'A hand embroidery artist, a salon, a photographer and a pastry chef. Each case study keeps what was made apart from what has been measured.',
      link: 'See all work',
    },
    answers: {
      kicker: 'Straight answers',
      title: 'What people ask before they hire',
      link: 'See every question',
      items: [
        {
          slug: 'how-do-i-get-a-price',
          q: 'How do I get a price?',
          a: 'Every project is quoted on its own, because a one-page site and a trilingual site with a logo and photography are not the same job. Tell me what you need and you get a fixed price in writing before anything starts. Hosting, the domain and any third-party tools are billed by their providers, and the quote says which ones apply.',
        },
        {
          slug: 'how-long-does-it-take',
          q: 'How long does it take?',
          a: 'Four to eight weeks for most projects, from the first conversation to launch. The slow part is never the code, it is decisions and content, so the process is built to get those out of you early.',
        },
        {
          slug: 'do-you-build-in-more-than-one-language',
          q: 'Do you build in more than one language?',
          a: 'Yes. English, Portuguese and Spanish, each at its own address and declared to search engines, so they can match each page to people searching in that language. Every version is written, not machine-translated.',
        },
        {
          slug: 'do-you-only-do-websites',
          q: 'Do you only do websites?',
          a: 'No. Logo and brand identity, photography direction, social media, Google Business Profiles and local SEO. You can hire the studio for any one of these, or combine them. Nobody needs all of it.',
        },
        {
          slug: 'what-do-you-build-with',
          q: 'What do you build with?',
          a: 'Custom code rather than a page builder. That keeps the pages light and fast, and there is no page-builder subscription to keep paying. Hosting and the domain are still paid to their providers, as with any site.',
        },
      ],
    },
  },

  work: {
    meta: {
      title: 'Work | Websites, Branding and Marketing Case Studies',
      description:
        'Case studies: websites, logos, social media and local SEO for an embroidery artist, a hair salon, a photographer and a pastry chef.',
    },
    kicker: 'Work',
    title: 'Every project, in full',
    lede: 'What the business needed and what was made. Every figure is labelled for what it counts, and each project links through to the live site.',
    viewProject: 'View case study',
    caseStudy: 'Case study',
    visitSite: 'Visit site',
    allWork: 'All work',
    nextProject: 'Next project',
  },

  caseStudy: {
    scope: 'Scope',
    where: 'Where',
    live: 'Live',
    identity: 'Identity',
    type: 'Type',
    theSite: 'The site',
    figureKind: { delivered: 'Delivered', measured: 'Measured', client: 'About the client' },
  },

  player: {
    soundOn: 'Sound on',
    soundOff: 'Sound off',
    watch: 'Watch the film',
    close: 'Close',
  },

  services: {
    meta: {
      title: 'Services | Web Design, Brand Identity and Marketing',
      description:
        'Custom websites, logo and brand identity, and the marketing that follows: social media, Google Business Profiles and local SEO. In three languages.',
    },
    kicker: 'Services',
    title: 'What the studio does',
    lede: 'Three services built to fit together. Hire the studio for one of them, or combine them.',
    cards: {
      'web-design': {
        title: 'Web design and development',
        text: 'Custom sites written from scratch: fast, multilingual, and built to turn a visitor into an enquiry.',
        proof: [
          { value: 'Up to 3', label: 'Languages per site' },
          { value: '100%', label: 'Code handed over' },
          { value: '0', label: 'Templates used' },
        ],
      },
      'brand-identity': {
        title: 'Brand identity',
        text: 'Logo, colour, type and the rules that hold them together, drawn for how your business actually trades.',
        proof: [
          { value: '0', label: 'Renewal fees for the logo' },
          { value: 'Yours', label: 'Source files included' },
        ],
      },
      'marketing-seo': {
        title: 'Marketing and SEO',
        text: 'Being found and being followed: local search, Google Business Profiles, social media and the content behind both.',
        proof: [
          { value: '200', label: 'Followers on a client account the studio runs' },
          { value: '1.5k', label: 'Followers on the studio’s own account' },
          { value: 'One-off', label: 'Audit and setup; monthly work optional' },
        ],
      },
    },
    readMore: 'Read more',
    related: 'Work from this service',
    reels: 'Reels made for clients',
  },

  servicePages: {
    'web-design': {
      meta: {
        title: 'Web Design and Development | Custom, Multilingual Websites',
        description:
          'Custom websites for service and creative businesses. Hand-coded, fast and multilingual, with clear handover and the technical groundwork search engines need.',
      },
      kicker: 'Service',
      title: 'Web design and development',
      lede: 'A website built for your business, not adapted from a template someone else is already using.',
      body: [
        'If you are searching for a new website, you are usually solving one of three problems: the current site looks nothing like the quality of your work, it is slow or broken on a phone, or people visit and never get in touch. All three are fixable, and all three come down to the same thing, which is deciding what the site is for before anyone opens a design tool.',
        'Every page here is written and coded by hand. No page builder, no theme, no monthly licence for a plugin that eventually breaks. That keeps the site light on a phone and gives search engines and AI assistants clean, structured pages to read. It helps you get discovered; it does not guarantee a ranking or a mention.',
        'Where it makes sense, the site is published in English, Portuguese and Spanish. Each language gets its own address and its own text, written rather than translated by a machine, so search engines can match each version to people searching in that language.',
      ],
      included: {
        title: 'What you get',
        items: [
          {
            title: 'A structure built around the sale',
            text: 'Pages ordered the way customers actually decide, ending in a booking, an enquiry or a message rather than a dead end.',
          },
          {
            title: 'Design and build',
            text: 'Layout, type, motion and code. Everything responsive and tested on real phones.',
          },
          {
            title: 'Words that do the work',
            text: 'Copywriting in your voice, including the service pages that answer what people type into search.',
          },
          {
            title: 'One, two or three languages',
            text: 'English, Portuguese and Spanish, each properly published and declared to search engines.',
          },
          {
            title: 'Technical SEO from the start',
            text: 'Structured data, sitemaps, clean headings, fast images: the groundwork search engines need to read the site properly. It helps discovery; rankings still depend on competition and time.',
          },
          {
            title: 'What you own at handover',
            text: 'The finished site and its source code, the domain connected, and a walkthrough of how it all works. Nothing is held back to keep you tied to the studio.',
          },
          {
            title: 'Optional support afterwards',
            text: 'Support after launch is optional. Changes are quoted per job, or on terms agreed in writing if you want regular help. There is no retainer you have to sign.',
          },
          {
            title: 'Third-party costs, stated upfront',
            text: 'Hosting, the domain, a booking platform or any other outside service is billed by its provider and may carry its own fees. The proposal lists which ones your site needs.',
          },
        ],
      },
      process: {
        title: 'How it runs',
        steps: [
          {
            title: 'Conversation',
            text: 'What you sell, who buys it, what gets in the way. Thirty minutes, no charge, no pitch deck.',
          },
          {
            title: 'Proposal',
            text: 'Scope, fixed price and dates in writing. If the answer is that you do not need a new site, you get that too.',
          },
          {
            title: 'Design',
            text: 'The home page first, so you see the direction before the whole thing is built.',
          },
          {
            title: 'Build',
            text: 'Development, content, languages and testing, with a link you can watch it happen on.',
          },
          {
            title: 'Launch',
            text: 'Domain, analytics, search setup, and a check a week later to see what people actually did.',
          },
        ],
      },
      faq: {
        title: 'Questions',
        items: [
          {
            slug: 'new-website-where-do-we-start',
            q: 'I need a new website. Where do we start?',
            a: 'With a conversation about the business rather than the site. Send a message saying what you do and where customers come from now, and you get a scope and a price back within a day or two.',
          },
          {
            slug: 'how-is-a-website-project-priced',
            q: 'How is the project priced?',
            a: 'As one fixed price for the whole job, written down before it starts. It moves with the number of pages, the number of languages, and whether photography and a logo are part of it. The figure you are quoted is the figure you pay, and there is no hourly billing afterwards. Third-party costs such as hosting, the domain or a booking platform sit outside that figure and are listed separately.',
          },
          {
            slug: 'can-you-redesign-my-existing-website',
            q: 'Can you redesign the site I already have?',
            a: 'Yes, and often that is the cheaper answer. If the structure is sound and only the design and speed are the problem, the rebuild is faster and costs less than starting over.',
          },
          {
            slug: 'do-i-need-wordpress-wix-or-squarespace',
            q: 'Do I need Wordpress, Wix or Squarespace?',
            a: 'You do not. Those make sense if you want to build and edit everything yourself. A hand-built site avoids the page-builder subscription and the plugin upkeep, and ties you to no platform that can change its pricing. You still pay for hosting and a domain, as with any website.',
          },
          {
            slug: 'will-i-be-able-to-update-the-site-myself',
            q: 'Will I be able to update it myself?',
            a: 'If you want to. A simple content editor is included when it is written into the proposal, which is worth doing if you will change text, images, prices or listings often. Without one, you send changes and they are made for you, priced per job. You will know which applies before the project starts.',
          },
          {
            slug: 'what-do-i-get-at-handover-and-what-costs-extra',
            q: 'What do I get at handover, and what costs extra?',
            a: 'You get the finished site, its source code, the domain connected and a walkthrough. Hosting, the domain itself, a booking platform or any other outside service is paid to its provider and may have its own fees; the proposal lists them. Support after launch is optional and priced per job or on terms agreed in writing.',
          },
          {
            slug: 'will-my-website-show-up-on-google',
            q: 'How do I know it will show up on Google?',
            a: 'Nobody can promise a position on Google. What the build does is give search engines what they need to read the site: one page per thing you sell, clean headings, structured data, fast pages, and a Google Business Profile if you serve a city. Where you appear then depends on competition, reviews and time, with no fixed timeline, and you can follow it in the analytics.',
          },
        ],
      },
    },

    'brand-identity': {
      meta: {
        title: 'Brand Identity and Logo Design, Drawn for Your Trade',
        description:
          'Logo and brand identity for service and creative businesses: colour, type and the rules that hold them together, from the shopfront to the website to Instagram.',
      },
      kicker: 'Service',
      title: 'Brand identity',
      lede: 'A logo is the smallest part of it. The identity is what makes a customer recognise you twice.',
      body: [
        'Most businesses come here with a logo someone made quickly, a colour that only exists in one file, and no idea which font to use when they print a menu. It works until you need a website, a price list and an Instagram grid at the same time, and nothing sits together.',
        'An identity fixes that by deciding a small number of things and then holding them: one or two typefaces, a palette that works on a screen and on paper, a mark that reads at the size of a phone icon, and simple rules for what goes where.',
        'The work is drawn around what you actually sell. A hand embroidery artist and a hair salon need different things from a logo, and neither of them needs a symbol that could belong to a tech company.',
      ],
      included: {
        title: 'What you get',
        items: [
          {
            title: 'The mark',
            text: 'A logo drawn for your trade, delivered in every format you will be asked for, in colour and in black.',
          },
          {
            title: 'Colour and type',
            text: 'A palette with exact values and a typeface pairing licensed for print, web and social.',
          },
          {
            title: 'How to use it',
            text: 'Plain rules for spacing, sizes and what not to do, so a printer or a photographer can follow them without calling you.',
          },
          {
            title: 'Applied to something real',
            text: 'The identity shown working on the things you use: the site, a card, a label, a feed.',
          },
        ],
      },
      process: {
        title: 'How it runs',
        steps: [
          {
            title: 'Questions',
            text: 'Who buys from you, what they compare you to, and what you want them to feel when they see your name.',
          },
          {
            title: 'Direction',
            text: 'Two routes, shown on real applications rather than on a blank canvas.',
          },
          {
            title: 'Drawing',
            text: 'One route taken to finish: the mark, the palette, the type and the rules.',
          },
          {
            title: 'Delivery',
            text: 'Every file you need, organised, plus a short guide anyone you hire can follow.',
          },
        ],
      },
      faq: {
        title: 'Questions',
        items: [
          {
            slug: 'is-a-logo-quoted-on-its-own',
            q: 'Is the logo quoted on its own?',
            a: 'It can be, but most identity work here is quoted together with the website. Doing both at once costs less than buying them separately and stops the two contradicting each other.',
          },
          {
            slug: 'can-you-keep-my-existing-logo',
            q: 'I already have a logo. Can you keep it?',
            a: 'Yes. That happens often. The mark stays and everything around it gets built so it finally has somewhere to live. Blend Hair Boutique in the work section is exactly that.',
          },
          {
            slug: 'how-long-does-a-logo-take',
            q: 'How long does it take?',
            a: 'Two to four weeks on its own, or inside the website timeline if you are doing both.',
          },
          {
            slug: 'do-i-own-the-logo',
            q: 'Do I own the logo?',
            a: 'Yes, completely, including the source files. There is no licence to renew and nothing to pay again.',
          },
        ],
      },
    },

    'marketing-seo': {
      meta: {
        title: 'Marketing and Local SEO | One-off Setup or Monthly Work',
        description:
          'Local SEO, Google Business Profiles, social media and content: a one-off audit and setup, with optional monthly work. In English, Portuguese or Spanish.',
      },
      kicker: 'Service',
      title: 'Marketing and SEO',
      lede: 'A site nobody finds is a business card. This is the part that helps people find it.',
      body: [
        'Being found is not one thing any more. Someone might type your service and a city into Google, ask an AI assistant for a recommendation, or scroll past you on Instagram. The same material helps with all three: clear pages that answer real questions, a listing that is complete and active, and posts that look like the business they belong to.',
        'The work comes in two parts. First, a one-off audit and setup: where you appear today, what is missing, and fixing the base, starting with the searches your customers make in the language they make them in. Then, only if you want it, monthly work to keep publishing and keep the listing current. For a business that sells to its own city, the Google Business Profile is often the best place to start.',
        'None of this guarantees a ranking, a place in an AI answer or a date for results. Search engines and assistants decide what they show, and competition where you work matters. What the studio controls is how clear, complete and current your information is when they look.',
      ],
      included: {
        title: 'What this covers',
        items: [
          {
            title: 'One-off: the audit',
            text: 'A written review of where you show up today in search, on maps and on social, what is missing or wrong, and what to fix first.',
          },
          {
            title: 'One-off: the setup',
            text: 'Service pages and structured data on the site; the Google Business Profile created or cleaned up, with categories, service areas, hours and photography; social profiles brought in line with your identity.',
          },
          {
            title: 'Monthly, if you want it: publishing',
            text: 'Social posts (direction, shooting, captions and scheduling), Google Business Profile posts, and new pages that answer what customers ask before they buy. What goes into each month is agreed with you in writing.',
          },
          {
            title: 'Monthly, if you want it: upkeep',
            text: 'Keeping hours, services and photos current, and replying to reviews where you have asked the studio to.',
          },
          {
            title: 'Your approval first',
            text: 'Posts, pages and profile changes are sent to you before they go live. Nothing is published in your name without your approval.',
          },
          {
            title: 'Reporting in plain words',
            text: 'For monthly work: what people searched, what they clicked and what they did next. No dashboard you have to interpret.',
          },
        ],
      },
      process: {
        title: 'How it runs',
        steps: [
          {
            title: 'Audit (one-off)',
            text: 'Where you currently appear, what you are missing, and what your competitors are getting that you are not.',
          },
          {
            title: 'Fix the base (one-off)',
            text: 'The site, the listing and the structured data, in that order. There is no point promoting a page that cannot be read. You can stop here.',
          },
          {
            title: 'Approve and publish (monthly, optional)',
            text: 'Service pages, answers and posts are drafted, sent to you for approval, then published on a schedule you can see.',
          },
          {
            title: 'Review (monthly, optional)',
            text: 'A plain-language report, with the next month decided from what happened in the last one.',
          },
        ],
      },
      faq: {
        title: 'Questions',
        items: [
          {
            slug: 'how-long-until-i-see-seo-results',
            q: 'How long until I see results?',
            a: 'There is no fixed timeline, and nobody can honestly promise one. Some businesses start showing up for new searches within weeks of the setup; others take months. It depends on competition where you work, your reviews and how much search engines already know about you. If you keep monthly work, the reports show what is changing.',
          },
          {
            slug: 'can-you-get-me-into-chatgpt-and-ai-answers',
            q: 'Can you get me into ChatGPT and other AI answers?',
            a: 'Nobody can guarantee that, and anyone who says otherwise is selling something. AI assistants decide for themselves what to mention. What the studio can do is make your information easy to understand: pages that state plainly what you do, who you do it for and where, marked up so a machine can read them. That improves the chance of being described correctly; it does not promise a mention.',
          },
          {
            slug: 'do-i-have-to-sign-up-for-months',
            q: 'Do I have to sign up for months?',
            a: 'No. The audit and setup are a one-off job with their own quote. Monthly work is optional, its scope is agreed in writing, and you can stop whenever you want.',
          },
          {
            slug: 'which-language-should-i-publish-in',
            q: 'Which language should I publish in?',
            a: 'Whichever your customers search in, which is often more than one. In South Florida that usually means English, Portuguese and Spanish, and each one is its own opportunity to be found.',
          },
        ],
      },
    },
  },

  about: {
    meta: {
      title: 'The Studio | Who You Are Hiring',
      description:
        'The Diniz Studio is an independent web design and branding studio working in English, Portuguese and Spanish, for businesses in the United States and Brazil.',
    },
    kicker: 'Studio',
    title: 'You are hiring a person, not a department',
    lede: 'One designer and developer, a small number of projects at a time, and no account manager between you and the work.',
    body: [
      'The Diniz Studio is run by Felipe Diniz. The same person answers your first message, designs the site, writes the code and picks up the phone six months later when you want something changed.',
      'That is the reason for taking few projects at once. You are not waiting behind a queue, and nothing gets handed to a junior on a Friday afternoon.',
      'The studio works in English, Portuguese and Spanish, which is why so much of the work is for businesses that live between two countries: a Brazilian salon in Florida, an artist selling to Rio and to Weston, a chef whose clients speak three languages between them.',
      'The work is honest about what it can do. If a new site is not what your business needs, you will hear that in the first conversation, and it costs you nothing.',
    ],
    facts: [
      { label: 'Founded by', value: 'Felipe Diniz' },
      { label: 'Working in', value: 'English, Portuguese, Spanish' },
      { label: 'Clients in', value: 'United States and Brazil' },
      { label: 'Projects at a time', value: 'One or two' },
      { label: 'Built with', value: 'Custom code, no page builders' },
    ],
  },

  faq: {
    meta: {
      title: 'FAQ | Straight Answers Before You Hire',
      description:
        'Pricing, timeline, languages and what is included, answered plainly before you reach out. One page per question.',
    },
    kicker: 'FAQ',
    title: 'Straight answers',
    lede: 'The questions people ask before they hire, answered in full — one page per question.',
    backLink: 'All questions',
    moreQuestions: 'More questions',
  },

  contact: {
    meta: {
      title: 'Contact | Start a Project',
      description:
        'Tell the studio what you need: a website, a logo and identity, or the marketing around them. Replies within a day, in English, Portuguese or Spanish.',
    },
    kicker: 'Contact',
    title: 'Start a project',
    lede: 'Every project starts with a conversation. You get a straight answer on scope and timeline, a fixed quote in writing, and a reply within one business day — from the person who actually does the work.',
    form: {
      name: 'Your name',
      email: 'Email',
      project: 'What do you need?',
      projectOptions: [
        'A new website',
        'A redesign of my site',
        'Logo and brand identity',
        'Marketing and SEO',
        'Something else',
      ],
      message: 'Tell me about it',
      submit: 'Send',
      note: 'Goes straight to my inbox. Replies within one business day.',
      sending: 'Sending…',
      success: 'Thanks, your message is in. You will hear back within one business day.',
      failure: 'That did not go through. Email me directly at',
      errors: {
        name: 'Enter your name.',
        email: 'Enter a valid email address.',
        message: 'Tell me a little about the project.',
      },
    },
    direct: {
      email: 'Email',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      meeting: 'Call',
      meetingText: 'Book 30 minutes',
    },
  },

  ...industriesEn,

  footer: {
    sections: { work: 'Work', services: 'Services', industries: 'Industries', studio: 'Studio' },
    rights: 'All rights reserved.',
  },

  projects: {
    'bordados-com-amor-by-mari': {
      meta: {
        title: 'Bordados com Amor | Website, Logo and Social Media',
        description:
          'A trilingual website, a stitched logo and a managed Instagram for a hand embroidery artist. The account, run by the studio, has grown from zero to 200 followers without ads.',
      },
      sector: 'Hand embroidery',
      highlight: 'Instagram run by the studio: zero to 200 followers, no ads',
      lede: 'A stitched logo, a site in three languages, and an Instagram account grown from zero without a cent of ad spend.',
      description:
        'Hand embroidery, one piece at a time. The site is built around the pace of the work: a process told in five movements, then a catalogued archive where every piece carries the words stitched into it. Published in Portuguese, English and Spanish.',
      alt: 'bordadoscomamorbymari.com homepage, hand embroidery artist website designed by The Diniz Studio',
      location: 'Weston, FL and Rio de Janeiro',
      services: [
        'Logo design',
        'Brand identity',
        'Social media',
        'Art direction',
        'Web design',
        'Development',
      ],
      identity: {
        title: 'A logo made the way the work is made',
        text: 'Every letter is stitched rather than drawn, so the logo shows the craft instead of describing it. It holds at the size of a profile picture and on a label sewn into a piece, which is what a maker actually needs from a mark.',
        type: [
          { name: 'Cormorant Garamond', role: 'Display' },
          { name: 'Instrument Sans', role: 'Interface' },
        ],
      },
      figures: [
        {
          value: '200',
          label: 'Instagram followers',
          note: 'On the account the studio has run since it started from zero, with no paid promotion. A follower count, not sales.',
          kind: 'measured',
        },
        {
          value: '3',
          label: 'Languages',
          note: 'Portuguese, English and Spanish.',
          kind: 'delivered',
        },
        {
          value: '1',
          label: 'Studio, end to end',
          note: 'Logo, feed, captions and site.',
          kind: 'delivered',
        },
      ],
      chapters: [
        {
          kicker: 'Social',
          title: 'Grown, not bought',
          text: 'The studio runs the account end to end: direction, shooting, writing and scheduling. It has grown from zero to 200 followers without a single paid post, and every piece of it matches the site.',
        },
        {
          kicker: 'Photography and film',
          title: 'Every piece carries a word',
          text: 'A phrase read at midnight, stitched by hand, then photographed where it belongs: in the grass, against the bark, in the last light of the afternoon. One session feeds the grid, the stories and the site.',
          captions: [
            '“Nada é em vão. Se não é benção, é lição.”',
            'A framed piece, waiting in the grass',
            '“Amor”, on a leaf picked up off the ground',
            '“Gratidão”, stitched into a preserved leaf',
            'The same leaf, moved into the light',
          ],
          videoCaption: 'Reel produced for her account',
        },
      ],
      screens: ['Home', 'Folhas Bordadas', 'Process', 'Archive'],
      quote: {
        text: 'I wanted something clean but still handmade and personal, and he somehow got exactly what I meant. Even the little details feel like they belong to the brand. It finally feels like my website.',
        name: 'Mariana Peres',
        role: 'Bordados com Amor by Mari',
      },
    },

    'blend-hair-boutique': {
      meta: {
        title: 'Blend Hair Boutique | Salon Website and Local SEO',
        description:
          'A trilingual salon website in Plantation, Florida, with online booking, eight service pages, and structured data that shows search engines the salon’s existing 4.9-star rating.',
      },
      sector: 'Hair salon',
      highlight: 'Eight service pages, booking from every one',
      lede: 'A trilingual site for a Brazilian-owned salon in Florida, where every page ends in a booking made without picking up the phone.',
      description:
        'A Brazilian-run salon in South Florida whose team has mostly been there since it opened. Service pages that answer the question before it is asked, stylist profiles, and booking reachable from anywhere: a persistent call, book and WhatsApp bar on mobile. Published in three languages.',
      alt: 'blendhairboutique.com homepage, luxury hair salon website designed by The Diniz Studio',
      location: 'Plantation, FL',
      services: [
        'Art direction',
        'Web design',
        'Development',
        'Local SEO',
        'Booking integration',
        'Copywriting',
      ],
      identity: {
        title: 'Built around a mark they already owned',
        text: 'The script logo was theirs and stayed. Everything around it was drawn so it finally had somewhere to sit: quiet backgrounds, one metal accent, and type that lets a price list and a service page look like the same business.',
        type: [
          { name: 'Cormorant Garamond', role: 'Display' },
          { name: 'Inter', role: 'Interface' },
        ],
      },
      figures: [
        {
          value: '4.9',
          label: 'Google rating, 1,230+ reviews',
          note: 'Earned by the salon, not the studio. The site displays the rating and marks it up for search.',
          kind: 'client',
        },
        {
          value: '8',
          label: 'Service pages',
          note: 'One per treatment, each answering its own search.',
          kind: 'delivered',
        },
        {
          value: '3',
          label: 'Languages',
          note: 'English, Portuguese and Spanish.',
          kind: 'delivered',
        },
      ],
      chapters: [
        {
          kicker: 'Film',
          title: 'The room, before the copy',
          text: 'A loop of the floor on a working afternoon opens the home page: mirrors, chairs, the team mid-shift. It says what the salon feels like in three seconds, then gets out of the way so the booking can happen.',
          videoCaption: 'The film that opens the home page',
        },
        {
          kicker: 'Booking',
          title: 'Every page ends in a booking',
          text: 'From colour and balayage to bridal, each service page explains one treatment and hands straight off to the booking system. WhatsApp and the phone stay one tap away in a bar that follows you on mobile.',
        },
        {
          kicker: 'Local search',
          title: 'Legible to a search engine',
          text: 'Blend had already earned the reviews before the studio arrived. The site made them legible to search engines: address, hours, services and rating marked up for Google, a page for each treatment to answer what people type, and a reviews page that shows the rating instead of claiming it.',
        },
      ],
      screens: ['Services', 'Transformations', 'The artists', 'Reviews'],
      quote: {
        text: 'It looks professional, works great on mobile, and clients can actually find everything without having to message us first. We’ve had a lot of positive feedback since launching.',
        name: 'Juliana Chen',
        role: 'Co-owner, Blend Hair Boutique',
      },
    },

    'rafa-diniz': {
      meta: {
        title: 'Rafa Diniz | Photographer and Filmmaker Portfolio Website',
        description:
          'A hand-coded portfolio for a photographer and filmmaker: two short films, an archive filtered by subject, and a signature drawn by hand as the logo.',
      },
      sector: 'Photography and film',
      highlight: 'A hand-drawn signature, two films, one accent',
      lede: 'A signature drawn by hand, one accent colour that never competes with the work, and a site built to put photography and film first.',
      description:
        'A photographer and filmmaker working between Brazil and the United States. The films lead, two he directed, shot and cut himself, followed by a photographic archive you can filter by subject. A fifty-three second showreel sits in the hero and nowhere else.',
      alt: 'byrafadiniz.com homepage, photographer and filmmaker portfolio designed by The Diniz Studio',
      location: 'Gainesville, FL',
      services: [
        'Logo design',
        'Art direction',
        'Colour grading',
        'Web design',
        'Development',
        'Motion',
      ],
      identity: {
        title: 'The signature is the logo',
        text: 'A photographer signs their work, so the mark is his signature, drawn by hand and set over wide-tracked capitals. One accent runs through the interface as the only colour on the site that is not a photograph.',
        type: [
          { name: 'Instrument Serif', role: 'Display' },
          { name: 'Archivo', role: 'Interface' },
        ],
      },
      figures: [
        {
          value: '2',
          label: 'Short films',
          note: 'Directed, shot and cut by Rafael. The site presents them.',
          kind: 'client',
        },
        {
          value: '53s',
          label: 'Showreel',
          note: 'Rafael’s reel, placed in the hero and nowhere else.',
          kind: 'client',
        },
        {
          value: '0',
          label: 'Templates',
          note: 'Static and hand-coded throughout.',
          kind: 'delivered',
        },
      ],
      chapters: [
        {
          kicker: 'Film',
          title: 'The films lead',
          text: 'Two shorts open the site before a single photograph does. One is a documentary about devotion, the other a brand film for a ranch. Stills from both were graded to sit in the same world as the archive underneath them.',
          captions: [
            'Paixão Calejada, a short documentary. Directed, shot and cut by Rafael',
            'B2B Ranch, a brand film',
          ],
        },
        {
          kicker: 'Archive',
          title: 'Filed by subject, not by date',
          text: 'The photographs are filtered by what they are of, so someone who came for architecture never has to scroll past a wedding to find it.',
        },
        {
          kicker: 'Build',
          title: 'Static, and hand-coded',
          text: 'No template and no page builder, which keeps the pages light even with photographs the size of a wall.',
        },
      ],
      screens: ['Films', 'Archive', 'About', 'Services'],
      quote: {
        text: 'I came in with a bunch of references and half-finished ideas. There were things in the final design I never would’ve thought to ask for, but now I can’t imagine the site without them.',
        name: 'Rafael',
        role: 'Photographer and filmmaker',
        disclosure: 'Rafael is Felipe Diniz’s brother.',
      },
    },

    'renata-estrella-patisserie': {
      meta: {
        title: 'Renata Estrella Pâtisserie | Brand, Website and Google Profile',
        description:
          'Brand identity, website, recipe e-book and a Google Business Profile for a luxury pâtisserie in Rio, all made from nothing by the studio.',
      },
      sector: 'Pâtisserie',
      highlight: 'Logo, site, e-book and Google profile, made from nothing',
      lede: 'Everything drawn from nothing: the logo, the site, a recipe e-book, and the Google Business Profile the studio set up and still manages.',
      description:
        'Trained at Ferrandi Paris, Ritz Escoffier and Le Cordon Bleu, Renata builds commissioned pastry for events. The site had to read the way the work does: exact, unhurried, French in its restraint. A video hero, an editorial archive of creations, and an enquiry path that behaves like a consultation rather than a checkout.',
      alt: 'renataestrellapatisserie.com homepage, luxury pâtisserie website designed by The Diniz Studio',
      location: 'Rio de Janeiro, BR',
      services: [
        'Logo design',
        'Brand identity',
        'Google Business Profile',
        'E-book design',
        'Web design',
        'Development',
      ],
      identity: {
        title: 'Drawn from nothing',
        text: 'There was no logo, no typeface and no rules, so all of it was made: a monogram, a dark ground that lets gold read as metal rather than yellow, and a type pairing that carries from the website into the e-book and the Google listing without being redrawn each time.',
        wordmark: { name: 'Renata Estrella', sub: 'Pâtisserie' },
        type: [
          { name: 'Cormorant Garamond', role: 'Display' },
          { name: 'Manrope', role: 'Interface' },
        ],
      },
      figures: [
        {
          value: '27',
          label: 'Five-star Google reviews',
          note: 'Left by Renata’s clients on the profile the studio set up and manages. The credit is hers, not the studio’s.',
          kind: 'measured',
        },
        {
          value: '9',
          label: 'Recipes',
          note: 'In an e-book designed by the studio and sold from the site.',
          kind: 'delivered',
        },
        {
          value: '3',
          label: 'Schools',
          note: 'Ferrandi, Ritz Escoffier, Le Cordon Bleu.',
          kind: 'client',
        },
      ],
      chapters: [
        {
          kicker: 'E-book',
          title: 'Sopas e Cremes',
          text: 'Nine recipes, designed as a reason to leave an email address. Photographed, laid out and typeset in the same system as the site, then sold and delivered from it.',
          captions: [
            'The cover, in the brand’s gold and ivory',
            'Recipe 02, Vichyssoise',
            'Recipe 05, Sopa de Cebola',
            'The bonus recipe, chocolate quente',
          ],
        },
        {
          kicker: 'Search and social',
          title: 'Being found, not admired',
          text: 'For a business that sells to its own city, a listing matters more than applause. The studio created the Google Business Profile and still runs it: categories, service areas, photography, posts and replies, alongside the structured data on the site.',
        },
      ],
      screens: ['The promise', 'Origins', 'Creations', 'Events'],
      quote: {
        text: 'I didn’t want a site packed with text competing with the dishes. Felipe understood that immediately. He gave the photography room to breathe and built everything else around it.',
        name: 'Renata Estrella',
        role: 'Renata Estrella Pâtisserie',
      },
    },
  },
}

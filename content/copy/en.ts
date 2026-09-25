import type { Dictionary } from './types'

export const en: Dictionary = {
  meta: {
    siteName: 'The Diniz Studio',
    tagline: 'Web design, brand identity and marketing, in three languages.',
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
    title: 'Need a new website?',
    text: 'Tell me what you sell and who you sell it to. You get a straight answer on scope and timeline, and a fixed quote in writing. Serious enquiries only.',
  },

  home: {
    meta: {
      title: 'The Diniz Studio | Web Design, Branding and Marketing',
      description:
        'Web design studio building custom websites, brand identities and the marketing around them. Work in English, Portuguese and Spanish for small businesses in the US and Brazil.',
    },
    h1: 'The Diniz Studio. Web design, brand identity and marketing.',
    intro: {
      kicker: 'What this is',
      title: 'One studio for the website, the brand and the marketing',
      body: [
        'Most small businesses end up with three suppliers who never speak: one builds the site, one draws the logo, one posts to Instagram. Nothing matches and no one is accountable for whether the phone rings.',
        'This studio does all three. The logo, the website and the posts come out of the same set of decisions, so a customer who finds you on Google, on Instagram or through a friend meets the same business every time.',
        'Every site is written and built from scratch, in English, Portuguese and Spanish where the audience needs it, and set up so search engines and AI assistants can read it properly.',
      ],
    },
    services: {
      kicker: 'Services',
      title: 'Three things, done properly',
      text: 'A website that sells, an identity that holds it together, and the search and social work that brings people to it.',
      link: 'See all services',
    },
    work: {
      kicker: 'Selected work',
      title: 'Four businesses, four problems',
      text: 'A hand embroidery artist, a salon, a photographer and a pastry chef. Each one has the full account of what was made and what it changed.',
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
          a: 'Every project is quoted on its own, because a one-page site and a trilingual site with a logo and photography are not the same job. Tell me what you need and you get a fixed price in writing before anything starts. Serious enquiries only, please.',
        },
        {
          slug: 'how-long-does-it-take',
          q: 'How long does it take?',
          a: 'Four to eight weeks for most projects, from the first conversation to launch. The slow part is never the code, it is decisions and content, so the process is built to get those out of you early.',
        },
        {
          slug: 'do-you-build-in-more-than-one-language',
          q: 'Do you build in more than one language?',
          a: 'Yes. English, Portuguese and Spanish, each at its own address and declared to Google, so a search in any of the three lands on a page written in that language rather than a machine translation.',
        },
        {
          slug: 'do-you-only-do-websites',
          q: 'Do you only do websites?',
          a: 'No. Logo and brand identity, photography direction, social media, Google Business Profiles and local SEO. Many clients start with a site and keep the studio on for the marketing.',
        },
        {
          slug: 'what-do-you-build-with',
          q: 'What do you build with?',
          a: 'Custom code rather than a page builder. That is why these sites load quickly, rank well and can be changed without a subscription to anything.',
        },
      ],
    },
  },

  work: {
    meta: {
      title: 'Work | Websites, Branding and Marketing Case Studies',
      description:
        'Case studies from The Diniz Studio: custom websites, logos and brand identities, social media and local SEO for a hand embroidery artist, a hair salon, a photographer and a pastry chef.',
    },
    kicker: 'Work',
    title: 'Every project, in full',
    lede: 'What the business needed, what was made, and what it changed. Each project links through to the live site.',
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
  },

  player: {
    soundOn: 'Sound on',
    soundOff: 'Sound off',
  },

  services: {
    meta: {
      title: 'Services | Web Design, Brand Identity and Marketing',
      description:
        'Custom website design and development, logo and brand identity, and the marketing that follows: social media, Google Business Profiles and local SEO. Available in English, Portuguese and Spanish.',
    },
    kicker: 'Services',
    title: 'What the studio does',
    lede: 'Three services that work as one. Take the whole thing, or the part you are missing.',
    cards: {
      'web-design': {
        title: 'Web design and development',
        text: 'Custom sites written from scratch: fast, multilingual, and built to turn a visitor into an enquiry.',
        proof: [
          { value: '3', label: 'Languages per site' },
          { value: '~1s', label: 'Load on a phone' },
          { value: '0', label: 'Templates used' },
        ],
      },
      'brand-identity': {
        title: 'Brand identity',
        text: 'Logo, colour, type and the rules that hold them together, drawn for how your business actually trades.',
        proof: [
          { value: '0', label: 'Licence fees, ever' },
          { value: 'Yours', label: 'Source files included' },
        ],
      },
      'marketing-seo': {
        title: 'Marketing and SEO',
        text: 'Being found and being followed: local search, Google Business Profiles, social media and the content behind both.',
        proof: [
          { value: '+200%', label: 'Client Instagram growth' },
          { value: '1.5k+', label: 'Studio followers' },
          { value: '27', label: 'Five-star reviews earned' },
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
        title: 'Web Design and Development | Custom Websites for Small Businesses',
        description:
          'Custom website design and development for small businesses. Hand-coded, fast, multilingual, and built so customers can find you and book you. English, Portuguese and Spanish.',
      },
      kicker: 'Service',
      title: 'Web design and development',
      lede: 'A website built for your business, not adapted from a template someone else is already using.',
      body: [
        'If you are searching for a new website, you are usually solving one of three problems: the current site looks nothing like the quality of your work, it is slow or broken on a phone, or people visit and never get in touch. All three are fixable, and all three come down to the same thing, which is deciding what the site is for before anyone opens a design tool.',
        'Every page here is written and coded by hand. No page builder, no theme, no monthly licence for a plugin that eventually breaks. That is why these sites load in about a second on a phone, hold up in Google, and can be read cleanly by AI assistants when someone asks one for a recommendation.',
        'Where it makes sense, the site is published in English, Portuguese and Spanish. Each language gets its own address and its own text, written rather than translated by a machine, which is how you show up for a search made in any of the three.',
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
            text: 'Layout, type, motion and code. Everything responsive, tested on real phones, and yours to keep.',
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
            text: 'Structured data, sitemaps, clean headings, fast images. The things that decide whether you are found at all.',
          },
          {
            title: 'Handover and support',
            text: 'You get the code, the domain setup and a walkthrough. Changes afterwards are priced per job, never a lock-in.',
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
            a: 'As one fixed price for the whole job, written down before it starts. It moves with the number of pages, the number of languages, and whether photography and a logo are part of it. The figure you are quoted is the figure you pay, and there is no hourly billing afterwards.',
          },
          {
            slug: 'can-you-redesign-my-existing-website',
            q: 'Can you redesign the site I already have?',
            a: 'Yes, and often that is the cheaper answer. If the structure is sound and only the design and speed are the problem, the rebuild is faster and costs less than starting over.',
          },
          {
            slug: 'do-i-need-wordpress-wix-or-squarespace',
            q: 'Do I need Wordpress, Wix or Squarespace?',
            a: 'You do not. Those make sense when nobody is going to maintain the site. A hand-built site gives you a faster, safer result without a monthly fee, and you are not locked to a platform that changes its pricing.',
          },
          {
            slug: 'will-i-be-able-to-update-the-site-myself',
            q: 'Will I be able to update it myself?',
            a: 'If you want to edit text and images yourself, the site is built with a simple editor behind it. Many clients prefer to send changes instead, which is priced per job.',
          },
          {
            slug: 'will-my-website-show-up-on-google',
            q: 'How do I know it will show up on Google?',
            a: 'Structure, speed and content decide that, and all three are part of the build: one page per thing you sell, clean headings, structured data, and a Google Business Profile if you serve a city. Ranking is earned over months, and you will be able to see it happen in the analytics.',
          },
        ],
      },
    },

    'brand-identity': {
      meta: {
        title: 'Brand Identity and Logo Design for Small Businesses',
        description:
          'Logo design and brand identity: colour, typography and the rules that hold them together, drawn for small businesses and built to carry from a shopfront to a website to Instagram.',
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
        title: 'Marketing and Local SEO for Small Businesses',
        description:
          'Local SEO, Google Business Profile setup and management, social media and content. Get found when people search for what you sell, in English, Portuguese or Spanish.',
      },
      kicker: 'Service',
      title: 'Marketing and SEO',
      lede: 'A site nobody finds is a business card. This is the part that brings people to it.',
      body: [
        'Being found is not one thing any more. Someone might type your service and a city into Google, ask an AI assistant for a recommendation, or scroll past you on Instagram. All three are won with the same material: clear pages that answer real questions, a listing that is complete and active, and posts that look like the business they belong to.',
        'The work starts with the searches your customers actually make, in the language they make them in. Those become pages, and the pages become the thing Google shows and the thing an assistant quotes when it answers.',
        'For businesses that sell to their own city, the Google Business Profile is usually worth more than anything else on this list. It gets created properly, filled with photography, and kept alive with posts and replies.',
      ],
      included: {
        title: 'What this covers',
        items: [
          {
            title: 'Local SEO',
            text: 'One page per thing you sell, structured data, and the local signals that decide whether you appear in the map results.',
          },
          {
            title: 'Google Business Profile',
            text: 'Created or cleaned up, categories and service areas set correctly, photography loaded, posts and review replies handled.',
          },
          {
            title: 'Social media',
            text: 'Direction, shooting, captions and scheduling, in the same colours and type as everything else you own.',
          },
          {
            title: 'Content that answers',
            text: 'The questions customers ask before they buy, written out properly, which is what search engines and AI assistants reward.',
          },
          {
            title: 'Reporting in plain words',
            text: 'What people searched, what they clicked and what they did next. No dashboard you have to interpret.',
          },
        ],
      },
      process: {
        title: 'How it runs',
        steps: [
          {
            title: 'Audit',
            text: 'Where you currently appear, what you are missing, and what your competitors are getting that you are not.',
          },
          {
            title: 'Fix the base',
            text: 'The site, the listing and the structured data, in that order. There is no point promoting a page that cannot be read.',
          },
          {
            title: 'Publish',
            text: 'Service pages, answers and posts, on a schedule you can see.',
          },
          {
            title: 'Review',
            text: 'Monthly, in plain language, with the next month decided from what happened in the last one.',
          },
        ],
      },
      faq: {
        title: 'Questions',
        items: [
          {
            slug: 'how-long-until-i-see-seo-results',
            q: 'How long until I see results?',
            a: 'A Google Business Profile can change your phone volume in weeks. Ranking a service page usually takes two to six months, depending on how much competition there is in your city.',
          },
          {
            slug: 'can-you-get-me-into-chatgpt-and-ai-answers',
            q: 'Can you get me into ChatGPT and other AI answers?',
            a: 'Nobody can guarantee that, and anyone who says otherwise is selling something. What works is being the clearest source on the question: pages that state plainly what you do, who you do it for and where, marked up so a machine can read it. That is how this site is built, and it is how yours gets built.',
          },
          {
            slug: 'do-i-have-to-sign-up-for-months',
            q: 'Do I have to sign up for months?',
            a: 'No. The audit and the fixes are a one-off job. Ongoing work is monthly and you can stop whenever you want.',
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
        'The Diniz Studio is a small web design and branding studio working in English, Portuguese and Spanish, for small businesses in the United States and Brazil.',
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
        'Tell the studio what you need: a new website, a logo and brand identity, or the marketing around them. Replies usually within a day, in English, Portuguese or Spanish.',
    },
    kicker: 'Contact',
    title: 'Start a project',
    lede: 'This starts with a conversation, not a form. You get a straight answer on scope and timeline, a fixed quote in writing, and a reply within one business day — from the person who actually does the work.',
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
      note: 'This opens your email app with the message ready to send.',
      errors: {
        name: 'Enter your name.',
        email: 'Enter a valid email address.',
        message: 'Tell me a little about the project.',
      },
    },
    direct: { email: 'Email', whatsapp: 'WhatsApp', instagram: 'Instagram' },
  },

  footer: {
    sections: { work: 'Work', services: 'Services', studio: 'Studio' },
    rights: 'All rights reserved.',
  },

  projects: {
    'bordados-com-amor-by-mari': {
      meta: {
        title: 'Bordados com Amor | Website, Logo and Social Media',
        description:
          'A trilingual website, a stitched logo and a managed Instagram for a hand embroidery artist. The account has tripled since launch with no paid promotion.',
      },
      sector: 'Hand embroidery',
      highlight: '+200% Instagram growth, fully organic',
      lede: 'A stitched logo, a site in three languages, and an Instagram account that tripled without a cent of ad spend.',
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
          value: '+200%',
          label: 'Instagram growth',
          note: 'Since launch, with no paid promotion.',
        },
        { value: '3', label: 'Languages', note: 'Portuguese, English and Spanish.' },
        { value: '1', label: 'Studio, end to end', note: 'Logo, feed, captions and site.' },
      ],
      chapters: [
        {
          kicker: 'Social',
          title: 'Grown, not bought',
          text: 'The studio runs the account end to end: direction, shooting, writing and scheduling. It has tripled since launch without a single paid post, and every piece of it matches the site.',
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
        name: 'Mariana',
        role: 'Bordados com Amor by Mari',
      },
    },

    'blend-hair-boutique': {
      meta: {
        title: 'Blend Hair Boutique | Salon Website and Local SEO',
        description:
          'A trilingual salon website in Plantation, Florida, with online booking, eight service pages and the local SEO behind a 4.9 star rating from more than 1,230 reviews.',
      },
      sector: 'Hair salon',
      highlight: '4.9 stars across 1,230+ Google reviews',
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
          label: '1,230+ Google reviews',
          note: 'Shown on the page and declared to search.',
        },
        {
          value: '8',
          label: 'Service pages',
          note: 'One per treatment, each its own search answer.',
        },
        { value: '3', label: 'Languages', note: 'English, Portuguese and Spanish.' },
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
          text: 'Blend had already earned the reviews. The site made them countable: address, hours, services and rating marked up for Google, a page for each treatment to answer what people type, and a reviews page that shows the rating instead of claiming it.',
        },
      ],
      screens: ['Services', 'Transformations', 'The artists', 'Reviews'],
      quote: {
        text: 'It looks professional, works great on mobile, and clients can actually find everything without having to message us first. We’ve had a lot of positive feedback since launching.',
        name: 'Juliana',
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
        { value: '2', label: 'Short films', note: 'Directed, shot and cut by Rafael.' },
        { value: '53s', label: 'Showreel', note: 'In the hero, and nowhere else.' },
        { value: '0', label: 'Templates', note: 'Static and hand-coded throughout.' },
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
          text: 'No template and no page builder, which is why a photograph the size of a wall still arrives in about a second.',
        },
      ],
      screens: ['Films', 'Archive', 'About', 'Services'],
      quote: {
        text: 'I came in with a bunch of references and half-finished ideas. There were things in the final design I never would’ve thought to ask for, but now I can’t imagine the site without them.',
        name: 'Rafael',
        role: 'Photographer and filmmaker',
      },
    },

    'renata-estrella-patisserie': {
      meta: {
        title: 'Renata Estrella Pâtisserie | Brand, Website and Google Profile',
        description:
          'Brand identity, website, e-book and Google Business Profile for a luxury pâtisserie in Rio de Janeiro. The profile the studio built now carries 27 five-star reviews.',
      },
      sector: 'Pâtisserie',
      highlight: '27 five-star reviews on a profile built from zero',
      lede: 'Everything drawn from nothing: the logo, the site, a recipe e-book, and the Google profile that now carries 27 five-star reviews.',
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
          label: 'Five-star reviews',
          note: 'On the Google profile the studio set up and runs.',
        },
        { value: '9', label: 'Recipes', note: 'In an e-book sold from the site.' },
        { value: '3', label: 'Schools', note: 'Ferrandi, Ritz Escoffier, Le Cordon Bleu.' },
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
        name: 'Renata',
        role: 'Renata Estrella Pâtisserie',
      },
    },
  },
}

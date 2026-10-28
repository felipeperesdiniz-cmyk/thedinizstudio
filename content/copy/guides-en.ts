import type { Dictionary } from './types'

export const guidesEn: Pick<Dictionary, 'guides' | 'guidePages'> = {
  guides: {
    meta: {
      title: 'How It Works | Website Pricing, Costs, Timeline, Ownership',
      description:
        'How a website project is priced, what it costs to run, how you edit it after launch, how long it takes, what you own and how languages work.',
    },
    kicker: 'How it works',
    title: 'What it costs, and what comes after',
    lede: 'Price, running costs, editing, timing, ownership and languages, each answered in full before you write. All of it is also put in writing in the proposal.',
    cards: {
      pricing: {
        title: 'Fixed price',
        text: 'One price for the whole job, in writing before anything starts, and what moves it.',
      },
      'running-costs': {
        title: 'Running costs',
        text: 'Hosting and the domain, paid straight to their providers. No builder subscription, no licence.',
      },
      editing: {
        title: 'Editing after launch',
        text: 'A simple editor written into the proposal, or send changes and have them made, priced per job.',
      },
      timeline: {
        title: '4 to 8 weeks',
        text: 'The five steps from the first conversation to launch, and what makes a project faster.',
      },
      ownership: {
        title: 'Yours at handover',
        text: 'The finished site, its source code and the domain, with a walkthrough. Nothing held back.',
      },
      multilingual: {
        title: 'Three languages',
        text: 'English, Portuguese and Spanish, each written for its readers and published at its own address.',
      },
    },
    readMore: 'Read more',
    others: 'More on how it works',
  },

  guidePages: {
    pricing: {
      meta: {
        title: 'Website Pricing: One Fixed Price, Quoted in Writing',
        description:
          'How a website project is priced: one fixed price in writing before work starts, what moves the figure, what it covers and what sits outside it.',
      },
      kicker: 'Pricing',
      title: 'How website pricing works: one fixed price',
      lede: 'Every project gets one price for the whole job, written down before anything starts. The figure you are quoted is the figure you pay.',
      sections: [
        {
          heading: 'Why there is no price list',
          body: [
            'A one-page site in English and a trilingual site with a new logo and photography are different jobs. A single number on a price list would be wrong for almost everyone who read it.',
            'Instead, each project is quoted on its own after a short exchange about what you sell, who buys it and what the site has to do. Send a few lines and you get a scope and a price back, usually within a day or two.',
          ],
        },
        {
          heading: 'What moves the price',
          body: [
            'Three things change the figure more than anything else: the number of pages, the number of languages, and whether a logo, a brand identity or photography is part of the job.',
            'Features count too. A booking integration, a content editor you can use yourself or an online catalogue each add work, and the proposal says which of them are included.',
          ],
        },
        {
          heading: 'What the fixed price covers',
          body: [
            'Design and build, copywriting in your voice, the technical groundwork search engines need, testing on real phones, the launch, and a walkthrough at handover.',
            'There is no hourly billing afterwards. Anything you ask for that was not in the proposal is quoted separately before work on it starts, so you always decide first.',
          ],
        },
        {
          heading: 'What sits outside it',
          body: [
            'Hosting, the domain and any outside service, such as a booking platform, are paid to their providers and may carry their own fees. The proposal lists every one your site needs, so the full cost is clear before you commit.',
          ],
        },
      ],
      faq: {
        title: 'Questions about pricing',
        items: [
          {
            q: 'Can I get a price before a call?',
            a: 'Yes. Send a few lines on what you need through the contact page and you get a scope and a price back, usually within a day or two.',
          },
          {
            q: 'Is the first conversation free?',
            a: 'Yes. It takes thirty minutes, costs nothing and comes with no pitch deck.',
          },
          {
            q: 'What if I want more than the proposal covers?',
            a: 'The extra work is quoted on its own before it starts. The price for the original scope does not move.',
          },
        ],
      },
    },

    'running-costs': {
      meta: {
        title: 'What a Website Costs to Run After Launch',
        description:
          'The ongoing costs of a website after launch: hosting and a domain paid to their providers, no page-builder subscription and no licence to renew.',
      },
      kicker: 'Running costs',
      title: 'What a website costs to run after launch',
      lede: 'After launch, the regular costs are the ones your site actually uses: hosting and a domain, paid directly to the companies that provide them.',
      sections: [
        {
          heading: 'Hosting and the domain',
          body: [
            'Every website needs somewhere to live and an address. Both are paid straight to their providers rather than through the studio, so you can see exactly what each one costs.',
            'Which hosting suits your site depends on its size and traffic. The proposal names it before you commit.',
          ],
        },
        {
          heading: 'No page-builder subscription',
          body: [
            'Sites are built with modern web frameworks rather than a drag-and-drop page builder. There is no monthly builder plan to keep paying for, and no plugin that has to be renewed to keep the site working.',
            'It also means no platform can raise its prices and hold your website to them.',
          ],
        },
        {
          heading: 'Outside services, only when you need them',
          body: [
            'Some sites rely on another company’s tool: a booking system for a salon, a newsletter service, an online payment provider. Those are billed by their providers, often on their own plans.',
            'The proposal lists every outside service your site needs and who bills it, so the running cost is known before the project starts.',
          ],
        },
        {
          heading: 'Support is optional',
          body: [
            'There is no retainer to sign. Changes after launch are quoted per job, or on terms agreed in writing if you want regular help.',
          ],
        },
      ],
      faq: {
        title: 'Questions about running costs',
        items: [
          {
            q: 'Who do I pay for hosting?',
            a: 'The hosting provider, directly. The proposal names which provider your site needs.',
          },
          {
            q: 'Is there a monthly fee to the studio?',
            a: 'No. Support after launch is optional and priced per job, or on terms agreed in writing if you want regular help.',
          },
          {
            q: 'Do I need to renew a licence?',
            a: 'No. You own the finished site and its source code at handover, so there is nothing to renew with the studio.',
          },
        ],
      },
    },

    editing: {
      meta: {
        title: 'Editing Your Website After Launch: Two Ways',
        description:
          'Two ways to change your site after launch: a simple editor for text, photos and prices written into the proposal, or send changes and have them made per job.',
      },
      kicker: 'Editing after launch',
      title: 'How you edit your website after launch',
      lede: 'A site changes once it is live: new prices, new photos, a new service. There are two ways to handle that, and you choose before the project starts.',
      sections: [
        {
          heading: 'A simple editor',
          body: [
            'If you will change text, images, prices or listings often, a simple content editor can be included. It is written into the proposal, so it is part of the fixed price rather than an extra later.',
            'It is set up around the things you actually change, such as a price list, a menu, a gallery or opening hours.',
          ],
        },
        {
          heading: 'Send the change instead',
          body: [
            'If changes are occasional, you may not need an editor at all. You send what you want changed and it is made for you, priced per job and quoted before it is done.',
            'Many small businesses prefer this: nothing new to learn, and the site keeps looking the way it was designed.',
          ],
        },
        {
          heading: 'Which one to choose',
          body: [
            'A salon that changes prices every season, or a maker who adds new pieces every month, is usually better off with the editor. A photographer who updates the portfolio twice a year usually is not.',
            'You will know which applies to your site before the project starts, and the walkthrough at handover covers whichever you choose.',
          ],
        },
      ],
      faq: {
        title: 'Questions about editing',
        items: [
          {
            q: 'Can I add an editor later?',
            a: 'Yes, quoted like any other change. It is simpler to plan from the start, which is why the question comes up before the proposal.',
          },
          {
            q: 'Who makes changes if I do not have an editor?',
            a: 'The studio does. Each change is priced per job and quoted before it is made.',
          },
          {
            q: 'Do I have to sign a support contract?',
            a: 'No. There is no retainer. Regular help is available on terms agreed in writing if you want it.',
          },
        ],
      },
    },

    timeline: {
      meta: {
        title: 'How Long a Website Takes: 4 to 8 Weeks, Step by Step',
        description:
          'Most website projects take four to eight weeks from the first conversation to launch. The five steps, what happens in each, and what makes it faster.',
      },
      kicker: 'Timeline',
      title: 'How long a website takes: four to eight weeks',
      lede: 'Most projects go from the first conversation to launch in four to eight weeks. The slow part is never the code; it is decisions and content.',
      sections: [
        {
          heading: 'The five steps',
          body: [
            'Conversation: what you sell, who buys it and what gets in the way. Thirty minutes, no charge.',
            'Proposal: scope, fixed price and dates in writing. If the answer is that you do not need a new site, you hear that too.',
            'Design: the home page first, so you see the direction before the whole site is built.',
            'Build: development, content, languages and testing, with a link where you can watch it come together.',
            'Launch: domain, analytics and search setup, then a check a week later to see what visitors actually did.',
          ],
        },
        {
          heading: 'What makes it faster',
          body: [
            'Decisions and content. The process is built to get them early: what each page is for, the photographs you have, the services and prices you want shown.',
            'A project with its words and images ready moves toward the shorter end of the range. One waiting on a new logo or a photoshoot moves toward the longer end.',
          ],
        },
        {
          heading: 'Why few projects at once',
          body: [
            'The studio takes one or two projects at a time. You are not waiting behind other clients, and the person who designs your site is the person who builds it.',
          ],
        },
      ],
      faq: {
        title: 'Questions about timing',
        items: [
          {
            q: 'Can it be done in less than four weeks?',
            a: 'Sometimes, for a small site with its content ready. Say so in your first message and the proposal will show whether the dates work.',
          },
          {
            q: 'When are the dates fixed?',
            a: 'In the proposal, together with the scope and the price, before any work starts.',
          },
          {
            q: 'What happens after launch?',
            a: 'A check a week later to see what people actually did on the site, and optional support after that, priced per job.',
          },
        ],
      },
    },

    ownership: {
      meta: {
        title: 'Who Owns Your Website? You Do, at Handover',
        description:
          'At handover you own the finished site, its source code and the domain, with a walkthrough. Nothing is held back to keep you tied to the studio.',
      },
      kicker: 'Ownership',
      title: 'Who owns the website: you do, at handover',
      lede: 'When the project ends, the finished site, its source code and the domain are yours. Nothing is held back to keep you tied to the studio.',
      sections: [
        {
          heading: 'What you receive',
          body: [
            'The finished site and its source code, the domain connected, and a walkthrough of how it all works.',
            'If a logo or brand identity was part of the project, the source files come with it, and there is no renewal fee for using it.',
          ],
        },
        {
          heading: 'Why it matters',
          body: [
            'Some website platforms and agencies effectively rent you the site: stop paying and it goes, or move and you start again. Owning the source code means another developer can pick it up whenever you choose.',
          ],
        },
        {
          heading: 'What stays with outside providers',
          body: [
            'Hosting, the domain registration and any outside service are paid to their providers. The proposal lists each one, so you know what you hold and who bills it.',
          ],
        },
      ],
      faq: {
        title: 'Questions about ownership',
        items: [
          {
            q: 'Can I take the site to another developer?',
            a: 'Yes. You have the source code, so another developer can pick it up.',
          },
          {
            q: 'Do I own the logo too?',
            a: 'Yes, when it is part of the project, including the source files. There is no licence to renew and nothing to pay again.',
          },
          {
            q: 'Is there anything to renew with the studio?',
            a: 'No. Hosting and the domain are renewed with their providers; nothing is renewed with the studio.',
          },
        ],
      },
    },

    multilingual: {
      meta: {
        title: 'Multilingual Websites in English, Portuguese and Spanish',
        description:
          'Websites in English, Portuguese and Spanish, each language at its own address, written rather than machine-translated, and declared to search engines.',
      },
      kicker: 'Languages',
      title: 'Websites in English, Portuguese and Spanish',
      lede: 'For businesses whose customers speak more than one language, the site can be published in English, Portuguese and Spanish, each version written for its readers.',
      sections: [
        {
          heading: 'Each language at its own address',
          body: [
            'Every language gets its own pages and its own addresses, with the words in the address translated too, so someone searching in Portuguese lands on a page written in Portuguese.',
            'The versions are linked to one another and declared to search engines, so each can be matched to the people searching in that language.',
          ],
        },
        {
          heading: 'Written, not machine-translated',
          body: [
            'Each version is written rather than run through a translator. A client in Florida and a buyer in Brazil do not search with the same words, and the copy follows how each market actually talks.',
          ],
        },
        {
          heading: 'Who it is for',
          body: [
            'Businesses that live between two countries: a Brazilian salon in Florida, an artist selling to Rio and to Weston, a chef whose clients speak three languages between them.',
            'You do not need all three. Publish in the languages your customers use; the number of languages is one of the things that moves the fixed price.',
          ],
        },
      ],
      faq: {
        title: 'Questions about languages',
        items: [
          {
            q: 'Do I need all three languages?',
            a: 'No. One, two or three, depending on who your customers are.',
          },
          {
            q: 'Will each language show up on Google?',
            a: 'Each version is published at its own address and declared to search engines, so each can be found by people searching in that language. Nobody can promise a position.',
          },
          {
            q: 'Who writes the other languages?',
            a: 'The studio writes each version in your voice, rather than using machine translation.',
          },
        ],
      },
    },
  },
}

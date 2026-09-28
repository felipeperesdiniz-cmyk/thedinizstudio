import type { Dictionary } from './types'

export const industriesEn: Pick<Dictionary, 'industries' | 'industryPages'> = {
  industries: {
    meta: {
      title: 'Websites by Industry | Salons, Photographers, Makers, Food',
      description:
        'Custom websites for salons and med spas, photographers and filmmakers, artists and makers, and bakeries and restaurants. In English, Portuguese and Spanish.',
    },
    kicker: 'Industries',
    title: 'Websites by industry',
    lede: 'The same studio and the same standard, applied to what each kind of business actually needs from a website.',
    cards: {
      'salons-med-spas': {
        title: 'Salons and med spas',
        text: 'Booking from every page, a page for each treatment, and your reviews made legible to Google.',
      },
      'photographers-filmmakers': {
        title: 'Photographers and filmmakers',
        text: 'Portfolios where the work leads: films, an archive filtered by subject, and pages light enough for full-size images.',
      },
      'artists-makers': {
        title: 'Artists and makers',
        text: 'Sites that show how the work is made, catalogue every piece, and reach buyers in more than one language.',
      },
      'food-events': {
        title: 'Bakeries, restaurants and caterers',
        text: 'Sites that sell with photography, take event enquiries like a consultation, and back up a Google Business Profile.',
      },
    },
    caseStudy: 'Case study',
    readCase: 'Read the case study',
    others: 'Other industries',
  },

  industryPages: {
    'salons-med-spas': {
      meta: {
        title: 'Websites for Salons and Med Spas in South Florida',
        description:
          'Custom websites for hair salons, med spas and beauty studios in Miami, Fort Lauderdale and Palm Beach. Online booking and a page for every treatment.',
      },
      kicker: 'Websites for salons and med spas',
      title: 'Websites for salons and med spas in South Florida',
      lede: 'Most clients choose a salon on their phone, between two appointments. The site has to answer their question and take the booking before they move on.',
      audience: 'Hair salons, med spas and beauty studios in South Florida',
      body: [
        'A salon or med spa usually has the reviews already. What loses clients is the step after: a booking link buried in a menu, a price list that only exists as a PDF, or a site in English when half the chairs speak Portuguese or Spanish.',
        'The studio builds sites where every treatment has its own page, every page ends in a booking, and the phone and WhatsApp stay one tap away on mobile. The rating you have earned is shown and marked up for search engines rather than claimed.',
        'Sites can be published in English, Portuguese and Spanish, each language at its own address, which matters across Miami-Dade, Broward and Palm Beach.',
      ],
      needs: {
        title: 'What a salon or med spa site needs',
        items: [
          {
            title: 'Booking from every page',
            text: 'Linked to the booking system you already use, and reachable from a bar that follows the visitor on a phone.',
          },
          {
            title: 'A page for each treatment',
            text: 'Balayage, lash lifts, injectables or facials, each explained on its own page so each one can answer its own search.',
          },
          {
            title: 'Your team, by name',
            text: 'Stylist and practitioner profiles, because many clients book a person rather than a salon.',
          },
          {
            title: 'Reviews search engines can read',
            text: 'Your rating, address, hours and services marked up as structured data, and a Google Business Profile that matches the site.',
          },
          {
            title: 'Before and after, done properly',
            text: 'Galleries of your real work, compressed so they load quickly on a phone.',
          },
          {
            title: 'Three languages',
            text: 'English, Portuguese and Spanish, written rather than machine translated.',
          },
        ],
      },
      proof: {
        title: 'Blend Hair Boutique, Plantation',
        text: 'A Brazilian-run salon with a 4.9 Google rating from more than 1,230 reviews, earned before the studio arrived. The new site has eight service pages, booking from every one, a call, booking and WhatsApp bar on mobile, and the whole site in English, Portuguese and Spanish.',
      },
      faq: {
        title: 'Questions from salon and spa owners',
        items: [
          {
            q: 'Can the site connect to the booking system we already use?',
            a: 'Usually, yes. Most booking platforms, such as Vagaro, GlossGenius, Fresha, Boulevard and Square, offer a booking link or widget, and the site sends clients to it from every page. If you do not have one yet, the proposal recommends one and lists its fees.',
          },
          {
            q: 'Can the site show our prices?',
            a: 'Yes, as a price list per treatment or as starting prices. Whether to publish prices is your decision, and the site is built to work either way.',
          },
          {
            q: 'Do you work with med spas as well as salons?',
            a: 'Yes. For medical aesthetics, treatment pages are written carefully, and you or your medical director approve every claim before it is published.',
          },
          {
            q: 'How long does a salon website take?',
            a: 'Four to eight weeks for most sites, from the first conversation to launch. Most of that time goes into decisions and content, such as treatments, prices and photographs, so the process gathers those early.',
          },
        ],
      },
    },

    'photographers-filmmakers': {
      meta: {
        title: 'Websites for Photographers and Filmmakers | Portfolio Sites',
        description:
          'Custom portfolio websites for photographers, filmmakers and creative studios. Films up front, an archive filtered by subject, and large images that load fast.',
      },
      kicker: 'Websites for photographers and filmmakers',
      title: 'Portfolio websites for photographers and filmmakers',
      lede: 'A portfolio template makes every photographer look alike. A site built around your work shows how you see before anyone reads a word.',
      audience: 'Photographers, filmmakers and creative studios',
      body: [
        'Photographers and filmmakers are usually let down by the same things: templates that crop the work into identical grids, films buried at the bottom of the page, and galleries so heavy they stall on a phone.',
        'The studio designs portfolio sites around the work itself. Films can lead, the archive can be filtered by subject rather than by date, and the interface stays quiet so the colour belongs to the photographs. Everything is hand-coded, which keeps even very large images fast.',
        'The same applies to creative studios, directors and production companies: one clear identity, the work up front, and an enquiry path for the clients you actually want.',
      ],
      needs: {
        title: 'What a portfolio site needs',
        items: [
          {
            title: 'The work first',
            text: 'Full-bleed photographs and films shown at their best, with the interface kept out of the way.',
          },
          {
            title: 'Film that plays properly',
            text: 'Showreels and short films that load quickly and play well on a phone, with sound under the viewer’s control.',
          },
          {
            title: 'An archive people can search',
            text: 'Work filtered by subject or type, so a client looking for architecture never scrolls past a wedding.',
          },
          {
            title: 'A mark of your own',
            text: 'A logo or signature that works as a watermark, on a profile picture and on the site.',
          },
          {
            title: 'Enquiries that qualify',
            text: 'A contact form that asks the questions you need answered before you quote.',
          },
          {
            title: 'Found in search',
            text: 'Service pages and structured data, so you appear for the kind of work you do and the places you shoot.',
          },
        ],
      },
      proof: {
        title: 'Rafa Diniz, photography and film',
        text: 'A photographer and filmmaker working between Brazil and the United States. His two short films lead the site, followed by a photographic archive filtered by subject. The logo is his hand-drawn signature, the only colour on the site besides the photographs is a single accent, and every page is static and hand-coded.',
      },
      faq: {
        title: 'Questions from photographers and filmmakers',
        items: [
          {
            q: 'Will my images lose quality?',
            a: 'No. Images are exported in modern formats at several sizes, so every screen gets a sharp version without downloading more than it needs.',
          },
          {
            q: 'Can my films stay on YouTube or Vimeo?',
            a: 'Yes. Films can stay on YouTube or Vimeo and open from the site, while a short loop or reel can be served from the site itself so it starts instantly.',
          },
          {
            q: 'Can I update the portfolio myself?',
            a: 'If you want to. A simple editor for adding projects and photographs can be written into the proposal. Otherwise you send new work and it is added for you.',
          },
        ],
      },
    },

    'artists-makers': {
      meta: {
        title: 'Websites for Artists and Makers | Handmade Brand Websites',
        description:
          'Custom websites for artists, artisans and handmade brands: the process told properly, every piece catalogued, and published in English, Portuguese and Spanish.',
      },
      kicker: 'Websites for artists and makers',
      title: 'Websites for artists, artisans and handmade brands',
      lede: 'Handmade work loses something in a generic shop template. The site should show how a piece is made and who makes it.',
      audience: 'Artists, artisans and handmade brands',
      body: [
        'For an artist or a maker, the story of how the work is made is part of what people buy. A marketplace listing or a shop template reduces it to a thumbnail and a price.',
        'The studio builds sites that tell the process, catalogue every piece with its own details, and carry one identity from the logo to the label to the Instagram grid. When the audience lives in more than one country, the site is published in their languages.',
      ],
      needs: {
        title: 'What an artist’s site needs',
        items: [
          {
            title: 'The process, told properly',
            text: 'How a piece is made, in words, photographs and short films, so the value is visible.',
          },
          {
            title: 'A catalogue of every piece',
            text: 'Each work with its own images and details, organised so buyers and collectors can browse.',
          },
          {
            title: 'An identity that matches the craft',
            text: 'A logo made the way the work is made, one that holds up on a label, a profile picture and a site.',
          },
          {
            title: 'Commissions and orders',
            text: 'A clear path to commission a piece, ask about availability or place an order.',
          },
          {
            title: 'More than one language',
            text: 'English, Portuguese and Spanish when your buyers live in more than one country.',
          },
          {
            title: 'Social that matches the site',
            text: 'Photography and posts made in the same visual system, if you want the studio to run your Instagram as well.',
          },
        ],
      },
      proof: {
        title: 'Bordados com Amor, hand embroidery',
        text: 'A hand embroidery artist working between Weston, Florida and Rio de Janeiro. The studio made the stitched logo and the website in Portuguese, English and Spanish, with the process told in five movements and an archive of every piece. It also runs her Instagram, which has grown from zero to 200 followers without ads.',
      },
      faq: {
        title: 'Questions from artists and makers',
        items: [
          {
            q: 'Can I sell directly from the site?',
            a: 'Yes. Pieces can be sold through a checkout such as Shopify or Stripe, or taken as commissions through an enquiry form. The proposal lists any fees the payment provider charges.',
          },
          {
            q: 'I do not have good photographs of my work. Can the studio help?',
            a: 'Yes. Art direction and photography can be part of the project, planned so that one session feeds both the site and your social media.',
          },
          {
            q: 'Is it worth having the site in more than one language?',
            a: 'If your buyers or followers are in more than one country, yes. Each language gets its own pages, which lets search engines show the right version to each audience.',
          },
        ],
      },
    },

    'food-events': {
      meta: {
        title: 'Websites for Bakeries, Restaurants and Caterers',
        description:
          'Custom websites for pâtisseries, bakeries, restaurants and caterers: photography first, event enquiries handled with care, and a Google Business Profile.',
      },
      kicker: 'Websites for food businesses',
      title: 'Websites for bakeries, restaurants and caterers',
      lede: 'People decide where to eat and who makes their cake with their eyes. The site has to look as good as the food, then make the booking or the enquiry easy.',
      audience: 'Pâtisseries, bakeries, restaurants and caterers',
      body: [
        'Food businesses are usually let down online by the same things: a menu that only exists as a PDF, photographs that do not do the food justice, and an order or event enquiry that goes nowhere.',
        'The studio builds sites that give the photography room, present creations and menus properly, and treat an event enquiry like the start of a consultation. For a business that sells to its own city, the Google Business Profile matters as much as the site, so the two are set up to match.',
      ],
      needs: {
        title: 'What a food business site needs',
        items: [
          {
            title: 'Photography with room',
            text: 'Dishes and creations shown large and uncluttered, on pages that still load quickly on a phone.',
          },
          {
            title: 'Menus people can read',
            text: 'Menus and price lists as real pages, readable on a phone and by search engines, not only as PDFs.',
          },
          {
            title: 'Event and order enquiries',
            text: 'A form that asks for the date, the number of guests and the occasion, so you can quote without the back and forth.',
          },
          {
            title: 'A Google Business Profile',
            text: 'Created or cleaned up, with categories, photographs and hours that match the site.',
          },
          {
            title: 'Something to sell online',
            text: 'A recipe e-book, gift cards or pre-orders, if it suits the business.',
          },
          {
            title: 'The languages your guests speak',
            text: 'English, Portuguese and Spanish, when your customers speak more than one.',
          },
        ],
      },
      proof: {
        title: 'Renata Estrella Pâtisserie, Rio de Janeiro',
        text: 'Renata trained at Ferrandi Paris, Ritz Escoffier and Le Cordon Bleu, and makes commissioned pastry for events. There was no logo and no website, so the studio made all of it: the brand, the site, a nine-recipe e-book sold from the site, and the Google Business Profile the studio set up and still manages, where her clients have left 27 five-star reviews.',
      },
      faq: {
        title: 'Questions from food businesses',
        items: [
          {
            q: 'Can customers order or pay on the site?',
            a: 'Yes, through an ordering or payment platform connected to the site, or through an enquiry form for custom and event orders. The proposal lists any platform fees.',
          },
          {
            q: 'Do you work with restaurants in the United States and Brazil?',
            a: 'Yes. The studio works with food businesses in the United States and Brazil, in English, Portuguese and Spanish.',
          },
          {
            q: 'Can the studio take the photographs?',
            a: 'Photography can be art directed as part of the project, as it was for the recipe e-book in the Renata Estrella case study.',
          },
        ],
      },
    },
  },
}

# Diniz Studio — Design Brief

North star: **frame.mov** — the site must feel engineered, not generated. No cheap/templated AI-website feel.

## Reference board

| Site | What to steal |
|---|---|
| frame.mov | **Primary reference.** Overall aspect, restraint, craft level |
| landonorris.com | Hero page; whole-site scroll as one narrative; image quality; motion continuity |
| igloo.inc | Asset quality + effortless scroll; object motion |
| oryzo.ai | Falling-object motion (want this for project reveals); image spacing rhythm |
| rechroma.com | Layout + scroll interactions |
| elicyon.com | Image-with-text pairing; "Our Projects" grid → adapt for Diniz Studio (sites) and RPD Lens (categories) |
| noomoagency.com | Typography + spacing as the artwork; hero animation |
| stripe.press/poor-charlies-almanack | Narrative that unfolds via animation/section switches |
| seasoned.koto.studio | Typography; memorable ending sequence |
| tiktok.com/font | Storytelling through negative space and pacing/suspense |
| davidalaba.com | Minimalism carried by high-quality photo/video |
| vanschneider.com | Portfolio showcase presentation |
| alexandrosmaragos.com | Hero treatment |
| forms.world | — |
| noth.in | — |

## Extracted principles
1. **Scroll is the story.** One continuous narrative, not stacked sections.
2. **Asset quality is the product.** High-res, color-graded, compressed properly (WebP/WebM, AVIF). No stock.
3. **Type + negative space do the heavy lifting.** Few typefaces, large scale range, generous whitespace, deliberate pacing.
4. **Motion is physical.** Weighted easing, object falls/settles, parallax with real depth — never generic fade-up-on-scroll.
5. **The ending matters.** Footer/outro is a designed moment, not a sitemap.

## Likely stack
Vite + React, Lenis (smooth scroll), GSAP ScrollTrigger, optional Three.js/R3F for object motion. Vercel.

## Open items
- Diniz Studio vs RPD Lens: two sites or one with sections?
- Content inventory: which projects, what photo/video exists?

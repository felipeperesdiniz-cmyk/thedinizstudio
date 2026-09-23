// Import GSAP from here so plugins are registered once.
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Flip } from 'gsap/Flip'
import { SplitText } from 'gsap/SplitText'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, Flip, SplitText)

  gsap.defaults({
    ease: 'power3.out',
    duration: 0.9,
  })

  ScrollTrigger.defaults({
    toggleActions: 'play none none none',
  })
}

export { gsap, ScrollTrigger, Flip, SplitText }

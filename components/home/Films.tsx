'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import { LoopVideo } from '@/components/ui/LoopVideo'
import { Reveal } from '@/components/ui/Reveal'

export interface FilmEntry {
  project: string
  href: string
  caption: string
  length: string
  preview: string
  poster: string
  /** The full cut, with sound. Only downloaded when someone asks to watch it. */
  full: string
}

interface FilmsProps {
  kicker: string
  title: string
  watch: string
  close: string
  /** Label for the link to each project's case study. */
  caseLabel: string
  films: readonly FilmEntry[]
}

/**
 * The films made for clients in a row you scroll sideways. Each plays a short silent preview;
 * the full cut opens with sound on request.
 */
export function Films({ kicker, title, watch, close, caseLabel, films }: FilmsProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const trackRef = useRef<HTMLUListElement>(null)
  const [playing, setPlaying] = useState<FilmEntry | null>(null)

  // One film along per press; the row also scrolls by touch or trackpad.
  const slide = (direction: number) => {
    const track = trackRef.current
    const item = track?.querySelector('li')
    if (!track || !item) return
    track.scrollBy({ left: direction * (item.getBoundingClientRect().width + 16), behavior: 'smooth' })
  }

  const open = (film: FilmEntry) => {
    setPlaying(film)
    dialogRef.current?.showModal()
  }
  const shut = () => {
    dialogRef.current?.close()
    setPlaying(null)
  }

  return (
    <section aria-labelledby="films-title" className="border-t border-line py-[var(--section-padding)]">
      <Reveal className="container-studio mb-12 flex flex-col items-center text-center md:mb-16">
        <p className="label">{kicker}</p>
        <h2 id="films-title" className="mt-5 text-5xl">
          {title}
        </h2>
      </Reveal>

      <div className="relative">
        <ul
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-[var(--gutter)] overflow-x-auto scroll-px-[var(--content-padding)] px-[var(--content-padding)] pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {films.map((film) => (
            <li key={film.full} className="w-[84vw] shrink-0 snap-start sm:w-[60vw] lg:w-[42vw]">
              <button type="button" onClick={() => open(film)} className="group block w-full text-left" aria-label={`${watch}: ${film.project}`}>
                <div className="relative aspect-video overflow-hidden bg-ink">
                  <LoopVideo src={film.preview} poster={film.poster} className="absolute inset-0 h-full w-full object-cover" />
                  <span className="btn btn-light film-watch absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/20 backdrop-blur-sm">
                    {watch} · {film.length}
                  </span>
                </div>
              </button>
              <div className="mt-6 flex flex-col items-center px-4 text-center">
                <h3 className="text-2xl">{film.project}</h3>
                <p className="mt-3 text-sm text-secondary">{film.caption}</p>
                <Link href={film.href} className="label mt-5 border-b border-current pb-1 text-primary transition-opacity hover:opacity-60">
                  {caseLabel}
                </Link>
              </div>
            </li>
          ))}
        </ul>

        <div className="container-studio mt-10 flex items-center justify-center gap-3">
          <button type="button" onClick={() => slide(-1)} aria-label="Previous" className="btn btn-ghost w-11 px-0">
            ←
          </button>
          <button type="button" onClick={() => slide(1)} aria-label="Next" className="btn btn-ghost w-11 px-0">
            →
          </button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setPlaying(null)}
        onClick={(event) => event.target === dialogRef.current && shut()}
        className="m-auto w-[min(92vw,calc(82svh*16/9))] max-w-none bg-transparent p-0 backdrop:bg-black/90"
      >
        <div className="mb-3 flex items-center justify-between text-white">
          <span className="label text-white/70">{playing?.project}</span>
          <button type="button" onClick={shut} className="label px-2 py-3 text-white hover:opacity-60">
            {close}
          </button>
        </div>
        {playing && (
          <video key={playing.full} src={playing.full} poster={playing.poster} controls autoPlay playsInline className="aspect-video w-full bg-black" />
        )}
      </dialog>
    </section>
  )
}

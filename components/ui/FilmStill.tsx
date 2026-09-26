'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { getLenis } from '@/lib/lenis'
import type { Picture } from '@/content/projects'

interface FilmStillProps {
  image: Picture & { youtube: string }
  alt: string
  sizes: string
  labels: { watch: string; close: string }
}

/**
 * A still that opens the film. The page keeps its editorial layout; the film
 * plays large in an overlay, and YouTube is only loaded once someone asks for it.
 */
export function FilmStill({ image, alt, sizes, labels }: FilmStillProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const lenis = getLenis()

    if (open) {
      dialog.showModal()
      lenis?.stop()
    } else if (dialog.open) {
      dialog.close()
    }
    return () => lenis?.start()
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`${labels.watch}: ${alt}`}
        className="group relative block w-full cursor-pointer"
      >
        <Image
          src={image.src}
          alt={alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          className="block h-auto w-full transition-[scale] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
        />
        <span className="absolute bottom-3 left-3 flex min-h-11 items-center gap-2 border border-white/30 bg-black/40 px-3 font-mono text-xs uppercase tracking-[0.08em] text-white backdrop-blur-sm transition-colors group-hover:bg-black/70 md:bottom-4 md:left-4">
          <svg aria-hidden="true" viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
            <path d="M4 2.5v11L13 8z" />
          </svg>
          {labels.watch}
        </span>
      </button>

      <dialog
        ref={dialogRef}
        aria-label={alt}
        onClose={() => setOpen(false)}
        // A click on the dimmed backdrop lands on the dialog itself, not its content.
        onClick={(event) => event.target === event.currentTarget && setOpen(false)}
        className="m-auto w-[min(92vw,calc(80svh*16/9))] max-w-none bg-transparent p-0 backdrop:bg-black/90 backdrop:backdrop-blur-sm"
      >
        <div className="flex justify-end pb-3">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex min-h-11 items-center gap-2 px-1 font-mono text-xs uppercase tracking-[0.08em] text-white/80 transition-colors hover:text-white"
          >
            {labels.close}
            <span aria-hidden="true" className="text-base leading-none">
              ×
            </span>
          </button>
        </div>
        <div className="relative aspect-video w-full bg-black">
          {open && (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${image.youtube}?autoplay=1&rel=0&playsinline=1`}
              title={alt}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          )}
        </div>
      </dialog>
    </>
  )
}

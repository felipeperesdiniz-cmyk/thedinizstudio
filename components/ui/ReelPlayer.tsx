'use client'

import { useRef, useState } from 'react'

interface ReelPlayerProps {
  mp4: string
  webm: string
  poster: string
  width: number
  height: number
}

export function ReelPlayer({ mp4, webm, poster, width, height }: ReelPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(true)

  // Browsers only autoplay muted video, so sound is one tap away instead.
  const toggle = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    if (!video.muted) void video.play()
    setMuted(video.muted)
  }

  return (
    <div className="relative">
      <video
        ref={videoRef}
        width={width}
        height={height}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="block h-auto w-full"
      >
        <source src={webm} type="video/webm" />
        <source src={mp4} type="video/mp4" />
      </video>

      <button
        type="button"
        onClick={toggle}
        aria-pressed={!muted}
        className="absolute bottom-4 left-4 flex items-center gap-2 border border-white/30 bg-black/40 px-3 py-2 font-mono text-[0.625rem] uppercase tracking-[0.08em] text-white backdrop-blur-sm transition-colors hover:bg-black/70"
      >
        <span aria-hidden="true">{muted ? '▶' : '❙❙'}</span>
        {muted ? 'Sound on' : 'Sound off'}
      </button>
    </div>
  )
}

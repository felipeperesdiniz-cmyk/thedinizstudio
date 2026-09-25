'use client'

import { useRef, useState } from 'react'

interface ReelPlayerProps {
  mp4: string
  webm: string
  poster: string
  width: number
  height: number
  labels: { soundOn: string; soundOff: string }
}

export function ReelPlayer({ mp4, webm, poster, width, height, labels }: ReelPlayerProps) {
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
        className="absolute bottom-3 left-3 flex min-h-11 items-center gap-2 border border-white/30 bg-black/40 px-3 font-mono text-xs uppercase tracking-[0.08em] text-white backdrop-blur-sm transition-colors hover:bg-black/70 md:bottom-4 md:left-4"
      >
        <SpeakerIcon muted={muted} />
        {muted ? labels.soundOn : labels.soundOff}
      </button>
    </div>
  )
}

function SpeakerIcon({ muted }: { muted: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.25">
      <path d="M2 6h2.5L8 3v10L4.5 10H2z" fill="currentColor" stroke="none" />
      {muted ? (
        <path d="M10.5 6l4 4m0-4l-4 4" strokeLinecap="round" />
      ) : (
        <path d="M10.5 5.5a3.5 3.5 0 010 5M12.5 3.5a6.5 6.5 0 010 9" strokeLinecap="round" />
      )}
    </svg>
  )
}

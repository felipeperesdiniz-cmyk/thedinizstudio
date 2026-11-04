import { Archivo, Cormorant_Garamond, Instrument_Sans, Inter } from 'next/font/google'
import type { Specimen } from '@/content/projects'

// The client's own faces, loaded only where the specimen is shown.
const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  display: 'swap',
  preload: false,
})
const text = Inter({ subsets: ['latin'], weight: ['400', '500'], display: 'swap', preload: false })
const archivo = Archivo({ subsets: ['latin'], weight: ['400'], display: 'swap', preload: false })
const instrument = Instrument_Sans({ subsets: ['latin'], weight: ['400', '500'], display: 'swap', preload: false })

const FACES: Record<string, { className: string }> = {
  'Cormorant Garamond': display,
  Inter: text,
  Archivo: archivo,
  'Instrument Sans': instrument,
}

/**
 * The identity shown as a system (type, a line set in it, and the palette)
 * for projects where the logo belongs to the client rather than the studio.
 */
export function IdentitySpecimen({ specimen }: { specimen: Specimen }) {
  const [ground, , , ink] = specimen.palette
  const [headFace, bodyFace] = specimen.faces
  const head = FACES[headFace ?? '']?.className ?? ''
  const body = FACES[bodyFace ?? '']?.className ?? ''
  // Only the serif has an italic worth setting the line in.
  const lineStyle = headFace === 'Cormorant Garamond' ? 'italic' : ''

  return (
    <div
      className="flex aspect-[4/3] flex-col justify-between p-[7%]"
      style={{ backgroundColor: ground?.hex, color: ink?.hex }}
    >
      <div className="flex items-end justify-between gap-6">
        <span className={`${head} text-[clamp(4.5rem,12vw,9rem)] leading-[0.8]`}>Aa</span>
        <span
          className={`${body} pb-2 text-right text-[0.625rem] font-medium uppercase tracking-[0.25em] opacity-70`}
        >
          {specimen.faces.join(' · ')}
        </span>
      </div>

      <p className={`${head} ${lineStyle} max-w-[22ch] text-[clamp(1.25rem,2.4vw,2rem)] leading-snug`}>
        {specimen.line}
      </p>

      <ul className="grid grid-cols-4 gap-2">
        {specimen.palette.map((swatch) => (
          <li key={swatch.hex} className={body}>
            <span
              className="block aspect-[3/2] border border-black/10"
              style={{ backgroundColor: swatch.hex }}
            />
            <span className="mt-2 block text-[0.625rem] uppercase tracking-[0.15em] opacity-70">
              {swatch.hex}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

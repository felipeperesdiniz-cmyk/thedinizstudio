'use client'

import { useState } from 'react'
import { Reveal } from '@/components/ui/Reveal'
import { SITE } from '@/lib/site'
import type { Dictionary } from '@/content/copy/types'

const FIELD =
  'w-full border-b border-line bg-transparent py-3 text-primary outline-none transition-colors placeholder:text-secondary/70 focus:border-primary aria-[invalid=true]:border-primary'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type FieldErrors = { name?: string; email?: string; message?: string }
type Status = 'idle' | 'sending' | 'sent' | 'failed'

// Public by design: a Web3Forms key only lets visitors send to the studio's inbox.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'f7b83f36-9d40-4f68-a3d3-67cc9e554a7e'

export function ContactView({ t }: { t: Dictionary }) {
  const { form } = t.contact
  const [project, setProject] = useState(form.projectOptions[0] ?? '')
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<Status>('idle')

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formElement = event.currentTarget
    const data = new FormData(formElement)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    const nextErrors: FieldErrors = {}
    if (!name) nextErrors.name = form.errors.name
    if (!EMAIL_RE.test(email)) nextErrors.email = form.errors.email
    if (!message) nextErrors.message = form.errors.message

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    const subject = `${project} — ${name}`

    // Without a key, hand the message to the visitor's mail app instead.
    if (!WEB3FORMS_KEY) {
      const body = `${message}\n\n${name}\n${email}`
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`
      return
    }

    setStatus('sending')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject,
          from_name: SITE.name,
          name,
          email,
          project,
          message,
          botcheck: data.get('botcheck') ?? '',
        }),
      })
      const result = (await response.json()) as { success?: boolean }
      if (!response.ok || !result.success) throw new Error('Not sent')
      formElement.reset()
      setStatus('sent')
    } catch {
      setStatus('failed')
    }
  }

  return (
    <article>
      <header className="container-studio pb-16 pt-[calc(var(--nav-height)+5rem)] md:pb-20 md:pt-[calc(var(--nav-height)+8rem)]">
        <Reveal>
          <p className="label">{t.contact.kicker}</p>
          <h1 className="mt-6 max-w-[14ch] font-display text-6xl leading-[0.95] text-primary">
            {t.contact.title}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-10 max-w-[44ch] text-2xl leading-snug text-primary/90">{t.contact.lede}</p>
        </Reveal>
      </header>

      <section className="container-studio pb-[var(--section-padding)]">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-[var(--gutter)]">
          <Reveal className="md:col-span-7">
            <form onSubmit={onSubmit} noValidate className="flex flex-col gap-10">
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="label">{form.name}</span>
                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={FIELD}
                  />
                  {errors.name && (
                    <p id="name-error" className="label text-primary">
                      {errors.name}
                    </p>
                  )}
                </label>
                <label className="flex flex-col gap-2">
                  <span className="label">{form.email}</span>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={FIELD}
                  />
                  {errors.email && (
                    <p id="email-error" className="label text-primary">
                      {errors.email}
                    </p>
                  )}
                </label>
              </div>

              <fieldset className="flex flex-col gap-4">
                <legend className="label">{form.project}</legend>
                <div className="mt-2 flex flex-wrap gap-3">
                  {form.projectOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setProject(option)}
                      aria-pressed={project === option}
                      className={`min-h-11 border px-4 py-2 font-mono text-xs uppercase tracking-[0.08em] transition-colors ${
                        project === option
                          ? 'border-primary text-primary'
                          : 'border-line text-secondary hover:border-secondary hover:text-primary'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </fieldset>

              <label className="flex flex-col gap-2">
                <span className="label">{form.message}</span>
                <textarea
                  name="message"
                  rows={5}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`${FIELD} resize-none`}
                />
                {errors.message && (
                  <p id="message-error" className="label text-primary">
                    {errors.message}
                  </p>
                )}
              </label>

              {/* Honeypot: people never see it, bots fill it in. */}
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <div className="flex flex-col gap-4">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="group inline-flex min-h-12 items-center gap-3 self-start bg-primary px-6 font-mono text-xs uppercase tracking-[0.08em] text-background transition-colors hover:bg-white disabled:opacity-60"
                >
                  {status === 'sending' ? form.sending : form.submit}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-500 group-hover:translate-x-1.5"
                  >
                    →
                  </span>
                </button>
                <p role="status" aria-live="polite" className="max-w-[44ch] text-sm text-secondary">
                  {status === 'sent' ? (
                    <span className="text-primary">{form.success}</span>
                  ) : status === 'failed' ? (
                    <span className="text-primary">
                      {form.failure}{' '}
                      <a href={`mailto:${SITE.email}`} className="underline underline-offset-4">
                        {SITE.email}
                      </a>
                      .
                    </span>
                  ) : (
                    form.note
                  )}
                </p>
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-4 md:col-start-9">
            <dl className="border-t border-line">
              <div className="border-b border-line py-5">
                <dt className="label">{t.contact.direct.meeting}</dt>
                <dd className="mt-2">
                  <a
                    href={SITE.meeting}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group inline-flex items-center gap-2 text-primary"
                  >
                    <span className="link-underline pb-1">{t.contact.direct.meetingText}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </dd>
              </div>
              <div className="border-b border-line py-5">
                <dt className="label">{t.contact.direct.email}</dt>
                <dd className="mt-2">
                  <a href={`mailto:${SITE.email}`} className="group inline-flex text-primary">
                    <span className="link-underline pb-1">{SITE.email}</span>
                  </a>
                </dd>
              </div>
              <div className="border-b border-line py-5">
                <dt className="label">{t.contact.direct.whatsapp}</dt>
                <dd className="mt-2">
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group inline-flex text-primary"
                  >
                    <span className="link-underline pb-1">{SITE.phone}</span>
                  </a>
                </dd>
              </div>
              <div className="border-b border-line py-5">
                <dt className="label">{t.contact.direct.instagram}</dt>
                <dd className="mt-2">
                  <a
                    href={SITE.instagram}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group inline-flex text-primary"
                  >
                    <span className="link-underline pb-1">{SITE.handle}</span>
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>
    </article>
  )
}

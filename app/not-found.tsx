import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="container-studio flex min-h-svh flex-col justify-center py-32">
      <p className="label">Error 404</p>
      <h1 className="mt-6 font-display text-5xl text-primary">This page does not exist.</h1>
      <Link href="/" className="mt-10 font-mono text-xs uppercase tracking-[0.08em] text-accent">
        Back to the studio →
      </Link>
    </section>
  )
}

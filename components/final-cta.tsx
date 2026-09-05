import { Reveal } from './reveal'
import { ArrowRight } from 'lucide-react'

export function FinalCta() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-surface px-8 py-16 text-center md:px-16 md:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full opacity-10 blur-3xl"
            style={{ background: 'radial-gradient(circle, #c6ff00 0%, transparent 70%)' }}
          />
          <div className="relative">
            <h2 className="font-heading text-4xl font-bold tracking-tight text-balance md:text-6xl">
              Ready to Grow?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Let&apos;s turn marketing spend into measurable business growth.
            </p>
            <a
              href="#contact"
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Let&apos;s Work Together <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

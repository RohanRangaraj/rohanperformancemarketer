import { Reveal } from './reveal'
import { ArrowRight, ArrowDown } from 'lucide-react'

export function PerformanceImprovement() {
  return (
    <section className="border-t border-border bg-surface py-20 md:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl">
            Sometimes Growth Is About{' '}
            <span className="text-accent">Spending Less.</span>
          </h2>
        </Reveal>

        <Reveal delay={120} className="mx-auto mt-14 max-w-3xl">
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
            <div className="rounded-2xl border border-border bg-card px-10 py-8 text-center">
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Before
              </p>
              <p className="mt-2 font-heading text-4xl font-bold text-foreground">₹18</p>
              <p className="mt-1 text-sm text-muted-foreground">CPC</p>
            </div>

            <div className="text-muted-foreground">
              <ArrowRight className="hidden h-8 w-8 sm:block" />
              <ArrowDown className="h-8 w-8 sm:hidden" />
            </div>

            <div className="rounded-2xl border border-accent bg-card px-10 py-8 text-center shadow-[0_0_40px_-12px_#c6ff00]">
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                After
              </p>
              <p className="mt-2 font-heading text-4xl font-bold text-accent">₹4.5</p>
              <p className="mt-1 text-sm text-muted-foreground">CPC</p>
            </div>
          </div>

          <p className="mt-10 text-center font-heading text-5xl font-bold tracking-tight text-accent md:text-6xl">
            75% Lower CPC
          </p>

          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-center text-base leading-relaxed text-muted-foreground">
            <p>
              Developed and implemented a content strategy for an FMCG brand that
              significantly improved campaign efficiency.
            </p>
            <p>
              By improving content quality and creative strategy, the campaign CPC was
              reduced from ₹18 to ₹4.5.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

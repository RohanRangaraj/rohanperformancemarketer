import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const achievements = [
  {
    metric: '11X ROAS',
    sub: '₹1.38L Revenue Generated',
    industry: 'Clothing',
    body: 'Achieved an 11X ROAS through performance-focused campaign optimisation.',
  },
  {
    metric: '5X ROAS',
    sub: 'Maintained Gross ROAS',
    industry: 'FMCG',
    body: 'Maintained a consistent gross ROAS of 5X through continuous campaign and creative optimisation.',
  },
  {
    metric: '₹1L+',
    sub: '₹1 Lakh+ Daily Revenue',
    industry: 'Clothing',
    body: 'Consistently generated ₹1 Lakh+ in revenue every day for 7 consecutive days.',
  },
  {
    metric: '800+',
    sub: 'Hot & Warm Leads',
    industry: 'Creative Studio',
    body: 'Generated high-intent leads through targeted campaigns and audience optimisation.',
  },
]

export function Achievements() {
  return (
    <section id="results" className="border-t border-border py-20 md:py-28">
      <div className="container-page">
        <SectionHeading title="Key Results" />

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {achievements.map((a, i) => (
            <Reveal
              key={a.metric}
              delay={i * 80}
              className="group rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-heading text-4xl font-bold tracking-tight text-accent">
                    {a.metric}
                  </p>
                  <p className="mt-2 text-sm font-medium text-foreground">{a.sub}</p>
                </div>
                <span className="rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {a.industry}
                </span>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {a.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

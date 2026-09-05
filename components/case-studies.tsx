import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const caseStudies = [
  {
    brand: 'Madminimalist',
    industry: 'Clothing',
    objective: 'Sales',
    challenge: 'High customer acquisition costs and inconsistent ROAS.',
    strategy: [
      'Meta Ads Optimisation',
      'Audience Segmentation',
      'Creative Testing',
      'Retargeting',
    ],
    results: [
      { value: '7X', label: 'ROAS' },
      { value: '₹110', label: 'CPA' },
      { value: '₹4.5', label: 'CPC' },
    ],
    body: 'Improved campaign efficiency while reducing customer acquisition costs through continuous optimisation, audience testing, and creative experimentation.',
  },
  {
    brand: 'Thaai Creations',
    industry: 'Creative Studio',
    objective: 'Lead Generation',
    challenge: 'Needed a consistent flow of relevant and high-quality enquiries.',
    strategy: [
      'Meta Lead Ads',
      'Audience Targeting',
      'Creative Testing',
      'Campaign Optimisation',
    ],
    results: [
      { value: '187', label: 'Leads Generated' },
      { value: '₹29.9K', label: 'Ad Spend' },
      { value: '158', label: 'Closures' },
    ],
    body: 'Generated highly relevant enquiries through targeted lead generation campaigns and continuous optimisation.',
  },
  {
    brand: 'Vivarthana Handlooms',
    industry: 'Handlooms',
    objective: 'Website Traffic',
    challenge: 'Low website visits and limited traffic.',
    strategy: ['Meta Traffic Campaign', 'Interest Targeting', 'Creative Testing'],
    results: [
      { value: '18.4K', label: 'Landing Page Views' },
      { value: '₹2', label: 'Cost Per LPV' },
      { value: '₹36K', label: 'Ad Spend' },
    ],
    body: 'Successfully increased website traffic while maintaining a highly efficient cost per landing page view.',
  },
]

export function CaseStudies() {
  return (
    <section id="case-studies" className="border-t border-border py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          title="Case Studies"
          subtitle="A closer look at campaigns, strategies, and measurable results."
        />

        <div className="mt-12 grid gap-4">
          {caseStudies.map((cs, i) => (
            <Reveal
              key={cs.brand}
              delay={i * 80}
              className="group overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-300 hover:border-accent"
            >
              <div className="grid gap-8 p-8 md:grid-cols-[1.4fr_1fr] md:p-10">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {cs.industry}
                    </span>
                    <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
                      {cs.objective}
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-3xl font-bold tracking-tight">
                    {cs.brand}
                  </h3>

                  <div className="mt-6 space-y-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        The Challenge
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-foreground">
                        {cs.challenge}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        The Strategy
                      </p>
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {cs.strategy.map((s) => (
                          <li
                            key={s}
                            className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs text-foreground"
                          >
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {cs.body}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-center gap-3 rounded-xl border border-border bg-card p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    The Results
                  </p>
                  {cs.results.map((r) => (
                    <div key={r.label} className="border-b border-border pb-3 last:border-0 last:pb-0">
                      <p className="font-heading text-3xl font-bold tracking-tight text-accent">
                        {r.value}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">{r.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

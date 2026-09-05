import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const areas = [
  'Meta Ads',
  'Lead Generation',
  'E-commerce Growth',
  'Campaign Optimisation',
  'Creative Testing',
  'Performance Reporting',
]

export function Experience() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="container-page">
        <SectionHeading title="Experience." />

        <Reveal className="mt-12">
          <div className="relative rounded-2xl border border-border bg-surface p-8 md:p-10">
            <span className="absolute left-0 top-8 h-16 w-1 rounded-r-full bg-accent md:top-10" />
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-heading text-2xl font-bold tracking-tight">
                  Digifyce
                </h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  Performance Marketing
                </p>
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                2025 — Present
              </span>
            </div>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Worked across multiple brands and industries to plan, launch, and
              optimise performance marketing campaigns.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {areas.map((area) => (
                <li
                  key={area}
                  className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs text-foreground"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

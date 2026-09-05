import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { CountUp } from './count-up'

type Stat = {
  value: React.ReactNode
  label: string
}

const stats: Stat[] = [
  { value: <><CountUp end={1} suffix="+" /> Year</>, label: 'Experience' },
  { value: '∞', label: 'Campaigns Managed' },
  { value: <CountUp end={20} suffix="+" />, label: 'Brands Worked With' },
  { value: <>₹<CountUp end={50} suffix="L+" /></>, label: 'Ad Spend Managed' },
  { value: <CountUp end={19.7} decimals={1} suffix="X" />, label: 'Highest ROAS' },
  { value: '₹1.1Cr+', label: 'Revenue Generated' },
  { value: <CountUp end={1600} suffix="+" />, label: 'Leads Generated' },
  { value: <>₹<CountUp end={25} /></>, label: 'Best CPL Achieved' },
]

export function PerformanceNumbers() {
  return (
    <section id="performance" className="border-t border-border py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          title="Performance in Numbers."
          subtitle="Numbers that represent the campaigns, brands, and growth I've worked on."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 60}
              className="group rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent"
            >
              <div className="font-heading text-4xl font-bold tracking-tight text-foreground transition-colors group-hover:text-accent">
                {stat.value}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

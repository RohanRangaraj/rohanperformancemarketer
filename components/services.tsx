import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { Check } from 'lucide-react'

const services = [
  {
    num: '01',
    title: 'Meta Ads',
    body: 'Performance-focused Facebook and Instagram campaigns designed to generate qualified leads and profitable sales.',
    items: [
      'Campaign Strategy',
      'Audience Targeting',
      'Creative Testing',
      'Retargeting',
      'Campaign Optimisation',
    ],
  },
  {
    num: '02',
    title: 'Google Ads',
    body: 'Search and performance campaigns focused on capturing high-intent customers.',
    items: [
      'Search Campaigns',
      'Keyword Strategy',
      'Performance Campaigns',
      'Conversion Optimisation',
    ],
  },
  {
    num: '03',
    title: 'Lead Generation',
    body: 'Conversion-focused campaigns designed to generate qualified leads at sustainable acquisition costs.',
    items: [
      'Meta Lead Ads',
      'Audience Research',
      'Lead Quality Optimisation',
      'CPL Optimisation',
    ],
  },
  {
    num: '04',
    title: 'E-commerce Growth',
    body: 'Data-driven advertising strategies focused on increasing online sales and ROAS.',
    items: [
      'Sales Campaigns',
      'Funnel Strategy',
      'Retargeting',
      'Creative Testing',
      'ROAS Optimisation',
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="border-t border-border py-20 md:py-28">
      <div className="container-page">
        <SectionHeading title="How I Help Brands Grow." />

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal
              key={service.num}
              delay={i * 80}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-6 font-heading text-[120px] font-bold leading-none text-foreground/[0.03] transition-colors group-hover:text-accent/[0.06]"
              >
                {service.num}
              </span>
              <div className="relative">
                <p className="font-heading text-sm font-semibold text-accent">
                  {service.num}
                </p>
                <h3 className="mt-2 font-heading text-2xl font-bold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.body}
                </p>
                <ul className="mt-6 grid gap-2.5">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                      <Check className="h-4 w-4 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

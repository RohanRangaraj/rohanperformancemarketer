import { Reveal } from './reveal'
import { BarChart3, Target, TrendingUp } from 'lucide-react'

const cards = [
  {
    icon: BarChart3,
    title: 'DATA-DRIVEN',
    body: 'Every decision backed by performance insights and campaign data.',
  },
  {
    icon: Target,
    title: 'ROI-FOCUSED',
    body: 'Focused on improving profitability, efficiency, and measurable growth.',
  },
  {
    icon: TrendingUp,
    title: 'GROWTH STRATEGY',
    body: 'Combining creative strategy, audience targeting, and optimisation.',
  },
]

export function About() {
  return (
    <section id="about" className="border-t border-border py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-balance md:text-4xl lg:text-5xl">
              Performance Marketer Focused on Growth &amp; ROI.
            </h2>
          </Reveal>
          <Reveal delay={120} className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I&apos;m a Digital Marketer with experience helping brands grow through
              paid ads, SEO, and performance marketing. I combine data, creativity,
              and strategy to drive measurable results.
            </p>
            <p>
              My approach focuses on understanding campaign performance, identifying
              opportunities, testing creatives, and continuously optimising campaigns
              for better ROI.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal
              key={card.title}
              delay={i * 80}
              className="group rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card text-accent">
                <card.icon className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-sm font-semibold tracking-[0.15em] text-foreground">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {card.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

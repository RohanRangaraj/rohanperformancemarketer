import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const tools = [
  { name: 'Meta Ads Manager', use: 'Campaign Management' },
  { name: 'Google Ads', use: 'High-Intent Acquisition' },
  { name: 'Google Analytics', use: 'Performance Analysis' },
  { name: 'Google Tag Manager', use: 'Tracking & Implementation' },
  { name: 'Shopify', use: 'E-commerce Growth' },
  { name: 'Meta Pixel', use: 'Conversion Tracking' },
  { name: 'Conversion API', use: 'Server-Side Tracking' },
]

export function Tools() {
  return (
    <section className="border-t border-border bg-surface py-20 md:py-28">
      <div className="container-page">
        <SectionHeading title="Tools I Work With." />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, i) => (
            <Reveal
              key={tool.name}
              delay={i * 60}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border bg-surface font-heading text-lg font-bold text-accent">
                {tool.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold tracking-tight text-foreground">
                  {tool.name}
                </h3>
                <p className="mt-0.5 text-sm text-muted-foreground">{tool.use}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

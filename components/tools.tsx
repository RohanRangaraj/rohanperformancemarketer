import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const LOGO_BASE = 'https://thesvg.org/icons'

const tools = [
  { name: 'Meta Ads Manager', use: 'Campaign Management', slug: 'meta' },
  { name: 'Google Ads', use: 'High-Intent Acquisition', slug: 'google-ads' },
  { name: 'Google Analytics', use: 'Performance Analysis', slug: 'google-analytics' },
  { name: 'Google Tag Manager', use: 'Tracking & Implementation', slug: 'google-tag-manager' },
  { name: 'Shopify', use: 'E-commerce Growth', slug: 'shopify' },
  { name: 'Meta Pixel', use: 'Conversion Tracking', slug: 'meta' },
  { name: 'Conversion API', use: 'Server-Side Tracking', slug: 'meta' },
]

export function Tools() {
  return (
    <section className="border-t border-border bg-surface py-20 md:py-28">
      <div className="container-page">
        <SectionHeading title="Tools & Platforms" />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, i) => (
            <Reveal
              key={tool.name}
              delay={i * 60}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border bg-white p-2.5">
                <img
                  src={`${LOGO_BASE}/${tool.slug}/default.svg`}
                  alt={`${tool.name} logo`}
                  width={28}
                  height={28}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
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

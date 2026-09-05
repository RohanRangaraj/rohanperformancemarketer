import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { ImageIcon, Lock } from 'lucide-react'

const proofs = [
  { label: 'META ADS PERFORMANCE', metric: '7X ROAS | ₹110 CPA', tall: true },
  { label: 'REVENUE PERFORMANCE', metric: '₹1.38L Revenue | 11X ROAS', tall: false },
  { label: 'LEAD GENERATION', metric: '187 Leads | ₹29.9K Spend', tall: false },
  { label: 'TRAFFIC CAMPAIGN', metric: '18.4K LPV | ₹2 Per LPV', tall: true },
  { label: 'CPC IMPROVEMENT', metric: '₹18 CPC → ₹4.5 CPC', tall: false },
]

export function ProofOfWork() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          title="Proof Over Promises."
          subtitle="Real campaign performance and measurable results."
        />

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {proofs.map((proof, i) => (
            <Reveal
              key={proof.label}
              delay={i * 70}
              className="group block break-inside-avoid overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-300 hover:border-accent"
            >
              <div
                className={`relative flex items-center justify-center overflow-hidden bg-card ${
                  proof.tall ? 'aspect-[4/5]' : 'aspect-video'
                }`}
              >
                <div className="flex flex-col items-center gap-2 text-muted-foreground transition-transform duration-500 group-hover:scale-105">
                  <ImageIcon className="h-8 w-8" />
                  <span className="text-[11px] uppercase tracking-widest">
                    Screenshot Placeholder
                  </span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {proof.label}
                </p>
                <p className="mt-1.5 font-heading text-lg font-bold text-accent">
                  {proof.metric}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Lock className="h-3.5 w-3.5" />
          Sensitive campaign information has been hidden for confidentiality.
        </Reveal>
      </div>
    </section>
  )
}

import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { ImageIcon, Lock } from 'lucide-react'

const proofs = [
  { id: 'p1', tall: true },
  { id: 'p2', tall: false },
  { id: 'p3', tall: false },
  { id: 'p4', tall: true },
  { id: 'p5', tall: false },
]

export function ProofOfWork() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          title="Performance Snapshots"
          subtitle="Real campaign performance and measurable results."
        />

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {proofs.map((proof, i) => (
            <Reveal
              key={proof.id}
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

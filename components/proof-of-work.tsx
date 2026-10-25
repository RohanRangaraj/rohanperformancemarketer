import Image from 'next/image'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { ImageIcon, Lock } from 'lucide-react'

const proofs = [
  { id: 'p1', tall: true, src: '/campaign1.png' },
  { id: 'p2', tall: false, src: '/campaign2.png' },
  { id: 'p3', tall: false, src: '/campaign3.png' },
  { id: 'p4', tall: true, src: '/campaign4.png' },
  { id: 'p5', tall: false, src: '/campaign5.png' },
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
              {proof.src ? (
                <Image
                  src={proof.src}
                  alt={`Campaign performance snapshot ${proof.id}`}
                  width={1600}
                  height={900}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <div className="flex aspect-video items-center justify-center bg-card">
                  <div className="flex flex-col items-center gap-2 text-muted-foreground transition-transform duration-500 group-hover:scale-105">
                    <ImageIcon className="h-8 w-8" />
                    <span className="text-[11px] uppercase tracking-widest">
                      Screenshot Placeholder
                    </span>
                  </div>
                </div>
              )}
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

'use client'

import { ArrowRight, ArrowDown, TrendingUp, User } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
    >
      {/* subtle radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-24 h-[420px] w-[420px] rounded-full opacity-[0.07] blur-3xl"
        style={{ background: 'radial-gradient(circle, #c6ff00 0%, transparent 70%)' }}
      />

      <div className="container-page grid items-center gap-14 lg:grid-cols-[65fr_35fr]">
        <div className="reveal is-visible">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Performance Marketer • Data-Driven Growth
          </p>

          <h1 className="font-heading text-[42px] font-bold leading-[1.05] tracking-tight text-balance sm:text-[56px] lg:text-[72px]">
            I Help Brands Grow With{' '}
            <span className="text-accent">Data-Driven Marketing</span> Strategies.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Performance marketing focused on measurable growth, profitable
            campaigns, and stronger ROI.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#case-studies"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              View My Work <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#333333] bg-transparent px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Let&apos;s Connect <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <p className="mt-10 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">1+ Year Experience</span>{' '}
            •{' '}
            <span className="font-medium text-foreground">20+ Brands</span> •{' '}
            <span className="font-medium text-accent">₹1.1Cr+ Revenue Generated</span>
          </p>
        </div>

        {/* Right: portrait + floating metrics */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
            <img
              src="/images/rohan-portrait.png"
              alt="Rohan, performance marketer"
              className="h-full w-full object-cover object-top"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"
            />
          </div>

          {/* Metric card 1 */}
          <div className="float-slow absolute -left-4 top-10 rounded-xl border border-border bg-card/95 p-4 shadow-xl backdrop-blur">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-accent" />
              <span className="font-heading text-2xl font-bold text-accent">19.7X</span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">Highest ROAS</p>
          </div>

          {/* Metric card 2 */}
          <div
            className="float-slow absolute -right-4 top-1/2 rounded-xl border border-border bg-card/95 p-4 shadow-xl backdrop-blur"
            style={{ animationDelay: '1.5s' }}
          >
            <span className="font-heading text-2xl font-bold text-foreground">
              ₹1.1Cr<span className="text-accent">+</span>
            </span>
            <p className="mt-1 text-xs text-muted-foreground">Revenue Generated</p>
          </div>

          {/* Metric card 3 */}
          <div
            className="float-slow absolute -bottom-4 left-8 rounded-xl border border-border bg-card/95 p-4 shadow-xl backdrop-blur"
            style={{ animationDelay: '3s' }}
          >
            <span className="font-heading text-2xl font-bold text-foreground">20+</span>
            <p className="mt-1 text-xs text-muted-foreground">Brands</p>
          </div>
        </div>
      </div>
    </section>
  )
}

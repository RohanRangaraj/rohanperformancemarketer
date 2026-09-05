import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { PerformanceNumbers } from '@/components/performance-numbers'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Achievements } from '@/components/achievements'
import { PerformanceImprovement } from '@/components/performance-improvement'
import { CaseStudies } from '@/components/case-studies'
import { ProofOfWork } from '@/components/proof-of-work'
import { Tools } from '@/components/tools'
import { Experience } from '@/components/experience'
import { FinalCta } from '@/components/final-cta'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PerformanceNumbers />
        <About />
        <Services />
        <Achievements />
        <PerformanceImprovement />
        <CaseStudies />
        <ProofOfWork />
        <Tools />
        <Experience />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import SolutionShowcase from '@/components/sections/SolutionShowcase'
import WhyMedap from '@/components/sections/WhyMedap'
import Clients from '@/components/sections/Clients'
import Partners from '@/components/sections/Partners'
import CTABand from '@/components/sections/CTABand'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <SolutionShowcase />
      <WhyMedap />
      <Clients />
      <Partners />
      <CTABand />
    </>
  )
}

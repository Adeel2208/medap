import type { Metadata } from 'next'
import CategoryGrid from '@/components/sections/CategoryGrid'
import Partners from '@/components/sections/Partners'
import CTABand from '@/components/sections/CTABand'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeIn from '@/components/ui/FadeIn'

export const metadata: Metadata = {
  title: 'Our Solutions — Medical Equipment & Hospital Systems',
  description:
    'Explore MEDAP International\'s seven solution families: operation theatre, intensive care, neonatal & nursery, obstetrics & gynecology, CSSD, medical gas pipeline systems and hospital furniture.',
}

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/60 via-white to-white border-b border-primary-100/60">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 py-12 lg:py-16">
          <Breadcrumb items={[{ name: 'Solutions' }]} />
          <FadeIn>
            <div className="mt-8 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                Our Solutions
              </p>
              <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
                Complete medical solutions, one trusted supplier
              </h1>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Seven solution families covering the full clinical journey — supplied, installed and
                serviced under one roof, with nationwide after-sales support.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryGrid />
        </div>
      </section>

      <Partners />
      <CTABand />
    </>
  )
}

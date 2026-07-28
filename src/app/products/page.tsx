import type { Metadata } from 'next'
import CategoryGrid from '@/components/sections/CategoryGrid'
import Partners from '@/components/sections/Partners'
import CTABand from '@/components/sections/CTABand'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeIn from '@/components/ui/FadeIn'
import Eyebrow from '@/components/ui/Eyebrow'
import DotGrid from '@/components/ui/DotGrid'
import { categories, totalProductCount } from '@/data/categories'
import { clientSectors } from '@/data/clients'

export const metadata: Metadata = {
  title: 'Our Solutions — Medical Equipment & Hospital Systems',
  description:
    "Explore MEDAP International's seven solution families: operation theatre, intensive care, neonatal & nursery, obstetrics & gynecology, CSSD, medical gas pipeline systems and hospital furniture.",
}

const heroStats = [
  { value: categories.length, label: 'Solution Families' },
  { value: `${totalProductCount}+`, label: 'Products' },
  { value: clientSectors.length, label: 'Sectors Served' },
]

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-primary-100/60 bg-gradient-to-b from-primary-50/70 via-white to-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-navy/5 blur-3xl" />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 py-12 lg:py-20">
          <Breadcrumb items={[{ name: 'Solutions' }]} />
          <FadeIn>
            <div className="mt-8 max-w-3xl">
              <Eyebrow>Our Solutions</Eyebrow>
              <h1 className="mt-5 font-display text-[1.9rem] font-extrabold leading-[1.12] tracking-tight text-navy sm:text-4xl lg:text-5xl">
                Complete medical solutions,
                <span className="block text-primary-600">one trusted supplier</span>
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Seven solution families covering the full clinical journey — supplied, installed and
                serviced under one roof, with nationwide after-sales support.
              </p>
            </div>
          </FadeIn>

          {/* Stat strip */}
          <FadeIn delay={0.15}>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-primary-100 pt-8">
              {heroStats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-extrabold text-navy sm:text-4xl">{s.value}</p>
                  <p className="mt-0.5 text-sm font-medium text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Category grid */}
      <section className="relative isolate overflow-hidden bg-white py-16 lg:py-24">
        <DotGrid />
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <FadeIn>
            <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Eyebrow>Explore by Department</Eyebrow>
                <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-navy sm:text-3xl">
                  Seven families, everything a hospital needs
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-gray-500">
                From the operating theatre to the neonatal nursery — select a family to see its full
                product range.
              </p>
            </div>
          </FadeIn>
          <CategoryGrid />
        </div>
      </section>

      <Partners />
      <CTABand />
    </>
  )
}

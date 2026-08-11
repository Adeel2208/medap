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
      <section className="relative isolate overflow-hidden border-b border-primary-100/60">
        {/* Background image */}
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          {/* Subject sits in the right third of the artwork; a portrait crop
              centred on the image lands on empty space, so anchor it right. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/solution.webp"
            alt=""
            decoding="async"
            className="h-full w-full object-cover object-right sm:object-center"
          />
          {/* Mobile: the copy spans the full width, so wash top-down over the crop */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white/35 sm:hidden" />
          {/* Tablet+: strong white on the left fading clear on the right */}
          <div className="absolute inset-0 hidden bg-gradient-to-r from-white via-white/85 to-transparent sm:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/40" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 py-16 sm:py-20 lg:py-28 [text-shadow:0_1px_14px_rgba(255,255,255,0.7)]">
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

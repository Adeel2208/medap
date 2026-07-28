import type { Metadata } from 'next'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeIn from '@/components/ui/FadeIn'
import Eyebrow from '@/components/ui/Eyebrow'
import SectionHeader from '@/components/ui/SectionHeader'
import SpotlightCard from '@/components/ui/SpotlightCard'
import DotGrid from '@/components/ui/DotGrid'
import CTABand from '@/components/sections/CTABand'
import { serviceHighlights, services, serviceProcess } from '@/data/services'
import { site } from '@/data/site'

export const metadata: Metadata = {
  title: 'Services & Support — After-Sales Care That Never Stops',
  description:
    'MEDAP International backs every installation with nationwide after-sales support: warranty, preventive maintenance, rapid-response repairs, genuine spare parts, training and maintenance contracts.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-primary-100/60">
        {/* Background image */}
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/services.png" alt="" className="h-full w-full object-cover object-center" />
          {/* Readability overlays: strong white on the left fading clear on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/25 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/40" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 py-16 sm:py-20 lg:py-28">
          <Breadcrumb items={[{ name: 'Services' }]} />
          <FadeIn>
            <div className="mt-8 max-w-2xl [text-shadow:0_1px_14px_rgba(255,255,255,0.85)]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                Services &amp; Support
              </p>
              <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-navy">
                After-sales support that never sleeps
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Buying equipment is only the beginning. MEDAP stands behind every installation for its
                entire working life — with maintenance, genuine spare parts, training and rapid-response
                repairs, delivered by our own engineers nationwide.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Highlight cards — overlapping */}
      <section className="relative z-10 -mt-8">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {serviceHighlights.map((h, index) => (
              <FadeIn key={h.title} delay={Math.min(index * 0.06, 0.2)} className="h-full">
                <div className="flex h-full flex-col rounded-3xl border border-primary-100 bg-white p-6 shadow-[0_18px_45px_-28px_rgba(0,56,103,0.35)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 ring-1 ring-inset ring-primary-200/60">
                    <h.icon className="h-6 w-6 text-primary-600" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-navy">{h.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{h.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Full services grid */}
      <section className="relative isolate overflow-hidden bg-white py-20 sm:py-28">
        <DotGrid />
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <SectionHeader
            eyebrow="What We Offer"
            title="A complete range of services & support"
            subtitle="From the first installation to the final year of service, everything your equipment needs — under one accountable partner."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <FadeIn key={service.title} delay={Math.min(index * 0.04, 0.24)} className="h-full">
                <SpotlightCard className="flex h-full flex-col rounded-3xl border border-primary-100 bg-white p-7 shadow-[0_10px_30px_-20px_rgba(0,56,103,0.3)] transition-shadow duration-300 hover:shadow-[0_24px_50px_-24px_rgba(0,56,103,0.35)]">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 ring-1 ring-inset ring-primary-200/60">
                    <service.icon className="h-7 w-7 text-primary-600" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{service.description}</p>
                </SpotlightCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How it works — process on navy band */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#003867] to-[#004a6b] py-20 sm:py-28">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(45,184,199,0.3), transparent 70%)' }}
        />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <Eyebrow dark className="justify-center">
              How We Work
            </Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              A structured path to dependable uptime
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/75">
              A simple, transparent process that turns a one-time purchase into a lasting service
              relationship.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceProcess.map((s, index) => (
              <FadeIn key={s.step} delay={Math.min(index * 0.08, 0.3)} className="h-full">
                <div className="relative h-full rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-colors duration-300 hover:bg-white/10">
                  <span className="font-display text-4xl font-extrabold text-primary-300">{s.step}</span>
                  <h3 className="mt-3 font-display text-lg font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{s.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Reassurance strip */}
      <section className="relative isolate overflow-hidden bg-white py-16 sm:py-20">
        <DotGrid />
        <div className="mx-auto w-full max-w-4xl px-5 sm:px-8 text-center">
          <FadeIn>
            <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
              &ldquo;We do not sell anything we cannot support for its entire working life.&rdquo;
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              It&apos;s the rule MEDAP was built on in {site.foundedYear}, and it still governs every
              service we deliver today. Behind every device we maintain is a patient whose care depends
              on it.
            </p>
          </FadeIn>
        </div>
      </section>

      <CTABand />
    </>
  )
}

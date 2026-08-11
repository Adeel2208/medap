import type { Metadata } from 'next'
import { ShieldCheck, FileCheck2, CheckCircle2 } from 'lucide-react'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeIn from '@/components/ui/FadeIn'
import SectionHeader from '@/components/ui/SectionHeader'
import SpotlightCard from '@/components/ui/SpotlightCard'
import DotGrid from '@/components/ui/DotGrid'
import CTABand from '@/components/sections/CTABand'
import { site } from '@/data/site'

export const metadata: Metadata = {
  title: 'Certifications & Compliance',
  description:
    'MEDAP International is ISO certified and DRAP compliant, supplying medical equipment that meets national regulatory requirements and international quality standards.',
}

const certifications = [
  {
    icon: ShieldCheck,
    title: 'ISO Certified',
    subtitle: 'Quality Management System',
    description:
      'Our quality management system governs how we source, store, install and service equipment — so the same standard applies to every project, whatever its size.',
  },
  {
    icon: FileCheck2,
    title: 'DRAP Compliant',
    subtitle: 'Drug Regulatory Authority of Pakistan',
    description:
      'We operate in line with the Drug Regulatory Authority of Pakistan\'s requirements for medical devices, covering the products we supply and how we bring them to market.',
  },
]

const commitments = [
  'Equipment sourced from established international manufacturers',
  'Full documentation and warranty provided with every installation',
  'Operation in line with DRAP medical device requirements',
  'Installation and commissioning by trained engineers',
  'Preventive maintenance, calibration support and genuine spare parts',
  'Staff training handed over with the equipment, not sold separately',
]

export default function CertificationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-primary-100/60">
        {/* Background image */}
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/certifications.png" alt="" className="h-full w-full object-cover object-center" />
          {/* Readability overlays: strong white on the left fading clear on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/25 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/40" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 py-16 sm:py-20 lg:py-28 [text-shadow:0_1px_14px_rgba(255,255,255,0.85)]">
          <Breadcrumb items={[{ name: 'Certifications' }]} />
          <FadeIn>
            <div className="mt-8 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                Quality &amp; Compliance
              </p>
              <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-navy">
                Certified systems, compliant products
              </h1>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                Quality isn&apos;t a claim — it&apos;s a system. MEDAP International is ISO certified
                and DRAP compliant, and we hold ourselves to those standards on every installation.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The two credentials */}
      <section className="relative isolate overflow-hidden bg-white py-16 lg:py-24">
        <DotGrid />
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <FadeIn key={cert.title} delay={Math.min(index * 0.08, 0.2)} className="h-full">
                <SpotlightCard className="flex h-full flex-col rounded-3xl border border-navy-100 bg-white p-6 sm:p-8 shadow-[0_10px_30px_-18px_rgba(0,22,41,0.2)] transition-shadow duration-300 hover:shadow-[0_24px_50px_-20px_rgba(0,56,103,0.3)]">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 ring-1 ring-inset ring-primary-200/60">
                    <cert.icon className="h-8 w-8 text-primary-600" strokeWidth={1.6} />
                  </span>
                  <h2 className="mt-6 font-display text-2xl font-bold text-navy">{cert.title}</h2>
                  <p className="mt-1 text-sm font-semibold text-primary-600">{cert.subtitle}</p>
                  <p className="mt-4 leading-relaxed text-gray-600">{cert.description}</p>
                </SpotlightCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* What it means in practice */}
      <section className="py-16 lg:py-24 bg-gray-50 border-t border-navy-100/60">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <SectionHeader
            eyebrow="Our Commitment"
            title="What compliance means for your facility"
            subtitle="Standards on paper only matter when they show up in practice. Here's what you can expect from every MEDAP engagement."
          />
          <FadeIn>
            <ul className="max-w-3xl mx-auto grid gap-3 sm:grid-cols-2">
              {commitments.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-navy-100 bg-white p-5 shadow-[0_10px_30px_-22px_rgba(0,22,41,0.2)]"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-gray-500">
              Documentation for our certifications and product registrations is available on request —{' '}
              <a href={site.emailHref} className="font-semibold text-primary-600 hover:text-primary-700">
                contact our team
              </a>{' '}
              and we will share it with your procurement or biomedical department.
            </p>
          </FadeIn>
        </div>
      </section>

      <CTABand />
    </>
  )
}

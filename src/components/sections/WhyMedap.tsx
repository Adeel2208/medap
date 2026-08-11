import { Users, ShieldCheck, BadgeCheck, Wrench } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import SectionHeader from '@/components/ui/SectionHeader'
import SpotlightCard from '@/components/ui/SpotlightCard'
import DotGrid from '@/components/ui/DotGrid'

const values = [
  {
    icon: Users,
    title: 'Customer First',
    description:
      'Free site surveys, honest guidance and solutions matched to your clinical needs and budget — not just a sales pitch.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliability',
    description:
      '35+ years of consistent supply to armed forces, public and private hospitals across Pakistan.',
  },
  {
    icon: BadgeCheck,
    title: 'Certified Quality',
    description:
      'ISO certified quality systems and DRAP compliant products sourced from trusted international manufacturers.',
  },
  {
    icon: Wrench,
    title: 'After-Sales Support',
    description:
      'Nationwide installation, staff training, preventive maintenance and genuine spare parts — for the full equipment lifecycle.',
  },
]

export default function WhyMedap() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-20 sm:py-28">
      <DotGrid />
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Why MEDAP"
          title="A partner for the full equipment lifecycle"
          subtitle="We don't just deliver boxes — we survey, install, train and support, so your equipment keeps caring for patients long after purchase."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <FadeIn key={value.title} delay={Math.min(index * 0.05, 0.2)} className="h-full">
              <SpotlightCard className="rounded-3xl border border-navy-100 bg-white p-6 h-full sm:p-7 shadow-[0_10px_30px_-18px_rgba(0,22,41,0.2)] transition-shadow duration-300 hover:shadow-[0_24px_50px_-20px_rgba(0,56,103,0.3)]">
                <span className="flex w-14 h-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 ring-1 ring-inset ring-primary-200/60">
                  <value.icon className="w-7 h-7 text-primary-600" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-navy">{value.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

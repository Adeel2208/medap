import { ArrowRight, ShieldCheck, Award, Building2 } from 'lucide-react'
import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'
import Eyebrow from '@/components/ui/Eyebrow'
import WordReveal from '@/components/ui/WordReveal'
import { site } from '@/data/site'

const heroBadges = [
  { icon: ShieldCheck, label: 'ISO Certified' },
  { icon: Award, label: 'DRAP Compliant' },
  { icon: Building2, label: `Since ${site.foundedYear}` },
]

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[560px] items-center overflow-hidden sm:min-h-[80vh] lg:min-h-[88vh]">
      {/* Background image */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/home.png"
          alt=""
          className="h-full w-full object-cover object-center"
        />
        {/* Readability overlays: strong white on the left fading to clear on the right,
            plus a soft top/bottom wash and a bottom fade into the page */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/20 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/30" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Content */}
          <div className="py-16 sm:py-20 lg:col-span-7 lg:py-24">
            <FadeIn>
              <Eyebrow>Trusted Medical Equipment, Caring for Life</Eyebrow>
            </FadeIn>

            <h1 className="mt-6 font-display text-[1.9rem] font-extrabold leading-[1.12] tracking-tight text-navy sm:text-5xl lg:text-6xl [text-shadow:0_1px_18px_rgba(255,255,255,0.8)]">
              <WordReveal
                text="Equipping Pakistan's hospitals with complete medical solutions"
                accent={['complete', 'medical', 'solutions']}
              />
            </h1>

            <FadeIn delay={0.5}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-700 [text-shadow:0_1px_12px_rgba(255,255,255,0.9)]">
                Electro-medical equipment, hospital furniture, surgical instruments, CSSD and medical
                gas systems — trusted by{' '}
                <span className="font-semibold text-navy">healthcare facilities nationwide</span> for
                world-class technology and dependable, lifelong service.
              </p>
            </FadeIn>

            <FadeIn delay={0.65}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-[#25a5b3] px-7 py-3.5 text-base font-semibold text-white shadow-[0_8px_24px_-8px_rgba(45,184,199,0.7)] transition-all duration-300 hover:shadow-[0_12px_30px_-8px_rgba(45,184,199,0.8)] hover:-translate-y-0.5"
                >
                  Explore our solutions
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy bg-white/80 px-7 py-3.5 text-base font-semibold text-navy backdrop-blur-sm transition-all duration-300 hover:bg-navy hover:text-white"
                >
                  Talk to our team
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.8}>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-700">
                {heroBadges.map((badge) => (
                  <span key={badge.label} className="inline-flex items-center gap-2 font-semibold">
                    <badge.icon className="h-4 w-4 text-primary" />
                    {badge.label}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}

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
    // Portrait phones get a fixed min-height rather than a vh value: `vh` on
    // mobile is measured against the *expanded* browser chrome, so a vh-based
    // hero jumps as the URL bar collapses on scroll.
    <section className="relative isolate flex min-h-[30rem] items-center overflow-hidden sm:min-h-[80vh] lg:min-h-[88vh]">
      {/* Background image */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/home.png"
          alt=""
          className="h-full w-full object-cover object-center"
        />
        {/* Mobile: the copy spans the full width, so the left-to-right wash would
            leave dark text sitting on a busy photo. Use a top-down wash instead —
            opaque behind the text, clearing towards the bottom of the image. */}
        <div
          className="absolute inset-0 sm:hidden"
          style={{
            background:
              'linear-gradient(to bottom, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.94) 45%, rgba(255,255,255,0.82) 70%, rgba(255,255,255,0.55) 88%, rgba(255,255,255,0.35) 100%)',
          }}
        />
        {/* Tablet and up: strong white on left for text, crystal clear on right for city icons */}
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            background: 'linear-gradient(to right, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 15%, rgba(255,255,255,0.88) 25%, rgba(255,255,255,0.72) 38%, rgba(255,255,255,0.48) 52%, rgba(255,255,255,0.24) 68%, rgba(255,255,255,0.08) 85%, transparent 100%)'
          }}
        />
        {/* Subtle top darkening for depth and contrast */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.03) 0%, transparent 20%)'
          }}
        />
        {/* Bottom area enhancement: light on left for text, completely clear on right for city icons */}
        <div 
          className="absolute inset-x-0 bottom-0 h-40"
          style={{
            background: 'linear-gradient(to top, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.15) 50%, transparent 100%), linear-gradient(to right, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.12) 35%, transparent 70%)'
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Content */}
          <div className="py-14 sm:py-20 lg:col-span-7 lg:py-24">
            <FadeIn>
              <Eyebrow>Creating Excellence in Healthcare Sector</Eyebrow>
            </FadeIn>

            <h1 className="mt-6 font-display text-[1.9rem] font-extrabold leading-[1.12] tracking-tight text-navy sm:text-5xl lg:text-6xl drop-shadow-[0_2px_8px_rgba(255,255,255,0.95)]">
              <WordReveal
                text="Equipping Pakistan's hospitals with advanced medical solutions"
                accent={['advanced', 'medical', 'solutions']}
              />
            </h1>

            <FadeIn delay={0.5}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-800 drop-shadow-[0_1px_4px_rgba(255,255,255,0.9)]">
                <span className="font-bold text-navy">
                  Medical Equipment · CSSD · MGPS · Hospital Furniture · Surgical Instruments
                </span>{' '}
                — your trusted partner for world-class healthcare solutions.
              </p>
            </FadeIn>

            <FadeIn delay={0.65}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:gap-3">
                <Link
                  href="/products"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-[#25a5b3] px-8 py-4 text-base font-bold text-white shadow-[0_10px_30px_-8px_rgba(45,184,199,0.75)] transition-all duration-300 hover:shadow-[0_14px_36px_-8px_rgba(45,184,199,0.85)] hover:-translate-y-0.5 hover:scale-[1.02]"
                >
                  Explore our solutions
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy bg-white/95 px-8 py-4 text-base font-bold text-navy backdrop-blur-sm shadow-[0_4px_16px_-4px_rgba(0,56,103,0.2)] transition-all duration-300 hover:bg-navy hover:text-white hover:shadow-[0_8px_24px_-4px_rgba(0,56,103,0.3)] hover:scale-[1.02]"
                >
                  Talk to our team
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.8}>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-gray-800">
                {heroBadges.map((badge) => (
                  <span key={badge.label} className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
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

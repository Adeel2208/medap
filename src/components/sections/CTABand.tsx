import Link from 'next/link'
import { Phone, ArrowRight, Building2, ShieldCheck, Headphones } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import DotGrid from '@/components/ui/DotGrid'
import { site } from '@/data/site'

const trustItems = [
  { icon: Building2, label: '500+ institutions served' },
  { icon: ShieldCheck, label: 'ISO Certified · DRAP Compliant' },
  { icon: Headphones, label: '24/7 after-sales support' },
]

export default function CTABand() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-20 sm:py-24">
      <DotGrid />
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#00223e] via-[#003867] to-[#00243f] px-6 py-16 shadow-[0_40px_80px_-40px_rgba(0,34,62,0.7)] sm:px-14 sm:py-20">
            {/* Grid texture */}
            <div className="absolute inset-0 bg-grid opacity-[0.35]" />
            {/* Teal corner glows */}
            <div
              className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full blur-3xl"
              style={{ background: 'radial-gradient(circle, rgba(45,184,199,0.28), transparent 70%)' }}
            />
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl"
              style={{ background: 'radial-gradient(circle, rgba(45,184,199,0.16), transparent 70%)' }}
            />

            <div className="relative mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to equip your facility for smarter care?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-primary-100/80">
                Talk to our specialists about turnkey solutions, equipment supply and dependable
                after-sales service tailored to your facility.
              </p>

              {/* Buttons */}
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-[#25a5b3] px-8 py-4 text-base font-semibold text-white shadow-[0_0_0_1px_rgba(45,184,199,0.4),0_12px_30px_-8px_rgba(45,184,199,0.7)] transition-all duration-300 hover:shadow-[0_0_0_1px_rgba(45,184,199,0.6),0_16px_40px_-8px_rgba(45,184,199,0.85)] hover:-translate-y-0.5"
                >
                  Request a consultation
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-navy shadow-lg transition-all duration-300 hover:bg-primary-50 hover:-translate-y-0.5"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  Call {site.phone}
                </a>
              </div>

              {/* Trust badge row */}
              <div className="mx-auto mt-12 max-w-2xl border-t border-white/10 pt-7">
                <ul className="flex flex-col items-center justify-center gap-x-8 gap-y-3 text-sm text-primary-100/75 sm:flex-row sm:flex-wrap">
                  {trustItems.map((item) => (
                    <li key={item.label} className="inline-flex items-center gap-2">
                      <item.icon className="h-4 w-4 text-primary-300" />
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

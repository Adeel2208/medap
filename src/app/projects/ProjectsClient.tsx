'use client'

import Image from 'next/image'
import { Building2, Landmark, ShieldCheck, ArrowRight } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import Eyebrow from '@/components/ui/Eyebrow'
import { clientSectors } from '@/data/clients'

const sectorMeta: Record<string, { icon: typeof Building2; tag: string }> = {
  'armed-forces': { icon: ShieldCheck, tag: 'Defence Healthcare' },
  'public-sector': { icon: Landmark, tag: 'Government & Teaching' },
  'private-sector': { icon: Building2, tag: 'Private Hospitals' },
}

export default function ProjectsClient() {
  return (
    <>
      {/* Sector overview cards */}
      <section className="relative isolate overflow-hidden bg-white py-20 sm:py-28">
        <div className="pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <FadeIn>
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <Eyebrow className="justify-center">Sectors We Serve</Eyebrow>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
                Trusted across every healthcare sector
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                From defence medical institutions to public teaching hospitals and leading private
                providers — MEDAP equipment is installed and serviced nationwide.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-6 lg:grid-cols-3">
            {clientSectors.map((s, index) => {
              const Icon = sectorMeta[s.id].icon
              return (
                <FadeIn key={s.id} delay={Math.min(index * 0.08, 0.24)} className="h-full">
                  <a
                    href={`#${s.id}`}
                    className="group flex h-full w-full flex-col rounded-3xl border border-primary-100 bg-white p-7 text-left shadow-[0_10px_30px_-20px_rgba(0,56,103,0.3)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-200 hover:shadow-[0_28px_55px_-24px_rgba(0,56,103,0.4)]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 ring-1 ring-inset ring-primary-200/60">
                        <Icon className="h-7 w-7 text-primary-600" strokeWidth={1.6} />
                      </span>
                      <span className="font-display text-4xl font-extrabold text-primary-600">
                        {s.logos.length}
                      </span>
                    </div>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-primary-600">
                      {sectorMeta[s.id].tag}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-bold text-navy">{s.label}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{s.blurb}</p>

                    {/* Logo preview strip */}
                    <div className="mt-6 flex items-center gap-2">
                      {s.logos.slice(0, 4).map((logo) => (
                        <span
                          key={logo}
                          className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-white p-1.5"
                        >
                          <Image src={logo} alt="" fill sizes="44px" className="object-contain" />
                        </span>
                      ))}
                      <span className="ml-1 text-sm font-semibold text-gray-500">
                        +{s.logos.length - 4} more
                      </span>
                    </div>

                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600">
                      View institutions
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </a>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* Full client gallery — every sector shown, one after another */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-primary-50/50 to-white py-20 sm:py-28">
        <div className="pointer-events-none absolute left-0 bottom-0 h-80 w-80 rounded-full bg-navy/5 blur-3xl" />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <FadeIn>
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <Eyebrow className="justify-center">Our Clients</Eyebrow>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
                Institutions that trust MEDAP
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-16">
            {clientSectors.map((s) => {
              const Icon = sectorMeta[s.id].icon
              return (
                <div key={s.id} id={s.id} className="scroll-mt-28">
                  {/* Sector header */}
                  <FadeIn>
                    <div className="mb-8 flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 ring-1 ring-inset ring-primary-200/60">
                        <Icon className="h-6 w-6 text-primary-600" strokeWidth={1.6} />
                      </span>
                      <div>
                        <h3 className="font-display text-2xl font-bold text-navy">{s.label}</h3>
                        <p className="text-sm text-gray-500">{s.blurb}</p>
                      </div>
                      <span className="ml-auto shrink-0 rounded-full bg-primary-50 px-4 py-1.5 text-sm font-bold text-primary-700 ring-1 ring-inset ring-primary-100">
                        {s.logos.length} institutions
                      </span>
                    </div>
                  </FadeIn>

                  {/* Logo grid */}
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {s.logos.map((logo, index) => (
                      <FadeIn key={logo} delay={Math.min(index * 0.015, 0.3)}>
                        <div className="group flex h-24 items-center justify-center rounded-2xl border border-primary-100 bg-white p-4 shadow-[0_10px_30px_-20px_rgba(0,56,103,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-[0_20px_40px_-20px_rgba(0,56,103,0.35)]">
                          <div className="relative h-full w-full">
                            <Image
                              src={logo}
                              alt={`${s.label} client`}
                              fill
                              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 160px"
                              className="object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

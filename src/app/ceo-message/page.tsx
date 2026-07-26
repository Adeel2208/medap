import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Quote, ArrowRight } from 'lucide-react'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeIn from '@/components/ui/FadeIn'
import DotGrid from '@/components/ui/DotGrid'
import CTABand from '@/components/sections/CTABand'
import { site, leadership } from '@/data/site'
import { categories } from '@/data/categories'
import { totalClientCount } from '@/data/clients'

const ceo = leadership[0]
const yearsOfService = new Date().getFullYear() - site.foundedYear

export const metadata: Metadata = {
  title: 'CEO Message',
  description: `A message from ${ceo.name}, ${ceo.role} of ${site.name}, on ${yearsOfService} years of equipping Pakistan's hospitals and the philosophy of Caring for Life.`,
}

export default function CEOMessagePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/60 via-white to-white border-b border-primary-100/60">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 py-12 lg:py-16">
          <Breadcrumb items={[{ name: 'About', href: '/about' }, { name: 'CEO Message' }]} />
          <FadeIn>
            <div className="mt-8 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                From the Founder&apos;s Desk
              </p>
              <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-navy">
                {yearsOfService} years of caring for life
              </h1>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                {ceo.name} on why MEDAP was founded, what has changed since {site.foundedYear}, and the
                one commitment that never will.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Letter */}
      <section className="relative isolate overflow-hidden bg-white py-16 lg:py-24">
        <DotGrid />
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Signature card */}
            <aside className="lg:col-span-4">
              <FadeIn>
                <div className="lg:sticky lg:top-28 overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-[0_20px_50px_-30px_rgba(0,22,41,0.35)]">
                  {ceo.image ? (
                    <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-primary-50 to-navy-50">
                      <Image
                        src={ceo.image}
                        alt={`${ceo.name}, ${ceo.role}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover object-top"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#00223e]/85 via-transparent to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-6">
                        <h2 className="font-display text-2xl font-bold text-white [text-shadow:0_1px_8px_rgba(0,22,41,0.6)]">
                          {ceo.name}
                        </h2>
                        <p className="mt-0.5 text-sm font-semibold text-primary-200">{ceo.role}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="p-7">
                      <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 font-display text-2xl font-extrabold text-primary-700 ring-1 ring-inset ring-primary-200/60">
                        {ceo.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </span>
                      <h2 className="mt-5 font-display text-2xl font-bold text-navy">{ceo.name}</h2>
                      <p className="mt-1 text-sm font-semibold text-primary-600">{ceo.role}</p>
                    </div>
                  )}
                  <div className="p-7 pt-6">
                  <p className="text-sm leading-relaxed text-gray-600">{ceo.bio}</p>

                  <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-navy-100 pt-6">
                    <div>
                      <dt className="text-xs text-gray-500">Founded</dt>
                      <dd className="font-display text-xl font-bold text-navy">{site.foundedYear}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-gray-500">Solution families</dt>
                      <dd className="font-display text-xl font-bold text-navy">{categories.length}</dd>
                    </div>
                  </dl>
                  </div>
                </div>
              </FadeIn>
            </aside>

            {/* Letter body */}
            <div className="lg:col-span-8">
              <FadeIn delay={0.1}>
                <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-gray-700">
                  <p className="text-xl font-medium text-navy">
                    When I started MEDAP International in {site.foundedYear}, I had one conviction: a
                    hospital should never have to wonder whether its equipment will work when a
                    patient needs it most.
                  </p>

                  <p>
                    At that time, too many institutions in Pakistan were buying equipment from
                    suppliers who disappeared the moment the invoice was paid. A monitor would fail,
                    a sterilizer would go out of calibration, a spare part would take months to
                    arrive — and it was always the patient who paid the price. I believed we could do
                    better, and that a Pakistani company could hold itself to the same standard as
                    the manufacturers we represent.
                  </p>

                  <p>
                    That belief shaped everything that followed. We chose to partner only with
                    manufacturers whose quality we could personally stand behind — companies like
                    General Meditech, Being Technology, Saikang Medical, Bicakcilar and Shenzhen
                    Medrena. We built our own team of engineers rather than outsourcing service. And
                    we made a rule that still governs us today: we do not sell anything we cannot
                    support for its entire working life.
                  </p>

                  {/* Pull quote */}
                  <figure className="relative my-10 rounded-3xl bg-gradient-to-r from-[#003867] to-[#004a6b] p-8 sm:p-10 overflow-hidden">
                    <div className="pointer-events-none absolute -left-16 -top-16 h-52 w-52 rounded-full bg-primary/25 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-16 -right-16 h-52 w-52 rounded-full bg-primary/15 blur-3xl" />
                    <Quote className="relative h-8 w-8 text-primary-300" />
                    <blockquote className="relative mt-4">
                      <p className="font-display text-xl sm:text-2xl font-semibold leading-snug text-white">
                        Behind every device we install is a patient we will never meet. That is the
                        whole reason this company exists.
                      </p>
                    </blockquote>
                  </figure>

                  <p>
                    Over three and a half decades, that approach has taken us into operating theatres,
                    intensive care units, neonatal nurseries, sterile processing departments and
                    medical gas plants across the country. Today MEDAP serves {totalClientCount}+
                    institutions — Combined Military Hospitals and defence facilities, public
                    teaching hospitals and district headquarters, and many of Pakistan&apos;s leading
                    private providers. We supply {categories.length} complete solution families,
                    covering a hospital from its delivery room to its central sterile services
                    department.
                  </p>

                  <p>
                    The business has also become a family one. My sons,{' '}
                    <strong className="font-semibold text-navy">{leadership[1].name}</strong> and{' '}
                    <strong className="font-semibold text-navy">{leadership[2].name}</strong>, now
                    lead our manufacturer partnerships and our nationwide operations. Watching them
                    hold to the same standards I set in {site.foundedYear} — often more rigorously
                    than I did — has been the greatest reassurance of my career.
                  </p>

                  <p>
                    What has not changed, and will not, is our philosophy:{' '}
                    <strong className="font-semibold text-navy">{site.tagline}</strong>. It is not a
                    slogan we chose for marketing. It is a reminder that our work is measured in
                    outcomes we rarely see — a resuscitation that succeeded, a newborn who stabilised
                    in an incubator, a surgery that finished without incident because the theatre
                    light never flickered.
                  </p>

                  <p>
                    To every institution that has trusted us with that responsibility: thank you. To
                    those considering us for the first time: come and test us. Ask about our response
                    times, our spare parts availability, our engineers. We would rather earn your
                    confidence slowly than win a single order quickly.
                  </p>

                  {/* Signature */}
                  <div className="mt-10 border-t border-navy-100 pt-8">
                    <p className="font-display text-2xl text-navy" style={{ fontStyle: 'italic' }}>
                      {ceo.name}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      {ceo.role} — {site.name}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-2">
                    <Link
                      href="/about"
                      className="group inline-flex items-center gap-2 text-base font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      Learn about our company
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}

import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock, MessageCircle, Building2 } from 'lucide-react'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeIn from '@/components/ui/FadeIn'
import ContactForm from '@/components/sections/ContactForm'
import { site, offices } from '@/data/site'

export const metadata: Metadata = {
  title: 'Contact Us — Request a Quote or Consultation',
  description:
    'Contact MEDAP International for medical equipment quotations, site surveys and after-sales support. Call, email or WhatsApp our team in Lahore, Pakistan.',
}

const contactMethods = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: [site.address],
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: [site.phone, site.phoneSecondary],
    href: site.phoneHref,
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: [site.email, site.emailSecondary],
    href: site.emailHref,
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: [site.hours],
  },
]

export default function ContactPage({ searchParams }: { searchParams?: { category?: string } }) {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-primary-100/60">
        {/* Background image */}
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          {/* Subject sits in the right third of the artwork; a portrait crop
              centred on the image lands on empty space, so anchor it right. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/contact.webp"
            alt=""
            decoding="async"
            className="h-full w-full object-cover object-right sm:object-center"
          />
          {/* Mobile: the copy spans the full width, so wash top-down over the crop */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white/35 sm:hidden" />
          {/* Tablet+: strong white on the left fading clear on the right */}
          <div className="absolute inset-0 hidden bg-gradient-to-r from-white via-white/60 to-transparent sm:block" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 py-16 sm:py-20 lg:py-28 [text-shadow:0_1px_14px_rgba(255,255,255,0.85)]">
          <Breadcrumb items={[{ name: 'Contact' }]} />
          <FadeIn>
            <div className="mt-8 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                Get in Touch
              </p>
              <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight">
                Let&apos;s build better care together
              </h1>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                Whether you need equipment, a turnkey project or after-sales support, our specialists
                are ready to help.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5 lg:gap-12">
            {/* Contact methods */}
            <div className="lg:col-span-2 space-y-4">
              {contactMethods.map((method, index) => (
                <FadeIn key={method.title} delay={Math.min(index * 0.05, 0.2)}>
                  <div className="flex gap-4 rounded-xl border border-gray-200 p-5">
                    <span className="w-11 h-11 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                      <method.icon className="w-5 h-5 text-primary" />
                    </span>
                    <div className="min-w-0 break-words">
                      <h2 className="font-bold text-navy">{method.title}</h2>
                      {method.lines.map((line) =>
                        method.href ? (
                          <a
                            key={line}
                            href={method.href}
                            className="mt-1 block py-1 text-sm text-gray-600 transition-colors hover:text-primary"
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={line} className="text-sm text-gray-600 mt-1">
                            {line}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}

              <FadeIn delay={0.25}>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#1fb457] text-white font-semibold px-5 py-4 text-center text-sm sm:px-6 sm:text-base transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp us — {site.whatsapp}
                </a>
              </FadeIn>
            </div>

            {/* Form */}
            <FadeIn className="lg:col-span-3" delay={0.1}>
              <div className="rounded-xl border border-gray-200 p-6 lg:p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-navy mb-1">Request a Quote</h2>
                <p className="text-gray-600 mb-6">We usually respond within one business day.</p>
                <ContactForm defaultCategory={searchParams?.category} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our offices */}
      <section className="relative isolate overflow-hidden bg-white py-16 sm:py-20 border-t border-primary-100/60">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <FadeIn>
            <div className="mb-10 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                Our Offices
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold text-navy sm:text-3xl">
                Nationwide presence, local support
              </h2>
              <p className="mt-2 text-gray-600">
                A head office in Lahore with branch offices extending our reach across Pakistan.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            {offices.map((office, index) => (
              <FadeIn key={office.name} delay={Math.min(index * 0.06, 0.2)} className="h-full">
                <div
                  className={
                    'flex h-full flex-col rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7 ' +
                    (office.isHead
                      ? 'border-primary-200 bg-gradient-to-br from-primary-50/70 to-white shadow-[0_18px_45px_-28px_rgba(0,56,103,0.4)]'
                      : 'border-primary-100 bg-white shadow-[0_10px_30px_-20px_rgba(0,56,103,0.3)] hover:shadow-[0_24px_50px_-24px_rgba(0,56,103,0.35)]')
                  }
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 ring-1 ring-inset ring-primary-200/60">
                      <Building2 className="h-5 w-5 text-primary-600" strokeWidth={1.7} />
                    </span>
                    {office.isHead && (
                      <span className="rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                        Head Office
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy">{office.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{office.address}</p>
                  <div className="mt-4 space-y-1.5 border-t border-primary-100 pt-4 text-sm text-gray-600">
                    {office.isHead && (
                      <p className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary-500" />
                        {site.phone} · {site.phoneSecondary}
                      </p>
                    )}
                    <p className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary-500" />
                      {site.hours}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Live map */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-white to-primary-50/40 pb-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <FadeIn>
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                  Find Us
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-navy sm:text-3xl">
                  Visit our Lahore office
                </h2>
                <p className="mt-2 max-w-xl text-gray-600">{site.address}</p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=MEDAP+International+Sharf+Mansion+Shahrah-e-Fatima+Jinnah+Lahore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-navy px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
              >
                <MapPin className="h-4 w-4" />
                Open in Google Maps
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="overflow-hidden rounded-3xl border border-primary-100 shadow-[0_24px_60px_-30px_rgba(0,56,103,0.35)]">
              <iframe
                title="MEDAP International location on Google Maps"
                src="https://www.google.com/maps?q=MEDAP%20International%2C%20Sharf%20Mansion%2C%20Shahrah-e-Fatima%20Jinnah%2C%20Lahore&output=embed"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="block h-[20rem] w-full sm:h-[24rem] lg:h-[27.5rem]"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

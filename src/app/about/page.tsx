import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Target, Eye, Users } from 'lucide-react'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeIn from '@/components/ui/FadeIn'
import SectionHeader from '@/components/ui/SectionHeader'
import SpotlightCard from '@/components/ui/SpotlightCard'
import DotGrid from '@/components/ui/DotGrid'
import CountUp from '@/components/ui/CountUp'
import VideoBackground from '@/components/ui/VideoBackground'
import CTABand from '@/components/sections/CTABand'
import WhyMedap from '@/components/sections/WhyMedap'
import JourneyTimeline from '@/components/sections/JourneyTimeline'
import Interactions from '@/components/sections/Interactions'
import { site, stats, leadership } from '@/data/site'
import { categories } from '@/data/categories'
import { totalClientCount } from '@/data/clients'

export const metadata: Metadata = {
  title: 'About Us — A Legacy of Care Since 1990',
  description:
    'MEDAP International has supplied and serviced medical equipment for Pakistan\'s hospitals since 1990 — electro-medical devices, hospital furniture, surgical instruments and medical gas systems.',
}

const pillars = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To provide completely reliable, high-quality medical equipment and services that help Pakistan\'s healthcare institutions deliver safer, better patient care.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'To be Pakistan\'s most trusted single-source partner for hospital equipment — from planning and supply to lifetime service.',
  },
  {
    icon: Users,
    title: 'Our Team',
    description:
      'Experienced biomedical engineers, project managers and product specialists organised by expertise, backed by trusted global manufacturers.',
  },
]

// To add a photo to a milestone, drop the file into /public/journey/ and
// uncomment its `image` line below. Milestones without an image show a branded
// year panel instead, so the layout stays clean until photos are supplied.
const timeline = [
  {
    year: '1990',
    title: 'Founded in Lahore',
    description:
      'MEDAP International begins supplying medical equipment and hospital furniture to healthcare institutions in Punjab.',
    image: '/journey/1990.jpeg',
  },
  {
    year: '2000s',
    title: 'CSSD Projects',
    description:
      'Expanded into comprehensive Central Sterile Services Department (CSSD) solutions for new hospital projects — providing complete design, supply, installation, testing, commissioning and validation services.',
    image: '/journey/2000.png',
  },
  {
    year: '2010s',
    title: 'Full Clinical Portfolio',
    description:
      'Expanded into MGPS, Modular Operation Theatres, CSSD and Critical Care Solutions — becoming a trusted single-source partner for complete hospital infrastructure and medical equipment projects.',
    image: '/journey/2010.png',
  },
  {
    year: 'Today',
    title: 'Nationwide, across every sector',
    description:
      'Serving the Armed Forces, public and private hospitals across Pakistan with an expanded portfolio of leading healthcare manufacturers and products — backed by expert supply, installation, training and after-sales support.',
    image: '/journey/today.png',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <VideoBackground
          src="/about.mp4"
          overlayClassName="bg-[linear-gradient(to_right,rgba(0,34,62,0.88)_0%,rgba(0,56,103,0.55)_28%,rgba(0,56,103,0.15)_48%,transparent_65%)]"
        />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 py-20 lg:py-28">
          <Breadcrumb items={[{ name: 'About' }]} dark />
          <FadeIn>
            <div className="mt-8 max-w-3xl [text-shadow:0_2px_12px_rgba(0,22,41,0.55)]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-200">
                A legacy of care since {site.foundedYear}
              </p>
              <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
                About MEDAP International
              </h1>
              <p className="mt-4 text-lg text-white/90 leading-relaxed">
                Founded in {site.foundedYear}, MEDAP International is a Pakistan-based healthcare
                solutions company supplying electro-medical equipment, medical gas systems, hospital
                furniture, CSSD solutions and surgical instruments — combining reliable products with
                responsive after-sales service, training and nationwide support.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Metrics */}
      <section className="relative z-10 -mt-8">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <FadeIn>
            <dl className="grid grid-cols-2 gap-4 rounded-3xl border border-primary-100 bg-gradient-to-br from-white via-primary-50/50 to-white p-6 shadow-[0_24px_60px_-30px_rgba(0,56,103,0.3)] sm:p-8 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-1 px-2 py-3 text-center">
                  <dd className="font-display text-4xl font-extrabold text-primary-600 sm:text-5xl">
                    <CountUp value={stat.value} />
                  </dd>
                  <dt className="text-sm font-medium text-gray-500">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </section>

      {/* Story + pillars */}
      <section className="relative isolate overflow-hidden bg-white py-16 lg:py-24">
        <DotGrid />
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Narrative */}
            <div className="lg:col-span-5">
              <FadeIn>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                  Who We Are
                </p>
                <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
                  A single source for the whole hospital
                </h2>
                <div className="mt-5 space-y-4 leading-relaxed text-gray-600">
                  <p>
                    For over three decades we have equipped Pakistan&apos;s hospitals across{' '}
                    <strong className="font-semibold text-navy">{categories.length} solution families</strong>{' '}
                    — from the operating theatre and intensive care unit to the neonatal nursery,
                    sterile services department and medical gas plant.
                  </p>
                  <p>
                    That breadth means a hospital can plan an entire department with one partner,
                    one point of accountability and one team of engineers — rather than coordinating
                    a dozen suppliers who each disappear after delivery.
                  </p>
                  <p>
                    Today MEDAP serves{' '}
                    <strong className="font-semibold text-navy">{totalClientCount}+ institutions</strong>{' '}
                    spanning armed forces facilities, public teaching hospitals and leading private
                    providers.
                  </p>
                </div>
                <Link
                  href="/products"
                  className="group mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(45,184,199,0.7)] transition-all duration-300 hover:bg-primary-600 hover:-translate-y-0.5"
                >
                  Explore our solutions
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </FadeIn>
            </div>

            {/* Pillars */}
            <div className="lg:col-span-7">
              <div className="grid gap-5 sm:grid-cols-2">
                {pillars.map((item, index) => (
                  <FadeIn
                    key={item.title}
                    delay={Math.min(index * 0.06, 0.2)}
                    className={index === 2 ? 'sm:col-span-2' : undefined}
                  >
                    <SpotlightCard className="h-full rounded-3xl border border-navy-100 bg-white p-6 sm:p-7 shadow-[0_10px_30px_-18px_rgba(0,22,41,0.2)] transition-shadow duration-300 hover:shadow-[0_24px_50px_-20px_rgba(0,56,103,0.3)]">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 ring-1 ring-inset ring-primary-200/60">
                        <item.icon className="h-7 w-7 text-primary-600" strokeWidth={1.6} />
                      </span>
                      <h3 className="mt-5 font-display text-xl font-bold text-navy">{item.title}</h3>
                      <p className="mt-2.5 leading-relaxed text-gray-600">{item.description}</p>
                    </SpotlightCard>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-primary-50/50 to-white py-20 sm:py-24">
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <SectionHeader
            eyebrow="Our Journey"
            title={`From ${site.foundedYear} to today`}
            subtitle="Three decades of steady growth alongside Pakistan's healthcare system."
          />
          <JourneyTimeline milestones={timeline} />
        </div>
      </section>

      {/* Leadership */}
      <section className="relative isolate overflow-hidden bg-white py-16 lg:py-24">
        <DotGrid />
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <SectionHeader
            eyebrow="Leadership"
            title="Guided by three generations of experience"
            subtitle="A family-led business that has grown alongside Pakistan's healthcare system."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {leadership.map((leader, index) => (
              <FadeIn key={leader.name} delay={Math.min(index * 0.06, 0.2)} className="h-full">
                <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-[0_10px_30px_-18px_rgba(0,22,41,0.25)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_55px_-24px_rgba(0,56,103,0.4)]">
                  {/* Portrait */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-primary-50 to-navy-50">
                    {leader.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={leader.image}
                        alt={`${leader.name}, ${leader.role}`}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center font-display text-5xl font-extrabold text-primary-200">
                        {leader.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </div>
                    )}
                    {/* Navy scrim + name overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00223e]/90 via-[#00223e]/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3 className="font-display text-xl font-bold text-white [text-shadow:0_1px_8px_rgba(0,22,41,0.6)]">
                        {leader.name}
                      </h3>
                      <p className="text-sm font-semibold text-primary-200">{leader.role}</p>
                    </div>
                  </div>
                  {/* Bio */}
                  <div className="flex flex-1 flex-col p-6">
                    <span className="mb-3 h-1 w-10 rounded-full bg-gradient-to-r from-primary to-[#25a5b3]" />
                    <p className="text-sm leading-relaxed text-gray-600">{leader.bio}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div className="mt-10 text-center">
              <Link
                href="/ceo-message"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
              >
                Read the full CEO message
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Interactions />
      <WhyMedap />
      <CTABand />
    </>
  )
}

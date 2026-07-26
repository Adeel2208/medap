import type { Metadata } from 'next'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeIn from '@/components/ui/FadeIn'
import CountUp from '@/components/ui/CountUp'
import VideoBackground from '@/components/ui/VideoBackground'
import CTABand from '@/components/sections/CTABand'
import ProjectsClient from './ProjectsClient'
import { site } from '@/data/site'
import { totalClientCount, clientSectors } from '@/data/clients'
import { categories } from '@/data/categories'

const yearsOfService = new Date().getFullYear() - site.foundedYear

export const metadata: Metadata = {
  title: 'Projects — Healthcare Institutions We Serve',
  description: `MEDAP International has delivered medical equipment projects to ${totalClientCount}+ institutions across Pakistan — defence, public and private healthcare, since ${site.foundedYear}.`,
}

const impact = [
  { value: `${totalClientCount}+`, label: 'Institutions Served' },
  { value: `${clientSectors.length}`, label: 'Healthcare Sectors' },
  { value: `${categories.length}`, label: 'Solution Families' },
  { value: `${yearsOfService}+`, label: 'Years Delivering' },
]

export default function ProjectsPage() {
  return (
    <>
      {/* Hero with video background */}
      <section className="relative isolate overflow-hidden">
        <VideoBackground
          src="/background_video.mp4"
          overlayClassName="bg-[linear-gradient(to_right,rgba(0,34,62,0.9)_0%,rgba(0,56,103,0.6)_28%,rgba(0,56,103,0.18)_48%,transparent_65%)]"
        />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 py-20 lg:py-28">
          <Breadcrumb items={[{ name: 'Projects' }]} dark />
          <FadeIn>
            <div className="mt-8 max-w-3xl [text-shadow:0_2px_14px_rgba(0,22,41,0.7)]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-200">
                Delivered across every healthcare sector
              </p>
              <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight text-white">
                Our Projects
              </h1>
              <p className="mt-4 text-lg text-white/90 leading-relaxed">
                For over three decades, MEDAP has equipped hospitals across the full breadth of
                Pakistan&apos;s healthcare system — supplying, installing and servicing critical
                medical technology for {totalClientCount}+ institutions nationwide.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Impact stats — overlapping card */}
      <section className="relative z-10 -mt-10">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <FadeIn>
            <dl className="grid grid-cols-2 gap-4 rounded-3xl border border-primary-100 bg-gradient-to-br from-white via-primary-50/50 to-white p-6 shadow-[0_24px_60px_-30px_rgba(0,56,103,0.3)] sm:p-8 lg:grid-cols-4">
              {impact.map((stat) => (
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

      <ProjectsClient />

      <CTABand />
    </>
  )
}

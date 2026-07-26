import Image from 'next/image'
import FadeIn from '@/components/ui/FadeIn'
import SectionHeader from '@/components/ui/SectionHeader'
import DotGrid from '@/components/ui/DotGrid'
import { principalLogos, principalBrands } from '@/data/clients'

export default function Partners() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-20 sm:py-24">
      <DotGrid />
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Our Principals"
          title="World-class manufacturers, local expertise"
          subtitle="We are the authorised partner for leading international medical technology brands — and back every one of them with nationwide service and support."
        />

        <FadeIn>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {principalLogos.map((logo, index) => (
              <div
                key={logo}
                className="group flex h-28 items-center justify-center rounded-2xl border border-navy-100 bg-white p-6 shadow-[0_10px_30px_-18px_rgba(0,22,41,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-[0_24px_50px_-20px_rgba(0,56,103,0.3)]"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={logo}
                    alt={principalBrands[index] ?? 'Principal manufacturer logo'}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 220px"
                    className="object-contain grayscale opacity-80 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {principalBrands.map((brand) => (
              <span
                key={brand}
                className="rounded-full border border-navy-100 bg-navy-50/60 px-3.5 py-1.5 text-xs font-medium text-navy-600"
              >
                {brand}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

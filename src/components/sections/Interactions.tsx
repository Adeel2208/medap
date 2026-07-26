import Image from 'next/image'
import FadeIn from '@/components/ui/FadeIn'
import SectionHeader from '@/components/ui/SectionHeader'
import DotGrid from '@/components/ui/DotGrid'
import { interactions } from '@/data/interactions'

export default function Interactions() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-white via-primary-50/40 to-white py-20 sm:py-28">
      <DotGrid />
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Beyond the Boardroom"
          title="Conferences, partnerships & our people"
          subtitle="From international medical conferences to on-site visits with our principal manufacturers — how MEDAP stays connected to the world's best in healthcare technology."
        />

        {/* Uniform tiles in an even grid — every card is the same height, so no
            column is ever left short and there is no trailing empty space. */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {interactions.map((item, index) => (
            <FadeIn key={item.image} delay={Math.min(index * 0.04, 0.3)}>
              <figure className="group relative aspect-square overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-[0_10px_30px_-20px_rgba(0,56,103,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(0,56,103,0.4)]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00223e]/85 via-[#00223e]/10 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="font-display text-sm font-bold leading-tight text-white [text-shadow:0_1px_8px_rgba(0,22,41,0.6)]">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-primary-100/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {item.caption}
                  </p>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

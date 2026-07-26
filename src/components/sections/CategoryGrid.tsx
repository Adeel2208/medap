import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import SpotlightCard from '@/components/ui/SpotlightCard'
import { categories } from '@/data/categories'
import { categoryIcons } from '@/components/icons/categoryIcons'

export default function CategoryGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category, index) => {
        const Icon = categoryIcons[category.id]
        return (
          <FadeIn key={category.id} delay={Math.min(index * 0.05, 0.3)} className="h-full">
            <Link href={`/products/${category.id}`} className="group block h-full">
              <SpotlightCard className="flex h-full flex-col rounded-3xl border border-navy-100 bg-white p-4 shadow-[0_10px_30px_-18px_rgba(0,22,41,0.25)] transition-shadow duration-300 group-hover:shadow-[0_24px_50px_-20px_rgba(0,56,103,0.35)]">
                <div className="flex h-full flex-col">
                  {/* Image header — clean, bright, no dark shade */}
                  <div className="relative h-44 overflow-hidden rounded-2xl bg-gradient-to-br from-primary-50/70 via-white to-primary-50/70">
                    {/* subtle dot texture, very light */}
                    <span
                      className="pointer-events-none absolute inset-0 opacity-[0.05]"
                      style={{
                        backgroundImage: 'radial-gradient(circle, #003867 1px, transparent 1.6px)',
                        backgroundSize: '18px 18px',
                      }}
                    />
                    {category.image && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        alt={category.title}
                        src={category.image}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-110"
                      />
                    )}
                    {/* Icon chip — light teal, sits on the bright backdrop without darkening the device */}
                    <div className="absolute bottom-3 left-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-primary-600 shadow-sm ring-1 ring-inset ring-primary-100 backdrop-blur-sm">
                        <Icon className="h-6 w-6" strokeWidth={1.6} />
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col px-3 pb-2 pt-5">
                    <h3 className="font-display text-xl font-bold text-navy group-hover:text-primary-600 transition-colors">
                      {category.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-gray-600">{category.description}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-primary-600">
                      Explore {category.products.length} products
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </SpotlightCard>
            </Link>
          </FadeIn>
        )
      })}
    </div>
  )
}

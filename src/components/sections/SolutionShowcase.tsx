'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import DotGrid from '@/components/ui/DotGrid'
import { categories } from '@/data/categories'
import { categoryIcons } from '@/components/icons/categoryIcons'
import { cn } from '@/lib/utils'

/**
 * Interactive department explorer: pick a hospital department on the left,
 * see its equipment and a representative photo on the right.
 */
export default function SolutionShowcase() {
  const [active, setActive] = useState(categories[0].id)
  const category = categories.find((c) => c.id === active) ?? categories[0]
  const Icon = categoryIcons[category.id]

  return (
    <section className="relative isolate overflow-hidden bg-gray-50 py-20 sm:py-28">
      <DotGrid />
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Explore by Department"
          title="Equipment for every corner of your hospital"
          subtitle="Select a department to see what we supply, install and service there."
        />

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Department list.
              min-w-0 is load-bearing: a grid item defaults to `min-width: auto`,
              so this column refuses to shrink below the min-content width of the
              tab row inside it (7 shrink-0 chips with whitespace-nowrap labels,
              ~1845px). That stretched the single-column track below `lg` and blew
              both columns far past the viewport — invisible until you lift the
              overflow-x:hidden on <body>, which was clipping it into half-images. */}
          <div className="min-w-0 lg:col-span-4">
            {/* Below lg this is a swipeable strip. The negative margin lets it
                bleed to the screen edges (so the last chip isn't cut off mid-card)
                while the matching padding keeps the first chip aligned to the grid. */}
            <div className="no-scrollbar touch-scroll-x -mx-5 flex snap-x snap-mandatory gap-2 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0">
              {categories.map((c) => {
                const CIcon = categoryIcons[c.id]
                const isActive = c.id === active
                return (
                  <button
                    key={c.id}
                    onClick={() => setActive(c.id)}
                    aria-pressed={isActive}
                    className={cn(
                      'relative flex shrink-0 snap-start items-center gap-3 rounded-2xl px-4 py-3.5 text-left transition-colors lg:w-full',
                      isActive ? 'text-white' : 'text-navy hover:bg-white'
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="dept-pill"
                        className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-[#003867] to-[#004a6b] shadow-lg"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span
                      className={cn(
                        'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors',
                        isActive
                          ? 'bg-white/15 text-primary-300 ring-1 ring-inset ring-white/25'
                          : 'bg-primary-50 text-primary-600'
                      )}
                    >
                      <CIcon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <span className="min-w-0">
                      <span className="block whitespace-nowrap text-sm font-semibold lg:whitespace-normal">
                        {c.shortTitle}
                      </span>
                      <span className={cn('block text-xs', isActive ? 'text-white/60' : 'text-gray-500')}>
                        {c.products.length} products
                      </span>
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Detail panel */}
          <div className="min-w-0 lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-[0_20px_50px_-30px_rgba(0,22,41,0.35)]"
              >
                {/* Photo header — clean device on a bright backdrop, no dark shade */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-50/70 via-white to-primary-50/70 sm:h-56">
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
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  )}
                </div>
                {/* Title bar below the image */}
                <div className="flex items-center gap-4 border-b border-navy-100 px-6 py-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 text-primary-600 ring-1 ring-inset ring-primary-200/60">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl font-bold text-navy sm:text-2xl">{category.title}</h3>
                    <p className="mt-0.5 line-clamp-1 text-sm text-gray-500">{category.description}</p>
                  </div>
                </div>

                {/* Product list */}
                <div className="p-6 sm:p-7">
                  <p className="text-sm leading-relaxed text-gray-600">{category.longDescription}</p>

                  <ul className="mt-5 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                    {category.products.slice(0, 8).map((product) => (
                      <li key={product.name} className="flex items-start gap-2 text-sm text-navy">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="min-w-0">{product.name}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-navy-100 pt-5">
                    <Link
                      href={`/products/${category.id}`}
                      className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(45,184,199,0.7)] transition-all duration-300 hover:bg-primary-600 hover:-translate-y-0.5"
                    >
                      View all {category.products.length} products
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <Link
                      href={`/contact?category=${category.id}`}
                      className="inline-block py-1.5 text-sm font-semibold text-navy transition-colors hover:text-primary-600"
                    >
                      Request a quote →
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

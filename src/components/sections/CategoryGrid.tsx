import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import SpotlightCard from '@/components/ui/SpotlightCard'
import { categories, type Category } from '@/data/categories'
import { categoryIcons } from '@/components/icons/categoryIcons'
import { cn } from '@/lib/utils'

function CategoryCard({ category, featured = false }: { category: Category; featured?: boolean }) {
  const Icon = categoryIcons[category.id]
  return (
    <Link href={`/products/${category.id}`} className="group block h-full">
      <SpotlightCard
        className={cn(
          'flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-[0_10px_30px_-18px_rgba(0,22,41,0.25)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-200 hover:shadow-[0_28px_55px_-22px_rgba(0,56,103,0.4)]',
          featured && 'sm:flex-row'
        )}
      >
        {/* Image */}
        <div
          className={cn(
            'relative overflow-hidden bg-gradient-to-br from-primary-50/70 via-white to-primary-50/70',
            featured ? 'h-56 sm:h-auto sm:w-1/2' : 'h-44'
          )}
        >
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
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
          )}
          {/* Product-count badge */}
          <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-primary-700 shadow-sm ring-1 ring-inset ring-primary-100 backdrop-blur-sm">
            {category.products.length} products
          </span>
          {/* Icon chip */}
          <div className="absolute bottom-3 left-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[#25a5b3] text-white shadow-lg shadow-primary/30">
              <Icon className="h-6 w-6" strokeWidth={1.6} />
            </div>
          </div>
        </div>

        {/* Body */}
        <div className={cn('flex flex-1 flex-col p-6', featured && 'sm:justify-center sm:p-8')}>
          {featured && (
            <span className="mb-3 inline-flex w-fit items-center rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-700">
              Featured Solution
            </span>
          )}
          <h3
            className={cn(
              'font-display font-bold text-navy transition-colors group-hover:text-primary-600',
              featured ? 'text-2xl lg:text-3xl' : 'text-xl'
            )}
          >
            {category.title}
          </h3>
          <p className={cn('mt-2.5 leading-relaxed text-gray-600', featured ? 'text-base' : 'text-sm')}>
            {featured ? category.longDescription : category.description}
          </p>
          <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-primary-600">
            Explore {category.products.length} products
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </SpotlightCard>
    </Link>
  )
}

export default function CategoryGrid() {
  const [featured, ...rest] = categories
  return (
    <div className="space-y-6">
      {/* Featured hero tile */}
      <FadeIn>
        <CategoryCard category={featured} featured />
      </FadeIn>

      {/* Remaining categories in a 3-column grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((category, index) => (
          <FadeIn key={category.id} delay={Math.min(index * 0.05, 0.3)} className="h-full">
            <CategoryCard category={category} />
          </FadeIn>
        ))}
      </div>
    </div>
  )
}

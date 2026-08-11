import Link from 'next/link'
import { ArrowRight, ArrowUpRight, ShieldCheck } from 'lucide-react'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeIn from '@/components/ui/FadeIn'
import Button from '@/components/ui/Button'
import SpotlightCard from '@/components/ui/SpotlightCard'
import DotGrid from '@/components/ui/DotGrid'
import CTABand from '@/components/sections/CTABand'
import { Category, categories } from '@/data/categories'
import { categoryIcons } from '@/components/icons/categoryIcons'

export default function CategoryPage({ category }: { category: Category }) {
  const Icon = categoryIcons[category.id]
  const related = categories.filter((c) => c.id !== category.id).slice(0, 4)

  return (
    <>
      {/* Page hero with cover photo */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/60 via-white to-white border-b border-primary-100/60">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-navy/5 blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 py-12 lg:py-16">
          <Breadcrumb items={[{ name: 'Solutions', href: '/products' }, { name: category.title }]} />
          <FadeIn>
            <div className="mt-8 flex items-start gap-5 max-w-3xl">
              <span className="hidden sm:flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 ring-1 ring-inset ring-primary-200/60 shrink-0">
                <Icon className="w-8 h-8 text-primary-600" strokeWidth={1.6} />
              </span>
              <div>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-navy">
                  {category.title}
                </h1>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">{category.longDescription}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Product grid */}
      <section className="relative isolate overflow-hidden py-16 lg:py-20 bg-white">
        <DotGrid />
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <FadeIn>
            <div className="flex items-baseline justify-between mb-8">
              <h2 className="font-display text-2xl font-bold text-navy">Product Range</h2>
              <span className="text-sm text-gray-500">{category.products.length} products</span>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.products.map((product, index) => (
              <FadeIn key={product.name} delay={Math.min(index * 0.03, 0.2)} className="h-full">
                <SpotlightCard className="group/card flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-[0_10px_30px_-18px_rgba(0,22,41,0.2)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-200 hover:shadow-[0_28px_55px_-24px_rgba(0,56,103,0.4)]">
                  {/* Equipment image */}
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary-50/60 via-white to-primary-50/60">
                    {/* dot texture */}
                    <span
                      className="pointer-events-none absolute inset-0 opacity-[0.05]"
                      style={{
                        backgroundImage: 'radial-gradient(circle, #003867 1px, transparent 1.6px)',
                        backgroundSize: '18px 18px',
                      }}
                    />
                    {product.image ? (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          alt={product.name}
                          src={product.image}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-contain p-5 transition-transform duration-500 ease-out group-hover/card:scale-110"
                        />
                        {/* floating quote button on hover */}
                        <Link
                          href={`/contact?category=${category.id}`}
                          aria-label={`Request a quote for ${product.name}`}
                          className="absolute bottom-3 right-3 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-primary text-white opacity-0 shadow-lg shadow-primary/40 transition-all duration-300 group-hover/card:translate-y-0 group-hover/card:opacity-100 hover:bg-primary-600"
                        >
                          <ArrowUpRight className="h-5 w-5" />
                        </Link>
                      </>
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <Icon className="relative h-14 w-14 text-primary-300" strokeWidth={1.2} />
                      </div>
                    )}
                    {product.badge && (
                      <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary-700 shadow-sm ring-1 ring-inset ring-primary-200/70 backdrop-blur-sm">
                        <ShieldCheck className="h-3 w-3" />
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex flex-1 flex-col border-t border-navy-100/70 p-5">
                    <h3 className="font-display font-bold leading-snug text-navy transition-colors group-hover/card:text-primary-700">
                      {product.name}
                    </h3>
                    {product.model && (
                      <p className="mt-1.5 text-xs font-medium text-gray-400">{product.model}</p>
                    )}
                    <Link
                      href={`/contact?category=${category.id}`}
                      className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
                    >
                      Request a quote
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
                    </Link>
                  </div>
                </SpotlightCard>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-12 relative overflow-hidden rounded-[1.5rem] p-6 sm:rounded-[2rem] sm:p-8 lg:p-10 bg-gradient-to-r from-[#003867] to-[#004a6b]">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/25 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
              <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
                <div>
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-white">
                    Need help choosing {category.shortTitle} equipment?
                  </h3>
                  <p className="mt-1 text-white/75">
                    Our specialists will recommend the right configuration for your facility and budget.
                  </p>
                </div>
                <Link
                  href={`/contact?category=${category.id}`}
                  className="group inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-white shadow-[0_8px_24px_-8px_rgba(45,184,199,0.7)] transition-all duration-300 hover:bg-primary-600 hover:-translate-y-0.5 sm:w-auto"
                >
                  Get a Quote
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Related categories */}
      <section className="py-16 lg:py-20 bg-gray-50 border-t border-navy-100/60">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <FadeIn>
            <h2 className="font-display text-2xl font-bold text-navy mb-8">Explore Other Categories</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((rel, index) => {
              const RelIcon = categoryIcons[rel.id]
              return (
                <FadeIn key={rel.id} delay={Math.min(index * 0.05, 0.2)}>
                  <Link
                    href={`/products/${rel.id}`}
                    className="group flex items-center gap-4 rounded-3xl border border-navy-100 bg-white p-5 hover:shadow-[0_24px_50px_-20px_rgba(0,56,103,0.3)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 ring-1 ring-inset ring-primary-200/60 group-hover:from-primary group-hover:to-primary-600 flex items-center justify-center shrink-0 transition-colors">
                      <RelIcon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" strokeWidth={1.6} />
                    </span>
                    <span>
                      <span className="block font-semibold text-navy group-hover:text-primary-600 transition-colors">
                        {rel.shortTitle}
                      </span>
                      <span className="block text-xs text-gray-500 mt-0.5">{rel.products.length} products</span>
                    </span>
                  </Link>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone, ChevronDown, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { site } from '@/data/site'
import { categories } from '@/data/categories'
import { categoryIcons } from '@/components/icons/categoryIcons'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Solutions', href: '/products', hasDropdown: true },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Certifications', href: '/certifications' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setProductsOpen(false)
  }, [pathname])

  const isActive = (item: (typeof navItems)[number]) =>
    item.hasDropdown ? pathname.startsWith('/products') : pathname === item.href

  return (
    <header className="sticky top-0 inset-x-0 z-50">
      <div
        className={cn(
          'bg-white border-b border-gray-100 transition-all duration-300',
          scrolled && 'bg-white/95 backdrop-blur shadow-[0_8px_30px_-12px_rgba(0,56,103,0.25)]'
        )}
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <nav className="flex h-[4.5rem] items-center justify-between gap-6 py-3.5">
            {/* Logo */}
            <Link
              href="/"
              aria-label="MEDAP International — Home"
              className="inline-flex items-center shrink-0"
            >
              <Image
                src="/MEDAP%20Logo.png"
                alt="MEDAP International"
                width={220}
                height={52}
                priority
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </Link>

            {/* Desktop nav — pill links */}
            <ul className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className="relative"
                  onMouseEnter={item.hasDropdown ? () => setProductsOpen(true) : undefined}
                  onMouseLeave={item.hasDropdown ? () => setProductsOpen(false) : undefined}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'relative inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                      isActive(item) ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'
                    )}
                  >
                    {isActive(item) && (
                      <span className="absolute inset-0 -z-10 rounded-full bg-primary-50 ring-1 ring-inset ring-primary-100" />
                    )}
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown
                        className={cn('h-3.5 w-3.5 transition-transform duration-200', productsOpen && 'rotate-180')}
                      />
                    )}
                  </Link>

                  {item.hasDropdown && (
                    <AnimatePresence>
                      {productsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-1/2 -translate-x-1/2 top-full pt-3"
                        >
                          <div className="w-[min(600px,90vw)] rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 p-4 grid grid-cols-2 gap-1">
                            {categories.map((category) => {
                              const Icon = categoryIcons[category.id]
                              return (
                                <Link
                                  key={category.id}
                                  href={`/products/${category.id}`}
                                  className="flex items-start gap-3 rounded-xl p-3 hover:bg-primary-50 transition-colors group"
                                >
                                  <span className="mt-0.5 w-9 h-9 rounded-lg bg-primary-50 group-hover:bg-white flex items-center justify-center shrink-0 transition-colors">
                                    <Icon className="w-5 h-5 text-primary" />
                                  </span>
                                  <span>
                                    <span className="block text-sm font-semibold text-navy">{category.shortTitle}</span>
                                    <span className="block text-xs text-gray-500 mt-0.5">
                                      {category.products.length} products
                                    </span>
                                  </span>
                                </Link>
                              )
                            })}
                            <Link
                              href="/products"
                              className="col-span-2 mt-1 text-center text-sm font-semibold text-primary hover:text-primary-600 py-2 border-t border-gray-100"
                            >
                              View all solutions →
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              ))}
            </ul>

            {/* Desktop right: phone + CTA */}
            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-primary-600"
              >
                <Phone className="h-4 w-4 text-primary" />
                {site.phone}
              </a>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-[#25a5b3] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(45,184,199,0.7)] transition-all duration-300 hover:shadow-[0_12px_30px_-8px_rgba(45,184,199,0.8)] hover:-translate-y-0.5"
              >
                Get in touch
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-navy ring-1 ring-inset ring-gray-200 transition-colors hover:bg-primary-50 lg:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden border-t border-gray-100 bg-white"
            >
              <nav className="mx-auto w-full max-w-7xl px-5 sm:px-8 py-4 space-y-1" aria-label="Mobile navigation">
                {navItems.map((item) =>
                  item.hasDropdown ? (
                    <div key={item.name}>
                      <button
                        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                        className="w-full flex items-center justify-between rounded-full px-4 py-3 text-base font-semibold text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        aria-expanded={mobileProductsOpen}
                      >
                        {item.name}
                        <ChevronDown
                          className={cn('w-5 h-5 transition-transform', mobileProductsOpen && 'rotate-180')}
                        />
                      </button>
                      {mobileProductsOpen && (
                        <div className="ml-4 border-l border-primary-100 pl-3 space-y-1 py-1">
                          <Link
                            href="/products"
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-full px-4 py-2 text-sm font-semibold text-primary-600 hover:bg-primary-50"
                          >
                            All Solutions
                          </Link>
                          {categories.map((category) => (
                            <Link
                              key={category.id}
                              href={`/products/${category.id}`}
                              onClick={() => setMobileOpen(false)}
                              className="block rounded-full px-4 py-2 text-sm font-medium text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                            >
                              {category.shortTitle}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'block rounded-full px-4 py-3 text-base font-semibold transition-colors',
                        pathname === item.href
                          ? 'bg-primary-50 text-primary-600 ring-1 ring-inset ring-primary-100'
                          : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                      )}
                    >
                      {item.name}
                    </Link>
                  )
                )}

                <div className="pt-4 mt-2 border-t border-gray-100 space-y-3">
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-[#25a5b3] px-5 py-3.5 font-semibold text-white shadow-[0_8px_24px_-8px_rgba(45,184,199,0.7)]"
                  >
                    Get in touch
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={site.phoneHref}
                    className="flex items-center justify-center gap-2 py-2 text-sm font-semibold text-navy"
                  >
                    <Phone className="w-4 h-4 text-primary" />
                    {site.phone}
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

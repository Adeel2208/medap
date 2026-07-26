'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { clientSectors } from '@/data/clients'
import { cn } from '@/lib/utils'

export default function Clients() {
  const [active, setActive] = useState(clientSectors[0].id)
  const sector = clientSectors.find((s) => s.id === active) ?? clientSectors[0]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-primary-50/50 to-white py-20 sm:py-28">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-navy/5 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Our Clients"
          title="Trusted across Pakistan's healthcare system"
          subtitle="From Combined Military Hospitals to teaching institutions and leading private providers — MEDAP equipment is in service nationwide."
        />

        {/* Sector tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {clientSectors.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              aria-pressed={active === s.id}
              className={cn(
                'relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors',
                active === s.id ? 'text-white' : 'text-navy/60 hover:text-navy'
              )}
            >
              {active === s.id && (
                <motion.span
                  layoutId="client-tab"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-primary to-[#25a5b3] shadow-lg shadow-primary/30"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              {s.label}
              <span className={cn('ml-2 text-xs', active === s.id ? 'text-white/80' : 'text-gray-400')}>
                {s.logos.length}
              </span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={sector.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <p className="mb-8 text-center text-sm text-gray-500">{sector.blurb}</p>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {sector.logos.map((logo, index) => (
                <motion.div
                  key={logo}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.4) }}
                  className="group flex h-24 items-center justify-center rounded-2xl border border-primary-100 bg-white p-4 shadow-[0_10px_30px_-20px_rgba(0,56,103,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-[0_20px_40px_-20px_rgba(0,56,103,0.35)]"
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={logo}
                      alt={`${sector.label} client logo`}
                      fill
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 160px"
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

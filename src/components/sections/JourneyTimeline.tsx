'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface Milestone {
  year: string
  title: string
  description: string
  image?: string
}

function TimelineRow({ item, index }: { item: Milestone; index: number }) {
  const flipped = index % 2 === 1

  const card = (
    <motion.div
      initial={{ opacity: 0, x: flipped ? 60 : -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="md:w-1/2"
    >
      <div
        className={cn(
          'group rounded-2xl border border-primary-100 bg-white p-6 shadow-[0_10px_30px_-20px_rgba(0,56,103,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(0,56,103,0.35)]',
          flipped && 'md:text-right'
        )}
      >
        <span className="inline-block bg-gradient-to-r from-primary-600 to-[#003867] bg-clip-text font-display text-2xl font-extrabold text-transparent">
          {item.year}
        </span>
        <h3 className="mt-1 font-display text-lg font-bold text-navy">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
      </div>
    </motion.div>
  )

  const media = (
    <motion.div
      initial={{ opacity: 0, x: flipped ? -60 : 60, scale: 0.96 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mt-4 md:mt-0 md:w-1/2"
    >
      <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-primary-100 shadow-[0_10px_30px_-20px_rgba(0,56,103,0.3)]">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-100">
            <span className="font-display text-4xl font-extrabold text-primary-200">{item.year}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#003867]/45 to-transparent" />
      </div>
    </motion.div>
  )

  return (
    <div
      className={cn(
        'relative md:flex md:items-center md:gap-12 md:py-8',
        flipped && 'md:flex-row-reverse'
      )}
    >
      {card}

      {/* Center dot */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:block"
      >
        <span className="relative flex h-5 w-5 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400/60" />
          <span className="relative h-4 w-4 rounded-full border-4 border-white bg-primary-600 shadow" />
        </span>
      </motion.div>

      {media}
    </div>
  )
}

export default function JourneyTimeline({ milestones }: { milestones: Milestone[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 60%'],
  })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div ref={ref} className="relative mt-16">
      {/* Static rail */}
      <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-primary-100 md:block" />
      {/* Animated gradient fill that grows as you scroll */}
      <motion.div
        style={{ scaleY }}
        className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 origin-top bg-gradient-to-b from-primary-500 via-primary-400 to-[#003867] md:block"
      />

      <div className="space-y-10 md:space-y-0">
        {milestones.map((item, index) => (
          <TimelineRow key={item.year} item={item} index={index} />
        ))}
      </div>
    </div>
  )
}

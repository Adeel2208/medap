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
      // Vertical reveal at every size. The previous ±60px horizontal slide read
      // oddly once the row stacks below `md` (content flying in sideways in a
      // single-column list) and was the only horizontal transform on the site.
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="md:w-1/2"
    >
      {/* Below md the card is the TOP half of one merged card: square bottom
          corners, no bottom border, so it joins seamlessly to the photo. */}
      <div
        className={cn(
          'group rounded-2xl rounded-b-none border border-b-0 border-primary-100 bg-white p-6 shadow-[0_10px_30px_-20px_rgba(0,56,103,0.3)] transition-all duration-300 hover:shadow-[0_24px_50px_-24px_rgba(0,56,103,0.35)]',
          'md:rounded-2xl md:border-b md:hover:-translate-y-1',
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
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="md:w-1/2"
    >
      {/* ...and the photo is the BOTTOM half: square top corners, no top border.
          No gap between the two, so a milestone reads as a single unit. */}
      <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl rounded-t-none border border-t-0 border-primary-100 shadow-[0_10px_30px_-20px_rgba(0,56,103,0.3)] md:rounded-2xl md:border-t">
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
    // Below md the row is indented to clear the left-hand rail; from md it
    // becomes the two-column layout straddling a centre rail.
    <div
      className={cn(
        'relative pl-11 md:flex md:items-center md:gap-12 md:py-8 md:pl-0',
        flipped && 'md:flex-row-reverse'
      )}
    >
      {card}

      {/* Milestone dot — on the left rail below md, on the centre rail from md.
          Previously `hidden md:block`, which removed the timeline entirely on
          phones and left the section reading as unrelated cards and photos. */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="absolute left-4 top-8 z-10 -translate-x-1/2 md:left-1/2 md:top-1/2 md:-translate-y-1/2"
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
      {/* Static rail — left-hand on phones, centred from md */}
      <div className="absolute left-4 top-0 h-full w-px -translate-x-1/2 bg-primary-100 md:left-1/2" />
      {/* Animated gradient fill that grows as you scroll */}
      <motion.div
        style={{ scaleY }}
        className="absolute left-4 top-0 h-full w-px -translate-x-1/2 origin-top bg-gradient-to-b from-primary-500 via-primary-400 to-[#003867] md:left-1/2"
      />

      <div className="space-y-12 md:space-y-0">
        {milestones.map((item, index) => (
          <TimelineRow key={item.year} item={item} index={index} />
        ))}
      </div>
    </div>
  )
}

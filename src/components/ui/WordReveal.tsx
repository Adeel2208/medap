'use client'

import { motion } from 'framer-motion'

interface WordRevealProps {
  text: string
  className?: string
  /** Words to render in the accent (primary) color */
  accent?: string[]
  delay?: number
}

export default function WordReveal({ text, className, accent = [], delay = 0 }: WordRevealProps) {
  const words = text.split(' ')
  return (
    <span className={className}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className={
            accent.includes(word.replace(/[^\w’']/g, '')) || accent.includes(word)
              ? 'inline-block text-primary-300'
              : 'inline-block'
          }
          initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: delay + index * 0.07, ease: 'easeOut' }}
        >
          {word}
          {index < words.length - 1 && ' '}
        </motion.span>
      ))}
    </span>
  )
}

import { cn } from '@/lib/utils'
import Eyebrow from '@/components/ui/Eyebrow'
import WordReveal from '@/components/ui/WordReveal'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  dark?: boolean
  className?: string
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  dark = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12 lg:mb-16 max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <div className="mb-5">
          <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={cn(
          'font-display text-[1.65rem] sm:text-4xl font-bold leading-[1.15] tracking-tight',
          dark ? 'text-white' : 'text-navy'
        )}
      >
        <WordReveal text={title} />
      </h2>
      {subtitle && (
        <p className={cn('mt-4 text-lg leading-relaxed', dark ? 'text-white/75' : 'text-gray-600')}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

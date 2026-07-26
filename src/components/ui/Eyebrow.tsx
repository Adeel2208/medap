import { cn } from '@/lib/utils'

interface EyebrowProps {
  children: string
  dark?: boolean
  className?: string
}

export default function Eyebrow({ children, dark = false, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em]',
        dark ? 'text-primary-300' : 'text-primary-600',
        className
      )}
    >
      <span className={cn('h-px w-7', dark ? 'bg-primary-300/70' : 'bg-primary-500')} />
      {children}
    </span>
  )
}

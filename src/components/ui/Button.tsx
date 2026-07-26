import Link from 'next/link'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'outline' | 'white' | 'outline-white'

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-600 shadow-sm hover:shadow-md',
  outline:
    'border-2 border-navy text-navy hover:bg-navy hover:text-white',
  white:
    'bg-white text-navy hover:bg-gray-100 shadow-sm hover:shadow-md',
  'outline-white':
    'border-2 border-white/40 text-white hover:bg-white/10 hover:border-white',
}

interface ButtonProps {
  href: string
  variant?: Variant
  children: ReactNode
  className?: string
  external?: boolean
}

export default function Button({ href, variant = 'primary', children, className, external }: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold transition-colors duration-200',
    variantClasses[variant],
    className
  )

  if (external || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('http')) {
    return (
      <a href={href} className={classes} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}

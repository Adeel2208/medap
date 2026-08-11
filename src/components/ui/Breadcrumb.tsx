import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Fragment } from 'react'
import { cn } from '@/lib/utils'

interface Crumb {
  name: string
  href?: string
}

export default function Breadcrumb({ items, dark = false }: { items: Crumb[]; dark?: boolean }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('flex items-center flex-wrap gap-1.5 text-sm', dark ? 'text-white/60' : 'text-gray-500')}
    >
      <Link
        href="/"
        className={cn('inline-block py-1 transition-colors', dark ? 'hover:text-white' : 'hover:text-primary')}
      >
        Home
      </Link>
      {items.map((item) => (
        <Fragment key={item.name}>
          <ChevronRight className={cn('w-4 h-4', dark ? 'text-white/40' : 'text-gray-400')} />
          {item.href ? (
            <Link
              href={item.href}
              className={cn(
                'inline-block py-1 transition-colors',
                dark ? 'hover:text-white' : 'hover:text-primary'
              )}
            >
              {item.name}
            </Link>
          ) : (
            <span className={cn('font-semibold', dark ? 'text-white' : 'text-navy')} aria-current="page">
              {item.name}
            </span>
          )}
        </Fragment>
      ))}
    </nav>
  )
}

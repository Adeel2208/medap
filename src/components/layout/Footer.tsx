import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Clock, Facebook, Linkedin, Instagram } from 'lucide-react'
import { site } from '@/data/site'
import { categories } from '@/data/categories'

const companyLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Solutions', href: '/products' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Certifications', href: '/certifications' },
  { name: 'CEO Message', href: '/ceo-message' },
  { name: 'Contact', href: '/contact' },
]

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: site.social.facebook },
  { name: 'Instagram', icon: Instagram, href: site.social.instagram },
  { name: 'LinkedIn', icon: Linkedin, href: site.social.linkedin },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#003867] to-[#00223e] text-white/70">
      {/* Decorative grid + glow */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(45,184,199,0.3), transparent 70%)' }}
      />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 relative">
        <div className="grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" aria-label="MEDAP International — Home" className="inline-flex items-center">
              <Image
                src="/medap%20logo%202.png"
                alt="MEDAP International"
                width={360}
                height={162}
                className="h-24 w-auto object-contain sm:h-28"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              {site.name}, delivering reliable medical equipment and caring service to hospitals
              across Pakistan since {site.foundedYear}.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/10">
                ISO Certified
              </span>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/10">
                DRAP Compliant
              </span>
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Solutions</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link href={`/products/${category.id}`} className="transition-colors hover:text-white">
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Get in touch</h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary-300" />
                <span>{site.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary-300" />
                <span>
                  <a href={site.phoneHref} className="transition-colors hover:text-white">
                    {site.phone}
                  </a>
                  {' · '}
                  {site.phoneSecondary}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary-300" />
                <span className="break-all">
                  <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">
                    {site.email}
                  </a>
                  <br />
                  <a href={`mailto:${site.emailSecondary}`} className="transition-colors hover:text-white">
                    {site.emailSecondary}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary-300" />
                <span>{site.hours}</span>
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-inset ring-white/10 transition-all hover:bg-primary hover:text-white"
                >
                  <social.icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-xs sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-white/50">Caring for Life — Since {site.foundedYear}</p>
        </div>
      </div>
    </footer>
  )
}

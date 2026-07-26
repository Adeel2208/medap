import {
  Zap,
  FileCheck,
  PackageCheck,
  MapPin,
  ShieldCheck,
  Wrench,
  CalendarClock,
  Headphones,
  GraduationCap,
  RefreshCw,
  LucideIcon,
} from 'lucide-react'

export interface ServiceHighlight {
  icon: LucideIcon
  title: string
  description: string
}

/** Four headline promises shown as cards near the top of the page. */
export const serviceHighlights: ServiceHighlight[] = [
  {
    icon: Zap,
    title: 'Rapid Response',
    description: 'Fast on-site intervention to keep critical equipment running and minimise downtime.',
  },
  {
    icon: FileCheck,
    title: 'SLA-Backed',
    description: 'Clear, contractual response and resolution times you can plan your department around.',
  },
  {
    icon: PackageCheck,
    title: 'Genuine Spares',
    description: 'Authentic parts from managed inventory — sourced directly from our principals.',
  },
  {
    icon: MapPin,
    title: 'Nationwide',
    description: 'Engineers and support reaching hospitals across every province of Pakistan.',
  },
]

export interface Service {
  icon: LucideIcon
  title: string
  description: string
}

/** The full range of services & support offerings. */
export const services: Service[] = [
  {
    icon: ShieldCheck,
    title: 'Warranty Support',
    description:
      'Full warranty coverage on supplied equipment, with prompt claims handling and replacement so a covered fault never becomes your problem.',
  },
  {
    icon: CalendarClock,
    title: 'Planned Preventive Maintenance (PPM)',
    description:
      'Scheduled inspections, calibration and servicing that catch issues before they cause failure — keeping equipment safe, accurate and audit-ready.',
  },
  {
    icon: Wrench,
    title: 'Corrective Maintenance & Repairs',
    description:
      'Expert diagnosis and repair of faults by trained biomedical engineers, restoring equipment to full performance quickly.',
  },
  {
    icon: FileCheck,
    title: 'Annual Maintenance Contracts',
    description:
      'Flexible yearly contracts bundling PPM, priority response and parts — predictable budgeting and guaranteed uptime for your fleet.',
  },
  {
    icon: Zap,
    title: 'Downtime & Emergency Response',
    description:
      'When a critical device goes down, our rapid-response team mobilises to get it back in service with minimum disruption to patient care.',
  },
  {
    icon: PackageCheck,
    title: 'Spare Parts Availability',
    description:
      'A managed inventory of genuine spare parts and consumables, sourced from our principal manufacturers for fast turnaround.',
  },
  {
    icon: Headphones,
    title: 'On-Site & Remote Assistance',
    description:
      'Technical support by phone, remotely, or on-site — whichever gets your team back to caring for patients fastest.',
  },
  {
    icon: GraduationCap,
    title: 'Installation & Staff Training',
    description:
      'Professional installation and commissioning, plus hands-on training so your clinical and technical staff use every device confidently.',
  },
  {
    icon: RefreshCw,
    title: 'Upgrades & Optimisation',
    description:
      'Software updates, accessory upgrades and optimisation to extend the working life and capability of your existing equipment.',
  },
]

export interface ServiceStep {
  step: string
  title: string
  description: string
}

/** A simple "how our service works" process, shown as numbered steps. */
export const serviceProcess: ServiceStep[] = [
  {
    step: '01',
    title: 'Assess',
    description: 'We survey your equipment, usage and environment to understand exactly what support you need.',
  },
  {
    step: '02',
    title: 'Plan',
    description: 'We propose the right mix of warranty, PPM schedule, contract and spares for your facility.',
  },
  {
    step: '03',
    title: 'Deliver',
    description: 'Our engineers install, maintain and repair — on schedule and on call — with genuine parts.',
  },
  {
    step: '04',
    title: 'Sustain',
    description: 'Ongoing monitoring, reporting and optimisation keep your equipment reliable for its full life.',
  },
]

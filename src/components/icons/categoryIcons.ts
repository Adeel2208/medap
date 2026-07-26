import {
  Activity,
  HeartPulse,
  Baby,
  Stethoscope,
  ShieldCheck,
  Wind,
  BedDouble,
  LucideIcon,
} from 'lucide-react'

export const categoryIcons: Record<string, LucideIcon> = {
  'operation-theatre': Activity,
  'intensive-care': HeartPulse,
  'neonatal-nursery': Baby,
  'obstetrics-gynecology': Stethoscope,
  cssd: ShieldCheck,
  'medical-gas-pipeline': Wind,
  'hospital-furniture': BedDouble,
}

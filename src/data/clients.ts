export interface ClientSector {
  id: string
  label: string
  blurb: string
  logos: string[]
}

// Every client logo now has a .webp copy in /public (the original .png/.jpg/.jpeg
// files are kept alongside), so the per-file extension list is no longer needed —
// logos are numbered contiguously from 1.
const logos = (sector: string, count: number) =>
  Array.from({ length: count }, (_, i) => `/clients/${sector}/${sector}-${i + 1}.webp`)

export const clientSectors: ClientSector[] = [
  {
    id: 'armed-forces',
    label: 'Armed Forces',
    blurb: 'Combined Military Hospitals and defence medical institutions nationwide.',
    logos: logos('armed-forces', 9),
  },
  {
    id: 'public-sector',
    label: 'Public Sector',
    blurb: 'Teaching hospitals, DHQs and government health institutions across Pakistan.',
    logos: logos('public-sector', 36),
  },
  {
    id: 'private-sector',
    label: 'Private Sector',
    blurb: 'Leading private hospitals, trusts and specialised healthcare providers.',
    logos: logos('private-sector', 11),
  },
]

export const totalClientCount = clientSectors.reduce((sum, s) => sum + s.logos.length, 0)

export const principalLogos = [
  '/principals/principal-1.webp',
  '/principals/principal-2.webp',
  '/principals/principal-3.webp',
  '/principals/principal-4.webp',
  '/principals/principal-5.webp',
  '/principals/principal-6.webp',
  '/principals/principal-7.webp',
  '/principals/principal-8.webp',
  '/principals/principal-9.webp',
  '/principals/principal-10.webp',
  '/principals/principal-11.webp',
  '/principals/principal-12.webp',
  '/principals/principal-13.webp',
  '/principals/principal-14.webp',
  '/principals/principal-15.webp',
  '/principals/principal-16.webp',
]

/** Principal manufacturers we represent, as named in the 2026-27 product list. */
export const principalBrands = [
  'General Meditech Inc.',
  'Shenzhen Medrena Biotech',
  'Being Technology Inc.',
  'Bicakcilar, Turkey',
  'HugeMed',
  'Coreray Medical',
  'Shenzhen Biocare Bio-Medical',
  'Saikang Medical',
  'Jiangsu Yongfa Medical',
  'Amoul Medical',
  'Bokang Medical',
  'Micare',
  'Keewell China',
  'Jiangsu Dengguan Medical',
  'Sanqiang Medical',
  'Shandong Yongan Heli',
]

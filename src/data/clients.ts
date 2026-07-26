export interface ClientSector {
  id: string
  label: string
  blurb: string
  logos: string[]
}

const ext = (sector: string, list: [number, string][]) =>
  list.map(([n, e]) => `/clients/${sector}/${sector}-${n}.${e}`)

export const clientSectors: ClientSector[] = [
  {
    id: 'armed-forces',
    label: 'Armed Forces',
    blurb: 'Combined Military Hospitals and defence medical institutions nationwide.',
    logos: ext('armed-forces', [
      [1, 'jpg'], [2, 'png'], [3, 'jpg'], [4, 'png'], [5, 'png'],
      [6, 'jpg'], [7, 'jpg'], [8, 'jpg'], [9, 'png'],
    ]),
  },
  {
    id: 'public-sector',
    label: 'Public Sector',
    blurb: 'Teaching hospitals, DHQs and government health institutions across Pakistan.',
    logos: ext('public-sector', [
      [1, 'png'], [2, 'jpeg'], [3, 'jpeg'], [4, 'jpeg'], [5, 'jpg'], [6, 'png'],
      [7, 'jpeg'], [8, 'png'], [9, 'png'], [10, 'png'], [11, 'jpeg'], [12, 'jpeg'],
      [13, 'png'], [14, 'jpg'], [15, 'png'], [16, 'png'], [17, 'png'], [18, 'png'],
      [19, 'png'], [20, 'jpeg'], [21, 'png'], [22, 'jpg'], [23, 'png'], [24, 'jpg'],
      [25, 'png'], [26, 'jpg'], [27, 'jpg'], [28, 'jpeg'], [29, 'png'], [30, 'jpg'],
      [31, 'jpg'], [32, 'jpg'], [33, 'png'], [34, 'jpeg'], [35, 'png'], [36, 'png'],
    ]),
  },
  {
    id: 'private-sector',
    label: 'Private Sector',
    blurb: 'Leading private hospitals, trusts and specialised healthcare providers.',
    logos: ext('private-sector', [
      [1, 'jpg'], [2, 'png'], [3, 'png'], [4, 'jpg'], [5, 'jpg'], [6, 'jpg'],
      [7, 'png'], [8, 'jpg'], [9, 'jpg'], [10, 'png'], [11, 'jpeg'],
    ]),
  },
]

export const totalClientCount = clientSectors.reduce((sum, s) => sum + s.logos.length, 0)

export const principalLogos = [
  '/principals/principal-1.png',
  '/principals/principal-2.jpeg',
  '/principals/principal-3.jpg',
  '/principals/principal-4.png',
  '/principals/principal-5.jpg',
  '/principals/principal-6.png',
  '/principals/principal-7.png',
  '/principals/principal-8.jpg',
  '/principals/principal-9.jpg',
  '/principals/principal-10.jpg',
  '/principals/principal-11.png',
  '/principals/principal-12.jpeg',
  '/principals/principal-13.png',
  '/principals/principal-14.png',
  '/principals/principal-15.jpg',
  '/principals/principal-16.png',
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

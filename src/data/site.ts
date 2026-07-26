export const site = {
  name: 'MEDAP International',
  tagline: 'Caring for Life',
  foundedYear: 1990,
  website: 'https://www.medapinternational.com',
  phone: '042-36315179',
  phoneSecondary: '042-36363339',
  phoneHref: 'tel:+924236315179',
  whatsapp: '0335-0412821',
  whatsappHref: 'https://wa.me/923350412821',
  email: 'info@medapinternational.com',
  emailSecondary: 'sales@medapinternational.com',
  emailHref: 'mailto:info@medapinternational.com',
  address: '17-G Sharf Mansion, Near Ganga Ram Hospital, 16 Shahrah e Fatima Jinnah, Lahore, Pakistan',
  hours: 'Monday – Saturday, 9:00 AM – 6:00 PM',
  social: {
    facebook: 'https://www.facebook.com/MedapInternational/',
    instagram: 'https://www.instagram.com/medapinternational',
    linkedin: 'https://pk.linkedin.com/in/medap-international-44864b84',
  },
}

export interface Office {
  name: string
  address: string
  isHead?: boolean
}

export const offices: Office[] = [
  {
    name: 'Head Office — Lahore',
    address:
      '17-G Sharf Mansion, Near Ganga Ram Hospital, 16 Shahrah e Fatima Jinnah, Lahore, Pakistan',
    isHead: true,
  },
  {
    name: 'Peshawar Branch Office',
    address: 'Office No. 204, Waziristan Plaza, Qazi Street, Kali Bari Bazar, Peshawar Cantt.',
  },
  {
    name: 'Islamabad Branch Office',
    address: 'House No. 444, Street #17, Model Colony, Mohallah Rafiqabad, Khanna Kak, Rawalpindi.',
  },
]

export const stats = [
  { value: '35+', label: 'Years of Excellence' },
  { value: '56+', label: 'Institutions Served' },
  { value: '7', label: 'Solution Families' },
  { value: '24/7', label: 'After-Sales Support' },
]

export const trustBadges = [
  { title: 'ISO Certified', subtitle: 'Quality Management System' },
  { title: 'DRAP Compliant', subtitle: 'Drug Regulatory Authority of Pakistan' },
  { title: 'Since 1990', subtitle: '35+ Years of Trust' },
]

export interface Leader {
  name: string
  role: string
  bio: string
  image?: string
}

export const leadership: Leader[] = [
  {
    name: 'Javaid Iqbal',
    role: 'C.E.O / Founder',
    bio: 'Founded MEDAP International in 1990 with a simple commitment — give Pakistan\'s hospitals equipment they can depend on, and stand behind it for its entire working life.',
    image: '/journey/ceo-photo.png',
  },
  {
    name: 'Mohsin Javaid',
    role: 'Managing Director',
    bio: 'Leads partnerships with our principal manufacturers and oversees the growth of MEDAP\'s solution portfolio across public, private and defence healthcare.',
    image: '/journey/managing-director.png',
  },
  {
    name: 'Muazzam Javaid',
    role: 'Director Operations',
    bio: 'Heads nationwide project delivery — installation, commissioning, staff training and the after-sales service that keeps equipment running.',
    image: '/journey/director-operations.png',
  },
]

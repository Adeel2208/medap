export interface Interaction {
  image: string
  title: string
  caption: string
  /** 'tall' = portrait, 'wide' = landscape — used for the layout */
  orientation: 'tall' | 'wide'
}

export const interactions: Interaction[] = [
  {
    image: '/interactions/saikang-partnership.webp',
    title: 'Partnership with Saikang Medical',
    caption: 'Strengthening ties with our principal manufacturers.',
    orientation: 'wide',
  },
  {
    image: '/interactions/conference-1.webp',
    title: 'International Medical Conference',
    caption: 'Staying at the forefront of medical technology.',
    orientation: 'tall',
  },
  {
    image: '/interactions/deal-signing.webp',
    title: 'New Supply Agreement',
    caption: 'Formalising a new hospital equipment project.',
    orientation: 'tall',
  },
  {
    image: '/interactions/meeting.webp',
    title: 'Strategy Meeting',
    caption: 'Planning solutions around each facility’s needs.',
    orientation: 'tall',
  },
  {
    image: '/interactions/conference-2.webp',
    title: 'Healthcare Expo',
    caption: 'Exploring the latest in medical innovation.',
    orientation: 'tall',
  },
  {
    image: '/interactions/client-interaction.webp',
    title: 'Client Interaction',
    caption: 'Understanding requirements first-hand, on the ground.',
    orientation: 'wide',
  },
  {
    image: '/interactions/saikang-visit.webp',
    title: 'Manufacturer Site Visit',
    caption: 'On-site with Saikang to assess quality first-hand.',
    orientation: 'wide',
  },
  {
    image: '/interactions/team-dinner.webp',
    title: 'The MEDAP Team',
    caption: 'The people behind three decades of care.',
    orientation: 'wide',
  },
  {
    image: '/interactions/conference-3.webp',
    title: 'Industry Networking',
    caption: 'Building relationships across the healthcare sector.',
    orientation: 'wide',
  },
  {
    image: '/interactions/client-deal.webp',
    title: 'Client Engagement',
    caption: 'Partnering closely with the institutions we serve.',
    orientation: 'tall',
  },
]

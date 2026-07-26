export interface Interaction {
  image: string
  title: string
  caption: string
  /** 'tall' = portrait, 'wide' = landscape — used for the layout */
  orientation: 'tall' | 'wide'
}

export const interactions: Interaction[] = [
  {
    image: '/interactions/saikang-partnership.png',
    title: 'Partnership with Saikang Medical',
    caption: 'Strengthening ties with our principal manufacturers.',
    orientation: 'wide',
  },
  {
    image: '/interactions/conference-1.png',
    title: 'International Medical Conference',
    caption: 'Staying at the forefront of medical technology.',
    orientation: 'tall',
  },
  {
    image: '/interactions/deal-signing.png',
    title: 'New Supply Agreement',
    caption: 'Formalising a new hospital equipment project.',
    orientation: 'tall',
  },
  {
    image: '/interactions/meeting.jpeg',
    title: 'Strategy Meeting',
    caption: 'Planning solutions around each facility’s needs.',
    orientation: 'tall',
  },
  {
    image: '/interactions/conference-2.jpeg',
    title: 'Healthcare Expo',
    caption: 'Exploring the latest in medical innovation.',
    orientation: 'tall',
  },
  {
    image: '/interactions/client-interaction.jpeg',
    title: 'Client Interaction',
    caption: 'Understanding requirements first-hand, on the ground.',
    orientation: 'wide',
  },
  {
    image: '/interactions/saikang-visit.png',
    title: 'Manufacturer Site Visit',
    caption: 'On-site with Saikang to assess quality first-hand.',
    orientation: 'wide',
  },
  {
    image: '/interactions/team-dinner.png',
    title: 'The MEDAP Team',
    caption: 'The people behind three decades of care.',
    orientation: 'wide',
  },
  {
    image: '/interactions/conference-3.jpeg',
    title: 'Industry Networking',
    caption: 'Building relationships across the healthcare sector.',
    orientation: 'wide',
  },
  {
    image: '/interactions/client-deal.jpeg',
    title: 'Client Engagement',
    caption: 'Partnering closely with the institutions we serve.',
    orientation: 'tall',
  },
]

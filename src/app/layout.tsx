import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.medapinternational.com'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: '/apple-icon.png',
    shortcut: '/favicon.ico',
  },
  title: {
    default: 'MEDAP International - Leading Healthcare Solutions Provider Since 1990 | Pakistan',
    template: '%s | MEDAP International'
  },
  description: 'MEDAP International - Pakistan\'s premier supplier of Electro Medical Equipment, Hospital Furniture, Surgical Instruments, Medical Gases, and CSSD equipment. ISO certified, DRAP compliant. Serving healthcare institutions across Pakistan since 1990.',
  keywords: [
    'MEDAP International',
    'hospital furniture pakistan',
    'medical equipment pakistan',
    'electro medical equipment',
    'patient monitors pakistan',
    'infusion pumps pakistan',
    'OT equipment pakistan',
    'surgical instruments pakistan',
    'medical gases pakistan',
    'CSSD equipment',
    'hospital supplier lahore',
    'medical equipment supplier',
    'ICU equipment pakistan',
    'operation theatre equipment',
    'hospital beds pakistan',
    'medical furniture',
    'DRAP compliant medical equipment',
    'ISO certified medical equipment supplier',
    'CMH supplier',
    'armed forces medical supplier',
    'healthcare solutions pakistan',
    'medical equipment maintenance',
    'hospital equipment installation'
  ],
  authors: [{ name: 'MEDAP International', url: 'https://www.medapinternational.com' }],
  creator: 'MEDAP International',
  publisher: 'MEDAP International',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://www.medapinternational.com',
    title: 'MEDAP International - Leading Healthcare Solutions Provider Since 1990',
    description: 'Pakistan\'s premier supplier of Electro Medical Equipment, Hospital Furniture, Surgical Instruments, Medical Gases, and CSSD equipment. ISO certified and DRAP compliant, serving healthcare institutions nationwide.',
    siteName: 'MEDAP International',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MEDAP International - Healthcare Solutions Provider',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MEDAP International - Leading Healthcare Solutions Provider',
    description: 'Pakistan\'s premier supplier of medical equipment, hospital furniture, and healthcare solutions. ISO certified, DRAP compliant.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: 'https://www.medapinternational.com',
  },
  category: 'healthcare',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'MEDAP International',
    description: 'Leading healthcare solutions provider in Pakistan, supplying electro medical equipment, hospital furniture, surgical instruments, medical gases, and CSSD equipment since 1990.',
    url: 'https://www.medapinternational.com',
    logo: 'https://www.medapinternational.com/logo.png',
    image: 'https://www.medapinternational.com/og-image.jpg',
    telephone: '+92-42-36315179',
    email: 'info@medapinternational.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Your Street Address',
      addressLocality: 'Lahore',
      addressRegion: 'Punjab',
      postalCode: 'Your Postal Code',
      addressCountry: 'PK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 'Your Latitude',
      longitude: 'Your Longitude',
    },
    foundingDate: '1990',
    areaServed: {
      '@type': 'Country',
      name: 'Pakistan',
    },
    sameAs: [
      'https://www.facebook.com/MedapInternational/',
      'https://www.instagram.com/medapinternational',
      'https://pk.linkedin.com/in/medap-international-44864b84',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '500',
    },
    priceRange: '$$',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Medical Equipment & Healthcare Solutions',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Electro Medical Equipment',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Patient Monitors' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Infusion Pumps' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'OT Equipment' } },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Hospital Furniture',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Hospital Beds' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'ICU Furniture' } },
          ],
        },
      ],
    },
  }

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <div className="relative min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vannoord Property Maintenance - Aylmer, Ontario",
  description: "Professional property maintenance services including weekly mowing, garden maintenance, tree pruning, pressure washing, seasonal cleanups, sod installation, lawn aerating, dethatching, and more in Aylmer, Ontario and surrounding areas.",
  keywords: "property maintenance, lawn care, landscaping, Aylmer, Ontario, tree pruning, pressure washing, junk removal, gutter cleaning, seasonal cleanups, sod installation, lawn aerating, dethatching, lawn rolling, garden maintenance",
  authors: [{ name: "Vannoord Property Maintenance" }],
  creator: "Vannoord Property Maintenance",
  metadataBase: new URL("https://vannoordpropertymaintenance.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://vannoordpropertymaintenance.com",
    title: "Vannoord Property Maintenance - Aylmer, Ontario",
    description: "Professional property maintenance services including weekly mowing, garden maintenance, tree pruning, pressure washing, seasonal cleanups, sod installation, lawn aerating, dethatching, and more in Aylmer, Ontario and surrounding areas.",
    siteName: "Vannoord Property Maintenance",
    images: [
      {
        url: "https://vannoordpropertymaintenance.com/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpg",
        alt: "Vannoord Property Maintenance",
      },
    ],
  },
  other: {
    'og:image': 'https://vannoordpropertymaintenance.com/og-image.jpg',
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:type': 'image/jpg',
    'og:image:alt': 'Vannoord Property Maintenance',
  },
  twitter: {
    card: "summary_large_image",
    title: "Vannoord Property Maintenance - Aylmer, Ontario",
    description: "Professional property maintenance services including weekly mowing, garden maintenance, tree pruning, pressure washing, seasonal cleanups, sod installation, lawn aerating, dethatching, and more in Aylmer, Ontario and surrounding areas.",
    images: ["https://vannoordpropertymaintenance.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-96x96.png" sizes="96x96" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Vannoord Property Maintenance",
              "image": "https://vannoordpropertymaintenance.com/logo.PNG",
              "@id": "https://vannoordpropertymaintenance.com",
              "url": "https://vannoordpropertymaintenance.com",
              "telephone": "(226) 980-8113",
              "email": "vannoordpm@gmail.com",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Aylmer",
                "addressRegion": "ON",
                "addressCountry": "CA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 42.7701,
                "longitude": -80.9982
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "07:00",
                  "closes": "18:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/share/1APxdMiKkv/?mibextid=wwXIfr",
                "https://www.instagram.com/vannoordpropertymaintenance/"
              ],
              "description": "Professional property maintenance services including weekly mowing, garden maintenance, tree pruning, pressure washing, seasonal cleanups, sod installation, lawn aerating, dethatching, and more in Aylmer, Ontario and surrounding areas.",
              "service": [
                {
                  "@type": "Service",
                  "name": "Weekly Mowing",
                  "description": "Regular lawn mowing service to keep your grass at the ideal height and your property looking neat and well-maintained."
                },
                {
                  "@type": "Service",
                  "name": "Tree Pruning",
                  "description": "Professional tree pruning to maintain tree health, improve appearance, and prevent potential hazards."
                },
                {
                  "@type": "Service",
                  "name": "Garden Maintenance",
                  "description": "Comprehensive garden care including plant pruning, weeding, mulching, and seasonal planting to keep your gardens healthy and beautiful."
                },
                {
                  "@type": "Service",
                  "name": "Pressure Washing",
                  "description": "High-quality pressure washing services for driveways, decks, siding, and other surfaces to remove dirt, grime, and mildew."
                },
                {
                  "@type": "Service",
                  "name": "Gutter Cleaning",
                  "description": "Thorough cleaning of gutters to prevent water damage and maintain your home's exterior integrity."
                },
                {
                  "@type": "Service",
                  "name": "Junk Removal",
                  "description": "Efficient removal of yard waste, old furniture, and other unwanted items from your property."
                },
                {
                  "@type": "Service",
                  "name": "Seasonal Cleanups",
                  "description": "Comprehensive spring and fall cleanup services to prepare your property for the changing seasons."
                },
                {
                  "@type": "Service",
                  "name": "Sod Installation",
                  "description": "Professional sod installation service to create an instant, lush green lawn for your property."
                },
                {
                  "@type": "Service",
                  "name": "Lawn Rolling",
                  "description": "Professional lawn rolling service to smooth out uneven areas and improve the overall appearance of your lawn."
                },
                {
                  "@type": "Service",
                  "name": "Aerating",
                  "description": "Core aeration service to improve soil compaction, enhance root growth, and promote healthier grass."
                },
                {
                  "@type": "Service",
                  "name": "Dethatching",
                  "description": "Power rake service to remove thatch buildup and promote healthy grass growth and better water penetration."
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}


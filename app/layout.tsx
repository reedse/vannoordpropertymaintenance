import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vannoord Property Maintenance - Aylmer, Ontario",
  description: "Professional property maintenance services including lawn care, tree pruning, pressure washing and more in Aylmer, Ontario and surrounding areas.",
  keywords: "property maintenance, lawn care, landscaping, Aylmer, Ontario, tree pruning, pressure washing, junk removal, window cleaning, gutter cleaning",
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
    description: "Professional property maintenance services including lawn care, tree pruning, pressure washing and more in Aylmer, Ontario and surrounding areas.",
    siteName: "Vannoord Property Maintenance",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vannoord Property Maintenance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vannoord Property Maintenance - Aylmer, Ontario",
    description: "Professional property maintenance services including lawn care, tree pruning, pressure washing and more in Aylmer, Ontario and surrounding areas.",
    images: ["/og-image.jpg"],
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
              "description": "Professional property maintenance services including lawn care, tree pruning, pressure washing and more in Aylmer, Ontario and surrounding areas.",
              "service": [
                {
                  "@type": "Service",
                  "name": "Weekly Mowing",
                  "description": "Regular lawn mowing service to keep your grass at the ideal height and your property looking neat and well-maintained."
                },
                {
                  "@type": "Service",
                  "name": "Trimming & Edging",
                  "description": "Precise trimming and edging to create clean, defined borders between your lawn, walkways, and garden beds."
                },
                {
                  "@type": "Service",
                  "name": "Tree Pruning",
                  "description": "Professional tree pruning to maintain tree health, improve appearance, and prevent potential hazards."
                },
                {
                  "@type": "Service",
                  "name": "Pressure Washing",
                  "description": "High-quality pressure washing services for driveways, decks, siding, and other surfaces to remove dirt, grime, and mildew."
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


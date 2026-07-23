import Script from "next/script";

export const metadata = {
  title: "Attendance Management Software in Patna, Bihar | AI Camera, QR & Biometric HRMS",
  description: "Top Attendance Management Software Company in Patna, Bihar. Webflora builds custom AI camera face recognition, dynamic QR, biometric hardware sync, geofenced GPS, and WhatsApp bot attendance systems with automated payroll.",
  keywords: [
    "attendance management software",
    "attendance software in patna",
    "ai camera attendance system",
    "cctv facial recognition attendance software bihar",
    "qr code attendance software",
    "biometric attendance software patna",
    "manual attendance sheet software",
    "geofenced gps attendance mobile app",
    "whatsapp attendance bot software",
    "hrms payroll attendance software india",
    "coaching institute attendance software patna",
    "factory worker shift roster attendance software"
  ].join(", "),
  alternates: {
    canonical: "https://webfloratechnologies.com/attendance-management-software",
  },
  openGraph: {
    title: "Attendance Management Software in Patna, Bihar | AI Camera, QR & Biometrics",
    description: "Enterprise Attendance Management Software with AI face recognition, dynamic QR codes, biometric hardware sync, and Tally/Zoho payroll integration.",
    url: "https://webfloratechnologies.com/attendance-management-software",
    siteName: "Webflora Technologies",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://webfloratechnologies.com/title-logo.png",
        width: 512,
        height: 512,
        alt: "Webflora Attendance Management Software Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Attendance Management Software in Patna | AI Camera & Biometrics",
    description: "Webflora Technologies builds custom attendance management software featuring AI CCTV face recognition, dynamic QR scanning, manual desk sheets, and instant WhatsApp alerts.",
    images: ["https://webfloratechnologies.com/title-logo.png"],
  }
};

// JSON-LD Structured Data Schema for SEO, GEO & AEO
const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://webfloratechnologies.com/attendance-management-software#software",
      "name": "Webflora AI & Hybrid Attendance Management Software",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android, iOS, Windows, Linux",
      "author": {
        "@type": "Organization",
        "name": "Webflora Technologies",
        "url": "https://webfloratechnologies.com"
      },
      "description": "Enterprise attendance management software supporting 8 distinct punch modes including AI camera face scanning, dynamic QR codes, biometrics, RFID, GPS geofencing, WhatsApp bots, and manual desk logging.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "Webflora Technologies"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "128"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://webfloratechnologies.com/#organization",
      "name": "Webflora Technologies",
      "url": "https://webfloratechnologies.com",
      "logo": "https://webfloratechnologies.com/title-logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Patna",
        "addressRegion": "Bihar",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.5941,
        "longitude": 85.1376
      },
      "areaServed": ["Patna", "Bihar", "India"]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://webfloratechnologies.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Attendance Management Software",
          "item": "https://webfloratechnologies.com/attendance-management-software"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can the AI Camera Attendance System work with existing CCTV cameras?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Webflora's AI face recognition software connects directly to existing IP CCTV camera RTSP video streams (Hikvision, Dahua, CP Plus, etc.) without requiring proprietary hardware machines."
          }
        },
        {
          "@type": "Question",
          "name": "How does the Dynamic QR Code system prevent proxy attendance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Webflora generates dynamic, rotating QR codes refreshed every 15 seconds, enforced with GPS geofencing and unique device UUID binding to eliminate screenshot sharing and proxy punches."
          }
        },
        {
          "@type": "Question",
          "name": "What is the best attendance management software company in Patna, Bihar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Webflora Technologies is the leading custom attendance software developer in Patna, Bihar, offering AI CCTV face recognition, dynamic QR, biometric reader sync, and Tally/Zoho payroll integration."
          }
        },
        {
          "@type": "Question",
          "name": "Can the software function offline during internet outages?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Webflora attendance software features an offline edge engine that stores encrypted punch logs locally on premise devices and auto-syncs with the cloud database once internet connectivity is restored."
          }
        }
      ]
    }
  ]
};

export default function AttendanceLayout({ children }) {
  return (
    <>
      <Script
        id="attendance-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      {children}
    </>
  );
}

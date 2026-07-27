import Script from "next/script";
import {
  buildSoftwareApplicationSchema,
  buildProductSchema,
  buildOfferSchema,
  buildAggregateRatingSchema,
  buildReviewSchema,
  buildBreadcrumbListSchema,
  buildFAQPageSchema,
  buildWebPageSchema,
  toGraphSchema
} from "../lib/schemas";

export const metadata = {
  title: "Attendance Management System & Software in Patna | Face Recognition & Biometric SaaS",
  description: "Best Attendance Management Software & Face Recognition System in Patna, Bihar. Webflora provides custom SaaS attendance, AI face scanning machines, eSSL biometric software, dynamic QR code attendance, and WhatsApp tracking systems with automated payroll.",
  keywords: [
    "saas attendance",
    "attendance management system",
    "face recognition attendance system",
    "attendance management software",
    "face attendance machine",
    "essl biometric software",
    "face scanning attendance system",
    "real time biometric software",
    "e time track lite",
    "attendance manager software",
    "attendance software",
    "qr code attendance system",
    "rfid attendance system",
    "face attendance system",
    "time attendance software",
    "attendance tracking software",
    "time attendance system",
    "employee attendance system",
    "online attendance management system",
    "online attendance system",
    "free attendance management system",
    "attendance tracking system",
    "time and attendance system",
    "attendance software in patna"
  ].join(", "),
  alternates: {
    canonical: "https://webfloratechnologies.com/attendance-management-software",
  },
  openGraph: {
    title: "Attendance Management System | Face Recognition & Biometric SaaS Software",
    description: "Enterprise Attendance Management Software & Online System with AI face scanning, eSSL biometric software sync, dynamic QR codes, and automated payroll integration.",
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
    title: "Attendance Management System | AI Face Recognition & Biometrics",
    description: "Webflora Technologies builds custom attendance tracking software featuring AI CCTV face recognition, dynamic QR scanning, eSSL biometric hardware sync, and instant WhatsApp alerts.",
    images: ["https://webfloratechnologies.com/title-logo.png"],
  }
};

const jsonLdSchema = [
  buildSoftwareApplicationSchema({
    name: "Webflora AI Face Recognition & Online Attendance Management System",
    operatingSystem: "Web, Android, iOS, Windows, Linux",
    applicationCategory: "BusinessApplication",
    description: "Enterprise online attendance management system supporting 8 distinct punch modes including face recognition attendance system, dynamic QR code attendance, eSSL biometric software sync, RFID, GPS geofencing, WhatsApp bots, and manual desk sheet logging.",
    image: "https://webfloratechnologies.com/title-logo.png",
    url: "https://webfloratechnologies.com/attendance-management-software",
    offers: { price: "0", priceCurrency: "INR", url: "https://webfloratechnologies.com/attendance-management-software" },
    aggregateRating: { ratingValue: 4.9, reviewCount: 142 }
  }),
  buildProductSchema({
    name: "Webflora Attendance Management SaaS & Enterprise Software",
    description: "AI-powered biometric face recognition, dynamic QR code, and eSSL hardware-synced attendance software with automated payroll calculation.",
    category: "Business SaaS Software",
    image: "https://webfloratechnologies.com/title-logo.png",
    url: "https://webfloratechnologies.com/attendance-management-software",
    offers: { price: "120000", priceCurrency: "INR", url: "https://webfloratechnologies.com/attendance-management-software" },
    aggregateRating: { ratingValue: 4.9, reviewCount: 142 }
  }),
  buildReviewSchema({
    authorName: "Vikram Sharma",
    reviewRating: 5,
    reviewBody: "Webflora's face recognition attendance software eliminated proxy attendance in our organization completely. The automated payroll integration saves us 20+ hours monthly."
  }),
  buildWebPageSchema({
    name: "Attendance Management System & Software in Patna",
    description: "Best Attendance Management Software & Face Recognition System in Patna, Bihar.",
    url: "https://webfloratechnologies.com/attendance-management-software"
  }),
  buildBreadcrumbListSchema([
    { name: "Home", url: "/" },
    { name: "Attendance Software", url: "/attendance-management-software" }
  ]),
  buildFAQPageSchema([
    {
      question: "Why choose Webflora for your attendance management system?",
      answer: "Webflora offers an 8-in-1 hybrid attendance system combining AI CCTV face recognition, dynamic QR codes, eSSL biometric software integration, and field GPS tracking. We provide flat-rate software options with 100% source code ownership, zero per-user SaaS tax, offline edge sync, and local on-site support in Patna, Bihar."
    },
    {
      question: "Can Webflora integrate with eSSL biometric software and e time track lite?",
      answer: "Yes! Webflora connects seamlessly with eSSL biometric software, Real Time biometric software, e time track lite, ZKTeco, Matrix, and other hardware devices, centralizing all physical fingerprint punches into a single online cloud dashboard."
    },
    {
      question: "How does the face recognition attendance system stop buddy punching and proxy punches?",
      answer: "Our face scanning attendance system uses 3D ISO-certified liveness detection to verify real human presence in 0.5 seconds, preventing photos, videos, or mobile screen spoofing."
    },
    {
      question: "What is the difference between custom attendance software and subscription SaaS attendance?",
      answer: "While traditional SaaS attendance forces companies to pay monthly fees per employee forever, Webflora offers both flexible cloud SaaS plans and flat-rate custom software development where you own the full source code without recurring license costs."
    }
  ])
];

export default function AttendanceLayout({ children }) {
  return (
    <>
      <Script
        id="attendance-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toGraphSchema(jsonLdSchema)) }}
      />
      {children}
    </>
  );
}


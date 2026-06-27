// app/layout.js
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import FooterSection from "./Components/FooterSection";
import Script from "next/script";
import ChatbotLoader from "./Components/ChatbotLoader";


/* Inter – Body / UI */
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

/* Space Grotesk – Headings / Brand
   display:"optional" = browser uses fallback if font isn't ready in 100ms,
   never swaps → eliminates the font-swap LCP event at ~3.5s */
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "optional",
});



export const metadata = {
  metadataBase: new URL("https://webfloratechnologies.com"),
  title: "Software Company in Patna, Bihar | Webflora Technologies",
  description: "Webflora Technologies is the leading software company in Patna, Bihar, offering custom software, website development, mobile apps, and digital marketing.",
  keywords: "software company in patna, software company in bihar, software company in india, website company in patna, mobile app company, digital marketing, AI automation, Webflora Technologies",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Software Company in Patna, Bihar | Webflora Technologies",
    description: "Webflora Technologies is the leading software company in Patna, Bihar, offering custom software, website development, mobile apps, and digital marketing.",
    url: "https://webfloratechnologies.com",
    siteName: "Webflora Technologies",
    images: [
      {
        url: "/title-logo.png",
        width: 512,
        height: 512,
        alt: "Webflora Technologies - Software Company in Patna, Bihar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Company in Patna, Bihar | Webflora Technologies",
    description: "Webflora Technologies is the leading software company in Patna, Bihar, offering custom software, website development, mobile apps, and digital marketing.",
    site: "@WebfloraTech",
    images: ["/title-logo.png"],
  },
  icons: {
    icon: "/title-logo.png",
    shortcut: "/title-logo.png",
    apple: "/title-logo.png",
  },
  verification: {
    google: "Fv5XfPtCaUGzUYkoKxfONROTTTBp6pKHW93z5JgG78k",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-7DCZZDRV1R"
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-7DCZZDRV1R');
        `}
      </Script>
      <body
        suppressHydrationWarning
        className={`
          ${inter.variable}
          ${spaceGrotesk.variable}
          antialiased
        `}>
        {/* Banner and Nav */}
        <Navbar />
        <main id="main-content">
          {children}
        </main>

        {/* Global SEO Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://webfloratechnologies.com/#website",
                  "url": "https://webfloratechnologies.com",
                  "name": "Webflora Technologies",
                  "publisher": {
                    "@type": "Organization",
                    "@id": "https://webfloratechnologies.com/#organization"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://webfloratechnologies.com/?s={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "Person",
                  "@id": "https://webfloratechnologies.com/#founder",
                  "name": "Shashank Manohar",
                  "jobTitle": "Co-Founder & CEO",
                  "worksFor": {
                    "@type": "Organization",
                    "@id": "https://webfloratechnologies.com/#organization"
                  },
                  "sameAs": [
                    "https://www.linkedin.com/in/shashank-manohar-429a1b1b4/"
                  ]
                },
                {
                  "@type": "WebPage",
                  "@id": "https://webfloratechnologies.com/#webpage",
                  "url": "https://webfloratechnologies.com",
                  "name": "Website Development Company in Patna",
                  "isPartOf": {
                    "@id": "https://webfloratechnologies.com/#website"
                  },
                  "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["#main-content h1", "#main-content p"]
                  }
                }
              ]
            })
          }}
        />

        {/* Footer Section */}
        <FooterSection />

        {/* Chatbot — loads only after user interaction (facade pattern) */}
        <ChatbotLoader />

        {/* Mobile chatbot position override */}
        <style dangerouslySetInnerHTML={{
          __html: `
          @media (max-width: 768px) {
            #ai-chatbot-root-container { bottom: 20px !important; right: 20px !important; }
          }
        ` }} />
      </body>
    </html>
  );
}

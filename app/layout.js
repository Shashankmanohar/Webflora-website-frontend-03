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
  title: "Best Software Development Company in Patna Bihar | Webflora Technologies",
  description: "Webflora Technologies is a leading software development company in Patna, Bihar offering website development, app development, AI automation, SEO, digital marketing, and custom software solutions for startups and businesses.",
  keywords: "Webflora Technologies, software company Patna, website development Patna, mobile app development Bihar, AI automation India",
  openGraph: {
    title: "Best Software Development Company in Patna Bihar | Webflora Technologies",
    description: "Webflora Technologies is a leading software development company in Patna, Bihar offering website development, app development, AI automation, SEO, digital marketing, and custom software solutions for startups and businesses.",
    url: "https://webfloratechnologies.com",
    siteName: "Webflora Technologies",
    locale: "en_US",
    type: "website",
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

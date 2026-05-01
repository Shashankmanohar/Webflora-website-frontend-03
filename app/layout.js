// app/layout.js
import { Inter, Space_Grotesk, Pacifico } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import FooterSection from "./Components/FooterSection";

/* Inter – Body / UI */
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

/* Space Grotesk – Headings / Brand */
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

/* Pacifico – Cursive Accent */
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cursive",
  display: "swap",
});

export const metadata = {
  title: "Webflora Technologies | Premier Web, App & AI Automation Agency",
  description: "Webflora Technologies is a top digital solutions company offering Web Development, Mobile App Development, Custom Software Development, AI Automation, Social Media Marketing, and complete Digital Marketing services in Patna, India, and worldwide.",
  keywords: "Web Development, App Development, Custom Software Development, AI Automation, Social Media Marketing, Digital Marketing, web development patna, digital marketing agency india, custom software solutions, AI automation company, mobile app development, top IT company, SEO services, web design, e-commerce development, business automation, tech startup india, generative AI integration",
  openGraph: {
    title: "Webflora Technologies | Premier Web, App & AI Automation Agency",
    description: "Discover top-tier digital solutions including Web Development, App Development, AI Automation, and Digital Marketing with Webflora Technologies.",
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${inter.variable}
          ${spaceGrotesk.variable}
          ${pacifico.variable}
          antialiased
        `}>
        {/* Navbar */}
        <Navbar />
        <main id="main-content">
          {children}
        </main>

        {/* Footer Section */}
        <FooterSection />
        <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js" async></script>
      </body>
    </html>
  );
}

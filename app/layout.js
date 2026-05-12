// app/layout.js
import { Inter, Space_Grotesk, Pacifico } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import FooterSection from "./Components/FooterSection";
import Script from "next/script";


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
  verification: {
    google: "Fv5XfPtCaUGzUYkoKxfONROTTTBp6pKHW93z5JgG78k",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://code.iconify.design" />
        <link rel="preconnect" href="https://vegavan-backend.vercel.app" />
      </head>
      <body
        className={`
          ${inter.variable}
          ${spaceGrotesk.variable}
          ${pacifico.variable}
          antialiased
        `}>
        {/* Banner and Nav */}
        <Navbar />
        <main id="main-content">
          {children}
        </main>

        {/* Footer Section */}
        <FooterSection />
        {/* Iconify Icon Script */}
        <Script
          src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"
          strategy="lazyOnload"
        />

        {/* Vegavan AI Support Chatbot */}
        <Script
          src="https://vegavan-backend.vercel.app/chatbot.js"
          data-user-id="69fc5bbe69d61b8cd4efd91a"
          strategy="lazyOnload"
        />
        <script dangerouslySetInnerHTML={{
          __html: `
          (function() {
            const observer = new MutationObserver((mutations, obs) => {
              const container = document.getElementById('ai-chatbot-root-container');
              if (container && container.shadowRoot) {
                const style = document.createElement('style');
                style.textContent = \`
                  .chatbot-launcher {
                    background: #ff3c00 !important;
                  }
                  .chat-header {
                    background: #ff3c00 !important;
                  }
                  .message.user {
                    background: #ff3c00 !important;
                  }
                  .send-btn {
                    background: #ff3c00 !important;
                  }
                  .prechat-submit {
                    background: #ff3c00 !important;
                  }
                  .prechat-input:focus {
                    border-color: #ff3c00 !important;
                  }
                  .chat-input:focus {
                    border-color: #ff3c00 !important;
                  }
                  @media (max-width: 768px) {
                    .chatbot-launcher {
                      bottom: 100px !important;
                      right: 20px !important;
                    }
                  }
                \`;
                container.shadowRoot.appendChild(style);
                obs.disconnect();
              }
            });
            observer.observe(document.body, { childList: true, subtree: true });
          })();
          `
        }} />
        <style dangerouslySetInnerHTML={{
          __html: `
          @media (max-width: 768px) {
            #ai-chatbot-root-container {
              bottom: 100px !important;
              right: 20px !important;
            }
          }
        `}} />
      </body>
    </html>
  );
}

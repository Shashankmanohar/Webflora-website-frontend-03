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
  title: "Webflora Technologies",
  description: "Modern digital solutions powered by technology and design",
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
        {children}

        {/* Footer Section */}
        <FooterSection />
      </body>
    </html>
  );
}

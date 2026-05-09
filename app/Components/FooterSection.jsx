// components/FooterSection.jsx
"use client";

import { useEffect } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import API_BASE_URL from "../config";

export default function FooterSection() {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith("/admin");

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes float {
        0% { transform: translate(0px,0px) scale(1); }
        33% { transform: translate(30px,-50px) scale(1.1); }
        66% { transform: translate(-20px,20px) scale(0.9); }
        100% { transform: translate(0px,0px) scale(1); }
      }
      @keyframes shimmer {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
      .animate-blob { animation: float 10s infinite ease-in-out; }
      .delay-2000 { animation-delay: 2s; }
      .shimmer-bg {
        background: linear-gradient(90deg, transparent, rgba(255,59,0,0.1), transparent);
        background-size: 200% 100%;
        animation: shimmer 3s infinite linear;
      }
      .magnetic-wrap:hover .magnetic-content { transform: scale(1.1); }
      .magnetic-content {
        transition: transform 0.3s cubic-bezier(0.175,0.885,0.32,1.275);
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  if (isAdminPage) return null;

  return (
    <footer className="relative w-full pt-20 pb-10 overflow-hidden bg-[#050505] text-neutral-300 selection:bg-[#ff3b00] selection:text-white">
      {/* Ambient background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-[#ff3b00] rounded-full mix-blend-screen blur-[120px] opacity-[0.08] animate-blob" />
        <div className="absolute bottom-[10%] right-[5%] w-80 h-80 bg-blue-900 rounded-full mix-blend-screen blur-[100px] opacity-[0.1] animate-blob delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* CTA */}
        <div className="relative group w-full p-[1px] rounded-3xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 overflow-hidden mb-20 hover:from-[#ff3b00]/50 hover:via-[#ff3b00]/20 hover:to-[#ff3b00]/50 transition-all duration-700">
          <div className="absolute inset-0 shimmer-bg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative bg-[#0a0a0a]/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">
                Ready to shape the future?
              </h2>
              <p className="text-neutral-400 text-sm md:text-base font-light">
                Join the next generation of neural architecture today.
              </p>
            </div>
            <button className="group/btn relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ff3b00] text-white text-sm font-medium tracking-wide rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,59,0,0.4)] hover:scale-105">
              <span className="relative z-10">Start Free Trial</span>
              <Icon
                icon="solar:arrow-right-linear"
                width={20}
                className="relative z-10 transition-transform group-hover/btn:translate-x-1"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 border-t border-white/5 pt-16">
          {/* Brand */}
          <div className="lg:col-span-4 flex flex-col space-y-8">
            <div className="relative group w-fit">
              <div className="absolute -inset-4 bg-[#ff3b00]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center gap-2">

                <span className="text-2xl font-semibold tracking-tighter text-white">
                  Webflora<span className="text-[#ff3b00]"> .Technologies</span>
                </span>
              </div>
            </div>

            <p className="text-neutral-400 text-sm leading-relaxed font-light max-w-sm">
              A Patna-based digital solutions company offering web development, mobile app development, custom software, digital marketing, and AI automation across India.
            </p>

            {/* MSME Badge */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 w-fit mt-2">
              <img src="/msme-logo.webp" alt="MSME Logo" className="h-6 object-contain grayscale opacity-80" width={100} height={24} loading="lazy" />
              <div className="flex flex-col">
                <span className="text-xs text-white font-medium">MSME Registered</span>
                <span className="text-[10px] text-neutral-500 font-mono">Udyam No: UDYAM-BR-26-0183379</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="w-full max-w-sm">
              <label htmlFor="newsletter-email" className="text-xs text-neutral-500 uppercase tracking-widest mb-3 block">
                Subscribe to updates
              </label>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const email = e.target.email.value;
                  try {
                    const res = await fetch(`${API_BASE_URL}/api/public/newsletter`, {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ email }),
                    });
                    if (res.ok) {
                      alert("Successfully subscribed!");
                      e.target.reset();
                    } else {
                      const data = await res.json();
                      alert(data.message || "Subscription failed");
                    }
                  } catch (err) {
                    alert("Server error");
                  }
                }}
                className="relative group"
              >
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full bg-white/5 border border-white/10 text-white text-sm rounded-lg py-3 px-4 outline-none focus:border-[#ff3b00]/50 focus:bg-white/10 focus:ring-1 focus:ring-[#ff3b00]/50 transition-all duration-300 placeholder:text-neutral-600 font-light"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="absolute right-1.5 top-1.5 p-2 bg-neutral-800 hover:bg-[#ff3b00] rounded-md text-white transition-colors duration-300 group-focus-within:bg-[#ff3b00]"
                >
                  <Icon icon="solar:plain-3-linear" width={18} />
                </button>
              </form>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 pt-4">
              {[
                { icon: "simple-icons:linkedin", url: "https://www.linkedin.com/company/webfloratechnologies/", label: "LinkedIn" },
                { icon: "simple-icons:facebook", url: "https://www.facebook.com/profile.php?id=61580014195502", label: "Facebook" },
                { icon: "simple-icons:instagram", url: "https://www.instagram.com/webflora.technologies?igsh=aW5lNnk1Z2g1ZXRq", label: "Instagram" },
                { icon: "simple-icons:x", url: "#", label: "Twitter" },
                { icon: "solar:medal-star-bold", url: "https://jsdl.in/DT-47BSTKJRVB9", label: "Justdial" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${social.label} page`}
                  className="magnetic-wrap w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/5 text-neutral-400 hover:text-white hover:border-[#ff3b00]/50 hover:bg-[#ff3b00]/10 hover:shadow-[0_0_15px_rgba(255,59,0,0.3)] transition-all duration-300"
                >
                  <Icon
                    icon={social.icon}
                    className="magnetic-content"
                    width={16}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
            <FooterColumn
              title="Services"
              links={[
                { text: "Web Development", url: "/services/web-development" },
                { text: "App Development", url: "/services/app-development" },
                { text: "AI Automation", url: "/services/ai-automation" },
                { text: "Software Dev", url: "/services/software-development" },
                { text: "Digital Mkt", url: "/services/digital-marketing" }
              ]}
            />
            <FooterColumn
              title="Product"
              links={[
                { text: "Home", url: "/" },
                { text: "About us", url: "/about" },
                { text: "Services", url: "/services" },
                { text: "Case Studies", url: "/case-studies" },
                { text: "Blog", url: "/blog" }
              ]}
            />
            <FooterColumn
              title="Company"
              links={[
                { text: "Instagram", url: "https://www.instagram.com/webflora.technologies?igsh=aW5lNnk1Z2g1ZXRq" },
                { text: "LinkedIn", url: "https://www.linkedin.com/company/webfloratechnologies/" },
                { text: "Careers", url: "/career" }
              ]}
              badgeIndex={2}
            />
            <div className="flex flex-col space-y-6">
              <h3 className="text-white text-sm font-medium tracking-widest uppercase opacity-80">
                Contact
              </h3>
              <ul className="flex flex-col space-y-4 text-sm text-neutral-400 font-light">
                <li className="flex items-center gap-3">
                  <IconCircle icon="solar:letter-linear" />
                  hello.webflora@gmail.com
                </li>
                <li className="flex items-center gap-3">
                  <IconCircle icon="solar:map-point-linear" />
                  Patna, Bihar
                </li>
                <li className="flex items-center gap-3 whitespace-nowrap">
                  <IconCircle icon="solar:phone-linear" />
                  +91 85408 14729
                </li>
              </ul>

              <div className="pt-4">
                <h3 className="text-white text-sm font-medium tracking-widest uppercase opacity-80 mb-4">
                  Legal
                </h3>
                <ul className="flex flex-col space-y-2 text-xs text-neutral-500">
                  <li>
                    <Link href="/privacy-policy" className="hover:text-white transition-colors cursor-pointer">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-of-service" className="hover:text-white transition-colors cursor-pointer">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="relative pt-8">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-[#ff3b00]/40 to-transparent blur-[1px]" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-neutral-500">
            <div className="flex items-center gap-2">
              <span>© 2026 Webflora Technologies</span>
              <span className="w-1 h-1 rounded-full bg-neutral-700" />
              <span>All systems operational</span>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
                System Status
              </div>
              <span className="hover:text-white cursor-pointer">Security</span>
              <span className="hover:text-white cursor-pointer">Sitemap</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links, badgeIndex }) {
  return (
    <div className="flex flex-col space-y-6">
      <h3 className="text-white text-sm font-medium tracking-widest uppercase opacity-80">
        {title}
      </h3>
      <ul className="flex flex-col space-y-4">
        {links.map((link, i) => {
          const text = typeof link === "string" ? link : link.text;
          const url = typeof link === "string" ? link.toLowerCase().replace(' ', '-') : link.url;
          
          return (
            <li key={i}>
              <a 
                href={url}
                target={url.startsWith('http') ? "_blank" : undefined}
                rel={url.startsWith('http') ? "noopener noreferrer" : undefined}
                className="group flex items-center text-sm text-neutral-400 hover:text-[#ff3b00] transition-colors font-light cursor-pointer"
              >
                <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 opacity-0 group-hover:opacity-100 text-[#ff3b00] mr-0 group-hover:mr-2">
                  /
                </span>
                {text}
                {badgeIndex === i && (
                  <span className="ml-2 text-[10px] bg-white/10 text-white px-1.5 py-0.5 rounded border border-white/10">
                    Hiring
                  </span>
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function IconCircle({ icon }) {
  return (
    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#ff3b00]">
      <Icon icon={icon} width={16} />
    </div>
  );
}

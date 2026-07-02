"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Home,
  Briefcase,
  Info,
  Phone,
  BookOpen,
  Trophy,
  Globe,
  Smartphone,
  Layers,
  Bot,
  Share2,
  ChevronDown,
  FileText,
  Heart,
  GraduationCap,
  Building2,
  Factory,
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";

/* No framer-motion — all animations are pure CSS for zero JS execution cost */

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  {
    icon: Briefcase,
    label: "Services",
    href: "/services",
    children: [
      { icon: Briefcase,    label: "All Services",      desc: "Browse all core services we offer.",        href: "/services" },
      { icon: Bot,          label: "AI Chatbots",        desc: "Autonomous support agents.",      href: "/services/ai-chatbot-company-in-patna",                         highlight: true },
      { icon: Bot,          label: "AI & Automation",   desc: "Custom n8n and workflow agents.",           href: "/services/ai-automation-company-in-patna" },
      { icon: Globe,        label: "Website Dev",        desc: "High-performance marketing sites.",         href: "/services/website-development-company-in-patna" },
      { icon: Smartphone,   label: "App Dev",            desc: "Native iOS & Android systems.",             href: "/services/mobile-app-development-company-in-patna" },
      { icon: Layers,       label: "Software Systems",   desc: "Enterprise cloud platforms & ERP.",         href: "/services/software-development-company-in-patna" },
      { icon: Share2,       label: "Digital Growth",     desc: "ROI-driven marketing campaigns.",           href: "/services/digital-marketing-agency-in-patna" },
      { icon: FileText,     label: "Case Studies",       desc: "Our verified customer stories.",            href: "/case-studies" },
    ],
  },
  {
    icon: Building2,
    label: "Industries",
    href: "/industries",
    children: [
      { icon: Building2,    label: "All Industries",     desc: "View all industries we cater to.",          href: "/industries" },
      { icon: Heart,        label: "Healthcare",         desc: "Secure telemedicine & patient portals.",    href: "/industries/healthcare" },
      { icon: GraduationCap,label: "Education",          desc: "Scalable LMS & online exam systems.",       href: "/industries/education" },
      { icon: Home,         label: "Real Estate",        desc: "Stunning property portals & lead CRM.",     href: "/industries/real-estate" },
      { icon: Factory,      label: "Manufacturing",      desc: "Custom inventory ERP & B2B portals.",       href: "/industries/manufacturing" },
      { icon: ShoppingBag,  label: "Retail",             desc: "Fast e-commerce & unified checkout.",       href: "/industries/retail" },
    ],
  },
  { icon: Info,     label: "About",   href: "/about" },
  { icon: BookOpen, label: "Blog",    href: "/blog" },
  { icon: Trophy,   label: "Career",  href: "/career" },
  { icon: Phone,    label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled,          setScrolled]          = useState(false);
  const [mobileOpen,        setMobileOpen]        = useState(false);
  const [activeDropdown,    setActiveDropdown]    = useState(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);
  const pathname = usePathname();

  const isAdminPage = pathname?.startsWith("/admin");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setMobileSubmenuOpen(null);
  }, [pathname]);

  if (isAdminPage) return null;

  return (
    <>
      {/* ── Desktop Floating Capsule Navbar — CSS only, zero Framer Motion ── */}
      <nav
        aria-label="Main navigation"
        className={`fixed z-50 left-1/2 -translate-x-1/2 hidden lg:block transition-all duration-500 animate-nav-enter ${
          scrolled
            ? "top-4 w-[76%] bg-[#050505]/75 backdrop-blur-3xl border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] rounded-full"
            : "top-8 w-[82%] bg-black/35 backdrop-blur-2xl border border-white/5 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.7)] rounded-full"
        }`}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#FF3B00]/40 to-transparent blur-[1px]" />

        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between font-sans relative">

          {/* Logo */}
          <Link href="/" className="flex items-center group" aria-label="Webflora Technologies Home">
            <div className="w-[130px] h-[40px] flex items-center transition-transform duration-300 group-hover:scale-[1.01]">
              <Image
                src="/webflora-logo.svg"
                alt="WebFlora Technologies Logo"
                className="w-full h-full object-contain"
                width={130}
                height={40}
                priority
              />
            </div>
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-2 text-[13px] font-medium tracking-tight text-neutral-300">
            {navItems.map((item, idx) => {
              const isChildActive = item.children?.some(c => pathname === c.href);
              const isActive = pathname === item.href || isChildActive;

              if (item.children) {
                return (
                  <div
                    key={idx}
                    className="relative py-4 group"
                    onMouseEnter={() => setActiveDropdown(idx)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === idx}
                      aria-label={`${item.label} — expand menu`}
                      className={`flex items-center gap-1 hover:text-white transition-all duration-300 cursor-pointer relative py-2 px-4 focus:outline-none rounded-full ${
                        isActive ? "text-white font-semibold" : ""
                      }`}
                    >
                      {item.label}{" "}
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-300 text-neutral-500 group-hover:text-white ${
                          activeDropdown === idx ? "rotate-180" : ""
                        }`}
                      />
                      {isActive && (
                        <span className="absolute inset-0 bg-white/[0.07] border border-white/[0.08] rounded-full -z-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-300" />
                      )}
                    </Link>

                    {/* Dropdown — CSS opacity + translate, no JS animation */}
                    <div
                      role="menu"
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[480px] z-[200] transition-all duration-200 origin-top ${
                        activeDropdown === idx
                          ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 scale-[0.97] translate-y-3 pointer-events-none"
                      }`}
                    >
                      <div className="bg-[#050505]/95 backdrop-blur-3xl border border-white/10 rounded-2xl p-4 shadow-[0_40px_80px_rgba(0,0,0,0.95)] relative">
                        <div className="absolute top-[-5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45 bg-[#050505] border-t border-l border-white/10 z-[199]" />

                        <div className="grid grid-cols-2 gap-2 relative z-[200]">
                          {item.children.map((child, ci) => {
                            const ChildIcon = child.icon;
                            const isChildUrlActive = pathname === child.href;
                            return (
                              <Link key={ci} href={child.href} role="menuitem">
                                <div
                                  className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-200 border border-transparent hover:border-white/5 hover:-translate-y-px hover:bg-white/[0.04] ${
                                    child.highlight
                                      ? "bg-[#FF3B00]/5 border-[#FF3B00]/15 hover:bg-[#FF3B00]/10"
                                      : ""
                                  }`}
                                >
                                  <div
                                    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                                      child.highlight
                                        ? "bg-[#FF3B00] text-white shadow-[0_0_15px_rgba(255,59,0,0.4)]"
                                        : "bg-white/5 text-neutral-400"
                                    }`}
                                  >
                                    <ChildIcon size={14} />
                                  </div>
                                  <div className="text-left">
                                    <div
                                      className={`text-[11px] font-bold uppercase tracking-wider ${
                                        isChildUrlActive || child.highlight ? "text-white" : "text-neutral-200"
                                      }`}
                                    >
                                      {child.label}{" "}
                                    </div>
                                    <div className="text-[10px] text-neutral-400 font-medium tracking-normal mt-0.5 leading-snug normal-case">
                                      {child.desc}{" "}
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={idx}
                  href={item.href}
                  className={`hover:text-white transition-all duration-300 relative py-2 px-4 focus:outline-none rounded-full flex items-center justify-center ${
                    isActive ? "text-white font-semibold" : ""
                  }`}
                >
                  {item.label}{" "}
                  {isActive && (
                    <span className="absolute inset-0 bg-white/[0.07] border border-white/[0.08] rounded-full -z-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-300" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA — Lucide Phone icon (replaces broken iconify-icon) */}
          <div className="relative z-10 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
            <a
              href="tel:8540814729"
              aria-label="Call Webflora Technologies"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF3B00] hover:bg-[#ff4e1a] text-white text-[11px] font-black tracking-wider uppercase rounded-full shadow-[0_8px_25px_rgba(255,59,0,0.35)] transition-all duration-300 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:animate-shimmer" style={{ animationDuration: "1.2s" }} />
              <div className="relative flex items-center justify-center w-3 h-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" aria-hidden="true" />
                <Phone size={10} className="relative z-10" aria-hidden="true" />
              </div>
              Call Us
            </a>
          </div>

        </div>
      </nav>

      {/* ── Mobile Top Header ── */}
      <div className="fixed top-0 left-0 w-full h-16 bg-[#030303]/80 backdrop-blur-xl border-b border-white/5 z-50 flex items-center justify-between px-6 lg:hidden">
        <Link href="/" aria-label="Webflora Technologies Home" className="flex items-center">
          <Image
            src="/webflora-logo.svg"
            alt="WebFlora Technologies Logo"
            width={110}
            height={34}
            className="object-contain"
            priority
          />
        </Link>

        <div className="flex items-center gap-3">
          <a
            href="tel:8540814729"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center active:scale-95 transition-transform"
            aria-label="Call Us"
          >
            <Phone size={16} className="text-white" aria-hidden="true" />
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center active:scale-95 transition-transform text-white"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer — CSS opacity + translateY, no Framer Motion ── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-0 top-16 bg-[#030303]/98 backdrop-blur-3xl z-40 lg:hidden overflow-y-auto px-6 py-8 flex flex-col justify-between transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        {/* Nav Items */}
        <div className="space-y-4">
          {navItems.map((item, idx) => {
            const hasChildren = item.children && item.children.length > 0;
            const isSubOpen = mobileSubmenuOpen === idx;
            const isItemActive =
              pathname === item.href ||
              (item.children && item.children.some(c => pathname === c.href));

            return (
              <div key={idx} className="border-b border-white/5 pb-4">
                {hasChildren ? (
                  <div>
                    <button
                      onClick={() => setMobileSubmenuOpen(isSubOpen ? null : idx)}
                      className="flex items-center justify-between w-full text-left py-2 focus:outline-none"
                      aria-expanded={isSubOpen}
                      aria-label={`${item.label} submenu`}
                    >
                      <span className={`text-base font-bold tracking-wider uppercase ${isItemActive ? "text-[#FF3B00]" : "text-white"}`}>
                        {item.label}
                      </span>
                      <ChevronDown
                        size={18}
                        aria-hidden="true"
                        className={`transition-transform duration-300 ${isSubOpen ? "rotate-180 text-[#FF3B00]" : "text-neutral-500"}`}
                      />
                    </button>

                    {/* Submenu — CSS max-height collapse */}
                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        isSubOpen ? "max-h-[600px] opacity-100 mt-3" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pl-4 space-y-2">
                        {item.children.map((child, ci) => {
                          const isChildActive = pathname === child.href;
                          return (
                            <Link
                              key={ci}
                              href={child.href}
                              className={`flex items-center gap-3 py-2 text-sm transition-colors ${
                                isChildActive ? "text-white font-medium" : "text-neutral-400"
                              }`}
                            >
                              <child.icon
                                size={14}
                                aria-hidden="true"
                                className={child.highlight || isChildActive ? "text-[#FF3B00]" : "text-neutral-500"}
                              />
                              <span>{child.label}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`block py-2 text-base font-bold tracking-wider uppercase transition-colors ${
                      isItemActive ? "text-[#FF3B00]" : "text-white hover:text-[#FF3B00]"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom contact block */}
        <div className="mt-12 pt-6 border-t border-white/5 space-y-6">
          <div className="flex flex-col gap-2 text-xs text-neutral-400 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
              <span>Available for custom projects</span>
            </div>
            <span>hello@webfloratechnologies.com</span>
            <span>info@webfloratechnologies.com</span>
            <span>+91 85408 14729</span>
          </div>

          <a
            href="tel:8540814729"
            aria-label="Call Direct Sales"
            className="w-full py-4 bg-[#FF3B00] hover:bg-[#ff4e1a] text-white text-center font-bold tracking-wider rounded-full flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(255,59,0,0.3)] active:scale-[0.98] transition-transform"
          >
            <Phone size={15} aria-hidden="true" />
            CALL DIRECT SALES
          </a>
        </div>
      </div>
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
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
  X
} from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  {
    icon: Briefcase,
    label: "Services",
    href: "/services",
    children: [
      { icon: Bot, label: "Vegavan AI", desc: "Autonomous conversational support.", href: "/vegavan-ai", highlight: true },
      { icon: Bot, label: "AI & Automation", desc: "Custom n8n and workflow agents.", href: "/services/ai-automation-company-in-patna" },
      { icon: Globe, label: "Website Dev", desc: "High-performance marketing sites.", href: "/services/website-development-company-in-patna" },
      { icon: Smartphone, label: "App Dev", desc: "Native iOS & Android systems.", href: "/services/mobile-app-development-company-in-patna" },
      { icon: Layers, label: "Software Systems", desc: "Enterprise cloud platforms & ERP.", href: "/services/software-development-company-in-patna" },
      { icon: Share2, label: "Digital Growth", desc: "ROI-driven marketing campaigns.", href: "/services/digital-marketing-agency-in-patna" },
      { icon: FileText, label: "Case Studies", desc: "Our verified customer stories.", href: "/case-studies" },
    ]
  },
  {
    icon: Building2,
    label: "Industries",
    href: "/industries",
    children: [
      { icon: Heart, label: "Healthcare", desc: "Secure telemedicine & patient portals.", href: "/industries/healthcare" },
      { icon: GraduationCap, label: "Education", desc: "Scalable LMS & online exam systems.", href: "/industries/education" },
      { icon: Home, label: "Real Estate", desc: "Stunning property portals & lead CRM.", href: "/industries/real-estate" },
      { icon: Factory, label: "Manufacturing", desc: "Custom inventory ERP & B2B portals.", href: "/industries/manufacturing" },
      { icon: ShoppingBag, label: "Retail", desc: "Fast e-commerce & unified checkout.", href: "/industries/retail" },
    ]
  },
  { icon: Info, label: "About", href: "/about" },
  { icon: BookOpen, label: "Blog", href: "/blog" },
  { icon: Trophy, label: "Career", href: "/career" },
  { icon: Phone, label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);
  const pathname = usePathname();

  const isAdminPage = pathname?.startsWith("/admin");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
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
      {/* Desktop Floating Glass Capsule Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed z-50 left-1/2 -translate-x-1/2 hidden lg:block transition-all duration-500 ${
          scrolled 
            ? "top-4 w-[76%] bg-[#050505]/75 backdrop-blur-3xl border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] rounded-full" 
            : "top-8 w-[82%] bg-black/35 backdrop-blur-2xl border border-white/5 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.7)] rounded-full"
        }`}
      >
        <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#FF3B00]/40 to-transparent blur-[1px]" />
        
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between font-sans relative">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="w-[130px] h-[40px] flex items-center"
            >
              <Image
                src="/webflora-logo.svg"
                alt="WebFlora Technologies Logo"
                className="w-full h-full object-contain"
                width={130}
                height={40}
                priority
              />
            </motion.div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-2 text-[13px] font-medium tracking-tight text-neutral-300">
            {navItems.map((item, idx) => {
              const isChildActive = item.children && item.children.some(child => pathname === child.href);
              const isActive = pathname === item.href || isChildActive;

              if (item.children) {
                return (
                  <div 
                    key={idx} 
                    className="relative py-4 group"
                    onMouseEnter={() => setActiveDropdown(idx)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className={`flex items-center gap-1 hover:text-white transition-all duration-300 cursor-pointer relative py-2 px-4 focus:outline-none rounded-full ${
                      isActive ? "text-white font-semibold" : ""
                    }`}>
                      {item.label}
                      <ChevronDown size={13} className={`transition-transform duration-300 text-neutral-500 group-hover:text-white ${activeDropdown === idx ? "rotate-180" : ""}`} />
                      
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-pill"
                          className="absolute inset-0 bg-white/[0.07] border border-white/[0.08] rounded-full -z-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
                          transition={{ type: "spring", stiffness: 380, damping: 28 }}
                        />
                      )}
                    </button>

                    {/* Desktop Dropdown Popover */}
                    <AnimatePresence>
                      {activeDropdown === idx && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 12, scale: 0.97 }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          style={{ originX: 0.5, originY: 0 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-[#050505]/95 backdrop-blur-3xl border border-white/10 rounded-2xl p-4 shadow-[0_40px_80px_rgba(0,0,0,0.95)] z-[200]"
                        >
                          <div className="absolute top-[-5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45 bg-[#050505] border-t border-l border-white/10 z-[199]" />
                          
                          <div className="grid grid-cols-2 gap-2 relative z-[200]">
                            {item.children.map((child, ci) => {
                              const ChildIcon = child.icon;
                              const isChildUrlActive = pathname === child.href;

                              return (
                                <Link key={ci} href={child.href}>
                                  <motion.div
                                    whileHover={{ y: -1, backgroundColor: "rgba(255, 255, 255, 0.04)" }}
                                    className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-300 border border-transparent hover:border-white/5 ${
                                      child.highlight 
                                        ? "bg-[#FF3B00]/5 border-[#FF3B00]/15 hover:bg-[#FF3B00]/10" 
                                        : ""
                                    }`}
                                  >
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                                      child.highlight ? "bg-[#FF3B00] text-white shadow-[0_0_15px_rgba(255,59,0,0.4)]" : "bg-white/5 text-neutral-400 group-hover:text-white"
                                    }`}>
                                      <ChildIcon size={14} />
                                    </div>
                                    <div className="text-left">
                                      <div className={`text-[11px] font-bold uppercase tracking-wider ${
                                        isChildUrlActive || child.highlight ? "text-white" : "text-neutral-200"
                                      }`}>
                                        {child.label}
                                      </div>
                                      <div className="text-[10px] text-neutral-400 font-medium tracking-normal mt-0.5 leading-snug normal-case">
                                        {child.desc}
                                      </div>
                                    </div>
                                  </motion.div>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 bg-white/[0.07] border border-white/[0.08] rounded-full -z-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA: Call Us Button */}
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 450, damping: 22 }}
              className="relative z-10"
            >
              <a
                href="tel:8540814729"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF3B00] hover:bg-[#ff4e1a] text-white text-[11px] font-black tracking-wider uppercase rounded-full shadow-[0_8px_25px_rgba(255,59,0,0.35)] transition-all duration-300 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:animate-shimmer" style={{ animationDuration: '1.2s' }} />
                
                <div className="relative flex items-center justify-center w-3 h-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <iconify-icon icon="solar:phone-calling-linear" class="text-xs relative z-10"></iconify-icon>
                </div>
                Call Us
              </a>
            </motion.div>
          </div>

        </div>
      </motion.nav>

      {/* Mobile Top Header (Fixed on Mobile & Tablet) */}
      <div className="fixed top-0 left-0 w-full h-16 bg-[#030303]/80 backdrop-blur-xl border-b border-white/5 z-50 flex items-center justify-between px-6 lg:hidden">
        <Link href="/" className="flex items-center">
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
            <Phone size={16} className="text-white" />
          </a>
          
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center active:scale-95 transition-transform text-white"
            aria-label="Toggle Navigation Drawer"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Full-Screen Glassmorphic Navigation Drawer for Mobile/Tablet */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-16 bg-[#030303]/98 backdrop-blur-3xl z-40 lg:hidden overflow-y-auto px-6 py-8 flex flex-col justify-between"
          >
            {/* Nav Items List */}
            <div className="space-y-4">
              {navItems.map((item, idx) => {
                const hasChildren = item.children && item.children.length > 0;
                const isSubOpen = mobileSubmenuOpen === idx;
                const isItemActive = pathname === item.href || (item.children && item.children.some(child => pathname === child.href));

                return (
                  <div key={idx} className="border-b border-white/5 pb-4">
                    {hasChildren ? (
                      <div>
                        <button
                          onClick={() => setMobileSubmenuOpen(isSubOpen ? null : idx)}
                          className="flex items-center justify-between w-full text-left py-2 focus:outline-none"
                        >
                          <span className={`text-base font-bold tracking-wider uppercase ${isItemActive ? "text-[#FF3B00]" : "text-white"}`}>
                            {item.label}
                          </span>
                          <ChevronDown size={18} className={`transition-transform duration-300 ${isSubOpen ? "rotate-180 text-[#FF3B00]" : "text-neutral-500"}`} />
                        </button>
                        
                        <AnimatePresence>
                          {isSubOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="mt-3 pl-4 space-y-2 overflow-hidden"
                            >
                              {item.children.map((child, ci) => {
                                const isChildActive = pathname === child.href;
                                return (
                                  <Link
                                    key={ci}
                                    href={child.href}
                                    className={`flex items-center gap-3 py-2 text-sm transition-colors ${isChildActive ? "text-white font-medium" : "text-neutral-400"}`}
                                  >
                                    <child.icon size={14} className={child.highlight || isChildActive ? "text-[#FF3B00]" : "text-neutral-500"} />
                                    <span>{child.label}</span>
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block py-2 text-base font-bold tracking-wider uppercase transition-colors ${isItemActive ? "text-[#FF3B00]" : "text-white hover:text-[#FF3B00]"}`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quick Actions & Contacts block at the bottom */}
            <div className="mt-12 pt-6 border-t border-white/5 space-y-6">
              <div className="flex flex-col gap-2 text-xs text-neutral-500 font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span>Available for custom projects</span>
                </div>
                <span>hello.webflora@gmail.com</span>
                <span>+91 85408 14729</span>
              </div>
              
              <a
                href="tel:8540814729"
                className="w-full py-4 bg-[#FF3B00] hover:bg-[#ff4e1a] text-white text-center font-bold tracking-wider rounded-full flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(255,59,0,0.3)] active:scale-98 transition-transform"
              >
                <Phone size={15} />
                CALL DIRECT SALES
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

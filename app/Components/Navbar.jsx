"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Briefcase, Info, Phone, BookOpen, Trophy, Globe, Smartphone, Layers, Bot, Share2, ChevronUp } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { 
    icon: Briefcase, 
    label: "Services", 
    href: "/services",
    children: [
      { icon: Globe, label: "Web Dev", href: "/services/web-development" },
      { icon: Smartphone, label: "App Dev", href: "/services/app-development" },
      { icon: Layers, label: "Software", href: "/services/software-development" },
      { icon: Bot, label: "AI & Automation", href: "/services/ai-automation" },
      { icon: Share2, label: "Marketing", href: "/services/social-media-marketing" },
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
  const pathname = usePathname();

  const isCareerPage = pathname === "/career" || pathname?.includes("career");
  const isAdminPage = pathname?.startsWith("/admin");

  if (isAdminPage) return null;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed z-50 transition-all duration-500 left-1/4 top-6 lg:top-8 w-1/2 rounded-lg ${isCareerPage
          ? "bg-black/40 backdrop-blur-xl border border-white/10 hidden lg:block"
          : scrolled
            ? "bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hidden lg:block"
            : "bg-transparent border border-transparent lg:scale-105"
          }`}
      >
        <div className="max-w-9xl mx-auto px-6 h-20 flex items-center justify-between font-display">
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05, rotate: -1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-[140px] h-[50px] lg:w-[150px] lg:h-[55px] flex items-center"
            >
              <img
                src="/webflora-logo.svg"
                alt="WebFlora Logo"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </Link>

          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href="/contact"
                className="hidden md:inline-flex btn-primary px-6 py-2.5 text-xs"
              >
                Start Project
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      <div className="fixed bottom-4 sm:bottom-5 md:bottom-6 left-1/2 -translate-x-1/2 z-50 w-full px-3 sm:px-4 md:px-6">
        <motion.div
          initial={{ y: 80, opacity: 0, scale: 0.92 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="
            relative 
            w-[94vw] sm:w-fit
            max-w-[98vw]
            mx-auto
            px-4 sm:px-10 md:px-12
            py-3 sm:py-5 md:py-4 lg:py-3
            rounded-full
          "
          style={{
            background: "rgba(10, 10, 10, 0.8)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
          }}
        >
          {/* CONTENT */}
          <div className="relative z-10 h-10 lg:h-9 flex items-center justify-around sm:justify-center gap-x-1 sm:gap-x-7 md:gap-x-9 lg:gap-x-8">
            {/* NAV ITEMS */}
            {navItems.map((item, i) => {
              const Icon = item.icon;
              const active = pathname === item.href || (item.children && item.children.some(child => pathname === child.href));
              const hasChildren = item.children && item.children.length > 0;

              return (
                <div 
                  key={i} 
                  className="relative group"
                  onMouseEnter={() => {
                    if (hasChildren) {
                      if (window.hoverTimeout) clearTimeout(window.hoverTimeout);
                      setActiveDropdown(i);
                    }
                  }}
                  onMouseLeave={() => {
                    if (hasChildren) {
                      window.hoverTimeout = setTimeout(() => setActiveDropdown(null), 150);
                    }
                  }}
                  onClick={(e) => {
                    if (hasChildren) {
                      e.preventDefault();
                      setActiveDropdown(activeDropdown === i ? null : i);
                    }
                  }}
                >
                  {hasChildren ? (
                    <div className="flex-shrink-0 cursor-pointer">
                      <motion.div
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 25,
                        }}
                        className="flex flex-col items-center gap-1 group"
                      >
                        <Icon
                          size={18}
                          strokeWidth={1.5}
                          className={`transition-colors duration-300 lg:w-4 lg:h-4 ${active
                            ? "text-brand"
                            : "text-white/60 group-hover:text-white"
                            }`}
                        />

                        {/* Label */}
                        <span
                          className={`text-[8px] sm:text-[10px] md:text-[11px] lg:text-[10px] font-bold tracking-tight whitespace-nowrap transition-colors duration-300 ${active
                            ? "text-brand"
                            : "text-white/40 group-hover:text-white/70"
                            }`}
                        >
                          {item.label}
                        </span>
                      </motion.div>
                    </div>
                  ) : (
                    <Link href={item.href} className="flex-shrink-0">
                      <motion.div
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 25,
                        }}
                        className="flex flex-col items-center gap-1 cursor-pointer group"
                      >
                        <Icon
                          size={18}
                          strokeWidth={1.5}
                          className={`transition-colors duration-300 lg:w-4 lg:h-4 ${active
                            ? "text-brand"
                            : "text-white/60 group-hover:text-white"
                            }`}
                        />

                        {/* Label */}
                        <span
                          className={`text-[8px] sm:text-[10px] md:text-[11px] lg:text-[10px] font-bold tracking-tight whitespace-nowrap transition-colors duration-300 ${active
                            ? "text-brand"
                            : "text-white/40 group-hover:text-white/70"
                            }`}
                        >
                          {item.label}
                        </span>
                      </motion.div>
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {hasChildren && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95, pointerEvents: "none" }}
                      animate={activeDropdown === i ? { opacity: 1, y: -10, scale: 1, pointerEvents: "auto" } : { opacity: 0, y: 10, scale: 0.95, pointerEvents: "none" }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-[#0A0A0A]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-[60]"
                      onMouseEnter={() => {
                        if (window.hoverTimeout) clearTimeout(window.hoverTimeout);
                      }}
                    >
                      {/* Transparent Bridge to prevent hover loss */}
                      <div className="absolute top-full left-0 w-full h-10 cursor-default" />
                      
                      <div className="flex flex-col gap-1">
                        {item.children.map((child, ci) => (
                          <Link key={ci} href={child.href}>
                            <motion.div
                              whileHover={{ x: 4, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                              className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${pathname === child.href ? "bg-brand/10 text-brand" : "text-white/70 hover:text-white"}`}
                            >
                              <child.icon size={14} strokeWidth={2} />
                              <span className="text-xs font-bold whitespace-nowrap">{child.label}</span>
                            </motion.div>
                          </Link>
                        ))}
                        <div className="h-px bg-white/10 my-1" />
                        <Link href={item.href}>
                          <motion.div
                            whileHover={{ x: 4, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                            className="flex items-center justify-between px-3 py-2 rounded-xl text-white/50 hover:text-white transition-colors"
                          >
                            <span className="text-[10px] font-bold uppercase tracking-wider">View All Services</span>
                            <Icon size={12} />
                          </motion.div>
                        </Link>
                      </div>
                      {/* Arrow Down */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white/10"></div>
                    </motion.div>
                  )}
                </div>
              );
            })}

            {/* CALL OPTION (Integrated for even spacing) */}
            <div className="flex-shrink-0">
              <a href="tel:8540814729">
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-11 md:h-11 lg:w-9 lg:h-9 rounded-full flex items-center justify-center bg-brand-red shadow-[0_0_25px_rgba(255,60,0,0.4)] border border-white/10"
                >
                  <Phone size={16} className="text-white lg:w-3.5 lg:h-3.5" />
                </motion.div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

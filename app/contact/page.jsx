"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import API_BASE_URL from "../config";

const BRAND = "#ff3b00";

function Magnetic({ children }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen pt-32 pb-20 px-4 md:px-10 overflow-hidden bg-[#020202] selection:bg-[#ff3b00]/30 font-display">
      {/* Background Matrix Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="creative-grid-bg" />
        <div className="creative-grid-dots" />
        
        {/* Rising glowing dots */}
        <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-[#FF3B00] rounded-full shadow-[0_0_8px_#ff3c00,0_0_15px_#ff3c00]" style={{ left: "calc(45px * 3)", "--duration": "9s", "--delay": "0s" }} />
        <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6,0_0_15px_#3b82f6]" style={{ left: "calc(45px * 10)", "--duration": "12s", "--delay": "2s" }} />
        <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-[#FF3B00] rounded-full shadow-[0_0_10px_#ff3c00,0_0_20px_#ff3c00]" style={{ left: "calc(45px * 17)", "--duration": "14s", "--delay": "4s" }} />
        <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-orange-400 rounded-full shadow-[0_0_8px_#fb923c,0_0_15px_#fb923c]" style={{ left: "calc(45px * 24)", "--duration": "11s", "--delay": "1s" }} />
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Unique Header: Vertical & Horizontal Mix */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center md:items-start text-center md:text-left w-full"
          >
            <span className="text-[#ff3b00] font-black tracking-[0.5em] text-[8px] md:text-[10px] uppercase mb-4 ml-0 md:ml-2">
              Neural Connectivity // 01
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-[5rem] font-black leading-[0.9] md:leading-[1] tracking-tighter text-white uppercase mb-4">
              Contact Webflora Technologies
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-500 tracking-tight lowercase">
              Get in Touch <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/50 to-transparent italic">With Our Team</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-md text-center md:text-right border-b-2 md:border-b-0 md:border-r-2 border-[#ff3b00] pb-6 md:pb-0 md:pr-8 md:py-4"
          >
            <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed">
              Contact Webflora Technologies for website development, mobile app development, AI automation, software development, and digital marketing services in Patna Bihar.
            </p>
          </motion.div>
        </div>

        {/* The Matrix Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto mb-32">

          {/* Tile 1: The Core (Form) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-7 bg-zinc-900/30 backdrop-blur-3xl border border-white/5 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-14 relative overflow-hidden group shadow-2xl min-h-[500px] md:min-h-[600px]"
          >
            <div className="absolute top-0 right-0 p-6 md:p-8">
              <div className="w-2 h-2 rounded-full bg-[#ff3b00] animate-pulse shadow-[0_0_15px_#ff3b00]" />
            </div>

            <div className="relative z-10 h-full flex flex-col">
              <h2 className="text-xl md:text-3xl font-bold text-white mb-8 md:mb-10 flex items-center gap-4">
                <span className="text-[#ff3b00]">/</span> INITIATE PROJECT PROTOCOL
              </h2>

              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const data = Object.fromEntries(formData);
                  try {
                    const res = await fetch(`${API_BASE_URL}/api/public/inquiry`, {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(data),
                    });
                    if (res.ok) {
                      alert("Transmission Secured.");
                      e.target.reset();
                    }
                  } catch (err) { alert("Link Error."); }
                }}
                className="space-y-6 md:space-y-8 flex-1"
                toolname="initiateProjectProtocol"
                tooldescription="Submit a comprehensive project inquiry or digital ecosystem development request to Webflora Technologies."
              >
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2">
                    <label className="text-[8px] md:text-[9px] font-black tracking-[0.3em] text-gray-600 uppercase">Subject Identity</label>
                    <input name="name" required placeholder="NAME" toolparamdescription="The full name of the inquiry sender." className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 text-white focus:outline-none focus:border-[#ff3b00] transition-colors placeholder:text-gray-800 font-bold text-sm md:text-base" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[8px] md:text-[9px] font-black tracking-[0.3em] text-gray-600 uppercase">Neural Endpoint</label>
                    <input name="email" type="email" required placeholder="EMAIL" toolparamdescription="The email address endpoint for secured replies." className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 text-white focus:outline-none focus:border-[#ff3b00] transition-colors placeholder:text-gray-800 font-bold text-sm md:text-base" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[8px] md:text-[9px] font-black tracking-[0.3em] text-gray-600 uppercase">Evolution Phase</label>
                  <select name="service" toolparamdescription="The evolution phase or category of service requested (e.g. Digital Ecosystem Development, Architecture & Strategy, Visual Systems Design, Intelligent Automation)." className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 text-white focus:outline-none focus:border-[#ff3b00] transition-colors appearance-none font-bold cursor-pointer text-sm md:text-base">
                    <option className="bg-black text-white">Digital Ecosystem Development</option>
                    <option className="bg-black text-white">Architecture & Strategy</option>
                    <option className="bg-black text-white">Visual Systems Design</option>
                    <option className="bg-black text-white">Intelligent Automation</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[8px] md:text-[9px] font-black tracking-[0.3em] text-gray-600 uppercase">Mission brief</label>
                  <textarea name="message" required rows="4" placeholder="DESCRIBE YOUR VISION..." toolparamdescription="The detailed mission brief or project vision description." className="w-full bg-white/5 border border-white/10 p-4 md:p-6 text-white focus:outline-none focus:border-[#ff3b00] transition-colors placeholder:text-gray-800 font-bold resize-none rounded-xl md:rounded-2xl text-sm md:text-base" />
                </div>

                <div className="pt-4">
                  <Magnetic>
                    <button type="submit" className="group relative px-10 md:px-12 py-5 md:py-6 bg-white text-black font-black text-[10px] md:text-xs tracking-[0.3em] rounded-full overflow-hidden hover:bg-[#ff3b00] hover:text-white transition-all duration-500 shadow-2xl w-full md:w-auto">
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        EXECUTE LINK <Icon icon="solar:round-arrow-right-bold" width={20} />
                      </span>
                    </button>
                  </Magnetic>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Tile 2: Satellite Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-5 bg-zinc-900/20 backdrop-blur-xl border border-white/5 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative group min-h-[350px] md:min-h-[300px]"
          >
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[8px] md:text-[9px] font-bold text-white tracking-widest uppercase">Live Link: Patna HQ</span>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.2982576997283!2d85.18816095!3d25.595003549999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21c68970d895ed2f%3A0xe37df118c3b591d9!2sWebflora%20Technologies!5e0!3m2!1sen!2sin!4v1776751184074!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) invert(1) contrast(1.1) brightness(0.7)" }}
              allowFullScreen=""
              loading="lazy"
              className="opacity-40 group-hover:opacity-70 transition-opacity duration-1000 scale-110 group-hover:scale-100"
            />

            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-20">
              <a
                href="https://maps.app.goo.gl/7NaCiVttuDvndmzK9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 bg-[#ff3b00] text-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
              >
                <Icon icon="solar:map-arrow-square-bold-duotone" width={24} />
              </a>
            </div>
          </motion.div>

          {/* Tile 3: Direct Comms */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="md:col-span-4 bg-[#ff3b00] rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between group shadow-[0_30px_60px_rgba(255,59,0,0.3)] min-h-[320px]"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white shadow-inner">
              <Icon icon="solar:phone-bold-duotone" width={32} />
            </div>
            <div>
              <p className="text-white/70 text-[9px] font-black tracking-[0.4em] uppercase mb-3">Direct Voice</p>
              <h3 className="text-2xl md:text-3xl font-black text-white leading-[1.1] tracking-tighter">
                85408 14729 <br />
                88630 81255
              </h3>
              <div className="mt-8 flex flex-col gap-3">
                <a href="tel:+918540814729" className="inline-flex items-center gap-3 text-[10px] md:text-xs font-black text-white group-hover:gap-5 transition-all">
                  CALL PRIMARY <Icon icon="solar:arrow-right-linear" width={16} />
                </a>
                <a href="tel:+918863081255" className="inline-flex items-center gap-3 text-[10px] md:text-xs font-black text-white group-hover:gap-5 transition-all text-white/70 hover:text-white">
                  CALL SECONDARY <Icon icon="solar:arrow-right-linear" width={16} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Tile 3b: Direct Mail */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="md:col-span-4 bg-white/5 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between group shadow-xl min-h-[320px] border border-white/10 hover:bg-white/10 transition-colors"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white shadow-inner">
              <Icon icon="solar:letter-bold-duotone" width={32} />
            </div>
            <div>
              <p className="text-white/70 text-[9px] font-black tracking-[0.4em] uppercase mb-3">Email Comms</p>
              <h3 className="text-lg md:text-xl font-black text-white leading-[1.2] tracking-tighter break-all">
                hello@webfloratechnologies.com <br />
                info@webfloratechnologies.com
              </h3>
              <div className="mt-8 flex flex-col gap-3">
                <a href="mailto:hello@webfloratechnologies.com" className="inline-flex items-center gap-3 text-[10px] md:text-xs font-black text-white group-hover:gap-5 transition-all">
                  SEND MAIL (PRIMARY) <Icon icon="solar:arrow-right-linear" width={16} />
                </a>
                <a href="mailto:info@webfloratechnologies.com" className="inline-flex items-center gap-3 text-[10px] md:text-xs font-black text-white group-hover:gap-5 transition-all text-white/70 hover:text-white">
                  SEND MAIL (SECONDARY) <Icon icon="solar:arrow-right-linear" width={16} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Tile 3c: Physical Address */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.58 }}
            className="md:col-span-4 bg-white/5 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between group shadow-xl min-h-[320px] border border-white/10 hover:bg-white/10 transition-colors"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white shadow-inner">
              <Icon icon="solar:map-point-bold-duotone" width={32} className="text-[#ff3b00]" />
            </div>
            <div>
              <p className="text-white/70 text-[9px] font-black tracking-[0.4em] uppercase mb-3">Headquarters</p>
              <h3 className="text-sm font-bold text-gray-300 leading-relaxed mb-4">
                NMCH College, Bajar Samiti, New Kunj Colony, Saketpuri, Patna, Bihar, 800016, India
              </h3>
              <a
                href="https://maps.app.goo.gl/7NaCiVttuDvndmzK9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[10px] md:text-xs font-black text-white group-hover:gap-5 transition-all"
              >
                OPEN MAPS <Icon icon="solar:arrow-right-linear" width={16} />
              </a>
            </div>
          </motion.div>

          {/* Tile 4: Social Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="md:col-span-6 bg-zinc-900/40 border border-white/5 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between min-h-[320px]"
          >
            <div>
              <p className="text-gray-500 text-[9px] font-black tracking-[0.4em] uppercase mb-3">Connect Socially</p>
              <h3 className="text-2xl md:text-3xl font-black text-white leading-[1.1] tracking-tighter">
                Follow Our Updates
              </h3>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-6">
              {[
                { id: "instagram", icon: "simple-icons:instagram", url: "https://www.instagram.com/webflora.technologies?igsh=aW5lNnk1Z2g1ZXRq" },
                { id: "linkedin", icon: "simple-icons:linkedin", url: "https://www.linkedin.com/company/webfloratechnologies/" },
                { id: "twitter", icon: "simple-icons:x", url: "#" },
                { id: "facebook", icon: "simple-icons:facebook", url: "https://www.facebook.com/profile.php?id=61580014195502" },
              ].map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-16 bg-white/[0.03] border border-white/5 rounded-2xl hover:bg-[#ff3b00] hover:text-white text-gray-500 transition-all duration-500 group"
                >
                  <Icon icon={social.icon} width={24} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Tile 5: Review Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="md:col-span-6 bg-zinc-900/20 backdrop-blur-3xl border border-white/5 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between group hover:bg-zinc-900/40 transition-all duration-700 min-h-[320px]"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#ff3b00]/10 border border-[#ff3b00]/20 flex items-center justify-center text-[#ff3b00] shadow-[0_0_30px_rgba(255,59,0,0.1)]">
              <Icon icon="solar:star-bold-duotone" width={32} className="group-hover:rotate-12 transition-transform" />
            </div>
            <div>
              <p className="text-white/70 text-[9px] font-black tracking-[0.4em] uppercase mb-3">Digital Rep</p>
              <h3 className="text-2xl md:text-3xl font-black text-white leading-[1.1] tracking-tighter">
                Rate Our<br/>Work
              </h3>
              <a
                href="https://share.google/549i9Mw8hQelc2gcw"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 text-[10px] md:text-xs font-black text-[#ff3b00] group-hover:gap-5 transition-all"
              >
                REVIEW NOW <Icon icon="solar:arrow-right-up-linear" width={16} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, ExternalLink } from "lucide-react";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const teamMembers = [
  {
    name: "Shashank Manohar",
    role: "Founder & Lead Developer",
    bio: "A versatile Full-Stack, Mobile App, Blockchain, and Software Developer engineering scalable, secure decentralized architectures, high-performance web systems, and mobile applications.",
    instagram: "https://www.instagram.com/shank__manohar",
    linkedin: "https://www.linkedin.com/in/shashank-manohar-429a1b1b4/",
    image: "/FounderPhoto/founder1.webp",
  },
  {
    name: "Amitesh Kumar",
    role: "Co-Founder & UI Designer",
    bio: "UI/UX Design Expert, Frontend Developer, and Software Developer specializing in high-fidelity user interfaces, user experience design, and responsive, premium web applications.",
    instagram: "https://www.instagram.com/amitesh.kumarr?igsh=MXNqdTZ5aTRmbXc0eA==",
    linkedin: "https://www.linkedin.com/in/amitesh-kumar-21a48b17a",
    image: "/FounderPhoto/founder2.webp",
  },
];

export default function TeamSection() {
  return (
    <section className="px-6 py-20 bg-black relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#ff3c00]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-white/5 blur-[100px] rounded-full pointer-events-none" />
 
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#ff3c00] font-mono text-xs tracking-[0.3em] uppercase mb-4 block"
          >
            The Team
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6"
          >
            Minds Behind <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">The Innovation.</span>
          </motion.h2>
        </div>
 
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative h-[450px] rounded-[2rem] overflow-hidden border border-white/5 bg-[#080808] transition-all duration-500 hover:border-[#ff3c00]/30"
            >
              {/* Profile Image Overlay */}
              {member.image === "/FounderPhoto/founder1.webp" ? (
                  <Image
                    src="/FounderPhoto/founder1.webp"
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 grayscale group-hover:grayscale-0"
                  />
                ) : (
                  /* Premium glowing placeholder for Amitesh until photo is provided */
                  <div className="w-full h-full bg-gradient-to-b from-[#ff3c00]/10 via-zinc-950 to-black flex flex-col items-center justify-center relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,59,0,0.05),transparent_60%)] pointer-events-none" />
                    {/* Glowing Ring Avatar Placeholder */}
                    <div className="w-24 h-24 rounded-full bg-zinc-900/80 border border-white/10 flex items-center justify-center relative group-hover:border-[#ff3c00]/50 group-hover:shadow-[0_0_30px_rgba(255,59,0,0.2)] transition-all duration-500 mb-4 overflow-hidden">
                      <span className="text-white text-3xl font-black tracking-tight">{member.name.split(" ").map(n => n[0]).join("")}</span>
                    </div>
                    <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">Photo Upload Pending</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
 
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-[#ff3c00] text-black text-[9px] font-black tracking-widest uppercase rounded-full">
                    {member.role}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                  {member.name}
                </h3>
                
                <p className="text-neutral-500 text-xs leading-relaxed mb-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {member.bio}
                </p>

                <div className="flex items-center gap-3">
                  <a 
                    href={member.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Follow ${member.name} on Instagram`}
                    className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#ff3c00] hover:text-black hover:border-[#ff3c00] transition-all duration-300 text-neutral-400"
                  >
                    <Instagram size={18} />
                  </a>
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Connect with ${member.name} on LinkedIn`}
                    className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#ff3c00] hover:text-black hover:border-[#ff3c00] transition-all duration-300 text-neutral-400"
                  >
                    <Linkedin size={18} />
                  </a>
                  <button className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-[#ff3c00] hover:text-black hover:border-[#ff3c00] transition-all duration-300">
                    View Case Studies
                  </button>
                </div>
              </div>

              {/* Top accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff3c00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

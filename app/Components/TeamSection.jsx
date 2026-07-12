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
    instagram: "https://www.instagram.com/shashank__arr?igsh=MXM3NmhvYzh5cWlkZQ==",
    image: "/team/shashank.jpg",
  },
  {
    name: "Amitesh Kumar",
    role: "Co-Founder & UI Designer",
    bio: "UI/UX Design Expert, Frontend Developer, and Software Developer specializing in high-fidelity user interfaces, user experience design, and responsive, premium web applications.",
    instagram: "https://www.instagram.com/amitesh.kumarr?igsh=MXNqdTZ5aTRmbXc0eA==",
    image: "/team/amitesh.jpg",
  },
  {
    name: "Aadarsh Kumar",
    role: "Digital Marketer",
    bio: "Expert in scaling brands through data-driven performance marketing and growth strategies. Certified Google Ads & Analytics Specialist focused on local SEO and ROAS optimization.",
    instagram: "https://www.instagram.com/ad_prajapati30?igsh=djQ3azZsYWlhbGgy",
    image: "/team/aadarsh.jpg",
  },
  {
    name: "Nikhil Kumar",
    role: "Digital Marketer",
    bio: "Specializing in brand voice and community engagement across all digital platforms. Google-certified Content Strategist focused on building long-term organic authority.",
    instagram: "https://www.instagram.com/ad_prajapati30?igsh=djQ3azZsYWlhbGgy",
    image: "/team/nikhil.jpg",
  },
  {
    name: "Ranjan Kumar",
    role: "Video Editor",
    bio: "Visual storyteller dedicated to creating cinematic and engaging video content for modern brands. Master's in Visual Communication with extensive creative portfolio.",
    instagram: "https://www.instagram.com/sharp_._._abhishek?igsh=MTAwbmgwZzgyYXprOA==",
    image: "/team/ranjan.jpg",
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative h-[450px] rounded-[2rem] overflow-hidden border border-white/5 bg-[#080808] transition-all duration-500 hover:border-[#ff3c00]/30"
            >
              {/* Profile Image Overlay */}
              {member.image === "/team/shashank.jpg" ? (
                  <Image
                    src="/FounderPhoto/founder1.webp"
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 grayscale group-hover:grayscale-0"
                  />
                ) : (
                  <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                    <span className="text-zinc-800 text-7xl font-black">{member.name.charAt(0)}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
 
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

                <div className="flex items-center gap-4">
                  <a 
                    href={member.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Follow ${member.name} on Instagram`}
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <Instagram size={20} />
                  </a>
                  <button className="flex-1 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#ff3c00] hover:text-black hover:border-[#ff3c00] transition-all duration-300">
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

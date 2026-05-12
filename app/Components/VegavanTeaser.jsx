"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function VegavanTeaser() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-black">
      {/* Background dynamic gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -left-[10%] w-[60%] h-[60%] bg-[#FF3B00]/10 rounded-full blur-[120px] opacity-50 animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-orange-600/10 rounded-full blur-[100px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF3B00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF3B00]"></span>
              </span>
              <span className="text-xs md:text-sm font-bold text-white uppercase tracking-widest">Announcing Our First SaaS</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter">
              Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3B00] via-orange-400 to-yellow-500">Vegavan AI</span>
            </h2>

            <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-xl">
              The ultimate intelligent Conversational AI platform. Automate 90% of customer interactions, drive sales, and capture leads 24/7 without writing a single line of code.
            </p>

            <div className="space-y-4 py-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-[#FF3B00]">
                  <Icon icon="solar:chat-square-code-bold-duotone" width={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Human-like Interactions</h4>
                  <p className="text-sm text-gray-500">Powered by state-of-the-art NLP models.</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-orange-400">
                  <Icon icon="solar:bolt-circle-bold-duotone" width={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Instant Setup</h4>
                  <p className="text-sm text-gray-500">Train on your data in minutes.</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-orange-400">
                  <Icon icon="solar:layers-bold-duotone" width={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Omnichannel Integration</h4>
                  <p className="text-sm text-gray-500">Deploy effortlessly across Websites & Mobile Apps.</p>
                </div>
              </div>
            </div>

            <Link href="/vegavan-ai">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 bg-white text-black font-black px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(255, 59, 0,0.4)]"
              >
                Explore the Future
                <Icon icon="solar:arrow-right-up-bold" width={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Graphic Representation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/3] lg:aspect-square rounded-[3rem] overflow-hidden border border-white/10 bg-gradient-to-br from-[#121212] to-[#080808] shadow-2xl flex items-center justify-center"
          >
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="relative z-10 w-[80%] h-[70%] bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col shadow-2xl">
              {/* Header mockup */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF3B00] to-orange-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-[#FF3B00]/20">
                    V
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Vegavan AI</div>
                    <div className="text-[10px] text-green-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> Online
                    </div>
                  </div>
                </div>
                <Icon icon="solar:menu-dots-bold" width={20} className="text-gray-500" />
              </div>

              {/* Chat bubbles mockup */}
              <div className="flex-1 flex flex-col gap-4 justify-end">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="self-end bg-white/10 text-white text-xs md:text-sm px-4 py-3 rounded-2xl rounded-tr-sm max-w-[80%] border border-white/5"
                >
                  How can you help my business grow?
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                  className="self-start bg-[#FF3B00] text-white text-xs md:text-sm px-4 py-3 rounded-2xl rounded-tl-sm max-w-[80%] shadow-lg shadow-[#FF3B00]/20"
                >
                  I provide 24/7 automated customer support, capture high-quality leads, and guide them to conversion while you focus on operations! 🚀
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.8 }}
                  className="self-start flex gap-2 mt-2"
                >
                  <div className="w-2 h-2 bg-white/30 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-white/30 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-2 h-2 bg-white/30 rounded-full animate-bounce [animation-delay:0.4s]" />
                </motion.div>
              </div>
            </div>
            
            {/* Glowing floaties around mockup */}
            <motion.div 
              animate={{ y: [0, -20, 0] }} 
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-orange-400/20 blur-2xl rounded-full pointer-events-none"
            />
            <motion.div 
              animate={{ y: [0, 20, 0] }} 
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-500/20 blur-3xl rounded-full pointer-events-none"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

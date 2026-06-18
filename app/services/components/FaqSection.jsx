"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

const FaqSection = ({ faqs: dynamicFaqs, title }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);

  const faqs = useMemo(() => {
    if (dynamicFaqs && dynamicFaqs.length > 0) {
      return dynamicFaqs.map((f, i) => ({
        id: i + 1,
        ...f
      }));
    }
    return [
      {
        id: 1,
        question: "Do you provide all services together?",
        answer: "Yes, we offer comprehensive service bundles tailored to your needs. You can choose individual services or combine multiple services into a cohesive strategy. Our team ensures seamless integration across all services for maximum impact and efficiency.",
        icon: "lucide:package",
      },
      {
        id: 2,
        question: "What is the timeline?",
        answer: "Project timelines vary based on scope and complexity. Typically, strategy and planning take 2-4 weeks, implementation spans 4-12 weeks, and optimization is ongoing.",
        icon: "lucide:calendar",
      },
      {
        id: 3,
        question: "Do you offer support?",
        answer: "Absolutely. We provide ongoing support including 24/7 email support, weekly strategy calls, and monthly performance reviews. Our dedicated account manager ensures your success.",
        icon: "lucide:headset",
      }
    ];
  }, [dynamicFaqs]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true); },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="py-20 px-6 bg-black relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-[#FF3B00] bg-[#FF3B00]/5 mb-8"
          >
            <Icon icon="solar:question-square-bold" className="text-[#FF3B00]" width={20} />
            <span className="text-xs font-bold text-[#FF3B00] uppercase tracking-[0.2em]">FAQ & Support</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none mb-8"
          >
            Frequently Asked <br />
            <span className="text-[#FF3B00]">Questions</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-xl text-gray-500 max-w-2xl font-light leading-relaxed"
          >
            Get answers to common questions about our {title || "services"}, timelines, support, and flexible engagement models.
          </motion.p>
        </div>

        {/* ACCORDION ITEMS */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.05 }}
              className={`rounded-3xl border transition-all duration-500 overflow-hidden ${
                expandedIndex === idx 
                  ? "border-[#FF3B00] bg-white/[0.03] shadow-[0_0_50px_rgba(255,59,0,0.1)]" 
                  : "border-white/10 bg-white/[0.01] hover:border-white/20"
              }`}
            >
              <button 
                onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                className="w-full p-5 md:p-6 text-left flex items-center gap-4 md:gap-6"
                aria-expanded={expandedIndex === idx}
                aria-label={`${expandedIndex === idx ? 'Collapse' : 'Expand'} answer to: ${faq.question}`}
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-500 ${
                  expandedIndex === idx ? "bg-[#FF3B00] text-black" : "bg-white/5 text-[#FF3B00]"
                }`}>
                  <Icon icon={faq.icon || "lucide:help-circle"} className="text-xl md:text-2xl" />
                </div>
                
                <h3 className={`text-base md:text-xl font-bold flex-1 transition-colors ${
                  expandedIndex === idx ? "text-white" : "text-gray-300 hover:text-white"
                }`}>
                  {faq.question}
                </h3>
                
                <motion.div 
                  animate={{ rotate: expandedIndex === idx ? 180 : 0 }}
                  className="text-[#FF3B00] shrink-0"
                >
                  <Icon icon="lucide:chevron-down" width={24} className="md:w-8 md:h-8" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {expandedIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-8 md:px-10 pb-10 pt-2">
                      <div className="h-[1px] w-full bg-gradient-to-r from-[#FF3B00]/40 to-transparent mb-8" />
                      <p className="text-base text-gray-400 leading-relaxed font-light max-w-4xl mb-6">
                        {faq.answer}
                      </p>
                      <button aria-label="Get Started with Webflora Technologies" className="flex items-center gap-3 px-8 py-4 rounded-xl border border-[#FF3B00]/30 bg-[#FF3B00]/10 text-[#FF3B00] font-bold hover:bg-[#FF3B00] hover:text-black transition-all group">
                        Get Started
                        <Icon icon="lucide:arrow-right" width={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-[#FF3B00]/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default FaqSection;
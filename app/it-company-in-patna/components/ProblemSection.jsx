'use client';

import { useEffect } from 'react';
import {Icon} from '@iconify/react';

export default function ProblemSection() {
  useEffect(() => {
    // Intersection Observer for fade-up animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          entry.target.classList.add('reveal-active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      document.querySelectorAll('.fade-up-element').forEach(el => observer.observe(el));
      document.querySelectorAll('.reveal-wrapper').forEach(el => observer.observe(el));
    }, 0);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    // Magnetic Buttons - only run on client
    if (typeof window === 'undefined') return;

    const magneticButtons = document.querySelectorAll('.magnetic-btn');
    
    magneticButtons.forEach(btn => {
      let rect = null;
      
      const handleEnter = () => { 
        rect = btn.getBoundingClientRect(); 
      };
      
      const handleMove = (e) => {
        if (!rect) return;
        requestAnimationFrame(() => {
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        });
      };

      const handleLeave = () => {
        btn.style.transform = 'translate(0px, 0px)';
      };

      btn.addEventListener('mouseenter', handleEnter);
      btn.addEventListener('mousemove', handleMove);
      btn.addEventListener('mouseleave', handleLeave);
    });
  }, []);

  const problems = [
    "No professional online presence",
    "Manual business operations wasting time",
    "No consistent lead generation",
    "Disconnected software systems",
    "Poor user experience affecting conversions"
  ];

  const solutions = [
    "High-converting business websites",
    "Custom ERP and workflow automation",
    "Lead generation systems",
    "Integrated software ecosystems",
    "Modern UI/UX focused development"
  ];

  return (
    <section className="py-20 px-6 border-t border-white/5 bg-neutral-950/30 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-white tracking-tighter mb-4 fade-up-element">
            Business Challenges We Solve
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20">
          {/* Challenge Card */}
          <div className="glass-panel p-10 rounded-3xl relative overflow-hidden group hover:border-red-500/30 transition-colors duration-500 fade-up-element">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-red-500/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-red-500/10 transition-colors duration-500"></div>
            
            <h3 className="font-display font-semibold text-2xl text-white mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                <Icon icon="solar:danger-triangle-linear" width={20} height={20} aria-hidden="true" />
              </div>
              <span className="group-hover:translate-x-2 transition-transform duration-300">The Challenge</span>
            </h3>
            <ul className="space-y-6">
              {problems.map((problem, idx) => (
                <li key={idx} className="flex items-start gap-4 text-gray-400 group-hover:text-gray-300 transition-colors">
                  <Icon icon="solar:close-circle-linear" width={20} height={20} className="text-red-500/50 mt-0.5 shrink-0 group-hover:text-red-500 transition-colors" aria-hidden="true" />
                  <span className="text-sm leading-relaxed font-light">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Card */}
          <div className="glass-panel p-10 rounded-3xl relative overflow-hidden group border-primary/20 hover:border-primary/50 transition-colors duration-500 fade-up-element" style={{ transitionDelay: '150ms' }}>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-primary/20 transition-colors duration-500"></div>
            
            <h3 className="font-display font-semibold text-2xl text-white mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center text-green-600 justify-center text-primary">
                <Icon icon="solar:check-circle-linear" width={20} height={20} aria-hidden="true" />
              </div>
              <span className="group-hover:translate-x-2 transition-transform duration-300">Our Solution</span>
            </h3>
            <ul className="space-y-6">
              {solutions.map((solution, idx) => (
                <li key={idx} className="flex items-start gap-4 text-gray-300 group-hover:text-white transition-colors">
                  <Icon icon="solar:check-read-linear" width={20} height={20} className="text-primary text-green-600 mt-0.5 shrink-0 " aria-hidden="true" />
                  <span className="text-sm leading-relaxed font-medium">{solution}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 pt-8 border-t border-white/5">
              <button className="group/btn text-sm font-mono border px-6 py-4 rounded-full uppercase tracking-widest text-primary flex items-center gap-2 hover:gap-4 transition-all focus:outline-none focus:ring-2 focus:ring-primary rounded p-1">
                <span className="relative overflow-hidden">
                  Book Strategy Call
                  <span className="absolute bottom-0 left-0 w-full h-px bg-primary -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300"></span>
                </span>
                <Icon icon="solar:arrow-right-linear" width={16} height={16} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .glass-panel {
          background: rgba(10, 10, 10, 0.4);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 0 0 1px rgba(0,0,0,1), 0 4px 20px rgba(0,0,0,0.5);
          will-change: transform;
        }

        .fade-up-element {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.2, 1, 0.3, 1);
          will-change: opacity, transform;
        }

        .fade-up-element.in-view {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
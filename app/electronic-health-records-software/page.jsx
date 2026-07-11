"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { 
  Shield, 
  Activity, 
  FileText, 
  Mic, 
  Plus, 
  Check, 
  User, 
  Lock, 
  Database, 
  DollarSign, 
  Clock, 
  Layers, 
  Smartphone,
  ArrowRight
} from "lucide-react";
import SafeIcon from "../it-company-in-patna/components/client/SafeIcon";
import ClientMarquee from "../Components/ClientMarquee";
import FaqSection from "../it-company-in-patna/components/FaqSection";

// Floating decorative background blobs
const FloatingElement = ({ children, duration = 6, delay = 0, className = "" }) => (
  <motion.div
    animate={{ y: [0, -20, 0], rotate: [0, 1, -1, 0] }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    className={className}
  >
    {children}
  </motion.div>
);

// Feature Card
const FeatureCard = ({ icon, title, text, keyword, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7 }}
      className="relative p-[1px] rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-white/5 hover:from-[#FF3B00]/30 hover:to-transparent transition-all duration-500 shadow-2xl"
    >
      <div className="bg-[#080808] p-8 md:p-10 rounded-[2rem] h-full flex flex-col items-start gap-5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF3B00]/5 blur-[50px] rounded-full transition-all duration-500 group-hover:bg-[#FF3B00]/10" />
        
        <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center text-[#FF3B00] group-hover:scale-110 group-hover:bg-[#FF3B00] group-hover:text-white transition-all duration-500">
          <Icon icon={icon} width={28} />
        </div>
        
        <h3 className="text-2xl font-black tracking-tight text-white">{title}</h3>
        {keyword && (
          <span className="text-xs bg-[#FF3B00]/10 text-[#FF3B00] border border-[#FF3B00]/20 px-2.5 py-0.5 rounded-full font-mono">
            {keyword}
          </span>
        )}
        <p className="text-neutral-400 text-base font-light leading-relaxed">{text}</p>
      </div>
    </motion.div>
  );
};

// Interactive EHR Interface Mockup
const EHRInterfaceMockup = () => {
  const [activeTab, setActiveTab] = useState("chart");
  const [typedNotes, setTypedNotes] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const textToType = "Patient presents with persistent cough and fatigue. Recommending a baseline blood count and standard rest. Prescribing anti-tussive medication.";

  useEffect(() => {
    if (isRecording) {
      let i = 0;
      setTypedNotes("");
      const interval = setInterval(() => {
        if (i < textToType.length) {
          setTypedNotes((prev) => prev + textToType.charAt(i));
          i++;
        } else {
          setIsRecording(false);
          clearInterval(interval);
        }
      }, 40);
      return () => clearInterval(interval);
    }
  }, [isRecording]);

  return (
    <div className="w-full bg-[#080808] rounded-3xl border border-white/10 p-6 flex flex-col gap-6 shadow-2xl relative overflow-hidden">
      {/* Window Controls */}
      <div className="flex items-center justify-between pb-4 border-b border-white/5">
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
          </div>
          <span className="text-[10px] font-mono text-neutral-400">Webflora Health Portal v1.2</span>
        </div>
        <div className="text-[10px] font-mono text-green-500 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          HIPAA SECURE CONNECTION
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 bg-neutral-900/60 p-1 rounded-xl border border-white/5">
        <button
          onClick={() => setActiveTab("chart")}
          className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${activeTab === "chart" ? "bg-[#FF3B00] text-white" : "text-neutral-400 hover:text-white"}`}
        >
          <Activity size={14} /> Patient Charting
        </button>
        <button
          onClick={() => setActiveTab("billing")}
          className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${activeTab === "billing" ? "bg-[#FF3B00] text-white" : "text-neutral-400 hover:text-white"}`}
        >
          <DollarSign size={14} /> Medical Billing
        </button>
        <button
          onClick={() => setActiveTab("dictation")}
          className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${activeTab === "dictation" ? "bg-[#FF3B00] text-white" : "text-neutral-400 hover:text-white"}`}
        >
          <Mic size={14} /> AI Dictation
        </button>
      </div>

      {/* Dynamic Screen Content */}
      <div className="min-h-[220px] bg-black/60 rounded-2xl border border-white/5 p-5 flex flex-col gap-4">
        {activeTab === "chart" && (
          <div className="space-y-3">
            <div className="flex justify-between items-center bg-white/[0.02] p-3 rounded-xl border border-white/5">
              <div>
                <div className="text-xs text-neutral-500 font-bold">PATIENT NAME</div>
                <div className="text-sm font-bold text-white">Rahul Verma (Age: 34)</div>
              </div>
              <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 font-mono">ACTIVE FILE</span>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/[0.01] p-3 rounded-xl border border-white/5">
                <div className="text-[10px] text-neutral-500 font-bold uppercase">Vitals Log</div>
                <div className="text-xs text-neutral-300 mt-1">BP: 120/80 mmHg</div>
                <div className="text-xs text-neutral-300">Pulse: 72 bpm</div>
              </div>
              <div className="bg-white/[0.01] p-3 rounded-xl border border-white/5">
                <div className="text-[10px] text-neutral-500 font-bold uppercase">Active Plan</div>
                <div className="text-xs text-neutral-300 mt-1">Physiotherapy: Daily</div>
                <div className="text-xs text-neutral-300">Lab test pending</div>
              </div>
            </div>

            <div className="text-[11px] text-neutral-400 font-light leading-relaxed bg-white/[0.01] p-3 rounded-xl border border-white/5">
              <span className="font-bold text-neutral-300">Clinical History:</span> Patient has a baseline history of seasonal allergies. No known drug contradictions.
            </div>
          </div>
        )}

        {activeTab === "billing" && (
          <div className="space-y-3">
            <div className="flex justify-between items-center bg-white/[0.02] p-3 rounded-xl border border-white/5">
              <div>
                <div className="text-xs text-neutral-500 font-bold">PROCEDURE CODE</div>
                <div className="text-sm font-mono text-white">99213 - Outpatient Visit</div>
              </div>
              <span className="text-[10px] bg-[#FF3B00]/10 text-[#FF3B00] px-2.5 py-1 rounded-full font-mono font-bold">₹1,500</span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs text-neutral-400">
                <span>GST (18%)</span>
                <span>₹270</span>
              </div>
              <div className="flex justify-between items-center text-xs text-neutral-400">
                <span>Insurance Coverage</span>
                <span className="text-emerald-400">- ₹1,200</span>
              </div>
              <div className="h-[1px] bg-white/10 my-1" />
              <div className="flex justify-between items-center text-sm font-bold text-white">
                <span>Total Patient Pay</span>
                <span>₹570</span>
              </div>
            </div>
            
            <button className="w-full mt-2 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2">
              <Check size={14} /> Submit Claim to Insurance
            </button>
          </div>
        )}

        {activeTab === "dictation" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="text-xs text-neutral-400">Click microphone to dictate clinical notes</div>
              <button 
                onClick={() => setIsRecording(!isRecording)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 transition-all ${isRecording ? "bg-red-600 text-white animate-pulse" : "bg-[#FF3B00]/10 text-[#FF3B00] border border-[#FF3B00]/20 hover:bg-[#FF3B00] hover:text-white"}`}
              >
                <Mic size={12} /> {isRecording ? "Listening..." : "Start Dictation"}
              </button>
            </div>

            <div className="h-28 bg-black border border-white/5 p-4 rounded-xl font-mono text-xs text-neutral-300 leading-relaxed overflow-y-auto">
              {isRecording ? (
                <span>{typedNotes}<span className="w-1.5 h-3.5 bg-[#FF3B00] inline-block animate-pulse ml-0.5" /></span>
              ) : typedNotes ? (
                <span className="text-emerald-400">{typedNotes}</span>
              ) : (
                <span className="text-neutral-600 italic">&gt; Dictated text will appear here...</span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Main Component
export default function EHRSoftwarePage() {
  const mainRef = useRef(null);

  const ehrFaqs = [
    {
      question: "Are your Electronic Health Records software solutions HIPAA compliant?",
      answer: "Yes. All our medical software systems are built with strict adherence to security guidelines. We implement AES-256 database encryption, HTTPS protocols, audit logs for user actions, and multi-factor authentication (MFA) to fully protect patient data."
    },
    {
      question: "Can we integrate a custom medical billing software module?",
      answer: "Absolutely. We build medical billing software for small business clinics and larger hospital setups that integrate directly with diagnostic procedures, insurance claims, and digital prescriptions. We support custom payment gateways and local tax calculations."
    },
    {
      question: "How does your system compare to legacy platforms like the Athena EMR system or Epic EMR system?",
      answer: "Unlike the Athena EMR system, Epic EMR system, or Epic EHR system, our custom electronic medical record systems offer complete code ownership with zero monthly per-user licensing fees. We tailor the exact layout, billing rules, and workflow processes around your clinic's business rules, and the pages load instantly due to serverless rendering."
    },
    {
      question: "Do you offer mobile applications and home care software integrations?",
      answer: "Yes, we build dedicated home care software modules and mobile patient apps using React Native. This enables healthcare assistants and nurses to log vitals, update charts, and review care schedules remotely on-site."
    },
    {
      question: "How does the voice-to-text medical dictation software work?",
      answer: "Our medical dictation software uses advanced Web Speech APIs and secure Whisper integration. Doctors can dictate prescriptions and notes on any smartphone or tablet, which are converted into structured text in real-time, reducing charting time by up to 50%."
    }
  ];

  return (
    <main ref={mainRef} className="relative min-h-screen bg-black text-white selection:bg-[#FF3B00] overflow-x-hidden">
      
      {/* Global Cinematic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0">
          <div className="creative-grid-bg" />
          <div className="creative-grid-dots" />
          
          {/* Rising glowing dots */}
          <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-[#FF3B00] rounded-full shadow-[0_0_8px_#ff3c00,0_0_15px_#ff3c00]" style={{ left: "calc(45px * 3)", "--duration": "9s", "--delay": "0s" }} />
          <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-[#FF3B00] rounded-full shadow-[0_0_10px_#ff3c00,0_0_20px_#ff3c00]" style={{ left: "calc(45px * 8)", "--duration": "12s", "--delay": "3s" }} />
          <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6,0_0_15px_#3b82f6]" style={{ left: "calc(45px * 13)", "--duration": "8s", "--delay": "1s" }} />
          <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-[#FF3B00] rounded-full shadow-[0_0_10px_#ff3c00,0_0_20px_#ff3c00]" style={{ left: "calc(45px * 18)", "--duration": "14s", "--delay": "5s" }} />
          <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-orange-400 rounded-full shadow-[0_0_8px_#fb923c,0_0_15px_#fb923c]" style={{ left: "calc(45px * 23)", "--duration": "10s", "--delay": "2s" }} />
          <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-[#FF3B00] rounded-full shadow-[0_0_10px_#ff3c00,0_0_20px_#ff3c00]" style={{ left: "calc(45px * 28)", "--duration": "11s", "--delay": "4s" }} />
          
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120%] aspect-square bg-[radial-gradient(circle_at_center,_rgba(255,59,0,0.12)_0%,transparent_70%)] blur-[100px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#FF3B00]/5 rounded-full blur-[120px]" />
        </div>
        
        {/* Floating abstract code decorations (Desktop only) */}
        <div className="absolute right-[10%] top-[22%] hidden xl:block opacity-10 animate-float-1 pointer-events-none text-white text-[64px] font-mono select-none leading-none" aria-hidden="true">
          {"</>"}
        </div>
        <div className="absolute left-[10%] bottom-[22%] hidden xl:block opacity-10 animate-float-2 pointer-events-none text-white text-[54px] font-mono select-none leading-none" aria-hidden="true">
          {"{}"}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8 text-left">
            <div className="inline-flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-full px-5 py-2 backdrop-blur-md hover:border-[#FF3B00]/30 transition-all">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF3B00] animate-pulse" />
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-neutral-300">Custom EMR & EHR Platforms</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
              Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-[#FF3B00] font-extrabold">Electronic Health Records</span> Software
            </h1>
            
            <p className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed">
              We design secure, HIPAA-compliant <strong className="text-white font-medium">electronic medical record systems</strong>, next-gen <strong className="text-white font-medium">ehr software</strong>, and integrated <strong className="text-white font-medium">medical billing software</strong> customized for clinics, hospitals, and remote caregivers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#FF3B00] hover:bg-[#ff4d1a] text-white rounded-full font-bold transition-all hover:shadow-[0_0_40px_rgba(255,59,0,0.4)]"
              >
                REQUEST EHR DEMO
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="#features" 
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 rounded-full font-bold transition-all"
              >
                EXPLORE FEATURES
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-6 border-t border-white/5 flex gap-8">
              <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
                <Shield className="text-emerald-500" size={16} /> 100% HIPAA COMPLIANT
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
                <Database className="text-[#FF3B00]" size={16} /> ZERO PER-USER SAAS FEE
              </div>
            </div>
          </div>

          <div className="relative w-full flex justify-center">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#FF3B00] to-orange-500 rounded-[3rem] opacity-10 blur-3xl" />
            <EHRInterfaceMockup />
          </div>
        </div>
      </section>

      {/* Logo Marquee */}
      <ClientMarquee />

      {/* Capabilities / Features Section */}
      <section id="features" className="relative z-10 py-24 px-6 border-y border-white/5 bg-[#030303]/60">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="text-[#FF3B00] font-black uppercase tracking-[0.3em] text-xs">Full-Suite Systems</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              Tailored Medical Software Solutions
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto font-light">
              Unlike generic, expensive templates, we build clean-code <strong className="text-white font-medium">medical software</strong> tailored exactly around your clinical routines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon="solar:user-speak-bold" 
              title="Medical Dictation Software" 
              keyword="Voice-to-Text EHR Notes"
              text="Streamline your charting workflow. Dictate prescriptions, diagnostic notes, and summary letters directly to patients' charts using secure, high-accuracy voice conversion APIs." 
              index={0}
            />
            <FeatureCard 
              icon="solar:wallet-money-bold" 
              title="Medical Billing Software" 
              keyword="Billing Software for Small Business"
              text="Accelerate your billing cycle. Auto-generate claims codes (CPT/ICD), manage patient copays, and securely process payouts with integrated GST compliance features." 
              index={1}
            />
            <FeatureCard 
              icon="solar:home-wifi-bold" 
              title="Home Care Software" 
              keyword="Remote Visit Care Modules"
              text="Support your mobile care team. Enable home nurses and caretakers to access patient logs, verify medicine times, and securely update vitals from any tablet or mobile phone." 
              index={2}
            />
            <FeatureCard 
              icon="solar:shield-keyhole-bold" 
              title="Electronic Medical Record Systems" 
              keyword="ehr systems & EMR software"
              text="Empower your patients with passwordless, OTP-secured portals to safely access diagnostic reports, vaccine records, and clinic invoices anytime." 
              index={3}
            />
            <FeatureCard 
              icon="solar:database-bold" 
              title="Custom EMR Systems" 
              keyword="electronic health record systems"
              text="Fully connected medical pipelines. Sync your patient portal directly with diagnostic equipment, local pharmacies, and third-party laboratory services." 
              index={4}
            />
            <FeatureCard 
              icon="solar:bolt-bold" 
              title="Mental Health & Specialties" 
              keyword="best ehr for mental health"
              text="Custom workflows designed for specific domains. Get the best EHR for mental health clinics, pediatric practices, and physical therapy centers with specialized charting modules." 
              index={5}
            />
          </div>
        </div>
      </section>

      {/* Comparison Section: Legacy vs Custom */}
      <section className="relative z-10 py-24 px-6 bg-black">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="text-[#FF3B00] font-black uppercase tracking-[0.3em] text-xs">Ownership vs Renting</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              Traditional Systems vs. Webflora Custom EHR
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto font-light">
              See why custom-engineered medical systems outperform legacy platforms like the <strong className="text-white font-medium">Athena EMR system</strong>, <strong className="text-white font-medium">Epic EMR system</strong>, and <strong className="text-white font-medium">Epic EHR system</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Legacy EMR Systems */}
            <div className="p-8 rounded-[2rem] bg-neutral-900/30 border border-white/5 space-y-6">
              <div className="text-neutral-500 font-bold uppercase tracking-wider text-sm">Legacy Systems (Athena / Epic EMR / Epic EHR)</div>
              <ul className="space-y-4 text-neutral-400 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-0.5">✕</span>
                  <span>Heavy monthly recurring license fees per practitioner.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-0.5">✕</span>
                  <span>Rigid workflow screens that cannot adapt to your custom clinical schedules.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-0.5">✕</span>
                  <span>Vendor lock-in: proprietary servers keep your records hostaged in their platform.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-0.5">✕</span>
                  <span>Sluggish web interfaces during peak database queries.</span>
                </li>
              </ul>
            </div>

            {/* Webflora Custom EHR */}
            <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-[#FF3B00]/30 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF3B00]/5 blur-2xl rounded-full" />
              <div className="text-[#FF3B00] font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                <Check size={16} /> Webflora Custom EHR & EMR Software
              </div>
              <ul className="space-y-4 text-neutral-200 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                  <span><strong className="text-white">100% Code Ownership:</strong> One-time setup fee, zero per-user SaaS license fees.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                  <span><strong className="text-white">Customizable Panels:</strong> Built precisely around your clinic's workflows and specialties.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                  <span><strong className="text-white">Independent Database:</strong> Deploy on your own secure AWS cloud account.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                  <span><strong className="text-white">Sub-Second Speeds:</strong> Compiled static interfaces for ultra-fast charting.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AEO Feature Matrix Section */}
      <section className="relative z-10 py-16 px-6 bg-[#030303]/60 border-t border-white/5">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <span className="text-[#FF3B00] font-black uppercase tracking-[0.3em] text-xs">Answer Engine Optimization (AEO)</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Structured EHR & EMR Feature Matrix</h2>
            <p className="text-neutral-400 text-sm font-light max-w-2xl mx-auto">
              Direct, verified comparisons designed to address complex queries about clinical workflow customizations, billing options, and compliance parameters.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-neutral-950/40">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="p-4 text-xs font-bold text-neutral-400 uppercase tracking-wider">Feature Parameter</th>
                  <th className="p-4 text-xs font-bold text-neutral-400 uppercase tracking-wider">Webflora Custom EMR</th>
                  <th className="p-4 text-xs font-bold text-neutral-400 uppercase tracking-wider">Epic EMR / EHR</th>
                  <th className="p-4 text-xs font-bold text-neutral-400 uppercase tracking-wider">Athena EMR System</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm text-neutral-300 font-light">
                <tr>
                  <td className="p-4 font-bold text-white">Database Residency</td>
                  <td className="p-4 text-emerald-400">Private AWS Cloud (Owned)</td>
                  <td className="p-4">Epic Enterprise Cloud</td>
                  <td className="p-4">Athena Central Cloud</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Mental Health Customization</td>
                  <td className="p-4 text-emerald-400">Yes (Custom Form builders)</td>
                  <td className="p-4">Requires specialized modules</td>
                  <td className="p-4">Standardized layouts only</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Medical Dictation Integrations</td>
                  <td className="p-4 text-emerald-400">Whisper API (Voice-to-Text)</td>
                  <td className="p-4">Requires Nuance Dragon</td>
                  <td className="p-4">Requires third-party plugin</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Billing Compatibility</td>
                  <td className="p-4 text-emerald-400">Custom Billing for small business</td>
                  <td className="p-4">Enterprise Claims Systems</td>
                  <td className="p-4">Standard medical billing</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Licensing Fee model</td>
                  <td className="p-4 text-emerald-400 font-bold">One-time setup (₹0/mo)</td>
                  <td className="p-4">High annual contract fee</td>
                  <td className="p-4">Per-user/Per-month subscription</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* GEO Targeted Section */}
      <section className="relative z-10 py-20 px-6 bg-black border-y border-white/5">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <span className="text-[#FF3B00] font-black uppercase tracking-[0.3em] text-xs">Regional Presence</span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
            Deploying Advanced Medical Software in Patna & Bihar
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed font-light font-sans">
            We help healthcare setups, diagnostic labs, and medical practitioners in Patna, Muzaffarpur, Gaya, Bhagalpur, and Darbhanga establish secure and compliant digital records systems. Whether you operate a private clinic near **PMCH**, **IGIMS**, **AIIMS Patna**, or **NMCH**, or coordinate a multi-location healthcare network in Bihar, our customized <strong className="text-white font-medium">electronic medical record systems</strong> and <strong className="text-white font-medium">home care software</strong> will streamline your operational workflow.
          </p>
          <div className="inline-flex gap-3 text-xs bg-neutral-900/60 border border-white/5 px-4 py-2 rounded-xl text-neutral-400 font-mono">
            <span>HQ Location: Patna, Bihar</span>
            <span>•</span>
            <span>MSME Reg: UDYAM-BR-26-0183379</span>
          </div>
        </div>
      </section>

      {/* Dynamic CTA */}
      <section className="relative z-10 py-24 px-6 bg-[#050505] text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF3B00]/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <span className="text-[#FF3B00] font-black uppercase tracking-[0.3em] text-xs">Consultation</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
            Build Your Compliant EMR System Today
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto font-light">
            Elevate patient trust, optimize your administrative hours, and own your database code forever. Let's discuss your requirements.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#FF3B00] hover:bg-[#ff4d1a] text-white rounded-full font-black text-lg transition-all hover:shadow-[0_0_50px_rgba(255,59,0,0.5)]"
            >
              TALK TO OUR HEALTHCARE DEVELOPERS
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="relative z-10 py-16">
        <FaqSection faqs={ehrFaqs} title="EHR & EMR Systems FAQ" />
      </section>

      {/* JSON-LD Structured Data Schemas for SEO & AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://webfloratechnologies.com/electronic-health-records-software#webpage",
            "url": "https://webfloratechnologies.com/electronic-health-records-software",
            "name": "Electronic Health Records Software Solutions",
            "description": "Custom HIPAA-compliant Electronic Health Records (EHR) and EMR software solutions engineered by Webflora Technologies.",
            "datePublished": "2026-07-11T00:00:00+05:30",
            "dateModified": "2026-07-11T00:00:00+05:30",
            "publisher": {
              "@type": "Organization",
              "name": "Webflora Technologies",
              "url": "https://webfloratechnologies.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://webfloratechnologies.com/title-logo.png"
              }
            },
            "author": {
              "@type": "Person",
              "name": "Shashank Manohar",
              "url": "https://webfloratechnologies.com/#founder-shashank"
            }
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Custom EMR & EHR Software Development",
            "serviceType": "Healthcare Software Engineering",
            "description": "Custom-coded HIPAA compliant EMR and EHR databases, medical billing software, and dictation systems built with Next.js & React.",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Webflora Technologies",
              "@id": "https://webfloratechnologies.com/#organization"
            },
            "areaServed": [
              { "@type": "State", "name": "Bihar" },
              { "@type": "Country", "name": "India" }
            ]
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": ehrFaqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </main>
  );
}

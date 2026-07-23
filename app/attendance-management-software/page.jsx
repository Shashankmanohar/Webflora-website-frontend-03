"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";
import {
  Camera,
  QrCode,
  ClipboardList,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Users,
  Building,
  Smartphone,
  MapPin,
  Cpu,
  Zap,
  ArrowRight,
  TrendingUp,
  Sliders,
  DollarSign,
  AlertCircle,
  FileSpreadsheet,
  Layers,
  ChevronDown,
  ChevronUp,
  Check,
  Server,
  Lock,
  RefreshCw,
  Bell,
  Sparkles,
  Shield,
  Database,
  Fingerprint,
  Radio,
  Wifi,
  CreditCard,
  MessageSquare,
  X,
  Send,
  PhoneCall
} from "lucide-react";
import ClientMarquee from "../Components/ClientMarquee";
import SEOContentBlock from "../Components/SEOContentBlock";
import API_BASE_URL from "../config";

// Interactive Attendance Simulator Kiosk
const AttendanceSimulator = () => {
  const [activeTab, setActiveTab] = useState("ai-camera");
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const [qrCounter, setQrCounter] = useState(15);
  const [manualRows, setManualRows] = useState([
    { id: "EMP-101", name: "Anish Verma", dept: "Engineering", status: "Present", time: "09:14 AM", mode: "AI Face" },
    { id: "EMP-102", name: "Priya Sharma", dept: "Marketing", status: "Present", time: "09:22 AM", mode: "QR Mobile" },
    { id: "EMP-103", name: "Vikram Kumar", dept: "Operations", status: "On Leave", time: "-", mode: "Admin Sync" },
    { id: "EMP-104", name: "Sneha Patel", dept: "Design", status: "Late", time: "09:48 AM", mode: "Manual Log" },
  ]);

  // QR Timer simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setQrCounter((prev) => (prev > 1 ? prev - 1 : 15));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const triggerAiScan = () => {
    setIsScanning(true);
    setScanResult(null);
    setTimeout(() => {
      setIsScanning(false);
      setScanResult({
        name: "Aman Gupta",
        role: "Lead Systems Architect",
        match: "99.85%",
        timestamp: new Date().toLocaleTimeString(),
      });
    }, 1200);
  };

  const toggleStatus = (idx) => {
    const updated = [...manualRows];
    const current = updated[idx].status;
    if (current === "Present") updated[idx].status = "Late";
    else if (current === "Late") updated[idx].status = "On Leave";
    else updated[idx].status = "Present";
    setManualRows(updated);
  };

  return (
    <div className="w-full bg-[#0A0A0A] rounded-3xl border border-white/10 p-5 md:p-6 shadow-2xl relative overflow-hidden backdrop-blur-xl">
      {/* Kiosk Window Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <span className="text-xs font-mono text-neutral-400">Webflora Multi-Mode Kiosk</span>
        </div>
        <div className="text-[10px] font-mono text-emerald-400 flex items-center gap-1.5 font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          LIVE DEMO
        </div>
      </div>

      {/* Mode Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 my-4 bg-neutral-900/90 p-1.5 rounded-xl border border-white/5 text-[11px]">
        <button
          onClick={() => setActiveTab("ai-camera")}
          className={`py-2 px-2 rounded-lg font-bold transition-all flex items-center justify-center gap-1 ${
            activeTab === "ai-camera"
              ? "bg-[#FF3B00] text-white shadow-md shadow-[#FF3B00]/30"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          <Camera size={13} /> AI Camera
        </button>
        <button
          onClick={() => setActiveTab("qr-code")}
          className={`py-2 px-2 rounded-lg font-bold transition-all flex items-center justify-center gap-1 ${
            activeTab === "qr-code"
              ? "bg-[#FF3B00] text-white shadow-md shadow-[#FF3B00]/30"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          <QrCode size={13} /> Dynamic QR
        </button>
        <button
          onClick={() => setActiveTab("manual")}
          className={`py-2 px-2 rounded-lg font-bold transition-all flex items-center justify-center gap-1 ${
            activeTab === "manual"
              ? "bg-[#FF3B00] text-white shadow-md shadow-[#FF3B00]/30"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          <ClipboardList size={13} /> Manual Desk
        </button>
        <button
          onClick={() => setActiveTab("biometric")}
          className={`py-2 px-2 rounded-lg font-bold transition-all flex items-center justify-center gap-1 ${
            activeTab === "biometric"
              ? "bg-[#FF3B00] text-white shadow-md shadow-[#FF3B00]/30"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          <Fingerprint size={13} /> Biometric
        </button>
      </div>

      {/* Interactive Screen Display */}
      <div className="bg-black/90 rounded-2xl border border-white/10 p-4 min-h-[250px] flex flex-col justify-center">
        {/* TAB 1: AI CAMERA SCAN */}
        {activeTab === "ai-camera" && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-neutral-400 font-mono">CCTV RTSP Stream: Main Gate Kiosk</span>
              <span className="text-emerald-400 font-mono font-bold text-[10px]">99.8% ACCURACY</span>
            </div>

            <div className="relative aspect-video rounded-xl bg-neutral-900/90 border border-white/10 overflow-hidden flex flex-col items-center justify-center p-3">
              <div className="relative w-28 h-28 rounded-xl border-2 border-dashed border-[#FF3B00] flex flex-col items-center justify-center bg-[#FF3B00]/5">
                {isScanning && (
                  <motion.div
                    animate={{ y: [-40, 40, -40] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-full h-0.5 bg-[#FF3B00] shadow-[0_0_12px_#FF3B00]"
                  />
                )}
                <Icon icon="solar:user-bold-duotone" width={42} className="text-neutral-500" />
              </div>

              <button
                onClick={triggerAiScan}
                disabled={isScanning}
                className="mt-3 px-4 py-1.5 bg-[#FF3B00] hover:bg-[#FF3B00]/90 text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 shadow-md hover:scale-105"
              >
                {isScanning ? (
                  <>
                    <RefreshCw className="animate-spin" size={12} /> Matching Face Vector...
                  </>
                ) : (
                  <>
                    <Camera size={12} /> Test Face Punch-In
                  </>
                )}
              </button>
            </div>

            {scanResult && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-emerald-500/10 border border-emerald-500/30 p-2.5 rounded-xl text-xs space-y-0.5"
              >
                <div className="flex justify-between text-white font-bold">
                  <span>{scanResult.name}</span>
                  <span className="text-emerald-400 font-mono">{scanResult.match} Match</span>
                </div>
                <div className="text-neutral-400 font-mono text-[10px]">
                  Time: <span className="text-white">{scanResult.timestamp}</span> | Status: <span className="text-emerald-400 font-bold">PUNCH SUCCESS</span>
                </div>
              </motion.div>
            )}
          </div>
        )}

        {/* TAB 2: DYNAMIC QR CODE */}
        {activeTab === "qr-code" && (
          <div className="flex flex-col items-center justify-center text-center space-y-3 py-2">
            <div className="relative p-3 bg-white rounded-xl shadow-lg">
              <QrCode size={95} className="text-black" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Dynamic Rotating QR Scanner</div>
              <div className="text-[11px] text-neutral-400 mt-1">
                Refreshes in <span className="text-[#FF3B00] font-mono font-bold">{qrCounter}s</span> | Geofence: <span className="text-emerald-400 font-mono font-bold">12m Inside Campus</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: MANUAL LOG */}
        {activeTab === "manual" && (
          <div className="space-y-2.5 text-xs">
            <div className="flex justify-between items-center text-neutral-400 text-[11px]">
              <span>Admin Desk Attendance Sheet</span>
              <span>Click status to toggle</span>
            </div>
            <div className="space-y-1.5">
              {manualRows.slice(0, 3).map((row, idx) => (
                <div key={idx} className="flex justify-between items-center p-2 bg-neutral-900 rounded-lg border border-white/5">
                  <div>
                    <span className="font-bold text-white">{row.name}</span>
                    <span className="text-[10px] text-neutral-500 ml-2 font-mono">{row.id}</span>
                  </div>
                  <button
                    onClick={() => toggleStatus(idx)}
                    className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold transition-all ${
                      row.status === "Present"
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        : row.status === "Late"
                        ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                        : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                    }`}
                  >
                    {row.status}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: BIOMETRIC / RFID */}
        {activeTab === "biometric" && (
          <div className="space-y-3 text-xs text-center py-2">
            <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-[#FF3B00]/40 flex items-center justify-center text-[#FF3B00] mx-auto animate-pulse">
              <Fingerprint size={36} />
            </div>
            <div>
              <div className="font-bold text-white text-sm">Biometric Fingerprint & RFID Card Reader</div>
              <p className="text-neutral-400 text-[11px] mt-1">
                Hardware Sync: eSSL, ZKTeco, Matrix, Realtime | Status: <span className="text-emerald-400 font-mono font-bold">CONNECTED</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// FAQ Accordion
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 py-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left gap-4 font-bold text-white hover:text-[#FF3B00] transition-colors text-base md:text-lg"
      >
        <span>{question}</span>
        <div className="w-7 h-7 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center shrink-0">
          {isOpen ? <ChevronUp size={16} className="text-[#FF3B00]" /> : <ChevronDown size={16} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-neutral-400 text-sm font-light leading-relaxed mt-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Main Component
export default function AttendanceSoftwarePage() {
  const mainRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSystem, setSelectedSystem] = useState("AI Camera & CCTV Face System");
  const [formStatus, setFormStatus] = useState(null); // 'submitting', 'success', 'error'

  const openQuoteModal = (systemName = "AI Camera & CCTV Face System") => {
    setSelectedSystem(systemName);
    setFormStatus(null);
    setIsModalOpen(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const message = formData.get("message");

    try {
      const res = await fetch(`${API_BASE_URL}/api/public/inquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email: "",
          service: `Attendance Software - ${selectedSystem}`,
          message: message,
        }),
      });

      if (res.ok) {
        setFormStatus("success");
        e.target.reset();
      } else {
        setFormStatus("error");
      }
    } catch (err) {
      setFormStatus("error");
    }
  };

  return (
    <main ref={mainRef} className="relative min-h-screen bg-black text-white selection:bg-[#FF3B00] overflow-x-hidden">
      
      {/* Global Background ambient glow */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="creative-grid-bg" />
        <div className="creative-grid-dots" />
        
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-[radial-gradient(circle_at_center,_rgba(255,59,0,0.12)_0%,transparent_70%)] blur-[100px]" />
      </div>

      {/* Hero Section — Clean 100% Viewport Fit Layout */}
      <section className="relative z-10 min-h-[100dvh] lg:min-h-screen flex flex-col justify-center px-4 sm:px-6 pt-20 pb-6 lg:pt-24 lg:pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center">
          
          {/* Left Column: Clean Typography & CTAs */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-5 text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/10 rounded-full px-3 py-1 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-[#FF3B00] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-neutral-200 uppercase">
                ATTENDANCE & HRMS SOFTWARE PLATFORM
              </span>
            </div>
            
            {/* Clean 2-Line Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight sm:leading-[1.15] text-white">
              Smart Attendance <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-[#FF3B00] font-extrabold">
                Management Software
              </span>
            </h1>

            {/* Concise Sub-headline Pill Tags */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono">
              <span className="bg-white/5 border border-white/10 text-neutral-300 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full flex items-center gap-1.5">
                <Camera size={12} className="text-[#FF3B00]" /> AI CCTV Face
              </span>
              <span className="bg-white/5 border border-white/10 text-neutral-300 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full flex items-center gap-1.5">
                <QrCode size={12} className="text-[#FF3B00]" /> Dynamic QR
              </span>
              <span className="bg-white/5 border border-white/10 text-neutral-300 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full flex items-center gap-1.5">
                <ClipboardList size={12} className="text-[#FF3B00]" /> Manual Sheet
              </span>
              <span className="bg-white/5 border border-white/10 text-neutral-300 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full flex items-center gap-1.5">
                <Fingerprint size={12} className="text-[#FF3B00]" /> Biometrics & RFID
              </span>
            </div>
            
            {/* Subtitle Description */}
            <p className="text-neutral-400 text-xs sm:text-base lg:text-lg font-light leading-relaxed max-w-2xl">
              Eliminate proxy attendance, manual register errors, and payroll delays. We build tailored software supporting 8 distinct attendance modes: AI camera facial recognition, dynamic QR scanning, manual desk sheets, biometrics, RFID, field GPS geofencing, WhatsApp bots, and Wi-Fi auto-check-in.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-row gap-2.5 sm:gap-4 pt-1 sm:pt-2">
              <button 
                onClick={() => openQuoteModal("All 8 Hybrid Attendance Systems")}
                className="group flex items-center justify-center gap-2 px-5 py-2.5 sm:px-8 sm:py-3.5 bg-[#FF3B00] hover:bg-[#ff4d1a] text-white rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all shadow-[0_0_30px_rgba(255,59,0,0.35)] hover:scale-105 cursor-pointer"
              >
                <span>Schedule Live Demo</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="#features" 
                className="flex items-center justify-center gap-2 px-5 py-2.5 sm:px-8 sm:py-3.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white rounded-full font-semibold text-xs sm:text-sm tracking-wide transition-all backdrop-blur-md hover:scale-105"
              >
                Explore 8 Systems
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-3 sm:pt-4 border-t border-white/10 flex flex-wrap gap-4 sm:gap-6 text-[10px] sm:text-xs text-neutral-400 font-mono">
              <div className="flex items-center gap-1.5">
                <Shield className="text-emerald-400" size={14} /> 99.8% AI Face Match
              </div>
              <div className="flex items-center gap-1.5">
                <Database className="text-[#FF3B00]" size={14} /> Zero Proxy Leakage
              </div>
              <div className="flex items-center gap-1.5">
                <Cpu className="text-blue-400" size={14} /> Instant Payroll Sync
              </div>
            </div>

          </div>

          {/* Right Column: Clean Interactive Simulator Kiosk (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-5 relative w-full">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#FF3B00]/20 to-orange-500/10 rounded-[3rem] opacity-20 blur-3xl" />
            <AttendanceSimulator />
          </div>

        </div>
      </section>

      {/* Client Logo Marquee */}
      <ClientMarquee />

      {/* 8 Complete Attendance Systems Breakdown Grid */}
      <section id="features" className="relative z-10 py-24 px-6 border-y border-white/5 bg-[#030303]/60">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="text-[#FF3B00] font-bold uppercase tracking-[0.2em] text-xs">8 Distinct Technologies</span>
            <h2 className="text-[22px] sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Types of Attendance Systems We Provide
            </h2>
            <p className="text-neutral-400 text-base md:text-lg max-w-3xl mx-auto font-light">
              Choose or combine any of these attendance tracking technologies into a unified enterprise HRMS & payroll software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* System 1: AI Camera */}
            <div className="relative p-[1px] rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-white/5 hover:from-[#FF3B00]/30 hover:to-transparent transition-all duration-500 shadow-2xl group">
              <div className="bg-[#080808] p-8 rounded-[2rem] h-full flex flex-col justify-between relative overflow-hidden">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center text-[#FF3B00] group-hover:scale-110 group-hover:bg-[#FF3B00] group-hover:text-white transition-all">
                    <Camera size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-white">1. AI Camera & CCTV Face System</h3>
                  <span className="inline-block text-[10px] bg-[#FF3B00]/10 text-[#FF3B00] border border-[#FF3B00]/20 px-2.5 py-0.5 rounded-full font-mono font-bold">
                    CCTV Stream AI
                  </span>
                  <p className="text-neutral-400 text-xs font-light leading-relaxed">
                    Uses existing IP CCTV cameras to detect and match faces in under 0.5 seconds with ISO-certified anti-spoofing liveness checks.
                  </p>
                </div>
                <div>
                  <ul className="space-y-2 mt-6 pt-4 border-t border-white/5 text-xs text-neutral-300">
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3B00]" /> 30-face group scanning</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3B00]" /> Photo & video spoof block</li>
                  </ul>
                  <button
                    onClick={() => openQuoteModal("AI Camera & CCTV Face System")}
                    className="w-full mt-5 py-2.5 bg-[#FF3B00]/10 hover:bg-[#FF3B00] text-[#FF3B00] hover:text-white border border-[#FF3B00]/30 hover:border-[#FF3B00] rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md cursor-pointer"
                  >
                    <span>Get Instant Quote</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* System 2: Dynamic QR Code */}
            <div className="relative p-[1px] rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-white/5 hover:from-[#FF3B00]/30 hover:to-transparent transition-all duration-500 shadow-2xl group">
              <div className="bg-[#080808] p-8 rounded-[2rem] h-full flex flex-col justify-between relative overflow-hidden">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center text-[#FF3B00] group-hover:scale-110 group-hover:bg-[#FF3B00] group-hover:text-white transition-all">
                    <QrCode size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-white">2. Dynamic QR Code System</h3>
                  <span className="inline-block text-[10px] bg-[#FF3B00]/10 text-[#FF3B00] border border-[#FF3B00]/20 px-2.5 py-0.5 rounded-full font-mono font-bold">
                    Zero Hardware Cost
                  </span>
                  <p className="text-neutral-400 text-xs font-light leading-relaxed">
                    Contactless mobile phone scan using dynamic rotating QR codes refreshed every 15 seconds to eliminate screenshot sharing.
                  </p>
                </div>
                <div>
                  <ul className="space-y-2 mt-6 pt-4 border-t border-white/5 text-xs text-neutral-300">
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3B00]" /> Geofence location check</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3B00]" /> Works on any smartphone</li>
                  </ul>
                  <button
                    onClick={() => openQuoteModal("Dynamic QR Code System")}
                    className="w-full mt-5 py-2.5 bg-[#FF3B00]/10 hover:bg-[#FF3B00] text-[#FF3B00] hover:text-white border border-[#FF3B00]/30 hover:border-[#FF3B00] rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md cursor-pointer"
                  >
                    <span>Get Instant Quote</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* System 3: Manual & Desk Portal */}
            <div className="relative p-[1px] rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-white/5 hover:from-[#FF3B00]/30 hover:to-transparent transition-all duration-500 shadow-2xl group">
              <div className="bg-[#080808] p-8 rounded-[2rem] h-full flex flex-col justify-between relative overflow-hidden">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center text-[#FF3B00] group-hover:scale-110 group-hover:bg-[#FF3B00] group-hover:text-white transition-all">
                    <ClipboardList size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-white">3. Manual & Web Desk Portal</h3>
                  <span className="inline-block text-[10px] bg-[#FF3B00]/10 text-[#FF3B00] border border-[#FF3B00]/20 px-2.5 py-0.5 rounded-full font-mono font-bold">
                    Admin Overrides
                  </span>
                  <p className="text-neutral-400 text-xs font-light leading-relaxed">
                    Single-click supervisor attendance logging, shift roster creation, late-reason notes, and automated leave request synchronization.
                  </p>
                </div>
                <div>
                  <ul className="space-y-2 mt-6 pt-4 border-t border-white/5 text-xs text-neutral-300">
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3B00]" /> One-click bulk sheet entry</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3B00]" /> Complete audit trail logs</li>
                  </ul>
                  <button
                    onClick={() => openQuoteModal("Manual & Web Desk Portal")}
                    className="w-full mt-5 py-2.5 bg-[#FF3B00]/10 hover:bg-[#FF3B00] text-[#FF3B00] hover:text-white border border-[#FF3B00]/30 hover:border-[#FF3B00] rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md cursor-pointer"
                  >
                    <span>Get Instant Quote</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* System 4: Biometric Fingerprint */}
            <div className="relative p-[1px] rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-white/5 hover:from-[#FF3B00]/30 hover:to-transparent transition-all duration-500 shadow-2xl group">
              <div className="bg-[#080808] p-8 rounded-[2rem] h-full flex flex-col justify-between relative overflow-hidden">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center text-[#FF3B00] group-hover:scale-110 group-hover:bg-[#FF3B00] group-hover:text-white transition-all">
                    <Fingerprint size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-white">4. Biometric Fingerprint Reader</h3>
                  <span className="inline-block text-[10px] bg-[#FF3B00]/10 text-[#FF3B00] border border-[#FF3B00]/20 px-2.5 py-0.5 rounded-full font-mono font-bold">
                    Hardware Reader Sync
                  </span>
                  <p className="text-neutral-400 text-xs font-light leading-relaxed">
                    Direct software integration with standalone biometric hardware readers (eSSL, ZKTeco, Matrix, Realtime) with offline storage.
                  </p>
                </div>
                <div>
                  <ul className="space-y-2 mt-6 pt-4 border-t border-white/5 text-xs text-neutral-300">
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3B00]" /> Hardware SDK integration</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3B00]" /> Automatic cloud auto-sync</li>
                  </ul>
                  <button
                    onClick={() => openQuoteModal("Biometric Fingerprint Reader")}
                    className="w-full mt-5 py-2.5 bg-[#FF3B00]/10 hover:bg-[#FF3B00] text-[#FF3B00] hover:text-white border border-[#FF3B00]/30 hover:border-[#FF3B00] rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md cursor-pointer"
                  >
                    <span>Get Instant Quote</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* System 5: RFID & NFC Cards */}
            <div className="relative p-[1px] rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-white/5 hover:from-[#FF3B00]/30 hover:to-transparent transition-all duration-500 shadow-2xl group">
              <div className="bg-[#080808] p-8 rounded-[2rem] h-full flex flex-col justify-between relative overflow-hidden">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center text-[#FF3B00] group-hover:scale-110 group-hover:bg-[#FF3B00] group-hover:text-white transition-all">
                    <CreditCard size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-white">5. RFID & NFC Card Badges</h3>
                  <span className="inline-block text-[10px] bg-[#FF3B00]/10 text-[#FF3B00] border border-[#FF3B00]/20 px-2.5 py-0.5 rounded-full font-mono font-bold">
                    Tap-and-Go Kiosks
                  </span>
                  <p className="text-neutral-400 text-xs font-light leading-relaxed">
                    Proximity RFID card & NFC badge reader integration for turnstiles, barrier gates, and high-volume corporate entry gates.
                  </p>
                </div>
                <div>
                  <ul className="space-y-2 mt-6 pt-4 border-t border-white/5 text-xs text-neutral-300">
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3B00]" /> High-speed turnstile gate sync</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3B00]" /> Employee ID card integration</li>
                  </ul>
                  <button
                    onClick={() => openQuoteModal("RFID & NFC Card Badges")}
                    className="w-full mt-5 py-2.5 bg-[#FF3B00]/10 hover:bg-[#FF3B00] text-[#FF3B00] hover:text-white border border-[#FF3B00]/30 hover:border-[#FF3B00] rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md cursor-pointer"
                  >
                    <span>Get Instant Quote</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* System 6: Field GPS Geofence */}
            <div className="relative p-[1px] rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-white/5 hover:from-[#FF3B00]/30 hover:to-transparent transition-all duration-500 shadow-2xl group">
              <div className="bg-[#080808] p-8 rounded-[2rem] h-full flex flex-col justify-between relative overflow-hidden">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center text-[#FF3B00] group-hover:scale-110 group-hover:bg-[#FF3B00] group-hover:text-white transition-all">
                    <MapPin size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-white">6. Geofenced GPS & Mobile Selfie</h3>
                  <span className="inline-block text-[10px] bg-[#FF3B00]/10 text-[#FF3B00] border border-[#FF3B00]/20 px-2.5 py-0.5 rounded-full font-mono font-bold">
                    Field Force Tracking
                  </span>
                  <p className="text-neutral-400 text-xs font-light leading-relaxed">
                    Designed for remote workers and field sales executives with real-time GPS location validation, live route logs, and selfie timestamps.
                  </p>
                </div>
                <div>
                  <ul className="space-y-2 mt-6 pt-4 border-t border-white/5 text-xs text-neutral-300">
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3B00]" /> ±5m GPS radius validation</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3B00]" /> Client site visit timestamps</li>
                  </ul>
                  <button
                    onClick={() => openQuoteModal("Geofenced GPS & Mobile Selfie")}
                    className="w-full mt-5 py-2.5 bg-[#FF3B00]/10 hover:bg-[#FF3B00] text-[#FF3B00] hover:text-white border border-[#FF3B00]/30 hover:border-[#FF3B00] rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md cursor-pointer"
                  >
                    <span>Get Instant Quote</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* System 7: WhatsApp & Slack Bot */}
            <div className="relative p-[1px] rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-white/5 hover:from-[#FF3B00]/30 hover:to-transparent transition-all duration-500 shadow-2xl group">
              <div className="bg-[#080808] p-8 rounded-[2rem] h-full flex flex-col justify-between relative overflow-hidden">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center text-[#FF3B00] group-hover:scale-110 group-hover:bg-[#FF3B00] group-hover:text-white transition-all">
                    <MessageSquare size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-white">7. WhatsApp & Slack Check Bot</h3>
                  <span className="inline-block text-[10px] bg-[#FF3B00]/10 text-[#FF3B00] border border-[#FF3B00]/20 px-2.5 py-0.5 rounded-full font-mono font-bold">
                    Instant Messaging
                  </span>
                  <p className="text-neutral-400 text-xs font-light leading-relaxed">
                    Employees send a simple WhatsApp or Slack command (`#punchin`) to log attendance instantly with auto GPS location confirmation. Powered by Webflora's{" "}
                    <Link href="/it-company-in-patna/ai-chatbot-company-in-patna" className="text-[#FF3B00] hover:underline font-semibold">
                      AI Chatbot Engine
                    </Link>.
                  </p>
                </div>
                <div>
                  <ul className="space-y-2 mt-6 pt-4 border-t border-white/5 text-xs text-neutral-300">
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3B00]" /> Automated WhatsApp HR bot</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3B00]" /> Zero app installation required</li>
                  </ul>
                  <button
                    onClick={() => openQuoteModal("WhatsApp & Slack Check Bot")}
                    className="w-full mt-5 py-2.5 bg-[#FF3B00]/10 hover:bg-[#FF3B00] text-[#FF3B00] hover:text-white border border-[#FF3B00]/30 hover:border-[#FF3B00] rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md cursor-pointer"
                  >
                    <span>Get Instant Quote</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* System 8: Wi-Fi & Bluetooth Beacon */}
            <div className="relative p-[1px] rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-white/5 hover:from-[#FF3B00]/30 hover:to-transparent transition-all duration-500 shadow-2xl group">
              <div className="bg-[#080808] p-8 rounded-[2rem] h-full flex flex-col justify-between relative overflow-hidden">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center text-[#FF3B00] group-hover:scale-110 group-hover:bg-[#FF3B00] group-hover:text-white transition-all">
                    <Wifi size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-white">8. Wi-Fi & Bluetooth Beacon</h3>
                  <span className="inline-block text-[10px] bg-[#FF3B00]/10 text-[#FF3B00] border border-[#FF3B00]/20 px-2.5 py-0.5 rounded-full font-mono font-bold">
                    Zero-Touch Auto-Check
                  </span>
                  <p className="text-neutral-400 text-xs font-light leading-relaxed">
                    Automated background check-in when an employee's smartphone connects to the office Wi-Fi network or BLE Bluetooth beacon.
                  </p>
                </div>
                <div>
                  <ul className="space-y-2 mt-6 pt-4 border-t border-white/5 text-xs text-neutral-300">
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3B00]" /> Automatic office Wi-Fi punch</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3B00]" /> Zero action needed from staff</li>
                  </ul>
                  <button
                    onClick={() => openQuoteModal("Wi-Fi & Bluetooth Beacon Auto-Check")}
                    className="w-full mt-5 py-2.5 bg-[#FF3B00]/10 hover:bg-[#FF3B00] text-[#FF3B00] hover:text-white border border-[#FF3B00]/30 hover:border-[#FF3B00] rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md cursor-pointer"
                  >
                    <span>Get Instant Quote</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Advanced Capabilities */}
      <section className="relative z-10 py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#080808] p-8 rounded-3xl border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FF3B00]/10 border border-[#FF3B00]/20 flex items-center justify-center text-[#FF3B00]">
              <Server size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">Offline Mode & Local Storage</h3>
            <p className="text-neutral-400 text-xs leading-relaxed font-light">
              Never worry about internet outages. Attendance logs store locally on the premise server and auto-sync with the cloud once restored.
            </p>
          </div>

          <div className="bg-[#080808] p-8 rounded-3xl border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FF3B00]/10 border border-[#FF3B00]/20 flex items-center justify-center text-[#FF3B00]">
              <Bell size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">WhatsApp & SMS Alerts</h3>
            <p className="text-neutral-400 text-xs leading-relaxed font-light">
              Trigger instant automated alerts to parents when students arrive at coaching centers, or to HR managers for employee delays.
            </p>
          </div>

          <div className="bg-[#080808] p-8 rounded-3xl border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FF3B00]/10 border border-[#FF3B00]/20 flex items-center justify-center text-[#FF3B00]">
              <Lock size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">AES-256 Encrypted Security</h3>
            <p className="text-neutral-400 text-xs leading-relaxed font-light">
              Facial features are stored as encrypted mathematical vector embeddings, ensuring 100% DPDP privacy compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Showcase Section */}
      <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#FF3B00] font-bold uppercase tracking-[0.2em] text-xs">
            Proven Client Results
          </span>
          <h2 className="text-[22px] sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Our Attendance Software Case Studies
          </h2>
          <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto font-light">
            Real enterprise case studies demonstrating how Webflora solved proxy attendance, multi-shift bottlenecks, and payroll delays.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Case Study 1: Education */}
          <div className="bg-[#080808] rounded-3xl border border-white/10 p-8 flex flex-col justify-between space-y-6 hover:border-[#FF3B00]/40 transition-all duration-300 shadow-2xl group relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold bg-[#FF3B00]/10 text-[#FF3B00] border border-[#FF3B00]/20 px-3 py-1 rounded-full uppercase">
                  Education & Institutes
                </span>
                <span className="text-xs font-bold text-neutral-400">Patna, Bihar</span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-[#FF3B00] transition-colors leading-snug">
                AI Face & QR Attendance for 15,000+ Students
              </h3>

              <p className="text-neutral-400 text-xs font-light leading-relaxed">
                Re-architected legacy registers across 12 institute branches into an AI CCTV facial recognition & dynamic QR kiosk system connected directly to automated WhatsApp parent alerts.
              </p>

              <div className="pt-4 border-t border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-400">Proxy Attendance</span>
                  <span className="text-emerald-400 font-mono font-bold">Reduced by 99.8%</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-400">WhatsApp Notification Speed</span>
                  <span className="text-white font-mono font-bold">&lt; 2 Seconds</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-400">Student Gate Punch Speed</span>
                  <span className="text-[#FF3B00] font-mono font-bold">0.5s / Student</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => openQuoteModal("Education AI Face & QR Attendance System")}
              className="w-full py-3 bg-white/5 hover:bg-[#FF3B00] text-white border border-white/10 hover:border-[#FF3B00] rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
            >
              <span>Request Custom Proposal for Institute</span>
              <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Case Study 2: Manufacturing */}
          <div className="bg-[#080808] rounded-3xl border border-white/10 p-8 flex flex-col justify-between space-y-6 hover:border-[#FF3B00]/40 transition-all duration-300 shadow-2xl group relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold bg-[#FF3B00]/10 text-[#FF3B00] border border-[#FF3B00]/20 px-3 py-1 rounded-full uppercase">
                  Factories & Mills
                </span>
                <span className="text-xs font-bold text-neutral-400">Industrial Zone</span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-[#FF3B00] transition-colors leading-snug">
                Biometric & Multi-Shift Roster Sync for 3,500 Workers
              </h3>

              <p className="text-neutral-400 text-xs font-light leading-relaxed">
                Integrated eSSL biometric hardware readers with an automated rotational shift engine, overtime calculation rules, and offline edge storage for 4 manufacturing plant floors.
              </p>

              <div className="pt-4 border-t border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-400">Monthly Wage Leakage Saved</span>
                  <span className="text-emerald-400 font-mono font-bold">₹1,80,000 / Mo</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-400">Payroll Calculation Time</span>
                  <span className="text-white font-mono font-bold">5 Days ➔ 10 Mins</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-400">Offline Edge Auto-Sync</span>
                  <span className="text-[#FF3B00] font-mono font-bold">100% Reliable</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => openQuoteModal("Biometric & Multi-Shift Factory System")}
              className="w-full py-3 bg-white/5 hover:bg-[#FF3B00] text-white border border-white/10 hover:border-[#FF3B00] rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
            >
              <span>Request Factory & Plant Proposal</span>
              <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Case Study 3: Corporate Sales */}
          <div className="bg-[#080808] rounded-3xl border border-white/10 p-8 flex flex-col justify-between space-y-6 hover:border-[#FF3B00]/40 transition-all duration-300 shadow-2xl group relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold bg-[#FF3B00]/10 text-[#FF3B00] border border-[#FF3B00]/20 px-3 py-1 rounded-full uppercase">
                  Field Sales & Corporate
                </span>
                <span className="text-xs font-bold text-neutral-400">Multi-City Staff</span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-[#FF3B00] transition-colors leading-snug">
                Geofenced Mobile GPS & Selfie Punch for 450+ Sales Execs
              </h3>

              <p className="text-neutral-400 text-xs font-light leading-relaxed">
                Deployed mobile GPS geofenced check-in app with ±5m radius location validation, selfie timestamps, live route logs, and automated client meeting reports.
              </p>

              <div className="pt-4 border-t border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-400">Verified Client Site Visits</span>
                  <span className="text-emerald-400 font-mono font-bold">450+ Execs Daily</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-400">Field Productivity Surge</span>
                  <span className="text-white font-mono font-bold">+ 34% Growth</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-400">Travel Allowance Auditing</span>
                  <span className="text-[#FF3B00] font-mono font-bold">100% Automated</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => openQuoteModal("Geofenced Mobile GPS Field Force App")}
              className="w-full py-3 bg-white/5 hover:bg-[#FF3B00] text-white border border-white/10 hover:border-[#FF3B00] rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
            >
              <span>Request Field Force Proposal</span>
              <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Industry Solutions Grid */}
      <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#FF3B00] font-bold uppercase tracking-[0.2em] text-xs">Industry Solutions</span>
          <h2 className="text-[22px] sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Tailored For Every Workforce Structure
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#080808] p-6 rounded-2xl border border-white/10 space-y-3">
            <Building className="text-[#FF3B00]" size={28} />
            <h3 className="text-lg font-bold text-white">Corporate Offices</h3>
            <p className="text-neutral-400 text-xs leading-relaxed font-light">
              Turnstile CCTV face entry, shift rosters, flexi-hours tracking, and automated salary slip generation.
            </p>
          </div>

          <div className="bg-[#080808] p-6 rounded-2xl border border-white/10 space-y-3">
            <Users className="text-[#FF3B00]" size={28} />
            <h3 className="text-lg font-bold text-white">Schools & Institutes</h3>
            <p className="text-neutral-400 text-xs leading-relaxed font-light">
              Dynamic QR code student check-in, batch registers, and instant WhatsApp parent updates on entry/exit.
            </p>
          </div>

          <div className="bg-[#080808] p-6 rounded-2xl border border-white/10 space-y-3">
            <Layers className="text-[#FF3B00]" size={28} />
            <h3 className="text-lg font-bold text-white">Factories & Mills</h3>
            <p className="text-neutral-400 text-xs leading-relaxed font-light">
              Multi-shift rosters, overtime calculation, night shift allowances, and biometric hardware sync.
            </p>
          </div>

          <div className="bg-[#080808] p-6 rounded-2xl border border-white/10 space-y-3">
            <MapPin className="text-[#FF3B00]" size={28} />
            <h3 className="text-lg font-bold text-white">Field Sales Force</h3>
            <p className="text-neutral-400 text-xs leading-relaxed font-light">
              GPS geofenced mobile check-in, real-time client site visit timestamps, and live route tracking.
            </p>
          </div>
        </div>
      </section>

      {/* SEO & GEO System Comparison Matrix Table (For Google Featured Snippets & AI Citations) */}
      <section className="relative z-10 py-20 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-[#FF3B00] font-bold uppercase tracking-[0.2em] text-xs">
            Technical Specs Matrix (SEO & GEO)
          </span>
          <h2 className="text-[22px] sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            8 Attendance Modes Comparison Matrix
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm font-light">
            Compare security levels, punch speeds, hardware dependencies, and ideal use cases across all 8 attendance software modes.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#080808]">
          <table className="w-full text-left text-xs text-neutral-300">
            <thead className="bg-neutral-900 border-b border-white/10 text-white font-bold uppercase text-[10px] tracking-wider">
              <tr>
                <th className="p-4">Punch Mode</th>
                <th className="p-4">Hardware Required</th>
                <th className="p-4">Proxy Prevention</th>
                <th className="p-4">Punch Speed</th>
                <th className="p-4">Best Used For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr className="hover:bg-white/[0.02]">
                <td className="p-4 font-bold text-white flex items-center gap-2">
                  <Camera size={14} className="text-[#FF3B00]" /> 1. AI CCTV Face Match
                </td>
                <td className="p-4">Existing IP CCTV Cameras</td>
                <td className="p-4 text-emerald-400 font-bold">99.8% (ISO Liveness)</td>
                <td className="p-4 font-mono">&lt; 0.5s / Face</td>
                <td className="p-4">Schools, Office Gates, Colleges</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="p-4 font-bold text-white flex items-center gap-2">
                  <QrCode size={14} className="text-[#FF3B00]" /> 2. Dynamic QR Code
                </td>
                <td className="p-4">Smartphone / Tablet Screen</td>
                <td className="p-4 text-emerald-400 font-bold">100% (Geofence + Rotating)</td>
                <td className="p-4 font-mono">1.0s / Scan</td>
                <td className="p-4">Classrooms, Small Offices, Desks</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="p-4 font-bold text-white flex items-center gap-2">
                  <ClipboardList size={14} className="text-[#FF3B00]" /> 3. Manual Desk Sheet
                </td>
                <td className="p-4">Web Admin Portal</td>
                <td className="p-4 text-amber-400 font-bold">Supervisor Overrides</td>
                <td className="p-4 font-mono">1-Click Bulk</td>
                <td className="p-4">HR Super-Admins, Exception Logs</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="p-4 font-bold text-white flex items-center gap-2">
                  <Fingerprint size={14} className="text-[#FF3B00]" /> 4. Biometric Fingerprint
                </td>
                <td className="p-4">eSSL / ZKTeco Machines</td>
                <td className="p-4 text-emerald-400 font-bold">99.5% Finger Match</td>
                <td className="p-4 font-mono">0.8s / Finger</td>
                <td className="p-4">Factories, Plant Floors, Mills</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="p-4 font-bold text-white flex items-center gap-2">
                  <CreditCard size={14} className="text-[#FF3B00]" /> 5. RFID / NFC Badges
                </td>
                <td className="p-4">Proximity Readers / Turnstiles</td>
                <td className="p-4 text-neutral-400 font-bold">High Access Speed</td>
                <td className="p-4 font-mono font-bold text-emerald-400">0.2s / Tap</td>
                <td className="p-4">Turnstile Barrier Gates, IT Parks</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="p-4 font-bold text-white flex items-center gap-2">
                  <MapPin size={14} className="text-[#FF3B00]" /> 6. GPS Geofenced Mobile
                </td>
                <td className="p-4">Android / iOS App</td>
                <td className="p-4 text-emerald-400 font-bold">±5m Radius Validation</td>
                <td className="p-4 font-mono">Instant GPS</td>
                <td className="p-4">Field Sales Force, Remote Staff</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="p-4 font-bold text-white flex items-center gap-2">
                  <MessageSquare size={14} className="text-[#FF3B00]" /> 7. WhatsApp / Slack Bot
                </td>
                <td className="p-4">WhatsApp Business API</td>
                <td className="p-4 text-emerald-400 font-bold">Mobile UUID + Location</td>
                <td className="p-4 font-mono">2.0s Bot Response</td>
                <td className="p-4">Work-from-Home, Remote Consultants</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="p-4 font-bold text-white flex items-center gap-2">
                  <Wifi size={14} className="text-[#FF3B00]" /> 8. Wi-Fi & Beacon Auto
                </td>
                <td className="p-4">Office Wi-Fi / BLE Beacon</td>
                <td className="p-4 text-emerald-400 font-bold">Zero-Touch Range Match</td>
                <td className="p-4 font-mono text-emerald-400">Auto-Punch</td>
                <td className="p-4">Executive Cabins, Open Offices</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SEO Content Block (High-Intent Patna & Bihar Keyword Authority) */}
      <SEOContentBlock
        title="Attendance Management Software Development Company in Patna, Bihar"
        paragraphs={[
          <>
            <strong className="text-white font-semibold">Webflora Technologies</strong> is Patna&apos;s leading <Link href="/it-company-in-patna/software-development-company-in-patna" className="text-[#FF3B00] hover:underline font-medium">software development company</Link> engineering state-of-the-art attendance management software, HRMS portals, and automated payroll systems. Our software empowers enterprise offices, coaching institutes, schools, manufacturing units, and field sales teams across Patna, Bihar, and India to eliminate proxy attendance and save hundreds of administrative hours monthly.
          </>,
          <>
            Whether you require an <Link href="/it-company-in-patna/ai-automation-company-in-patna" className="text-[#FF3B00] hover:underline font-medium">AI camera face recognition system</Link> running on existing CCTV streams, dynamic rotating QR code check-in kiosks for 15,000+ students, biometric hardware machine integrations (eSSL, ZKTeco), or geofenced GPS mobile tracking apps, Webflora delivers 100% DPDP data privacy compliant custom software with zero monthly per-user fees and full source code ownership.
          </>
        ]}
      />

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6 max-w-4xl mx-auto border-t border-white/5">
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#FF3B00] font-bold uppercase tracking-[0.2em] text-xs">Got Questions?</span>
          <h2 className="text-[22px] sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-2">
          <FAQItem
            question="1. Can the AI Camera Attendance System work with our existing CCTV cameras?"
            answer="Yes! Our AI face recognition software connects directly to your existing IP CCTV camera RTSP video streams (Hikvision, Dahua, CP Plus, etc.). You don't need to purchase proprietary facial recognition hardware machines."
          />
          <FAQItem
            question="2. How does the Dynamic QR Code system prevent proxy attendance and screenshot sharing?"
            answer="Our system generates dynamic, rotating QR codes that automatically refresh every 15 seconds. Additionally, we enforce GPS geofence radius checks and bind the device to the employee's unique smartphone hardware UUID."
          />
          <FAQItem
            question="3. What types of attendance systems can be integrated into one software?"
            answer="All 8 types! You can combine AI camera facial recognition at main building gates, RFID smart cards at turnstiles, dynamic QR codes in classrooms, mobile GPS for field force staff, biometric fingerprint hardware, WhatsApp bots, and manual desk logging for super-admins inside one unified Webflora HRMS dashboard."
          />
          <FAQItem
            question="4. What happens if the internet connection goes down at our office or coaching institute?"
            answer="The software includes an offline edge engine. Attendance logs are stored locally on the local server/device with encrypted timestamps and automatically sync to the cloud database as soon as connectivity resumes."
          />
          <FAQItem
            question="5. How does the software handle rotational shifts, night shifts, and overtime?"
            answer="Our automated shift roster engine supports rotational shifts, split shifts, night shift allowances, configurable grace periods, late-mark penalty rules, and automatic overtime calculations."
          />
          <FAQItem
            question="6. Can Webflora integrate the attendance software with our existing Payroll or HRMS?"
            answer="Yes, our attendance engine offers REST APIs and ready connectors for Tally Prime, Zoho Payroll, Razorpay Payroll, Keka, ERPNext, and custom HRMS databases to automate salary, overtime, and leave deductions."
          />
          <FAQItem
            question="7. Is employee facial data secure and compliant with data privacy laws?"
            answer="Facial features are converted into encrypted mathematical vector embeddings (512-bit embeddings) stored with AES-256 encryption. We never store raw face images, ensuring 100% compliance with India's DPDP data privacy regulations."
          />
          <FAQItem
            question="8. How does GPS Geofencing work for remote or field sales executives?"
            answer="Field employees check in using our mobile app. The system validates their exact GPS coordinates against pre-assigned client locations or office perimeters (within a 5-meter radius accuracy) and logs verified visit timestamps."
          />
          <FAQItem
            question="9. Can parents receive automated attendance updates for students at coaching institutes or schools?"
            answer="Yes, we build direct WhatsApp API and SMS gateway integrations that send instant automated entry/exit alerts to parents the moment a student scans their QR code or walks past the AI face scanner gate."
          />
          <FAQItem
            question="10. How does manual attendance logging work for supervisors and HR managers?"
            answer="Super-admins can perform single-click bulk updates, record field duty reasons, approve leave requests, adjust shift rosters, and maintain complete audit trail logs for transparency."
          />
          <FAQItem
            question="11. Can we use biometric fingerprint hardware alongside AI camera attendance?"
            answer="Yes, we integrate legacy fingerprint readers (eSSL, ZKTeco, Matrix, Realtime) into the central dashboard so staff using biometric machines sync in real time alongside AI camera and mobile app users."
          />
          <FAQItem
            question="12. How fast can Webflora deploy custom attendance management software for our company?"
            answer="Cloud SaaS setups can be deployed in 24 to 48 hours. Custom enterprise builds with hardware integrations, custom payroll rules, and ERP connections are delivered within 5 to 7 business days."
          />
          <FAQItem
            question="13. Is there a monthly per-user licensing fee or do we own the software?"
            answer="We offer both models! You can choose flat-rate custom software development with 100% source code ownership and zero monthly per-user licensing fees, or our hosted cloud SaaS plan."
          />
          <FAQItem
            question="14. How does the WhatsApp Attendance Bot work for staff check-ins?"
            answer="Employees send a simple text command (`#punchin` or location pin) to your company's verified WhatsApp bot number. The bot verifies their registered mobile number & GPS location, logging their punch instantly."
          />
          <FAQItem
            question="15. What report formats are exported for HR and monthly payroll auditing?"
            answer="You can generate instant automated reports in Excel, CSV, PDF, and interactive visual charts detailing monthly attendance summaries, late marks, half-days, leave balances, and net working hours."
          />
        </div>
      </section>

      {/* Related Software & Internal Links Section */}
      <section className="relative z-10 py-20 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-[#FF3B00] font-bold uppercase tracking-[0.2em] text-xs">Explore Related Products</span>
          <h2 className="text-[22px] sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Related Custom Software & Enterprise Solutions
          </h2>
          <p className="text-neutral-400 text-xs md:text-sm font-light">
            Discover Webflora's full ecosystem of enterprise software development, AI solutions, and specialized management tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
          <Link
            href="/it-company-in-patna/ai-chatbot-company-in-patna"
            className="p-6 bg-[#080808] hover:bg-neutral-900/80 border border-white/10 hover:border-[#FF3B00]/40 rounded-2xl transition-all duration-300 group space-y-2 block"
          >
            <div className="flex justify-between items-center text-white font-bold">
              <span>AI Chatbot & Automation</span>
              <ArrowRight size={14} className="text-[#FF3B00] group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-neutral-400 text-[11px] font-light">
              Build custom WhatsApp bots and AI assistants for instant customer support, lead capture, and automated notifications.
            </p>
          </Link>

          <Link
            href="/electronic-health-records-software"
            className="p-6 bg-[#080808] hover:bg-neutral-900/80 border border-white/10 hover:border-[#FF3B00]/40 rounded-2xl transition-all duration-300 group space-y-2 block"
          >
            <div className="flex justify-between items-center text-white font-bold">
              <span>Electronic Health Records (EHR)</span>
              <ArrowRight size={14} className="text-[#FF3B00] group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-neutral-400 text-[11px] font-light">
              NABH-compliant healthcare software for hospitals, clinics, patient records, doctor OPD schedules, and pharmacy billing.
            </p>
          </Link>

          <Link
            href="/it-company-in-patna"
            className="p-6 bg-[#080808] hover:bg-neutral-900/80 border border-white/10 hover:border-[#FF3B00]/40 rounded-2xl transition-all duration-300 group space-y-2 block"
          >
            <div className="flex justify-between items-center text-white font-bold">
              <span>IT & Custom Software Company</span>
              <ArrowRight size={14} className="text-[#FF3B00] group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-neutral-400 text-[11px] font-light">
              Top-rated IT software development company building scalable web apps, mobile apps, ERPs, and cloud solutions.
            </p>
          </Link>

          <Link
            href="/industries"
            className="p-6 bg-[#080808] hover:bg-neutral-900/80 border border-white/10 hover:border-[#FF3B00]/40 rounded-2xl transition-all duration-300 group space-y-2 block"
          >
            <div className="flex justify-between items-center text-white font-bold">
              <span>Industries We Serve</span>
              <ArrowRight size={14} className="text-[#FF3B00] group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-neutral-400 text-[11px] font-light">
              Tailored software solutions for education, healthcare, real estate, manufacturing, retail, and corporate sectors.
            </p>
          </Link>

          <Link
            href="/technology"
            className="p-6 bg-[#080808] hover:bg-neutral-900/80 border border-white/10 hover:border-[#FF3B00]/40 rounded-2xl transition-all duration-300 group space-y-2 block"
          >
            <div className="flex justify-between items-center text-white font-bold">
              <span>Tech Stack & Architecture</span>
              <ArrowRight size={14} className="text-[#FF3B00] group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-neutral-400 text-[11px] font-light">
              Explore our modern technology stack including Next.js, Node.js, React, AI/ML models, OpenCV, and AWS cloud infrastructure.
            </p>
          </Link>

          <Link
            href="/contact"
            className="p-6 bg-[#080808] hover:bg-neutral-900/80 border border-white/10 hover:border-[#FF3B00]/40 rounded-2xl transition-all duration-300 group space-y-2 block"
          >
            <div className="flex justify-between items-center text-white font-bold">
              <span>Get Technical Consultation</span>
              <ArrowRight size={14} className="text-[#FF3B00] group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-neutral-400 text-[11px] font-light">
              Speak directly with our senior software architects to plan your custom software requirements and project roadmap.
            </p>
          </Link>
        </div>
      </section>

      {/* Bottom CTA Banner — Premium Compact Responsive Layout */}
      <section className="relative z-10 py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="relative p-[1px] rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-r from-[#FF3B00] via-white/20 to-orange-500 overflow-hidden shadow-2xl">
          <div className="bg-[#080808] rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-14 text-center space-y-5 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#FF3B00]/15 blur-[90px] rounded-full pointer-events-none" />

            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-snug">
              Ready to Automate Your Attendance System?
            </h2>

            <p className="text-neutral-300 text-xs sm:text-base font-light max-w-xl mx-auto leading-relaxed">
              Get a customized attendance management software tailored for your workforce size, hardware setup, and budget.
            </p>

            <div className="flex justify-center pt-2">
              <button
                onClick={() => openQuoteModal("All 8 Hybrid Attendance Systems")}
                className="w-full sm:w-auto group flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-9 sm:py-4 bg-[#FF3B00] hover:bg-[#ff4d1a] text-white rounded-2xl sm:rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-[0_0_40px_rgba(255,59,0,0.4)] hover:scale-105 cursor-pointer"
              >
                <span>Get Custom Quote & Live Demo</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[10px] sm:text-xs font-mono text-neutral-400 pt-3 border-t border-white/10 max-w-lg mx-auto">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-400" /> Free Technical Demo</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-400" /> 24-Hour Custom Proposal</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-400" /> Zero Per-User Fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3-FIELD POPUP FORM MODAL (Name, Number, Message) */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              className="relative w-full max-w-md bg-[#0A0A0A] border border-white/15 p-6 md:p-8 rounded-3xl shadow-2xl space-y-5"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="space-y-1">
                <span className="text-[#FF3B00] font-bold uppercase tracking-wider text-[10px] font-mono">
                  INSTANT QUOTE & DEMO CALLBACK
                </span>
                <h3 className="text-xl font-bold text-white">
                  Request Custom Proposal
                </h3>
                <div className="text-[11px] text-neutral-400 flex items-center gap-1 font-mono">
                  <span>Selected:</span>
                  <span className="text-[#FF3B00] font-bold">{selectedSystem}</span>
                </div>
              </div>

              {formStatus === "success" ? (
                <div className="bg-emerald-500/10 border border-emerald-500/30 p-6 rounded-2xl text-center space-y-3">
                  <CheckCircle2 size={36} className="text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Inquiry Submitted!</h4>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Thank you! Our attendance software team will call/WhatsApp you shortly with custom pricing.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-6 py-2 bg-[#FF3B00] hover:bg-[#ff4d1a] text-white rounded-full text-xs font-bold transition-all cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                  {/* FIELD 1: NAME */}
                  <div>
                    <label className="block text-neutral-300 font-bold mb-1.5 uppercase tracking-wider text-[10px]">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-neutral-900 border border-white/10 text-white rounded-xl p-3 focus:outline-none focus:border-[#FF3B00] transition-colors"
                    />
                  </div>

                  {/* FIELD 2: NUMBER */}
                  <div>
                    <label className="block text-neutral-300 font-bold mb-1.5 uppercase tracking-wider text-[10px]">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full bg-neutral-900 border border-white/10 text-white rounded-xl p-3 focus:outline-none focus:border-[#FF3B00] transition-colors"
                    />
                  </div>

                  {/* FIELD 3: MESSAGE */}
                  <div>
                    <label className="block text-neutral-300 font-bold mb-1.5 uppercase tracking-wider text-[10px]">
                      Message / Requirement *
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      required
                      placeholder="Mention your estimated staff/student count, location, or custom software requirements..."
                      className="w-full bg-neutral-900 border border-white/10 text-white rounded-xl p-3 focus:outline-none focus:border-[#FF3B00] transition-colors"
                    ></textarea>
                  </div>

                  {formStatus === "error" && (
                    <div className="p-3 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[11px] rounded-xl flex items-center gap-2">
                      <AlertCircle size={15} /> Failed to submit inquiry. Please check your connection.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full py-3.5 bg-[#FF3B00] hover:bg-[#ff4d1a] text-white rounded-full font-bold text-xs tracking-wide transition-all shadow-lg shadow-[#FF3B00]/30 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {formStatus === "submitting" ? (
                      <>
                        <RefreshCw className="animate-spin" size={14} /> Submitting Request...
                      </>
                    ) : (
                      <>
                        <span>Submit Quote Request</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </main>
  );
}

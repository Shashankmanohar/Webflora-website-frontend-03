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
  PhoneCall,
  Award,
  HelpCircle,
  BarChart3,
  HeartHandshake
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
    { id: "EMP-101", name: "Anish Verma", dept: "Engineering", status: "Present", time: "09:14 AM", mode: "Face Scan" },
    { id: "EMP-102", name: "Priya Sharma", dept: "Marketing", status: "Present", time: "09:22 AM", mode: "Dynamic QR" },
    { id: "EMP-103", name: "Vikram Kumar", dept: "Operations", status: "On Leave", time: "-", mode: "Admin Desk" },
    { id: "EMP-104", name: "Sneha Patel", dept: "Design", status: "Late", time: "09:48 AM", mode: "eSSL Hardware" },
  ]);

  // Dynamic QR Timer simulation
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
          <span className="text-xs font-mono text-neutral-400">Webflora Attendance Kiosk</span>
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
          <Camera size={13} /> Face Scan
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
          <ClipboardList size={13} /> Desk Sheet
        </button>
        <button
          onClick={() => setActiveTab("biometric")}
          className={`py-2 px-2 rounded-lg font-bold transition-all flex items-center justify-center gap-1 ${
            activeTab === "biometric"
              ? "bg-[#FF3B00] text-white shadow-md shadow-[#FF3B00]/30"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          <Fingerprint size={13} /> eSSL Biometric
        </button>
      </div>

      {/* Interactive Screen Display */}
      <div className="bg-black/90 rounded-2xl border border-white/10 p-4 min-h-[250px] flex flex-col justify-center">
        {/* TAB 1: AI CAMERA SCAN */}
        {activeTab === "ai-camera" && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-neutral-400 font-mono">CCTV Stream: Office Entrance</span>
              <span className="text-emerald-400 font-mono font-bold text-[10px]">99.8% MATCH</span>
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
                    <RefreshCw className="animate-spin" size={12} /> Scanning Face...
                  </>
                ) : (
                  <>
                    <Camera size={12} /> Test Face Punch
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
                  <span className="text-emerald-400 font-mono">{scanResult.match} Verified</span>
                </div>
                <div className="text-neutral-400 font-mono text-[10px]">
                  Time: <span className="text-white">{scanResult.timestamp}</span> | Status: <span className="text-emerald-400 font-bold">PRESENT</span>
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
              <div className="text-xs font-bold text-white">Dynamic Rotating QR Code</div>
              <div className="text-[11px] text-neutral-400 mt-1">
                Refreshes in <span className="text-[#FF3B00] font-mono font-bold">{qrCounter}s</span> | Geofence: <span className="text-emerald-400 font-mono font-bold">Inside Campus</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: MANUAL LOG */}
        {activeTab === "manual" && (
          <div className="space-y-2.5 text-xs">
            <div className="flex justify-between items-center text-neutral-400 text-[11px]">
              <span>Admin Desk Attendance Manager</span>
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
                        ? "bg-amber-400/10 text-amber-400 border border-amber-400/20"
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
              <div className="font-bold text-white text-sm">eSSL Biometric & Hardware Sync</div>
              <p className="text-neutral-400 text-[11px] mt-1">
                Works with eSSL, e time track lite, ZKTeco | Status: <span className="text-emerald-400 font-mono font-bold">CONNECTED</span>
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

// Main Page Component
export default function AttendanceSoftwarePage() {
  const mainRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSystem, setSelectedSystem] = useState("AI Face Recognition Attendance System");
  const [formStatus, setFormStatus] = useState(null);

  const openQuoteModal = (systemName = "AI Face Recognition Attendance System") => {
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
      
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="creative-grid-bg" />
        <div className="creative-grid-dots" />
        
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-[radial-gradient(circle_at_center,_rgba(255,59,0,0.12)_0%,transparent_70%)] blur-[100px]" />
      </div>

      {/* HERO SECTION: Ultra Simple & Direct */}
      <section className="relative z-10 min-h-[100dvh] lg:min-h-screen flex flex-col justify-center px-4 sm:px-6 pt-20 pb-6 lg:pt-24 lg:pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-4 text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/10 rounded-full px-3 py-1 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-[#FF3B00] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-neutral-200 uppercase">
                SIMPLE & ACCURATE ATTENDANCE SOFTWARE
              </span>
            </div>
            
            {/* Simple Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight sm:leading-[1.15] text-white">
              Smart Attendance <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-[#FF3B00] font-extrabold">
                Management System
              </span>
            </h1>

            {/* Keyword Pills */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono">
              <span className="bg-white/5 border border-white/10 text-neutral-300 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full flex items-center gap-1.5">
                <Camera size={12} className="text-[#FF3B00]" /> Face Recognition System
              </span>
              <span className="bg-white/5 border border-white/10 text-neutral-300 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full flex items-center gap-1.5">
                <QrCode size={12} className="text-[#FF3B00]" /> Dynamic QR Attendance
              </span>
              <span className="bg-white/5 border border-white/10 text-neutral-300 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full flex items-center gap-1.5">
                <Fingerprint size={12} className="text-[#FF3B00]" /> eSSL Biometric Software Sync
              </span>
              <span className="bg-white/5 border border-white/10 text-neutral-300 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full flex items-center gap-1.5">
                <Smartphone size={12} className="text-[#FF3B00]" /> Online Attendance System
              </span>
            </div>
            
            {/* Simple Subtitle */}
            <p className="text-neutral-300 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-2xl">
              Track employee and student attendance easily. Use AI face cameras, dynamic QR codes, <strong>eSSL biometric software</strong>, RFID cards, or mobile GPS — all managed in one simple <strong>attendance management system</strong>.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-row gap-2.5 sm:gap-4 pt-1 sm:pt-2">
              <button 
                onClick={() => openQuoteModal("All 8 Hybrid Attendance Systems")}
                className="group flex items-center justify-center gap-2 px-5 py-2.5 sm:px-8 sm:py-3.5 bg-[#FF3B00] hover:bg-[#ff4d1a] text-white rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all shadow-[0_0_30px_rgba(255,59,0,0.35)] hover:scale-105 cursor-pointer"
              >
                <span>Get Free Demo</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="#why-choose" 
                className="flex items-center justify-center gap-2 px-5 py-2.5 sm:px-8 sm:py-3.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white rounded-full font-semibold text-xs sm:text-sm tracking-wide transition-all backdrop-blur-md hover:scale-105"
              >
                Why Choose Us
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-3 sm:pt-4 border-t border-white/10 flex flex-wrap gap-4 sm:gap-6 text-[10px] sm:text-xs text-neutral-400 font-mono">
              <div className="flex items-center gap-1.5">
                <Shield className="text-emerald-400" size={14} /> 99.8% Face Accuracy
              </div>
              <div className="flex items-center gap-1.5">
                <Database className="text-[#FF3B00]" size={14} /> Works Offline
              </div>
              <div className="flex items-center gap-1.5">
                <Cpu className="text-blue-400" size={14} /> 1-Click Payroll Sync
              </div>
            </div>

          </div>

          {/* Right Column: Kiosk Demo */}
          <div className="hidden lg:block lg:col-span-5 relative w-full">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#FF3B00]/20 to-orange-500/10 rounded-[3rem] opacity-20 blur-3xl" />
            <AttendanceSimulator />
          </div>

        </div>
      </section>

      {/* Client Marquee */}
      <ClientMarquee />

      {/* 8 SIMPLE PUNCH MODES */}
      <section id="features" className="relative z-10 py-24 px-6 border-y border-white/5 bg-[#030303]/60">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="text-[#FF3B00] font-bold uppercase tracking-[0.2em] text-xs">Attendance Methods</span>
            <h2 className="text-[22px] sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              8 Simple Ways to Track Attendance
            </h2>
            <p className="text-neutral-400 text-base md:text-lg max-w-3xl mx-auto font-light">
              Choose one or combine any of these simple attendance tracking methods into one dashboard.
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
                  <h3 className="text-xl font-bold text-white">1. Face Recognition System</h3>
                  <span className="inline-block text-[10px] bg-[#FF3B00]/10 text-[#FF3B00] border border-[#FF3B00]/20 px-2.5 py-0.5 rounded-full font-mono font-bold">
                    Uses CCTV Cameras
                  </span>
                  <p className="text-neutral-400 text-xs font-light leading-relaxed">
                    Scans faces automatically as staff walk through the door using your existing CCTV cameras in 0.5 seconds.
                  </p>
                </div>
                <div>
                  <ul className="space-y-2 mt-6 pt-4 border-t border-white/5 text-xs text-neutral-300">
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3B00]" /> Fast 0.5-second face scan</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3B00]" /> Stops photo & video spoofing</li>
                  </ul>
                  <button
                    onClick={() => openQuoteModal("Face Recognition System")}
                    className="w-full mt-5 py-2.5 bg-[#FF3B00]/10 hover:bg-[#FF3B00] text-[#FF3B00] hover:text-white border border-[#FF3B00]/30 hover:border-[#FF3B00] rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md cursor-pointer"
                  >
                    <span>Get Free Quote</span>
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
                    Zero Extra Machine Cost
                  </span>
                  <p className="text-neutral-400 text-xs font-light leading-relaxed">
                    Display a rotating QR code on screen. Students and employees scan it with their phone camera to check in.
                  </p>
                </div>
                <div>
                  <ul className="space-y-2 mt-6 pt-4 border-t border-white/5 text-xs text-neutral-300">
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3B00]" /> Refreshes every 15 seconds</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3B00]" /> Prevents screenshot sharing</li>
                  </ul>
                  <button
                    onClick={() => openQuoteModal("Dynamic QR Code System")}
                    className="w-full mt-5 py-2.5 bg-[#FF3B00]/10 hover:bg-[#FF3B00] text-[#FF3B00] hover:text-white border border-[#FF3B00]/30 hover:border-[#FF3B00] rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md cursor-pointer"
                  >
                    <span>Get Free Quote</span>
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
                  <h3 className="text-xl font-bold text-white">3. Admin Desk Sheet Portal</h3>
                  <span className="inline-block text-[10px] bg-[#FF3B00]/10 text-[#FF3B00] border border-[#FF3B00]/20 px-2.5 py-0.5 rounded-full font-mono font-bold">
                    Super Admin Desk
                  </span>
                  <p className="text-neutral-400 text-xs font-light leading-relaxed">
                    Simple web desk portal for HR supervisors to mark bulk attendance, approve leaves, and view daily logs in one click.
                  </p>
                </div>
                <div>
                  <ul className="space-y-2 mt-6 pt-4 border-t border-white/5 text-xs text-neutral-300">
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3B00]" /> 1-click bulk updates</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3B00]" /> Complete audit trail logs</li>
                  </ul>
                  <button
                    onClick={() => openQuoteModal("Admin Desk Sheet Portal")}
                    className="w-full mt-5 py-2.5 bg-[#FF3B00]/10 hover:bg-[#FF3B00] text-[#FF3B00] hover:text-white border border-[#FF3B00]/30 hover:border-[#FF3B00] rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md cursor-pointer"
                  >
                    <span>Get Free Quote</span>
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
                  <h3 className="text-xl font-bold text-white">4. eSSL Biometric Software Sync</h3>
                  <span className="inline-block text-[10px] bg-[#FF3B00]/10 text-[#FF3B00] border border-[#FF3B00]/20 px-2.5 py-0.5 rounded-full font-mono font-bold">
                    Hardware Machine Sync
                  </span>
                  <p className="text-neutral-400 text-xs font-light leading-relaxed">
                    Connects directly with your existing fingerprint machines like <strong>eSSL biometric software</strong>, <strong>e time track lite</strong>, and ZKTeco.
                  </p>
                </div>
                <div>
                  <ul className="space-y-2 mt-6 pt-4 border-t border-white/5 text-xs text-neutral-300">
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3B00]" /> eSSL & e time track lite sync</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3B00]" /> Real-time device cloud sync</li>
                  </ul>
                  <button
                    onClick={() => openQuoteModal("eSSL Biometric Software Sync")}
                    className="w-full mt-5 py-2.5 bg-[#FF3B00]/10 hover:bg-[#FF3B00] text-[#FF3B00] hover:text-white border border-[#FF3B00]/30 hover:border-[#FF3B00] rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md cursor-pointer"
                  >
                    <span>Get Free Quote</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* System 5: RFID Cards */}
            <div className="relative p-[1px] rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-white/5 hover:from-[#FF3B00]/30 hover:to-transparent transition-all duration-500 shadow-2xl group">
              <div className="bg-[#080808] p-8 rounded-[2rem] h-full flex flex-col justify-between relative overflow-hidden">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center text-[#FF3B00] group-hover:scale-110 group-hover:bg-[#FF3B00] group-hover:text-white transition-all">
                    <CreditCard size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-white">5. RFID Card Badges</h3>
                  <span className="inline-block text-[10px] bg-[#FF3B00]/10 text-[#FF3B00] border border-[#FF3B00]/20 px-2.5 py-0.5 rounded-full font-mono font-bold">
                    Turnstile Gate Tap
                  </span>
                  <p className="text-neutral-400 text-xs font-light leading-relaxed">
                    Super fast 0.2-second card swipe for office turnstiles, building gates, and employee smart ID badges.
                  </p>
                </div>
                <div>
                  <ul className="space-y-2 mt-6 pt-4 border-t border-white/5 text-xs text-neutral-300">
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3B00]" /> Turnstile gate integration</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3B00]" /> 0.2-second card tap speed</li>
                  </ul>
                  <button
                    onClick={() => openQuoteModal("RFID Card Badges")}
                    className="w-full mt-5 py-2.5 bg-[#FF3B00]/10 hover:bg-[#FF3B00] text-[#FF3B00] hover:text-white border border-[#FF3B00]/30 hover:border-[#FF3B00] rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md cursor-pointer"
                  >
                    <span>Get Free Quote</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* System 6: Field GPS */}
            <div className="relative p-[1px] rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-white/5 hover:from-[#FF3B00]/30 hover:to-transparent transition-all duration-500 shadow-2xl group">
              <div className="bg-[#080808] p-8 rounded-[2rem] h-full flex flex-col justify-between relative overflow-hidden">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center text-[#FF3B00] group-hover:scale-110 group-hover:bg-[#FF3B00] group-hover:text-white transition-all">
                    <MapPin size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-white">6. Geofenced Mobile GPS App</h3>
                  <span className="inline-block text-[10px] bg-[#FF3B00]/10 text-[#FF3B00] border border-[#FF3B00]/20 px-2.5 py-0.5 rounded-full font-mono font-bold">
                    For Field Sales Teams
                  </span>
                  <p className="text-neutral-400 text-xs font-light leading-relaxed">
                    Tracks field sales reps and traveling staff with accurate 5-meter GPS location checks and selfie timestamps.
                  </p>
                </div>
                <div>
                  <ul className="space-y-2 mt-6 pt-4 border-t border-white/5 text-xs text-neutral-300">
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3B00]" /> 5m accurate GPS radius</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3B00]" /> Live route & selfie logs</li>
                  </ul>
                  <button
                    onClick={() => openQuoteModal("Geofenced Mobile GPS App")}
                    className="w-full mt-5 py-2.5 bg-[#FF3B00]/10 hover:bg-[#FF3B00] text-[#FF3B00] hover:text-white border border-[#FF3B00]/30 hover:border-[#FF3B00] rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md cursor-pointer"
                  >
                    <span>Get Free Quote</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* System 7: WhatsApp Bot */}
            <div className="relative p-[1px] rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-white/5 hover:from-[#FF3B00]/30 hover:to-transparent transition-all duration-500 shadow-2xl group">
              <div className="bg-[#080808] p-8 rounded-[2rem] h-full flex flex-col justify-between relative overflow-hidden">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center text-[#FF3B00] group-hover:scale-110 group-hover:bg-[#FF3B00] group-hover:text-white transition-all">
                    <MessageSquare size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-white">7. WhatsApp Check-In Bot</h3>
                  <span className="inline-block text-[10px] bg-[#FF3B00]/10 text-[#FF3B00] border border-[#FF3B00]/20 px-2.5 py-0.5 rounded-full font-mono font-bold">
                    No App Needed
                  </span>
                  <p className="text-neutral-400 text-xs font-light leading-relaxed">
                    Staff simply send a text or location pin on WhatsApp to punch in instantly. Powered by Webflora&apos;s AI chatbot.
                  </p>
                </div>
                <div>
                  <ul className="space-y-2 mt-6 pt-4 border-t border-white/5 text-xs text-neutral-300">
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3B00]" /> Easy WhatsApp punch</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3B00]" /> Instant parent alerts</li>
                  </ul>
                  <button
                    onClick={() => openQuoteModal("WhatsApp Check-In Bot")}
                    className="w-full mt-5 py-2.5 bg-[#FF3B00]/10 hover:bg-[#FF3B00] text-[#FF3B00] hover:text-white border border-[#FF3B00]/30 hover:border-[#FF3B00] rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md cursor-pointer"
                  >
                    <span>Get Free Quote</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* System 8: Wi-Fi Auto */}
            <div className="relative p-[1px] rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-white/5 hover:from-[#FF3B00]/30 hover:to-transparent transition-all duration-500 shadow-2xl group">
              <div className="bg-[#080808] p-8 rounded-[2rem] h-full flex flex-col justify-between relative overflow-hidden">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center text-[#FF3B00] group-hover:scale-110 group-hover:bg-[#FF3B00] group-hover:text-white transition-all">
                    <Wifi size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-white">8. Wi-Fi Auto Check-In</h3>
                  <span className="inline-block text-[10px] bg-[#FF3B00]/10 text-[#FF3B00] border border-[#FF3B00]/20 px-2.5 py-0.5 rounded-full font-mono font-bold">
                    Hands-Free Check
                  </span>
                  <p className="text-neutral-400 text-xs font-light leading-relaxed">
                    Automatically logs check-in the moment an employee&apos;s mobile device connects to your office Wi-Fi network.
                  </p>
                </div>
                <div>
                  <ul className="space-y-2 mt-6 pt-4 border-t border-white/5 text-xs text-neutral-300">
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3B00]" /> Automatic Wi-Fi check-in</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3B00]" /> Completely hands-free</li>
                  </ul>
                  <button
                    onClick={() => openQuoteModal("Wi-Fi Auto Check-In")}
                    className="w-full mt-5 py-2.5 bg-[#FF3B00]/10 hover:bg-[#FF3B00] text-[#FF3B00] hover:text-white border border-[#FF3B00]/30 hover:border-[#FF3B00] rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md cursor-pointer"
                  >
                    <span>Get Free Quote</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE WEBFLORA: Simple & Direct */}
      <section id="why-choose" className="relative z-10 py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF3B00]/20 bg-[#FF3B00]/5 text-xs text-[#FF3B00] font-bold uppercase tracking-wider font-mono">
            🤝 Trust & Reliability
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Why Choose <span className="text-[#FF3B00]">Webflora Technologies</span>?
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed max-w-3xl mx-auto">
            We make attendance tracking easy, accurate, and affordable for offices, coaching centers, and factories in Patna and across Bihar.
          </p>
        </div>

        {/* 4 Stat Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 p-8 rounded-3xl bg-[#080808] border border-white/10 relative overflow-hidden shadow-2xl">
          <div className="text-center space-y-2">
            <div className="text-3xl md:text-5xl font-extrabold text-[#FF3B00] font-mono">
              99.8%
            </div>
            <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-neutral-400">
              No Fake Punches
            </div>
          </div>

          <div className="text-center space-y-2">
            <div className="text-3xl md:text-5xl font-extrabold text-emerald-400 font-mono">
              0.5s
            </div>
            <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-neutral-400">
              Fast Face Matching
            </div>
          </div>

          <div className="text-center space-y-2">
            <div className="text-3xl md:text-5xl font-extrabold text-blue-400 font-mono">
              8-in-1
            </div>
            <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-neutral-400">
              All Modes Included
            </div>
          </div>

          <div className="text-center space-y-2">
            <div className="text-3xl md:text-5xl font-extrabold text-amber-400 font-mono">
              ₹0
            </div>
            <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-neutral-400">
              Zero Monthly Fees Option
            </div>
          </div>
        </div>

        {/* 8 Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#080808] p-7 rounded-3xl border border-white/10 hover:border-[#FF3B00]/40 transition-all duration-300 space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-[#FF3B00]/10 border border-[#FF3B00]/20 flex items-center justify-center text-[#FF3B00]">
              <Layers size={24} />
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-[#FF3B00] transition-colors">
              All-in-One System
            </h3>
            <p className="text-neutral-400 text-xs leading-relaxed font-light">
              Track office staff, factory workers, and field sales teams inside a single simple software.
            </p>
          </div>

          <div className="bg-[#080808] p-7 rounded-3xl border border-white/10 hover:border-[#FF3B00]/40 transition-all duration-300 space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-[#FF3B00]/10 border border-[#FF3B00]/20 flex items-center justify-center text-[#FF3B00]">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-[#FF3B00] transition-colors">
              No Fake Punches
            </h3>
            <p className="text-neutral-400 text-xs leading-relaxed font-light">
              Smart face matching stops employees from punching in for absent coworkers using photos or screens.
            </p>
          </div>

          <div className="bg-[#080808] p-7 rounded-3xl border border-white/10 hover:border-[#FF3B00]/40 transition-all duration-300 space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-[#FF3B00]/10 border border-[#FF3B00]/20 flex items-center justify-center text-[#FF3B00]">
              <DollarSign size={24} />
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-[#FF3B00] transition-colors">
              Zero Monthly Fees Option
            </h3>
            <p className="text-neutral-400 text-xs leading-relaxed font-light">
              Pay once for custom software development with full source code ownership. No forced monthly fees.
            </p>
          </div>

          <div className="bg-[#080808] p-7 rounded-3xl border border-white/10 hover:border-[#FF3B00]/40 transition-all duration-300 space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-[#FF3B00]/10 border border-[#FF3B00]/20 flex items-center justify-center text-[#FF3B00]">
              <Fingerprint size={24} />
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-[#FF3B00] transition-colors">
              Use Existing Hardware
            </h3>
            <p className="text-neutral-400 text-xs leading-relaxed font-light">
              Connect your current eSSL or ZKTeco fingerprint machines directly into our software.
            </p>
          </div>

          <div className="bg-[#080808] p-7 rounded-3xl border border-white/10 hover:border-[#FF3B00]/40 transition-all duration-300 space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-[#FF3B00]/10 border border-[#FF3B00]/20 flex items-center justify-center text-[#FF3B00]">
              <Server size={24} />
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-[#FF3B00] transition-colors">
              Works Offline
            </h3>
            <p className="text-neutral-400 text-xs leading-relaxed font-light">
              If the internet drops, punches save locally on device and update automatically when connected again.
            </p>
          </div>

          <div className="bg-[#080808] p-7 rounded-3xl border border-white/10 hover:border-[#FF3B00]/40 transition-all duration-300 space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-[#FF3B00]/10 border border-[#FF3B00]/20 flex items-center justify-center text-[#FF3B00]">
              <BarChart3 size={24} />
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-[#FF3B00] transition-colors">
              1-Click Payroll Math
            </h3>
            <p className="text-neutral-400 text-xs leading-relaxed font-light">
              Late marks, overtime, and monthly salary deductions calculate automatically in minutes.
            </p>
          </div>

          <div className="bg-[#080808] p-7 rounded-3xl border border-white/10 hover:border-[#FF3B00]/40 transition-all duration-300 space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-[#FF3B00]/10 border border-[#FF3B00]/20 flex items-center justify-center text-[#FF3B00]">
              <Bell size={24} />
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-[#FF3B00] transition-colors">
              Instant WhatsApp Alerts
            </h3>
            <p className="text-neutral-400 text-xs leading-relaxed font-light">
              Send automatic WhatsApp alerts to parents when students arrive, or to managers when staff check in late.
            </p>
          </div>

          <div className="bg-[#080808] p-7 rounded-3xl border border-white/10 hover:border-[#FF3B00]/40 transition-all duration-300 space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-[#FF3B00]/10 border border-[#FF3B00]/20 flex items-center justify-center text-[#FF3B00]">
              <HeartHandshake size={24} />
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-[#FF3B00] transition-colors">
              Local Support in Patna
            </h3>
            <p className="text-neutral-400 text-xs leading-relaxed font-light">
              Our tech team in Patna provides on-site camera setup, team training, and fast support.
            </p>
          </div>
        </div>
      </section>

      {/* Simple Capabilities */}
      <section className="relative z-10 py-20 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#080808] p-8 rounded-3xl border border-white/10 space-y-3">
            <Server className="text-[#FF3B00]" size={28} />
            <h3 className="text-xl font-bold text-white">Offline Storage</h3>
            <p className="text-neutral-400 text-xs leading-relaxed font-light">
              Never worry about internet outages. Attendance logs store locally and auto-sync to cloud when online.
            </p>
          </div>

          <div className="bg-[#080808] p-8 rounded-3xl border border-white/10 space-y-3">
            <Bell className="text-[#FF3B00]" size={28} />
            <h3 className="text-xl font-bold text-white">WhatsApp & SMS Alerts</h3>
            <p className="text-neutral-400 text-xs leading-relaxed font-light">
              Automated entrance messages to parents and instant late check-in alerts to HR managers.
            </p>
          </div>

          <div className="bg-[#080808] p-8 rounded-3xl border border-white/10 space-y-3">
            <Lock className="text-[#FF3B00]" size={28} />
            <h3 className="text-xl font-bold text-white">100% Private & Safe</h3>
            <p className="text-neutral-400 text-xs leading-relaxed font-light">
              We convert face features into encrypted numbers without storing actual face photos.
            </p>
          </div>
        </div>
      </section>

      {/* Specs Comparison Table */}
      <section className="relative z-10 py-20 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-[#FF3B00] font-bold uppercase tracking-[0.2em] text-xs">
            Specs Matrix
          </span>
          <h2 className="text-[22px] sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Compare Attendance Channels
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#080808]">
          <table className="w-full text-left text-xs text-neutral-300">
            <thead className="bg-neutral-900 border-b border-white/10 text-white font-bold uppercase text-[10px] tracking-wider">
              <tr>
                <th className="p-4">Punch Method</th>
                <th className="p-4">Hardware Required</th>
                <th className="p-4">Accuracy</th>
                <th className="p-4">Speed</th>
                <th className="p-4">Best Used For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr className="hover:bg-white/[0.02]">
                <td className="p-4 font-bold text-white">Face Recognition System</td>
                <td className="p-4">Existing IP CCTV Cameras</td>
                <td className="p-4 text-emerald-400 font-bold">99.8%</td>
                <td className="p-4 font-mono">0.5s</td>
                <td className="p-4">Schools, Office Gates, Colleges</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="p-4 font-bold text-white">Dynamic QR Code System</td>
                <td className="p-4">Smartphone / Display Screen</td>
                <td className="p-4 text-emerald-400 font-bold">100%</td>
                <td className="p-4 font-mono">1.0s</td>
                <td className="p-4">Classrooms, Small Offices, Desks</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="p-4 font-bold text-white">Admin Desk Sheet Portal</td>
                <td className="p-4">Web Admin Portal</td>
                <td className="p-4 text-amber-400 font-bold">Admin Overrides</td>
                <td className="p-4 font-mono">Instant Bulk</td>
                <td className="p-4">HR Super-Admins, Log Adjustments</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="p-4 font-bold text-white">eSSL Biometric Software Sync</td>
                <td className="p-4">eSSL / ZKTeco Devices</td>
                <td className="p-4 text-emerald-400 font-bold">99.5%</td>
                <td className="p-4 font-mono">0.8s</td>
                <td className="p-4">Factories, Plant Floors, Mills</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="p-4 font-bold text-white">RFID Card Badges</td>
                <td className="p-4">Proximity Readers / Turnstiles</td>
                <td className="p-4 text-neutral-400 font-bold">High Speed Tap</td>
                <td className="p-4 font-mono text-emerald-400">0.2s</td>
                <td className="p-4">Turnstile Gates, IT Parks</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="p-4 font-bold text-white">Geofenced Mobile GPS App</td>
                <td className="p-4">Android / iOS Smartphone</td>
                <td className="p-4 text-emerald-400 font-bold">5m Radius</td>
                <td className="p-4 font-mono">Instant GPS</td>
                <td className="p-4">Field Sales Teams, Remote Staff</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="p-4 font-bold text-white">WhatsApp Check-In Bot</td>
                <td className="p-4">WhatsApp App</td>
                <td className="p-4 text-emerald-400 font-bold">Mobile UUID</td>
                <td className="p-4 font-mono">2.0s Bot</td>
                <td className="p-4">Remote Staff, Quick Check-in</td>
              </tr>
              <tr className="hover:bg-white/[0.02]">
                <td className="p-4 font-bold text-white">Wi-Fi Auto Check-In</td>
                <td className="p-4">Office Wi-Fi Router</td>
                <td className="p-4 text-emerald-400 font-bold">Wi-Fi Range</td>
                <td className="p-4 font-mono text-emerald-400">Auto</td>
                <td className="p-4">Executive Cabins, Open Offices</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SEO Content Block */}
      <SEOContentBlock
        title="Attendance Management Software Development in Patna, Bihar"
        paragraphs={[
          <>
            <strong className="text-white font-semibold">Webflora Technologies</strong> is Patna&apos;s leading <Link href="/it-company-in-patna/software-development-company-in-patna" className="text-[#FF3B00] hover:underline font-medium">software development company</Link> building custom <strong className="text-white font-semibold">attendance management software</strong>, HRMS platforms, and payroll systems for offices, coaching institutes, and factories across Bihar.
          </>,
          <>
            We build custom solutions featuring <Link href="/it-company-in-patna/ai-automation-company-in-patna" className="text-[#FF3B00] hover:underline font-medium">AI face recognition</Link> on CCTV cameras, dynamic <strong className="text-white font-semibold">QR code attendance systems</strong>, direct integration with <strong className="text-white font-semibold">eSSL biometric software</strong> and <strong className="text-white font-semibold">e time track lite</strong>, and mobile GPS tracking with zero forced monthly subscription fees.
          </>
        ]}
      />

      {/* Simple FAQs */}
      <section className="relative z-10 py-24 px-6 max-w-4xl mx-auto border-t border-white/5">
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#FF3B00] font-bold uppercase tracking-[0.2em] text-xs">Got Questions?</span>
          <h2 className="text-[22px] sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-2">
          <FAQItem
            question="1. Can the AI Face Recognition System work with our existing CCTV cameras?"
            answer="Yes! Our face scanning software connects directly to your existing CCTV camera video streams (Hikvision, Dahua, CP Plus). You don't need to buy extra face scanning machines."
          />
          <FAQItem
            question="2. Can Webflora connect with our current eSSL biometric fingerprint machines?"
            answer="Yes. We provide direct connectors for eSSL biometric software, Real Time biometric software, e time track lite, and ZKTeco machines. All punches sync live into one central dashboard."
          />
          <FAQItem
            question="3. How does the Dynamic QR Code system stop proxy attendance?"
            answer="Our system displays a rotating QR code on screen that refreshes every 15 seconds. Combined with mobile phone binding and GPS location checks, screenshot sharing and fake punches are completely blocked."
          />
          <FAQItem
            question="4. Is there a free demo available?"
            answer="Yes! We provide a free live demo and trial environment so you can test our software before deciding."
          />
          <FAQItem
            question="5. What is the difference between subscription SaaS and custom software?"
            answer="Subscription SaaS charges monthly fees per employee forever. With Webflora's custom software development option, you pay once, get full source code ownership, and pay zero monthly fees."
          />
          <FAQItem
            question="6. What happens if the internet connection goes down?"
            answer="Attendance records store safely on your local device or server and automatically sync to the cloud as soon as internet connectivity returns."
          />
          <FAQItem
            question="7. How does the system calculate monthly payroll?"
            answer="Late marks, overtime, shift allowances, and leave balances calculate automatically and export directly to Tally Prime or Excel in minutes."
          />
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="relative z-10 py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="relative p-[1px] rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-r from-[#FF3B00] via-white/20 to-orange-500 overflow-hidden shadow-2xl">
          <div className="bg-[#080808] rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-14 text-center space-y-5 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#FF3B00]/15 blur-[90px] rounded-full pointer-events-none" />

            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-snug">
              Ready to Simplify Your Attendance Tracking?
            </h2>

            <p className="text-neutral-300 text-xs sm:text-base font-light max-w-xl mx-auto leading-relaxed">
              Get a custom attendance software quote tailored for your team size and budget.
            </p>

            <div className="flex justify-center pt-2">
              <button
                onClick={() => openQuoteModal("All 8 Hybrid Attendance Systems")}
                className="w-full sm:w-auto group flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-9 sm:py-4 bg-[#FF3B00] hover:bg-[#ff4d1a] text-white rounded-2xl sm:rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-[0_0_40px_rgba(255,59,0,0.4)] hover:scale-105 cursor-pointer"
              >
                <span>Get Free Demo & Custom Quote</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[10px] sm:text-xs font-mono text-neutral-400 pt-3 border-t border-white/10 max-w-lg mx-auto">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-400" /> Free Demo</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-400" /> Fast Setup</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-400" /> Zero Monthly Fees Option</span>
            </div>
          </div>
        </div>
      </section>

      {/* POPUP FORM MODAL */}
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
                  FREE DEMO & QUOTE CALLBACK
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
                    Thank you! Our team will call or WhatsApp you shortly with demo details.
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

                  <div>
                    <label className="block text-neutral-300 font-bold mb-1.5 uppercase tracking-wider text-[10px]">
                      Message / Requirement *
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      required
                      placeholder="Tell us your staff count or hardware setup..."
                      className="w-full bg-neutral-900 border border-white/10 text-white rounded-xl p-3 focus:outline-none focus:border-[#FF3B00] transition-colors"
                    ></textarea>
                  </div>

                  {formStatus === "error" && (
                    <div className="p-3 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[11px] rounded-xl flex items-center gap-2">
                      <AlertCircle size={15} /> Failed to submit. Please try again.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full py-3.5 bg-[#FF3B00] hover:bg-[#ff4d1a] text-white rounded-full font-bold text-xs tracking-wide transition-all shadow-lg shadow-[#FF3B00]/30 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {formStatus === "submitting" ? (
                      <>
                        <RefreshCw className="animate-spin" size={14} /> Submitting...
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

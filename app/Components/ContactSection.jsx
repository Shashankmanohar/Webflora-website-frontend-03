// components/ContactSection.jsx
"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import API_BASE_URL from "../config";

const BRAND = "#ff3b00";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-20 px-6 overflow-hidden bg-neutral-950"
    >
      {/* CSS Animations injected for compositor execution (0ms main thread blocking) */}
      <style>{`
        @keyframes pulse-opacity {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes glow-y-1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        @keyframes glow-y-2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(40px); }
        }
        .animate-pulse-opacity { animation: pulse-opacity 8s infinite ease-in-out; }
        .animate-glow-y-1 { animation: glow-y-1 10s infinite ease-in-out; }
        .animate-glow-y-2 { animation: glow-y-2 12s infinite ease-in-out; }
      `}</style>

      {/* Animated gradient background */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full pointer-events-none blur-2xl animate-pulse-opacity"
        style={{
          background: `linear-gradient(to left, ${BRAND}33, transparent)`,
        }}
      />

      {/* Floating glow orbs */}
      <div
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full blur-3xl animate-glow-y-1"
        style={{ backgroundColor: `${BRAND}1a` }}
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl animate-glow-y-2"
        style={{ backgroundColor: `${BRAND}1a` }}
      />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 relative z-10">
        {/* Left */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <motion.h2
            custom={1}
            variants={fadeUp}
            className="font-bold text-3xl md:text-4xl text-white tracking-tight mb-6 leading-tight"
          >
            LET&apos;S CREATE <br />
            <span style={{ color: BRAND }}>EXTRAORDINARY</span>
          </motion.h2>

          <motion.p
            custom={2}
            variants={fadeUp}
            className="text-gray-400 text-base mb-8"
          >
            Ready to start? Tell us about your project, timeline, and
            budget. We typically reply within 24 hours.
          </motion.p>

          <div className="space-y-8">
            {[
              {
                icon: "solar:map-point-linear",
                title: "LOCATION",
                value: "NMCH College, Bajar Samiti, New Kunj Colony, Saketpuri, Patna, Bihar, 800016, India",
              },
              {
                icon: "solar:phone-linear",
                title: "PHONE",
                links: [
                  { label: "+91 85408 14729", url: "tel:+918540814729" },
                  { label: "+91 88630 81255", url: "tel:+918863081255" }
                ],
              },
              {
                icon: "solar:letter-linear",
                title: "EMAIL",
                links: [
                  { label: "hello@webfloratechnologies.com", url: "mailto:hello@webfloratechnologies.com" },
                  { label: "info@webfloratechnologies.com", url: "mailto:info@webfloratechnologies.com" }
                ],
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i + 3}
                variants={fadeUp}
                className="flex items-start gap-4 group"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mt-1 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${BRAND}1a`,
                    color: BRAND,
                  }}
                >
                  <Icon icon={item.icon} width={20} />
                </div>

                <div>
                  <h4 className="text-white font-bold mb-1">
                    {item.title}
                  </h4>
                  {item.links ? (
                    <div className="flex flex-col gap-1">
                      {item.links.map((l, idx) => (
                        <a key={idx} href={l.url} className="text-gray-400 hover:text-white transition-colors">
                          {l.label}
                        </a>
                      ))}
                    </div>
                  ) : item.link ? (
                    <a
                      href={item.link}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-400">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:w-1/2"
        >
          <div
            className="relative p-[1px] rounded-3xl"
            style={{
              background: `linear-gradient(135deg, ${BRAND}66, rgba(255,255,255,0.1), ${BRAND}66)`,
            }}
          >
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const data = {
                  name: formData.get("name"),
                  email: formData.get("email"),
                  service: formData.get("service"),
                  message: formData.get("message"),
                };

                try {
                  const res = await fetch(`${API_BASE_URL}/api/public/inquiry`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                  });
                  if (res.ok) {
                    alert("Message sent successfully!");
                    e.target.reset();
                  } else {
                    alert("Failed to send message.");
                  }
                } catch (err) {
                  alert("Server connection error.");
                }
              }}
              className="bg-neutral-900/90 backdrop-blur-xl p-8 md:p-10 rounded-3xl space-y-6"
              toolname="sendContactMessage"
              tooldescription="Submit a general contact message or project inquiry to Webflora Technologies."
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="name" label="Your Name" placeholder="John Doe" required toolparamdescription="The full name of the contact person." />
                <Input
                  name="email"
                  label="Email"
                  placeholder="john@company.com"
                  type="email"
                  required
                  toolparamdescription="The email address to receive replies."
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-service"
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: BRAND }}
                >
                  Service Interested In
                </label>
                <select
                  id="contact-service"
                  name="service"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none transition-colors appearance-none"
                  style={{ outlineColor: BRAND }}
                  required
                  toolparamdescription="The category of digital service needed (e.g. Web Development, Mobile App, etc.)."
                >
                  <option className="bg-black">Web Development</option>
                  <option className="bg-black">Software Development</option>
                  <option className="bg-black">Mobile App</option>
                  <option className="bg-black">AI/ML Solution</option>
                  <option className="bg-black">UI/UX Design</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: BRAND }}
                >
                  Project Details
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none transition-colors"
                  style={{ outlineColor: BRAND }}
                  required
                  toolparamdescription="A detailed description of the project goals, requirements, and scope."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 text-white font-bold rounded-xl shadow-lg relative overflow-hidden"
                style={{
                  backgroundColor: BRAND,
                  boxShadow: `0 10px 30px ${BRAND}40`,
                }}
              >
                <motion.span
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
                SEND MESSAGE
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Input({ label, name, type = "text", placeholder, required = false, ...props }) {
  const BRAND = "#ff3b00";
  const inputId = `contact-input-${name}`;

  return (
    <div className="space-y-2">
      <label
        htmlFor={inputId}
        className="text-xs font-bold tracking-widest uppercase"
        style={{ color: BRAND }}
      >
        {label}
      </label>
      <input
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        {...props}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none transition-colors"
        style={{ outlineColor: BRAND }}
      />
    </div>
  );
}

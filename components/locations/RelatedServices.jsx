import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { servicesData } from "../../data/services";

// Icon mapping for different services to make them visually distinct and high-quality
const getServiceIcon = (slug) => {
  const icons = {
    "website-development": "solar:code-line-duotone",
    "web-design": "solar:palette-round-line-duotone",
    "app-development": "solar:smartphone-line-duotone",
    "custom-software-development": "solar:cpu-bolt-line-duotone",
    "software-development": "solar:cpu-bolt-line-duotone",
    "ai-chatbot-development": "solar:chatbot-line-duotone",
    "ai-chatbot": "solar:chatbot-line-duotone",
    "erp-development": "solar:database-line-duotone",
    "crm-development": "solar:users-group-rounded-line-duotone",
    "digital-marketing": "solar:graph-up-line-duotone",
    "seo-services": "solar:ranking-line-duotone",
    "automation-solutions": "solar:settings-minimalistic-line-duotone",
    "cloud-solutions": "solar:cloud-storage-line-duotone",
  };
  return icons[slug] || "solar:widget-2-line-duotone";
};

export default function RelatedServices({ citySlug, currentServiceSlug = "" }) {
  const services = Object.values(servicesData).filter(s => s.slug !== currentServiceSlug);

  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden border-t border-white/5">
      {/* Background Soft Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(255,59,0,0.08)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto text-center space-y-4 relative z-10">
        <span className="text-[#FF3B00] font-mono text-xs font-black uppercase tracking-widest block bg-[#FF3B00]/10 px-3 py-1 rounded-full w-fit mx-auto border border-[#FF3B00]/20">
          Service Catalogue
        </span>
        <h3 className="text-2xl md:text-4xl font-extrabold text-white uppercase tracking-tight max-w-2xl mx-auto leading-tight">
          Other Digital <span className="bg-gradient-to-r from-[#FF3B00] via-[#FF6A00] to-[#FF8C00] bg-clip-text text-transparent">Services</span> We Offer
        </h3>
        <p className="text-gray-400 text-sm max-w-lg mx-auto font-light">
          Explore our range of performance-engineered digital solutions built to scale your business.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto pt-8">
          {services.map(service => {
            const href = citySlug 
              ? `/locations/${citySlug}/${service.slug}`
              : `/services/${service.slug}`; // fallback to core service link if no city context
            const iconName = getServiceIcon(service.slug);

            return (
              <Link
                key={service.slug}
                href={href}
                className="relative p-5 rounded-2xl border border-white/[0.06] bg-zinc-950/40 text-left hover:border-[#FF3B00]/40 hover:bg-zinc-900/30 hover:shadow-[0_0_25px_rgba(255,59,0,0.1)] transition-all duration-300 group flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle Hover Gradient Glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#FF3B00]/10 to-transparent blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div>
                  {/* Service Icon */}
                  <div className="mb-4 p-2 rounded-xl bg-zinc-900/80 border border-white/5 text-zinc-400 group-hover:text-white group-hover:bg-[#FF3B00]/10 group-hover:border-[#FF3B00]/30 transition-all duration-300 w-fit">
                    <Icon icon={iconName} width={22} className="transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <h4 className="font-bold text-white text-sm tracking-tight group-hover:text-[#FF3B00] transition-colors duration-300">
                    {service.name}
                  </h4>
                  <p className="text-[11px] text-gray-500 line-clamp-2 mt-1.5 font-light leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                    {service.subtitle}
                  </p>
                </div>

                <div className="flex justify-end mt-5">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-900/60 border border-white/5 text-gray-500 group-hover:text-white group-hover:border-[#FF3B00]/30 group-hover:bg-[#FF3B00]/20 transition-all duration-300">
                    <Icon icon="solar:arrow-right-up-linear" width={12} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}


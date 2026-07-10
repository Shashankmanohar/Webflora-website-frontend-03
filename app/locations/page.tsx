import React from "react";
import { citiesData } from "../../data/cities";
import LocationCard from "../../components/locations/LocationCard";
import SearchCities from "../../components/locations/SearchCities";
import Breadcrumb from "../../components/locations/Breadcrumb";
import CTA from "../../components/locations/CTA";
import ContactForm from "../../components/locations/ContactForm";

export const metadata = {
  title: "Target Locations & Regional Services | Webflora Technologies",
  description: "Explore our target cities across India. Webflora Technologies provides website development, mobile apps, and custom software systems remotely from our Patna HQ.",
  alternates: {
    canonical: "https://webfloratechnologies.com/locations",
  },
};

export default function LocationsDirectoryPage() {
  const cities = Object.values(citiesData);

  const breadcrumbItems = [
    { name: "Locations" }
  ];

  return (
    <div className="bg-black text-white selection:bg-[#FF3B00] selection:text-white min-h-screen">
      <section className="relative pt-24 pb-16 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,59,0,0.05),transparent_50%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <span className="text-[#FF3B00] font-mono text-xs font-black uppercase tracking-[0.25em] block">
            National Service Network
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none text-white">
            Our Target <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-500">Locations</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            We provide custom Next.js websites, mobile application development, and enterprise workflow solutions remotely across India from our legal headquarters in Patna, Bihar.
          </p>
        </div>
      </section>

      {/* Interactive Search Section */}
      <section className="pb-16 px-6 relative z-10">
        <SearchCities />
      </section>

      {/* Directory Grid */}
      <section className="py-16 px-6 bg-zinc-950/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Browse by City</h2>
            <p className="text-xs text-gray-500 uppercase tracking-widest mt-1 font-mono">Select a city to discover localized solutions</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cities.map((city) => (
              <LocationCard key={city.slug} city={city} />
            ))}
          </div>
        </div>
      </section>

      <CTA 
        title="Can't find your city?" 
        subtitle="We serve businesses remotely all over India. Get in touch to schedule a project discovery call with our tech lead."
      />

      <ContactForm />
    </div>
  );
}

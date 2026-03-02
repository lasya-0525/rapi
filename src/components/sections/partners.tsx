"use client";

import React from 'react';
import Image from 'next/image';

/**
 * Partners Component
 * Displays trusted clients and technology partners in an infinite logo carousel.
 * Removed the grey ball backdrop as per user request.
 * Uses high-quality logos for each company.
 */

const partners = [
  { name: "HDFC Bank", domain: "hdfcbank.com" },
  { name: "Bajaj Auto", domain: "bajajauto.com" },
  { name: "Automation Anywhere", domain: "automationanywhere.com" },
  { name: "UiPath", domain: "uipath.com" },
  { name: "Keka", domain: "keka.com" },
  { name: "Toyota", domain: "toyota.com" },
  { name: "Deloitte", domain: "deloitte.com" },
  { name: "Microsoft", domain: "microsoft.com" },
  { name: "AWS", domain: "amazon.com" },
  { name: "Google Cloud", domain: "google.com" },
  { name: "SAP", domain: "sap.com" },
  { name: "Oracle", domain: "oracle.com" },
  { name: "Salesforce", domain: "salesforce.com" },
  { name: "ServiceNow", domain: "servicenow.com" },
  { name: "Blue Prism", domain: "blueprism.com" },
];

// Duplicate for infinite scroll
const duplicatedPartners = [...partners, ...partners];

const Partners = () => {
  return (
    <section
      id="partners"
      className="relative min-h-[40vh] flex flex-col items-center justify-center overflow-hidden py-24 bg-black"
    >
      <div className="container relative z-10 flex flex-col items-center text-center">
        {/* Section Title */}
        <span
          className="text-[12px] font-medium uppercase tracking-[0.3em] text-white/40 mb-16 block"
        >
          They trust us
        </span>

        {/* Infinite Logo Carousel */}
        <div className="relative w-screen overflow-hidden py-10">
          <div className="flex whitespace-nowrap animate-infinite-scroll">
            {duplicatedPartners.map((partner, i) => (
              <div
                key={i}
                className="flex items-center justify-center px-10 md:px-16 lg:px-20 min-w-[150px] md:min-w-[200px]"
              >
                <div className="relative h-12 md:h-16 lg:h-20 w-32 md:w-40 lg:w-48 group">
                  <img
                    src={`https://logo.clearbit.com/${partner.domain}`}
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-contain filter grayscale invert brightness-200 opacity-40 group-hover:opacity-100 group-hover:grayscale-0 group-hover:invert-0 group-hover:brightness-100 transition-all duration-500 ease-in-out cursor-default"
                    onError={(e) => {
                      // Fallback to text if logo fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const nextSibling = target.nextSibling as HTMLElement;
                      if (nextSibling) nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="hidden text-white text-xl md:text-2xl font-light opacity-60 hover:opacity-100 uppercase tracking-tighter">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Lateral Fades for smooth transitions */}
          <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        </div>

        {/* Explorer Link */}
        <div className="mt-20">
          <a
            href="/services"
            className="group relative inline-flex items-center gap-4 px-10 py-4 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-white/30"
          >
            <div className="absolute inset-0 bg-[#054FB8] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
            <span className="relative z-10 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-medium text-white/80 group-hover:text-white transition-colors duration-500">
              Explore RapinnoTech
            </span>
          </a>
        </div>
      </div>

      <style jsx global>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Partners;
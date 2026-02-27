"use client";

import React from 'react';
import Image from 'next/image';

/**
 * Partners Component
 * Displays trusted clients and technology partners.
 */

const brands = [
  "HDFC",
  "Bajaj",
  "Automation Anywhere",
  "UiPath",
  "Keka",
  "Toyota",
  "Deloitte",
  "Microsoft",
  "AWS",
  "Google Cloud",
  "SAP",
  "Oracle",
  "Salesforce",
  "ServiceNow",
  "Blue Prism",
];

const Partners = () => {
  return (
    <section
      id="partners"
      className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden py-16 md:py-24"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-full opacity-60 md:opacity-100">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
            alt="Decorative background"
            className="w-full h-full object-cover object-left opacity-10"
            style={{ mixBlendMode: 'screen' }}
          />
        </div>
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center">
        {/* Section Title */}
        <span
          className="text-section-title text-[#999999] mb-12 tracking-widest"
          style={{ fontSize: '12px', fontWeight: 500, textTransform: 'uppercase' }}
        >
          They trust us
        </span>

        {/* Brand Cloud */}
        <div
          className="brands flex flex-wrap justify-center gap-x-8 gap-y-6 md:gap-x-12 md:gap-y-10 max-w-5xl px-4"
        >
          {brands.map((brand) => (
            <span
              key={brand}
              className="word text-white text-2xl md:text-3xl lg:text-4xl font-light opacity-80 hover:opacity-100 transition-opacity cursor-default"
              style={{ fontFamily: 'var(--font-sans)', letterSpacing: '-0.01em' }}
            >
              {brand}
            </span>
          ))}
        </div>

        {/* Link Button */}
        <div className="mt-20 md:mt-24">
          <a
            href="https://rapinnotech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="button--link inline-block px-8 py-3 rounded-full border border-white/20 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-white hover:text-black transition-all duration-500 ease-in-out"
          >
            Explore RapinnoTech
          </a>
        </div>
      </div>

      <style jsx>{`
        .brands {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
        }
        .word {
          white-space: nowrap;
        }
        @media (max-width: 768px) {
           .word {
             font-size: 1.5rem;
           }
        }
      `}</style>
    </section>
  );
};

export default Partners;
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    category: "Application Engineering",
    href: "/services",
    items: ["Rapid Software Dev", "Product Innovation", "Full Stack Dev", "Quality Engineering", "Innovation Consulting"]
  },
  {
    category: "NextGen Tech (AI)",
    href: "/services",
    items: ["Intelligent Automation", "RPA Solutions", "Blockchain", "Cloud Services", "IoT Infrastructure"]
  },
  {
    category: "Business Engineering",
    href: "/services",
    items: ["Enterprise ERP", "HCM Tech", "Big Data Analytics", "Data Digitization", "BPM Lifecycle"]
  },
  {
    category: "Security Services",
    href: "/services",
    items: ["Risk Management", "VAPT Testing", "IAM (MFA/SSO)", "Managed SOC", "Firewall Security"]
  }
];

const solutions = [
  {
    category: "Industrial Platforms",
    href: "/solutions",
    items: ["Rapinno Digital Platform", "Rapinno Product 360", "Rapinno IA Ecosystem", "Rapinno Managed Services"]
  },
  {
    category: "Business Systems",
    href: "/solutions",
    items: ["Rapinno Marketing 360", "Rapinno Data Digitization", "Rapinno Adaptive Sourcing", "RapiCon APS"]
  }
];

const Header = () => {
  const [hoveredMenu, setHoveredMenu] = useState<null | 'services' | 'solutions'>(null);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-300 liquid-glass">
      <div className="container mx-auto px-5 lg:px-10 h-[70px] flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <a href="/" className="flex items-center group">
            <span className="text-white text-xl md:text-2xl font-normal tracking-tight flex items-baseline select-none">
              RapinnoTech
            </span>
          </a>
        </div>

        {/* Right Section containing Navigation */}
        <div className="flex items-center gap-12 h-full">

          {/* Navigation Anchors */}
          <nav className="hidden lg:flex items-center h-full">
            <ul className="flex items-center gap-10 relative">
              <li className="text-[10px] font-medium tracking-[0.1em] uppercase text-[#999999] hover:text-white transition-colors flex items-center h-[70px]">
                <a href="/">home</a>
              </li>
              {/* Services Navigation */}
              <li
                className="text-[10px] font-medium tracking-[0.1em] uppercase text-[#999999] hover:text-white transition-colors cursor-pointer group flex items-center h-[70px]"
                onMouseEnter={() => setHoveredMenu('services')}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <div className="flex items-center gap-2">
                  <a href="/services" className="flex items-center gap-2">
                    services
                  </a>
                  <span className={`w-1 h-1 rounded-full bg-white transition-opacity duration-300 ${hoveredMenu === 'services' ? 'opacity-100' : 'opacity-0'}`} />
                </div>

                {/* Services Mega Menu */}
                <AnimatePresence>
                  {hoveredMenu === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute right-0 top-full pt-0 pointer-events-auto"
                    >
                      <div className="glass-dropdown p-8 min-w-[65vw] grid grid-cols-4 gap-8 translate-y-[-1px]">
                        {services.map((cat) => (
                          <div key={cat.category} className="flex flex-col space-y-4">
                            <h4 className="text-[11px] font-semibold text-white tracking-[0.2em] border-b border-white/10 pb-2">
                              {cat.category}
                            </h4>
                            <ul className="flex flex-col space-y-3">
                              {cat.items.map((item) => (
                                <li key={item} className="text-[10px] lowercase text-[#777] hover:text-white transition-colors">
                                  <a href={cat.href}>{item}</a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* Solutions Navigation */}
              <li
                className="text-[10px] font-medium tracking-[0.1em] uppercase text-[#999999] hover:text-white transition-colors cursor-pointer group flex items-center h-[70px]"
                onMouseEnter={() => setHoveredMenu('solutions')}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <div className="flex items-center gap-2">
                  <a href="/solutions" className="flex items-center gap-2">
                    solutions
                  </a>
                  <span className={`w-1 h-1 rounded-full bg-white transition-opacity duration-300 ${hoveredMenu === 'solutions' ? 'opacity-100' : 'opacity-0'}`} />
                </div>

                {/* Solutions Mega Menu */}
                <AnimatePresence>
                  {hoveredMenu === 'solutions' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute right-0 top-full pt-0 pointer-events-auto"
                    >
                      <div className="glass-dropdown p-8 min-w-[50vw] grid grid-cols-2 gap-12 translate-y-[-1px]">
                        {solutions.map((cat) => (
                          <div key={cat.category} className="flex flex-col space-y-5">
                            <h4 className="text-[11px] font-bold text-white tracking-[0.2em] border-b border-white/10 pb-3 uppercase">
                              {cat.category}
                            </h4>
                            <ul className="flex flex-col space-y-4">
                              {cat.items.map((item) => (
                                <li key={item} className="text-[11px] font-medium text-[#888] hover:text-white transition-colors">
                                  <a href={cat.href}>{item}</a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              <li className="text-[10px] font-medium tracking-[0.1em] uppercase text-[#999999] hover:text-white transition-colors flex items-center h-[70px]">
                <a href="/about">about</a>
              </li>
              <li className="text-[10px] font-medium tracking-[0.1em] uppercase text-[#999999] hover:text-white transition-colors flex items-center h-[70px]">
                <a href="/resources">resources</a>
              </li>
              <li className="text-[10px] font-medium tracking-[0.1em] uppercase text-[#999999] hover:text-white transition-colors flex items-center h-[70px]">
                <a href="/career">careers</a>
              </li>
              <li className="text-[10px] font-medium tracking-[0.1em] uppercase text-[#999999] hover:text-white transition-colors flex items-center h-[70px]">
                <a href="/contact">contact</a>
              </li>
            </ul>
          </nav>

          {/* Burger Menu for Mobile/Tablet */}
          <div className="lg:hidden">
            <button className="flex flex-col gap-[3px] items-end px-2 py-4">
              <span className="w-6 h-[1.5px] bg-white"></span>
              <span className="w-4 h-[1.5px] bg-white"></span>
              <span className="w-5 h-[1.5px] bg-white"></span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`

        .glass-dropdown {
          background: rgba(10, 10, 10, 0.7);
          backdrop-filter: blur(40px) saturate(1.8);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
          border-radius: 2px;
        }
      `}</style>
    </header>
  );
};

export default Header;
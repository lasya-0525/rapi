"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    category: "Application Engineering",
    items: [
      { label: "Rapid Software Dev", slug: "rapid-software-development" },
      { label: "Product Innovation", slug: "innovative-product-development" },
      { label: "Full Stack Dev", slug: "full-stack-development" },
      { label: "Quality Engineering", slug: "quality-engineering" },
      { label: "Innovation Consulting", slug: "tech-innovation-consulting" }
    ]
  },
  {
    category: "NextGen Tech (AI)",
    items: [
      { label: "Intelligent Automation", slug: "intelligent-automation-ia" },
      { label: "RPA Solutions", slug: "robotic-process-automation-rpa" },
      { label: "Blockchain", slug: "blockchain" },
      { label: "Cloud Services", slug: "cloud-services" },
      { label: "IoT Infrastructure", slug: "internet-of-things" }
    ]
  },
  {
    category: "Business Engineering",
    items: [
      { label: "Enterprise ERP", slug: "enterprise-resource-planning-erp" },
      { label: "HCM Tech", slug: "human-capital-management-hcm" },
      { label: "Big Data Analytics", slug: "big-data-analytics" },
      { label: "Data Digitization", slug: "data-digitization" },
      { label: "BPM Lifecycle", slug: "business-process-management" }
    ]
  },
  {
    category: "Security Services",
    items: [
      { label: "Risk Management", slug: "security-management" },
      { label: "VAPT Testing", slug: "vapt-vulnerability-penetration-testing" },
      { label: "IAM (MFA/SSO)", slug: "identity-management" },
      { label: "Managed SOC", slug: "managed-soc-security-operations-center" },
      { label: "Firewall Security", slug: "network-firewall" }
    ]
  }
];

const solutions = [
  {
    category: "Digital Platforms (RDP)",
    items: [
      { label: "RDP Ecommerce", slug: "rdp-ecommerce" },
      { label: "RDP Service Booking", slug: "rdp-service-booking" },
      { label: "RDP Social Platform", slug: "rdp-social-platform" },
      { label: "RDP Fleet Management", slug: "rdp-fleet-management" },
      { label: "RDP DMS", slug: "rdp-dms-document-management-system" },
      { label: "RDP Customer Service", slug: "rdp-customer-service" }
    ]
  },
  {
    category: "Intelligent IA & Biz",
    items: [
      { label: "IA Object Detection", slug: "object-detection" },
      { label: "IA Image Analytics", slug: "image-classification" },
      { label: "IA Text & Sentiment", slug: "text-sentiment-analysis" },
      { label: "IA Chatbot Solutions", slug: "chatbot-solutions" },
      { label: "Marketing 360 CRM", slug: "crm-tool" },
      { label: "Sales as a Service", slug: "sales-as-a-service" }
    ]
  }
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Careers", href: "/career" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [hoveredMenu, setHoveredMenu] = useState<null | 'services' | 'solutions'>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<null | 'services' | 'solutions'>(null);

  const toggleMobile = () => {
    setMobileOpen((prev) => !prev);
    setMobileExpanded(null);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-300 liquid-glass">
        <div className="container mx-auto px-5 lg:px-10 h-[70px] flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="/" className="flex items-center group" onClick={closeMobile}>
              <img
                src="/images/logo.svg"
                alt="RapinnoTech"
                className="h-8 md:h-10 w-auto"
              />
            </a>
          </div>

          {/* Right Section containing Navigation */}
          <div className="flex items-center gap-12 h-full">

            {/* Desktop Navigation Anchors */}
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
                    <span className={`w-1 h-1 rounded-full bg-[#054FB8] transition-opacity duration-300 ${hoveredMenu === 'services' ? 'opacity-100' : 'opacity-0'}`} />
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
                              <h4 className="text-[11px] font-semibold text-white tracking-[0.2em] border-b border-[#054FB8]/30 pb-2">
                                {cat.category}
                              </h4>
                              <ul className="flex flex-col space-y-3">
                                {cat.items.map((item) => (
                                  <li key={item.slug} className="text-[10px] lowercase text-[#777] hover:text-white transition-colors">
                                    <a href={`/services/${item.slug}`} onClick={closeMobile}>{item.label}</a>
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
                    <span className={`w-1 h-1 rounded-full bg-[#054FB8] transition-opacity duration-300 ${hoveredMenu === 'solutions' ? 'opacity-100' : 'opacity-0'}`} />
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
                                  <li key={item.slug} className="text-[11px] font-medium text-[#888] hover:text-white transition-colors">
                                    <a href={`/solutions/${item.slug}`} onClick={closeMobile}>{item.label}</a>
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
            <button
              id="mobile-menu-toggle"
              className="lg:hidden flex flex-col gap-[5px] items-end px-2 py-4 cursor-pointer"
              aria-label="Toggle mobile menu"
              onClick={toggleMobile}
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6, width: '24px' } : { rotate: 0, y: 0, width: '24px' }}
                transition={{ duration: 0.25 }}
                className="block h-[1.5px] bg-white origin-center"
                style={{ width: 24 }}
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className="block h-[1.5px] bg-white"
                style={{ width: 16 }}
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6, width: '24px' } : { rotate: 0, y: 0, width: '20px' }}
                transition={{ duration: 0.25 }}
                className="block h-[1.5px] bg-white origin-center"
                style={{ width: 20 }}
              />
            </button>
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[98] bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={closeMobile}
            />

            {/* Drawer Panel */}
            <motion.nav
              key="mobile-nav"
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-[80vw] max-w-sm z-[99] flex flex-col overflow-y-auto lg:hidden"
              style={{
                background: 'rgba(8, 8, 8, 0.97)',
                backdropFilter: 'blur(40px) saturate(1.8)',
                borderLeft: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-8 h-[70px] border-b border-white/5">
                <span className="text-white text-lg font-normal tracking-tight">Menu</span>
                <button
                  onClick={closeMobile}
                  aria-label="Close menu"
                  className="text-white/50 hover:text-white transition-colors p-2"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Nav Items */}
              <ul className="flex flex-col px-6 py-8 gap-1">
                {/* Static Links */}
                {[
                  { label: "Home", href: "/" },
                  { label: "About", href: "/about" },
                  { label: "Resources", href: "/resources" },
                  { label: "Careers", href: "/career" },
                  { label: "Contact", href: "/contact" },
                ].map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <a
                      href={link.href}
                      onClick={closeMobile}
                      className="flex items-center py-4 text-[11px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors border-b border-white/5"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}

                {/* Services Accordion */}
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25, duration: 0.3 }}
                  className="border-b border-white/5"
                >
                  <button
                    className="w-full flex items-center justify-between py-4 text-[11px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors"
                    onClick={() => setMobileExpanded(mobileExpanded === 'services' ? null : 'services')}
                  >
                    Services
                    <motion.span
                      animate={{ rotate: mobileExpanded === 'services' ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-white/30 text-xl leading-none"
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === 'services' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-4 space-y-5">
                          {services.map((cat) => (
                            <div key={cat.category}>
                              <p className="text-[9px] uppercase tracking-[0.25em] text-white/30 mb-2">{cat.category}</p>
                              <ul className="space-y-2">
                                {cat.items.map((item) => (
                                  <li key={item.slug}>
                                    <a
                                      href={`/services/${item.slug}`}
                                      onClick={closeMobile}
                                      className="text-[11px] text-white/50 hover:text-white transition-colors"
                                    >
                                      {item.label}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>

                {/* Solutions Accordion */}
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="border-b border-white/5"
                >
                  <button
                    className="w-full flex items-center justify-between py-4 text-[11px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors"
                    onClick={() => setMobileExpanded(mobileExpanded === 'solutions' ? null : 'solutions')}
                  >
                    Solutions
                    <motion.span
                      animate={{ rotate: mobileExpanded === 'solutions' ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-white/30 text-xl leading-none"
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === 'solutions' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-4 space-y-5">
                          {solutions.map((cat) => (
                            <div key={cat.category}>
                              <p className="text-[9px] uppercase tracking-[0.25em] text-white/30 mb-2">{cat.category}</p>
                              <ul className="space-y-2">
                                {cat.items.map((item) => (
                                  <li key={item.slug}>
                                    <a
                                      href={`/solutions/${item.slug}`}
                                      onClick={closeMobile}
                                      className="text-[11px] text-white/50 hover:text-white transition-colors"
                                    >
                                      {item.label}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              </ul>

              {/* Footer inside drawer */}
              <div className="mt-auto px-8 py-8 border-t border-white/5">
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/20">© 2026 RapinnoTech Solutions</p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
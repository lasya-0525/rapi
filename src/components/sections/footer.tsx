"use client";

import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";

/**
 * Footer component for RapinnoTech.
 * Social icons, Services & Solutions navigation, office addresses, and tagline.
 */

const offices = [
  {
    city: "India (HQ)",
    address: [
      "RapinnoTech Solutions Pvt Ltd",
      "Hyderabad,",
      "Telangana,",
      "India",
    ],
    email: "info.india@rapinnotech.com",
    phone: "+91 40 44720040",
  },
  {
    city: "USA",
    address: [
      "RapinnoTech Inc.",
      "California,",
      "United States",
    ],
    email: "info.usa@rapinnotech.com",
    phone: "+1 949 516 8420",
  },
  {
    city: "Germany",
    address: [
      "RapinnoTech GmbH",
      "Germany",
    ],
    email: "info.europe@rapinnotech.com",
    phone: "+49 17693133848",
  },
];

const serviceLinks = [
  { label: "Rapid Software Dev", slug: "rapid-software-development" },
  { label: "Product Innovation", slug: "innovative-product-development" },
  { label: "Intelligent Automation", slug: "intelligent-automation-ia" },
  { label: "RPA Solutions", slug: "robotic-process-automation-rpa" },
  { label: "Cloud Services", slug: "cloud-services" },
  { label: "Enterprise ERP", slug: "enterprise-resource-planning-erp" },
  { label: "Big Data Analytics", slug: "big-data-analytics" },
  { label: "VAPT Testing", slug: "vapt-vulnerability-penetration-testing" },
];

const solutionLinks = [
  { label: "RDP Ecommerce", slug: "rdp-ecommerce" },
  { label: "RDP Service Booking", slug: "rdp-service-booking" },
  { label: "RDP Social Platform", slug: "rdp-social-platform" },
  { label: "RDP Fleet Management", slug: "rdp-fleet-management" },
  { label: "Chatbot Solutions", slug: "chatbot-solutions" },
  { label: "Sales as a Service", slug: "sales-as-a-service" },
  { label: "CRM Tool", slug: "crm-tool" },
  { label: "Object Detection", slug: "object-detection" },
];

/* ─── SVG Social Icons ──────────────────────────────────── */

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/rapinnotech", icon: <LinkedInIcon /> },
  { name: "Twitter", href: "https://twitter.com/rapinnotech", icon: <TwitterIcon /> },
  { name: "Facebook", href: "https://www.facebook.com/rapinnotech", icon: <FacebookIcon /> },
  { name: "Instagram", href: "https://www.instagram.com/rapinnotech", icon: <InstagramIcon /> },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative w-full pt-20 pb-10 bg-[#0f172a]">

      <div className="container relative z-10 mx-auto px-5 lg:px-10">

        {/* Top Row: Logo + Tagline */}
        <div className="mb-16">
          <a href="/">
            <img
              src="/images/logo.svg"
              alt="RapinnoTech"
              className="h-10 w-auto mb-5"
            />
          </a>
          <p className="text-[13px] md:text-[15px] font-light text-white/50 max-w-md leading-relaxed tracking-wide">
            Rapid Technology Innovations — Engineering the future with speed, scale, and precision.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-12 gap-y-14 gap-x-8">

          {/* Column 1: Contact + Social */}
          <div className="col-span-12 lg:col-span-3">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30 mb-6">
              Contact
            </h3>
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-4 h-4 text-white/50" />
              <a
                href="mailto:info@rapinnotech.com"
                className="text-[14px] font-light text-white/80 hover:text-white transition-colors"
              >
                info@rapinnotech.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="col-span-6 md:col-span-4 lg:col-span-2">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30 mb-6">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.slug}>
                  <Link
                    href={`/services/${link.slug}`}
                    className="text-[12px] text-white/50 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="col-span-6 md:col-span-4 lg:col-span-2">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30 mb-6">
              Solutions
            </h3>
            <ul className="flex flex-col gap-3">
              {solutionLinks.map((link) => (
                <li key={link.slug}>
                  <Link
                    href={`/solutions/${link.slug}`}
                    className="text-[12px] text-white/50 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div className="col-span-6 md:col-span-4 lg:col-span-2">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30 mb-6">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: "About", href: "/about" },
                { label: "Resources", href: "/resources" },
                { label: "Careers", href: "/career" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy-policy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[12px] text-white/50 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Offices */}
          <div className="col-span-12 lg:col-span-3">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30 mb-6">
              Offices
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-8">
              {offices.map((office) => (
                <div key={office.city} className="flex flex-col">
                  <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/60 mb-2">
                    {office.city}
                  </span>
                  <div className="text-[12px] leading-[1.7] text-white/40">
                    {office.address.map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                    <p className="mt-1">{office.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-[12vh] pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-[0.15em] text-white/30">
            © 2026 RapinnoTech Solutions. All rights reserved.
          </p>
          <p className="text-[10px] tracking-[0.1em] text-white/20 italic">
            Rapid Technology Innovations Delivered
          </p>
        </div>
      </div>
    </footer>
  );
}
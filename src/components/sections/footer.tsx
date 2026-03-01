"use client";

import React from "react";
import { Mail } from "lucide-react";

/**
 * Footer component for RapinnoTech.
 * Contact and office addresses for USA, Germany, and India.
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

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/rapinnotech" },
  { name: "Twitter", href: "https://twitter.com/rapinnotech" },
  { name: "Facebook", href: "https://www.facebook.com/rapinnotech" },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative w-full pt-20 pb-10">
      {/* Background radial highlight */}
      <div
        className="absolute right-0 top-0 w-full h-full pointer-events-none z-0 opacity-10 mix-blend-screen"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="container relative z-10 mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-12 gap-y-16">

          {/* Section Title */}
          <div className="col-span-12">
            <h2 className="text-[12px] font-medium uppercase tracking-[0.1em] text-foreground mb-12">
              Contact
            </h2>
          </div>

          {/* Email and Social Section */}
          <div className="col-span-12 lg:col-span-6">
            <div className="flex items-center gap-4 mb-8">
              <Mail className="w-5 h-5 text-foreground opacity-80" />
              <a
                href="mailto:info.india@rapinnotech.com"
                className="text-2xl lg:text-4xl font-light hover:opacity-60 transition-opacity duration-300"
              >
                info@rapinnotech.com
              </a>
            </div>

            <div className="flex flex-wrap gap-6 mt-12">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-medium uppercase tracking-[0.2em] border-b border-transparent hover:border-foreground transition-all duration-300 pb-1"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Office Grid */}
          <div className="col-span-12 lg:col-span-6 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            {offices.map((office) => (
              <div key={office.city} className="flex flex-col">
                <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  {office.city}
                </h3>
                <div className="text-[14px] leading-[1.8] font-light text-foreground opacity-80">
                  {office.address.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                  <p className="mt-2 text-[12px] text-muted-foreground">{office.email}</p>
                  <p className="text-[12px] text-muted-foreground">{office.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Branding Elements */}
        <div className="mt-[20vh] pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="flex items-baseline gap-2">
            <span className="text-white text-xl font-normal tracking-tight flex items-baseline select-none">
              RapinnoTech
            </span>
          </div>

          <div className="flex flex-col md:items-end gap-2">
            <p className="text-[10px] uppercase tracking-[0.1em] opacity-40">
              © 2026 RapinnoTech Solutions. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[10px] uppercase tracking-[0.1em] opacity-40 hover:opacity-100 transition-opacity">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
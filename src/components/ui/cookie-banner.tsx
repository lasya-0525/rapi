"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

/**
 * CookieBanner component for Next.js 15
 * 
 * Design Details:
 * - Position: Fixed bottom-right
 * - Colors: Card is #1a1a1a (secondary/muted background)
 * - Typography: Inter-like sans-serif (Inter from globals.css)
 * - Interactive: Accept CTA and close button
 * - Effects: Subtle grain texture inherited from body, 4px rounded corners
 */
export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookie-consent");
    if (!hasAccepted) {
      // Small delay for entrance animation feel
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 right-0 z-[100] p-5 md:p-10 pointer-events-none"
      role="alert"
      aria-live="polite"
    >
      <div 
        className="pointer-events-auto flex items-center gap-6 bg-[#1a1a1a] p-6 lg:px-8 lg:py-5 rounded-[4px] shadow-2xl transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-bottom-4"
        style={{
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.05)"
        }}
      >
        <div className="max-w-[280px]">
          <p className="text-[12px] leading-[1.5] text-[#999999] font-normal tracking-tight">
            This website uses cookies to ensure you get the best experience. {" "}
            <a 
              href="https://www.termsfeed.com/live/cb97eed2-d236-4c42-bb7e-0938835e60e3" 
              className="text-white underline underline-offset-2 hover:text-white/80 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy policy
            </a>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handleAccept}
            className="h-10 px-8 bg-[#333333] hover:bg-[#444444] text-white text-[12px] font-medium rounded-full transition-all duration-300 ease-out"
          >
            Accept
          </button>
          
          <button
            onClick={handleClose}
            className="group flex items-center justify-center w-6 h-6 text-[#999999] hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
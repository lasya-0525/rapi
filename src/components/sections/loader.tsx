"use client";

import React, { useEffect, useState } from "react";

/**
 * Modern tech-inspired loader for RapinnoTech.
 * Uses brand light background #e5e7eb with glassmorphic card.
 * Brand colors: Blue #054FB8 and Red #F32913.
 */
export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 2200);
    const timer2 = setTimeout(() => setIsVisible(false), 3200);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100000] flex items-center justify-center transition-opacity duration-1000 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: "linear-gradient(135deg, #e5e7eb 0%, #f1f5f9 40%, #dde4f0 100%)" }}
      id="loader"
    >
      {/* Animated circuit grid background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#054FB8" strokeWidth="0.5" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Soft ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#054FB8]/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-[#F32913]/6 blur-[100px] pointer-events-none" />

      {/* Glassmorphic card */}
      <div
        className="relative z-10 flex flex-col items-center gap-8 px-16 py-14 rounded-3xl"
        style={{
          background: "rgba(255, 255, 255, 0.60)",
          backdropFilter: "blur(48px) saturate(200%)",
          WebkitBackdropFilter: "blur(48px) saturate(200%)",
          border: "1px solid rgba(255, 255, 255, 0.92)",
          boxShadow: "0 16px 64px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.95)",
        }}
      >
        {/* Animated spinner */}
        <div className="relative w-20 h-20">
          {/* Outer ring */}
          <svg
            className="absolute inset-0 w-full h-full animate-spin"
            style={{ animationDuration: "3s" }}
            viewBox="0 0 80 80"
          >
            <circle cx="40" cy="40" r="35" fill="none" stroke="#054FB8" strokeWidth="1.5" strokeDasharray="40 20" opacity="0.7" />
          </svg>
          {/* Middle ring - counter rotate */}
          <svg
            className="absolute inset-0 w-full h-full animate-spin"
            style={{ animationDuration: "2s", animationDirection: "reverse" }}
            viewBox="0 0 80 80"
          >
            <circle cx="40" cy="40" r="25" fill="none" stroke="#F32913" strokeWidth="1" strokeDasharray="15 10" opacity="0.6" />
          </svg>
          {/* Inner pulsing core */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#054FB8] to-[#F32913] animate-pulse shadow-[0_0_24px_rgba(5,79,184,0.4)]" />
          </div>
          {/* Corner orbit dots */}
          {[0, 90, 180, 270].map((deg) => (
            <div
              key={deg}
              className="absolute w-1.5 h-1.5 rounded-full bg-[#054FB8]"
              style={{
                top: `${50 + 45 * Math.sin((deg * Math.PI) / 180)}%`,
                left: `${50 + 45 * Math.cos((deg * Math.PI) / 180)}%`,
                transform: "translate(-50%, -50%)",
                animation: `pulse 1.5s ease-in-out ${deg / 360}s infinite`,
                opacity: 0.7,
              }}
            />
          ))}
        </div>

        {/* Branding */}
        <div className="flex flex-col items-center gap-4">
          <img
            src="/images/logo.svg"
            alt="RapinnoTech"
            className="h-8 w-auto"
          />
          {/* Brand tagline */}
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#64748b] font-semibold">
            Rapid Technology Innovations
          </p>
          {/* Loading bar */}
          <div className="w-36 h-[2px] bg-[#0f172a]/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#054FB8] to-[#F32913] rounded-full animate-loading-bar" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes loading-bar {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
        .animate-loading-bar {
          animation: loading-bar 2s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}

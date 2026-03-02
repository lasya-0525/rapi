"use client";

import React, { useEffect, useState } from "react";

/**
 * Modern tech-inspired loader for RapinnoTech.
 * Features a circuit-board pattern animation with a pulsing core.
 * Uses brand colors: Blue #054FB8 and Red #F32913.
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
      className={`fixed inset-0 z-[100000] flex items-center justify-center bg-black transition-opacity duration-1000 ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      id="loader"
    >
      {/* Animated circuit grid background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#054FB8" strokeWidth="0.5" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Core loader */}
      <div className="relative flex flex-col items-center gap-8">
        {/* Animated hex/circuit spinner */}
        <div className="relative w-20 h-20">
          {/* Outer ring */}
          <svg className="absolute inset-0 w-full h-full animate-spin" style={{ animationDuration: "3s" }} viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="35" fill="none" stroke="#054FB8" strokeWidth="1.5" strokeDasharray="40 20" opacity="0.6" />
          </svg>
          {/* Middle ring - counter rotate */}
          <svg className="absolute inset-0 w-full h-full animate-spin" style={{ animationDuration: "2s", animationDirection: "reverse" }} viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="25" fill="none" stroke="#F32913" strokeWidth="1" strokeDasharray="15 10" opacity="0.5" />
          </svg>
          {/* Inner pulsing core */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#054FB8] to-[#F32913] animate-pulse shadow-[0_0_20px_rgba(5,79,184,0.5)]" />
          </div>
          {/* Corner dots */}
          {[0, 90, 180, 270].map((deg) => (
            <div
              key={deg}
              className="absolute w-1.5 h-1.5 rounded-full bg-[#054FB8]/60"
              style={{
                top: `${50 + 45 * Math.sin((deg * Math.PI) / 180)}%`,
                left: `${50 + 45 * Math.cos((deg * Math.PI) / 180)}%`,
                transform: "translate(-50%, -50%)",
                animation: `pulse 1.5s ease-in-out ${deg / 360}s infinite`,
              }}
            />
          ))}
        </div>

        {/* Branding */}
        <div className="flex flex-col items-center">
          <span className="text-xl md:text-2xl font-normal tracking-tight text-white">
            Rapinno<span className="text-[#054FB8]">Tech</span>
          </span>
          {/* Loading bar */}
          <div className="mt-4 w-32 h-[2px] bg-white/10 rounded-full overflow-hidden">
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
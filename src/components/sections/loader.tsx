"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Loader component for RapinnoTech.
 * Features:
 * - Full-screen overlay with 'RapinnoTech' transition.
 * - Centered branding reveal.
 * - Premium tech background image transition phase.
 */
export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);
  const [step, setStep] = useState(0); // 0: greeting, 1: branding + bg, 2: fade out

  useEffect(() => {
    // Stage 1: Display greeting
    const timer1 = setTimeout(() => {
      setStep(1);
    }, 2000);

    // Stage 2: Fade out
    const timer2 = setTimeout(() => {
      setStep(2);
    }, 3500);

    // Stage 3: Remove loader from DOM
    const timer3 = setTimeout(() => {
      setIsVisible(false);
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100000] flex items-center justify-center transition-all duration-1000 ease-in-out bg-black ${step === 2 ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      id="loader"
    >
      {/* Background layer for Step 1 */}
      {step === 1 && <div className="absolute inset-0 aurora-bg opacity-30 pointer-events-none" />}

      {/* Step 0: Animated Greeting */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${step === 0 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
          }`}
      >
        <div className="flex flex-col items-center text-white text-[8.5vw] md:text-[6vw] font-normal leading-[0.9] tracking-[-0.02em]">
          <span className="flex items-baseline">
            Rap<i className="font-serif italic mr-1">i</i>nno
          </span>
          <span className="flex items-baseline">
            Tech
          </span>
        </div>
      </div>

      {/* Step 1: Branding and High-end Background Reveal */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${step === 1 ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
      >
        {/* The premium tech background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="Loading background"
            fill
            priority
            className="object-cover opacity-30"
          />
        </div>

        {/* Centered Branding (Logo replaced with clean typography) */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="text-white text-3xl md:text-4xl font-normal tracking-tight flex items-baseline">
            Rap<i className="font-serif italic ml-1">i</i>nnoTech
          </div>
          <span className="block mt-4 text-center text-[10px] uppercase tracking-[0.3em] font-medium text-white/60">
            Rapid Technology Innovations
          </span>
        </div>
      </div>

      <style jsx global>{`
        #loader .font-serif {
          font-family: serif;
          font-style: italic;
        }
      `}</style>
    </div>
  );
}
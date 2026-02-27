"use client";

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

/**
 * Hero component for RapinnoTech.
 * Features:
 * - WebGL-like interactive background
 * - Cycling typography sentences.
 * - Rotating "Scroll Down" logo.
 */
export default function HeroSection() {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const sentences = [
    { first: "Intell<i>i</i>gent", second: "Automat<i>i</i>on" },
    { first: "Rap<i>i</i>d", second: "Innovat<i>i</i>ons" },
    { first: "Enterpr<i>i</i>se", second: "Development" },
    { first: "D<i>i</i>g<i>i</i>tal", second: "Transformat<i>i</i>on" },
  ];

  // Cycling typography logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [sentences.length]);

  return (
    <section className="relative w-screen h-screen overflow-hidden flex items-center justify-center">
      {/* Background Lens Artwork Container */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* Grainy Texture Overlay */}
        <div className="absolute inset-0 z-50 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] contrast-[150%] brightness-[1000%]" />

        {/* The Lens Artwork / Gradient Sphere */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Ambient Glows */}
          <div
            className="absolute w-[120vw] h-[120vh] bg-radial from-[#5c5c42]/30 via-transparent to-transparent opacity-70 blur-[120px]"
            style={{
              background: 'radial-gradient(circle at center, rgba(92, 92, 66, 0.4) 0%, rgba(26, 26, 26, 0.2) 50%, rgba(0, 0, 0, 0) 100%)'
            }}
          />

          {/* Main Lens Surface */}
          <div className="relative w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] rounded-full overflow-hidden border border-white/5 shadow-[0_0_100px_rgba(92,92,66,0.2)]">
            <div
              className="absolute inset-0 bg-cover bg-center mix-blend-screen opacity-80"
              style={{
                backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
                filter: 'contrast(120%)'
              }}
            />
            {/* Inner dynamic gradient sphere effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#5c5c42]/20 via-[#1a1a1a]/40 to-black rounded-full" />
          </div>
        </div>
      </div>

      {/* Hero Content Container */}
      <div className="container relative z-10 w-full px-5 lg:px-10 h-full flex flex-col justify-center items-center">
        {/* Cycling Typography */}
        <div className="w-full text-center">
          <ul className="relative h-[20vh] flex items-center justify-center">
            {sentences.map((sentence, index) => (
              <li
                key={index}
                className={`absolute transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col items-center justify-center
                  ${index === currentSentenceIndex
                    ? 'opacity-100 translate-y-0 filter blur-0 scale-100'
                    : 'opacity-0 translate-y-[20px] filter blur-[10px] scale-95 pointer-events-none'
                  }`}
              >
                <div className="text-hero text-white flex flex-col md:flex-row gap-x-6 items-center">
                  <span
                    className="whitespace-nowrap inline-block"
                    dangerouslySetInnerHTML={{ __html: sentence.first }}
                  />
                  <span
                    className="whitespace-nowrap inline-block"
                    dangerouslySetInnerHTML={{ __html: sentence.second }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Rotating Scroll Logo - Bottom Left */}
        <div className="absolute bottom-10 left-5 lg:left-10 z-20">
          <div className="relative w-[110px] h-[110px] flex items-center justify-center">
            <div className="animate-spin-slow">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/acc78eba-97f0-496d-a5a0-c62b14e76e8d-monopo-vn/assets/svgs/7992268be1d357733b95bc339eefdb8e-2.svg"
                alt="Scroll Down"
                className="w-full h-full opacity-80 invert"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1 h-1 bg-white rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles local to this section */}
      <style jsx global>{`
        .text-hero {
          font-size: 8.5vw;
          line-height: 0.9;
          font-weight: 400;
          letter-spacing: -0.04em;
          text-transform: none;
        }

        @media (max-width: 768px) {
          .text-hero {
            font-size: 14vw;
            line-height: 1.1;
          }
        }

        .text-hero i {
          font-style: italic;
          font-family: serif;
          margin-right: -0.05em;
        }

        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
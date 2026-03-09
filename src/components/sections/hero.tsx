"use client";

import React, { useEffect, useState, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowDown } from 'lucide-react';

/**
 * Hero component for RapinnoTech.
 * Features:
 * - Cinematic animated background with gradient mesh & floating particles
 * - Cycling typography sentences with carousel navigation
 * - Prev/Next arrows & dot indicators for manual slide control
 * - Rotating "Scroll Down" indicator
 */

const slides = [
  {
    first: "Intelligent",
    second: "Automation",
    subtitle: "Streamline operations with AI-driven process automation",
    accent: "from-violet-500/30 via-indigo-500/20 to-blue-500/10",
    glow: "bg-violet-500/20",
  },
  {
    first: "Rapid",
    second: "Innovations",
    subtitle: "Accelerate time-to-market with cutting-edge technology",
    accent: "from-amber-500/30 via-orange-500/20 to-yellow-500/10",
    glow: "bg-amber-500/20",
  },
  {
    first: "Enterprise",
    second: "Development",
    subtitle: "Scalable solutions engineered for global impact",
    accent: "from-emerald-500/30 via-teal-500/20 to-cyan-500/10",
    glow: "bg-emerald-500/20",
  },
  {
    first: "Digital",
    second: "Transformation",
    subtitle: "Reimagine your business for the digital era",
    accent: "from-rose-500/30 via-pink-500/20 to-fuchsia-500/10",
    glow: "bg-rose-500/20",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);

  const goNext = useCallback(() => {
    goToSlide((currentIndex + 1) % slides.length);
  }, [currentIndex, goToSlide]);

  const goPrev = useCallback(() => {
    goToSlide((currentIndex - 1 + slides.length) % slides.length);
  }, [currentIndex, goToSlide]);

  // Auto-advance
  useEffect(() => {
    timerRef.current = setInterval(goNext, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [goNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev]);

  // Touch/swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 60) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  const currentSlide = slides[currentIndex];

  return (
    <section
      className="relative w-screen h-screen overflow-hidden flex items-center justify-center -mt-[120px] lg:-mt-[100px]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Hero carousel"
    >
      {/* ============ BACKGROUND LAYERS ============ */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

        {/* Animated gradient mesh — slides with content */}
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${i === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vmax] h-[140vmax] rounded-full bg-gradient-radial ${slide.accent} blur-[100px] animate-hero-pulse`} />
          </div>
        ))}

        {/* Floating light streaks */}
        <div className="absolute top-0 left-[20%] w-px h-[60%] bg-gradient-to-b from-transparent via-white/[0.04] to-transparent animate-hero-streak-1" />
        <div className="absolute top-[10%] left-[50%] w-px h-[50%] bg-gradient-to-b from-transparent via-white/[0.03] to-transparent animate-hero-streak-2" />
        <div className="absolute top-[5%] left-[75%] w-px h-[55%] bg-gradient-to-b from-transparent via-white/[0.05] to-transparent animate-hero-streak-3" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />

        {/* Animated orbs */}
        <div className={`absolute top-[15%] right-[15%] w-[300px] h-[300px] rounded-full blur-[120px] transition-all duration-[2000ms] ${currentSlide.glow} opacity-40`} />
        <div className={`absolute bottom-[20%] left-[10%] w-[250px] h-[250px] rounded-full blur-[100px] transition-all duration-[2000ms] ${currentSlide.glow} opacity-30`} />

        {/* Signature Lens Backdrop — Restored as requested */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] h-[85vw] max-w-[1100px] max-h-[1100px] flex items-center justify-center opacity-60">
          <div className="relative w-full h-full rounded-full overflow-hidden border border-white/5 shadow-[0_0_150px_rgba(92,92,66,0.2)]">
            <div
              className="absolute inset-0 bg-cover bg-center mix-blend-screen opacity-50"
              style={{
                backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
                filter: 'contrast(120%)'
              }}
            />
            {/* Inner signature gradient sphere effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#5c5c42]/25 via-[#1a1a1a]/40 to-black rounded-full" />
          </div>
        </div>

        {/* Floating particles */}
        <div className="hero-particles">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="hero-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 8}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* ============ HERO CONTENT ============ */}
      <div className="container relative z-10 w-full px-5 lg:px-10 h-full flex flex-col justify-center items-center">
        {/* Slide counter */}
        <div className="absolute top-[calc(50%-12vh)] left-5 lg:left-10 text-[10px] uppercase tracking-[0.3em] text-white/30 font-medium">
          <span className="text-white/80">{String(currentIndex + 1).padStart(2, '0')}</span>
          <span className="mx-1">/</span>
          <span>{String(slides.length).padStart(2, '0')}</span>
        </div>

        {/* Cycling Typography */}
        <div className="w-full text-center">
          <ul className="relative h-[30vh] flex items-center justify-center">
            {slides.map((slide, index) => (
              <li
                key={index}
                className={`absolute w-full transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col items-center justify-center gap-6
                  ${index === currentIndex
                    ? 'opacity-100 translate-y-0 blur-0 scale-100'
                    : index < currentIndex
                      ? 'opacity-0 -translate-y-[40px] blur-[12px] scale-[0.97] pointer-events-none'
                      : 'opacity-0 translate-y-[40px] blur-[12px] scale-[0.97] pointer-events-none'
                  }`}
                aria-hidden={index !== currentIndex}
              >
                {/* Main heading */}
                <div className="text-hero text-white flex flex-col md:flex-row gap-x-6 items-center">
                  <span className="whitespace-nowrap inline-block font-light">
                    {slide.first}
                  </span>
                  <span className="whitespace-nowrap inline-block bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                    {slide.second}
                  </span>
                </div>

                {/* Subtitle */}
                <p className="text-sm md:text-base lg:text-lg font-light text-white/40 tracking-wide max-w-xl leading-relaxed">
                  {slide.subtitle}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* ============ CAROUSEL NAVIGATION ============ */}

        {/* Prev / Next Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 lg:left-8 z-20">
          <button
            onClick={goPrev}
            className="group w-12 h-12 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md flex items-center justify-center hover:border-white/30 hover:bg-white/[0.08] transition-all duration-300 cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4 lg:right-8 z-20">
          <button
            onClick={goNext}
            className="group w-12 h-12 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md flex items-center justify-center hover:border-white/30 hover:bg-white/[0.08] transition-all duration-300 cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className="group relative flex items-center justify-center p-1 cursor-pointer"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === currentIndex ? 'true' : 'false'}
            >
              <span
                className={`block rounded-full transition-all duration-500 ${i === currentIndex
                  ? 'w-8 h-2 bg-[#F32913]/80'
                  : 'w-2 h-2 bg-white/20 group-hover:bg-white/50'
                  }`}
              />
            </button>
          ))}
        </div>

        {/* Progress bar for active slide */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-40 h-[1px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#F32913]/70 rounded-full transition-none"
            style={{
              animation: 'hero-progress 5s linear infinite',
              animationDelay: '0ms',
            }}
            key={`progress-${currentIndex}`}
          />
        </div>

        {/* Scroll Down indicator — Bottom Left */}
        <div className="absolute bottom-10 left-5 lg:left-10 z-20 flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}>
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
            <ArrowDown className="w-4 h-4 text-white/40 group-hover:text-white/80 transition-colors animate-bounce" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 group-hover:text-white/60 transition-colors hidden md:block">
            Scroll Down
          </span>
        </div>
      </div>

      {/* ============ LOCAL STYLES ============ */}
      <style jsx global>{`
        .text-hero {
          font-size: 6vw;
          line-height: 0.9;
          font-weight: 400;
          letter-spacing: -0.04em;
          text-transform: none;
        }

        @media (max-width: 768px) {
          .text-hero {
            font-size: 10vw;
            line-height: 1.1;
          }
        }

        /* Background gradient animation */
        @keyframes hero-pulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.15);
            opacity: 0.8;
          }
        }
        .animate-hero-pulse {
          animation: hero-pulse 8s ease-in-out infinite;
        }

        /* Light streak animations */
        @keyframes hero-streak-1 {
          0%, 100% { opacity: 0; transform: translateY(-20%); }
          50% { opacity: 1; transform: translateY(10%); }
        }
        @keyframes hero-streak-2 {
          0%, 100% { opacity: 0; transform: translateY(-10%); }
          60% { opacity: 1; transform: translateY(15%); }
        }
        @keyframes hero-streak-3 {
          0%, 100% { opacity: 0; transform: translateY(-30%); }
          40% { opacity: 1; transform: translateY(5%); }
        }
        .animate-hero-streak-1 { animation: hero-streak-1 12s ease-in-out infinite; }
        .animate-hero-streak-2 { animation: hero-streak-2 15s ease-in-out infinite 2s; }
        .animate-hero-streak-3 { animation: hero-streak-3 10s ease-in-out infinite 4s; }

        /* Floating particles */
        .hero-particles {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        .hero-particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          animation: hero-float ease-in-out infinite;
        }
        @keyframes hero-float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          50% {
            transform: translateY(-80px) translateX(20px);
            opacity: 1;
          }
        }

        /* Progress bar animation */
        @keyframes hero-progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}
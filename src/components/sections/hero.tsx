"use client";

import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Hero component for RapinnoTech.
 * Features:
 * - Cinematic animated background with gradient mesh & floating particles
 * - Cycling typography sentences with carousel navigation
 * - Prev/Next arrows & dot indicators for manual slide control
 * - Rotating "Scroll Down" indicator
 */

// Static hero (no carousel); keep the animated cinematic background.

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId: number | null = null;
    let width = 0;
    let height = 0;
    const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;

    const PARTICLE_COUNT = 80;
    const CONNECTION_DISTANCE = 180;
    const MOUSE_DISTANCE = 200;

    const palettes = [
      {
        particle: 'rgba(5,79,184,0.45)', // blue
        line: 'rgba(5,79,184,0.18)',
      },
      {
        particle: 'rgba(243,41,19,0.35)', // red
        line: 'rgba(243,41,19,0.18)',
      },
    ] as const;

    type PaletteIndex = 0 | 1;

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      paletteIndex: PaletteIndex;
    };

    let particles: Particle[] = [];
    const mouse = { x: null as number | null, y: null as number | null };

    const setup = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const nextW = Math.max(1, width);
      const nextH = Math.max(1, height);
      canvas.width = nextW * dpr;
      canvas.height = nextH * dpr;
      canvas.style.width = `${nextW}px`;
      canvas.style.height = `${nextH}px`;

      // Reset transform so we can draw in CSS pixels.
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles = Array.from({ length: PARTICLE_COUNT }).map(() => {
        const paletteIndex: PaletteIndex = (Math.random() > 0.5 ? 1 : 0) as PaletteIndex;
        return {
          x: Math.random() * nextW,
          y: Math.random() * nextH,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
          paletteIndex,
        };
      });
    };

    const drawParticle = (p: Particle) => {
      const palette = palettes[p.paletteIndex];
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = palette.particle;
      ctx.fill();
    };

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECTION_DISTANCE) {
            const opacity = 1 - distance / CONNECTION_DISTANCE;
            const palette = palettes[particles[i].paletteIndex];
            ctx.globalAlpha = opacity * 0.9;
            ctx.strokeStyle = palette.line;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }

        if (mouse.x !== null && mouse.y !== null) {
          const dx = particles[i].x - mouse.x;
          const dy = particles[i].y - mouse.y;
          const mouseDistance = Math.sqrt(dx * dx + dy * dy);

          if (mouseDistance < MOUSE_DISTANCE) {
            const mouseOpacity = 1 - mouseDistance / MOUSE_DISTANCE;
            const palette = palettes[particles[i].paletteIndex];
            ctx.globalAlpha = mouseOpacity;
            ctx.strokeStyle = palette.line;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        drawParticle(p);
      });

      drawLines();
      rafId = window.requestAnimationFrame(animate);
    };

    const onResize = () => setup();
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    setup();
    rafId = window.requestAnimationFrame(animate);

    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseout', onMouseOut);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseout', onMouseOut);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      className="relative w-screen min-h-screen overflow-hidden flex items-center justify-center -mt-[120px] lg:-mt-[100px]"
      aria-label="Hero"
    >
      <canvas
        ref={canvasRef}
        id="bg-canvas"
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* ============ HERO CONTENT ============ */}
      <div className="container relative z-10 w-full px-5 lg:px-10 h-full flex flex-col justify-center items-center text-center pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#054FB8]/35 backdrop-blur-sm mb-7">
          <svg className="w-3 h-3 text-[#054FB8]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 11-2 0 1 1 0 012 0zM8 16v-1a1 1 0 112 0v1a1 1 0 11-2 0zM13.536 14.95a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM16.464 16.464a1 1 0 101.414-1.414l-.707-.707a1 1 0 10-1.414 1.414l.707.707z" />
          </svg>
          <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-[#054FB8]/90 font-semibold">
            Technology Innovators with Business Sense
          </span>
        </div>

        <h1 className="mt-1 text-[clamp(2.4rem,5.2vw,4.9rem)] leading-[1.0] font-light text-white">
          <span className="block text-white/90">
            Transforming Ideas into
          </span>
          <span className="block bg-gradient-to-r from-[#F32913] via-[#054FB8] to-[#4A9FF5] bg-clip-text text-transparent">
            Powerful Solutions
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-base md:text-lg font-light text-white/40 tracking-wide leading-relaxed">
          A decade-old technology consulting & staffing company helping enterprises and SMEs design, build, and scale their software.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="/contact"
            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#054FB8] text-white text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-semibold overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(5,79,184,0.45)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#054FB8] to-[#F32913] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Contact Us</span>
            <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="/services"
            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full border border-[#054FB8]/40 text-[#054FB8]/90 text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-medium overflow-hidden transition-all duration-500 hover:bg-[#054FB8]/10 hover:border-[#054FB8]/60"
          >
            <div className="absolute inset-0 bg-[#054FB8]/[0.06] group-hover:bg-[#054FB8]/[0.12] transition-colors duration-500" />
            <span className="relative z-10">Explore Services</span>
          </a>
        </div>

        <div className="mt-14 w-full max-w-3xl">
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-8 md:gap-10">
            <div className="text-center">
              <div className="text-[2.2rem] md:text-[2.4rem] font-semibold text-white/95 leading-none">
                10<span className="text-[#F32913]/90">+</span>
              </div>
              <div className="mt-2 text-sm md:text-base font-light text-white/40 tracking-wide">
                Years Experience
              </div>
            </div>

            <div className="text-center">
              <div className="text-[2.2rem] md:text-[2.4rem] font-semibold text-white/95 leading-none">
                200<span className="text-[#054FB8]/90">+</span>
              </div>
              <div className="mt-2 text-sm md:text-base font-light text-white/40 tracking-wide">
                Clients Served
              </div>
            </div>

            <div className="text-center">
              <div className="text-[2.2rem] md:text-[2.4rem] font-semibold text-white/95 leading-none">
                50<span className="text-[#F32913]/90">+</span>
              </div>
              <div className="mt-2 text-sm md:text-base font-light text-white/40 tracking-wide">
                Enterprise Partners
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Note: background is rendered via canvas in JS. */}
    </section>
  );
}
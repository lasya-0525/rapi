"use client";

import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const FLOAT_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=900&auto=format&fit=crop",
    label: "RPA & Automation",
    pos: { top: "22%", left: "2.5%" },
    size: { w: 210, h: 140 },
    rotate: -5,
    delay: 0,
    floatY: [0, -12, 0],
    accent: "#054FB8",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop",
    label: "Data Analytics",
    pos: { bottom: "18%", left: "4%" },
    size: { w: 175, h: 118 },
    rotate: 4,
    delay: 1.6,
    floatY: [0, -9, 0],
    accent: "#F32913",
  },
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
    label: "Business Intelligence",
    pos: { top: "20%", right: "2.5%" },
    size: { w: 195, h: 132 },
    rotate: 5,
    delay: 0.8,
    floatY: [0, -10, 0],
    accent: "#054FB8",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900&auto=format&fit=crop",
    label: "Team Collaboration",
    pos: { bottom: "20%", right: "3%" },
    size: { w: 178, h: 118 },
    rotate: -4,
    delay: 2.2,
    floatY: [0, -8, 0],
    accent: "#F32913",
  },
];

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
      { particle: 'rgba(5,79,184,0.45)', line: 'rgba(5,79,184,0.18)' },
      { particle: 'rgba(243,41,19,0.35)', line: 'rgba(243,41,19,0.18)' },
    ] as const;

    type PaletteIndex = 0 | 1;
    type Particle = { x: number; y: number; vx: number; vy: number; radius: number; paletteIndex: PaletteIndex };

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
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = Array.from({ length: PARTICLE_COUNT }).map(() => {
        const paletteIndex: PaletteIndex = (Math.random() > 0.5 ? 1 : 0) as PaletteIndex;
        return { x: Math.random() * nextW, y: Math.random() * nextH, vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5, radius: Math.random() * 2 + 1, paletteIndex };
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
    const onMouseMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onMouseOut = () => { mouse.x = null; mouse.y = null; };

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
      <canvas ref={canvasRef} id="bg-canvas" className="absolute inset-0 z-0 pointer-events-none" />

      {/* Ambient colour orbs */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="absolute top-[8%] left-[3%] w-[520px] h-[520px] rounded-full bg-[#054FB8]/10 blur-[110px]" />
        <div className="absolute bottom-[8%] right-[3%] w-[440px] h-[440px] rounded-full bg-[#F32913]/9 blur-[120px]" />
        <div className="absolute top-[55%] left-[35%] w-[280px] h-[280px] rounded-full bg-[#4A9FF5]/7 blur-[80px]" />
      </div>

      {/* Top brand stripe */}
      <div className="absolute top-0 left-0 right-0 h-[3px] z-[6] bg-gradient-to-r from-[#054FB8] via-[#F32913] to-[#054FB8]" />

      {/* Floating image cards — xl screens only */}
      <div className="hidden xl:block absolute inset-0 z-[5] pointer-events-none">
        {FLOAT_IMAGES.map((img, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: img.pos.top,
              bottom: (img.pos as any).bottom,
              left: (img.pos as any).left,
              right: (img.pos as any).right,
              width: img.size.w,
              rotate: img.rotate,
            }}
            animate={{ y: img.floatY }}
            transition={{ duration: 5.5 + i * 0.7, repeat: Infinity, ease: "easeInOut", delay: img.delay }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.72)",
                backdropFilter: "blur(28px) saturate(200%)",
                border: "1.5px solid rgba(255,255,255,0.95)",
                boxShadow: `0 16px 48px rgba(0,0,0,0.13), 0 0 0 1px rgba(255,255,255,0.6), inset 0 1px 0 rgba(255,255,255,1)`,
              }}
            >
              <img
                src={img.src}
                alt={img.label}
                style={{ width: "100%", height: img.size.h, objectFit: "cover", display: "block" }}
              />
              <div className="px-3 py-2.5 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: img.accent }} />
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#0f172a]">{img.label}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── HERO CONTENT ── */}
      <div className="container relative z-10 w-full px-5 lg:px-10 h-full flex flex-col justify-center items-center text-center pb-16">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#054FB8]/10 border border-[#054FB8]/30 backdrop-blur-sm mb-7"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#054FB8] animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#054FB8] font-bold">
            Technology Innovators with Business Sense
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-1 text-[clamp(2.6rem,5.5vw,5.2rem)] leading-[1.04] font-extrabold text-[#0f172a]"
        >
          <span className="block text-[#0f172a]/80 font-semibold text-[clamp(1.8rem,3.8vw,3.6rem)]">
            Transforming Ideas into
          </span>
          <span className="block bg-gradient-to-r from-[#F32913] via-[#054FB8] to-[#4A9FF5] bg-clip-text text-transparent">
            Powerful Solutions
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 max-w-2xl text-base md:text-lg font-light text-[#475569] tracking-wide leading-relaxed"
        >
          A decade-old technology consulting &amp; staffing company helping enterprises and SMEs design, build, and scale their software.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/contact"
            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#054FB8] text-white text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-bold overflow-hidden transition-all duration-500 hover:shadow-[0_0_48px_rgba(5,79,184,0.5)] hover:scale-105"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#054FB8] to-[#F32913] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Contact Us</span>
            <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="/services"
            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full border border-[#054FB8]/40 text-[#054FB8] text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-semibold overflow-hidden transition-all duration-500 hover:bg-[#054FB8]/10 hover:border-[#054FB8]/70 hover:scale-105"
          >
            <span className="relative z-10">Explore Services</span>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-14 w-full max-w-3xl"
        >
          {/* Divider */}
          <div className="flex items-center gap-4 mb-10 justify-center">
            <div className="flex-1 max-w-[100px] h-px bg-gradient-to-r from-transparent to-[#0f172a]/15" />
            <div className="flex gap-1.5">
              <div className="w-1 h-1 rounded-full bg-[#054FB8]" />
              <div className="w-1 h-1 rounded-full bg-[#F32913]" />
              <div className="w-1 h-1 rounded-full bg-[#054FB8]" />
            </div>
            <div className="flex-1 max-w-[100px] h-px bg-gradient-to-l from-transparent to-[#0f172a]/15" />
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {[
              { num: "10+", label: "Years Experience", color: "#054FB8" },
              { num: "200+", label: "Clients Served", color: "#F32913" },
              { num: "50+", label: "Enterprise Partners", color: "#054FB8" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="text-center p-4 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.50)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.85)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
                }}
              >
                <div className="text-[1.9rem] md:text-[2.3rem] font-extrabold leading-none" style={{ color: stat.color }}>
                  {stat.num}
                </div>
                <div className="mt-1.5 text-[10px] md:text-xs font-semibold text-[#64748b] uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

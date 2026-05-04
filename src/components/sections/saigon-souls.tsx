"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Relevant Tech & Innovation Stock Images
const blogCards = [
  {
    title: "The Benefits Of Robotics In Financial Services",
    author: "Tarun",
    date: "Feb 17, 2022",
    image: "https://images.unsplash.com/photo-1620714223084-8fcacc2107e6?q=80&w=1971&auto=format&fit=crop",
    tag: "Automation",
  },
  {
    title: "10 Critical Questions To Ask Ahead Of AI Implementation",
    author: "Prem Kumar",
    date: "Feb 10, 2022",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop",
    tag: "AI",
  },
  {
    title: "How Financial And Banking Services Can Benefit By Adopting Intelligent Process Automation",
    author: "Teja",
    date: "Feb 03, 2022",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop",
    tag: "FinTech",
  },
];

const tileImages = [
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2068&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
];

const TilesLine = ({ images, speed, direction }: { images: string[], speed: number, direction: 'left' | 'right' }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'left' ? [speed, -speed] : [-speed, speed]
  );

  return (
    <motion.div
      ref={ref}
      style={{ x }}
      className="flex gap-4 mb-4 whitespace-nowrap"
    >
      {images.map((src, i) => (
        <div key={i} className="relative flex-shrink-0 w-[40vw] md:w-[25vw] aspect-[4/3] overflow-hidden bg-muted">
          <img src={src} className="w-full h-full object-cover scale-110" alt="" />
        </div>
      ))}
      {/* Duplicate for infinite feel */}
      {images.map((src, i) => (
        <div key={`dup-${i}`} className="relative flex-shrink-0 w-[40vw] md:w-[25vw] aspect-[4/3] overflow-hidden bg-muted">
          <img src={src} className="w-full h-full object-cover scale-110" alt="" />
        </div>
      ))}
    </motion.div>
  );
};

export default function ResourcesSection() {
  return (
    <section id="saigon-souls" className="relative overflow-hidden pt-20 pb-0">
      <div className="container mx-auto px-5 lg:px-10 relative z-10 mb-12 lg:mb-20">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row mb-20 lg:mb-32">
          <div className="lg:w-1/2">
            <h2 className="text-section-title font-extrabold mb-6 lg:mb-0">
              <span className="text-[#054FB8]">Resources</span> <span className="text-[#F32913]">&</span> <span className="text-[#0f172a]">Insights</span>
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="text-[20px] lg:text-[24px] leading-[1.4] text-[#475569] font-light max-w-[580px]">
              Stay updated with the latest trends in intelligent automation, digital transformation, and enterprise technology. Our experts share insights that help you make informed decisions for your business growth.
            </p>
          </div>
        </div>

        {/* Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32">
          {blogCards.map((blog, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl aspect-[16/10] mb-6"
                style={{
                  boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                  border: "1px solid rgba(255,255,255,0.8)",
                }}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover grayscale-[10%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                {/* Brand tag */}
                <div className="absolute top-3 left-3">
                  <span
                    className="text-[9px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full text-white"
                    style={{ background: index === 1 ? "#054FB8" : "#F32913" }}
                  >
                    {blog.tag}
                  </span>
                </div>
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex flex-col space-y-3">
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[#64748b]">
                  <span className="font-semibold">{blog.author}</span>
                  <span className="w-4 h-[1px] bg-[#0f172a]/20" />
                  <span>{blog.date}</span>
                </div>
                <h3 className="text-[18px] font-semibold leading-snug text-[#0f172a] group-hover:text-[#054FB8] transition-colors duration-300">
                  {blog.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DIAGONAL TILES GRID */}
      <div className="relative w-full h-[100vh] overflow-hidden pointer-events-none mt-12">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-transparent opacity-0" />
        <div
          className="absolute inset-x-[-20%] inset-y-[-20%] origin-center"
          style={{ transform: 'rotate(-12deg) scale(1.1)' }}
        >
          <div className="flex flex-col">
            <TilesLine images={[tileImages[0], tileImages[1], tileImages[2]]} speed={100} direction="left" />
            <TilesLine images={[tileImages[1], tileImages[2], tileImages[3]]} speed={150} direction="right" />
            <TilesLine images={[tileImages[3], tileImages[4], tileImages[5]]} speed={80} direction="left" />
            <TilesLine images={[tileImages[5], tileImages[0], tileImages[1]]} speed={120} direction="right" />
          </div>
        </div>
      </div>

      {/* Call to action center */}
      <div className="relative mt-24 pb-32 z-20 text-center">
        <div className="relative inline-block bg-white/70 backdrop-blur-sm px-10 py-12 rounded-3xl border border-[#0f172a]/10 shadow-2xl">
          <p className="text-[13px] uppercase tracking-[0.4em] font-semibold text-[#475569] mb-6 drop-shadow-sm">
            Innovation & Technology
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 text-[6vw] md:text-[3.5vw] font-medium text-[#0f172a] drop-shadow-lg">
            <span className="text-[#0f172a]/80">From Hyderabad</span>
            <span className="bg-gradient-to-r from-[#054FB8] via-[#054FB8] to-[#054FB8]/70 bg-clip-text text-transparent font-bold">To The World</span>
          </div>

          {/* Countries Presence */}
          <div className="mt-14 flex flex-wrap justify-center items-center gap-x-6 gap-y-4 text-[11px] md:text-[13px] uppercase tracking-[0.3em] font-bold text-[#0f172a] max-w-4xl mx-auto px-4 opacity-95">
            <span className="whitespace-nowrap hover:scale-105 transition-transform cursor-default">USA</span>
            <div className="w-1.5 h-1.5 bg-[#054FB8] rounded-full hidden md:block" />
            <span className="whitespace-nowrap hover:scale-105 transition-transform cursor-default">UK</span>
            <div className="w-1.5 h-1.5 bg-[#054FB8] rounded-full hidden md:block" />
            <span className="whitespace-nowrap hover:scale-105 transition-transform cursor-default">GERMANY</span>
            <div className="w-1.5 h-1.5 bg-[#054FB8] rounded-full hidden md:block" />
            <span className="whitespace-nowrap hover:scale-105 transition-transform cursor-default text-[#054FB8]">INDIA</span>
            <div className="w-1.5 h-1.5 bg-[#054FB8] rounded-full hidden md:block" />
            <span className="whitespace-nowrap hover:scale-105 transition-transform cursor-default">AUSTRALIA</span>
          </div>
        </div>
      </div>


    </section>
  );
}
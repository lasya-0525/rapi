"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Relevant Tech & Innovation Stock Images
const blogCards = [
  {
    title: "The Benefits Of Robotics In Financial Services",
    author: "Tarun",
    date: "Feb 17, 2022",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "10 Critical Questions To Ask Ahead Of AI Implementation",
    author: "Prem Kumar",
    date: "Feb 10, 2022",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop",
  },
  {
    title: "How Financial And Banking Services Can Benefit By Adopting Intelligent Process Automation",
    author: "Teja",
    date: "Feb 03, 2022",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
  },
];

const tileImages = [
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1510511459019-5dee99dc0ff8?q=80&w=2070&auto=format&fit=crop",
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
            <h2 className="text-section-title text-white mb-6 lg:mb-0">
              Resources & <i className="serif">I</i>ns<i className="serif">i</i>ghts
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="text-[20px] lg:text-[24px] leading-[1.4] text-white font-light max-w-[580px]">
              Stay updated with the latest trends in intelligent automation, digital transformation, and enterprise technology. Our experts share insights that help you make informed decisions for your business growth.
            </p>
          </div>
        </div>

        {/* Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32">
          {blogCards.map((blog, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[16/10] mb-6 bg-[#1a1a1a]">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover grayscale-[20%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <div className="flex flex-col space-y-3">
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/40">
                  <span>{blog.author}</span>
                  <span className="w-4 h-[1px] bg-white/20"></span>
                  <span>{blog.date}</span>
                </div>
                <h3 className="text-[18px] font-normal leading-snug text-white group-hover:opacity-70 transition-opacity">
                  {blog.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DIAGONAL TILES GRID */}
      <div className="relative w-full h-[100vh] overflow-hidden pointer-events-none mt-12 mb-[-10vh]">
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
      <div className="relative mt-12 pb-20 z-20 text-center">
        <div className="relative inline-block">
          <p className="text-[12px] uppercase tracking-[0.2em] text-white/40 mb-4">
            Innovation & Technology
          </p>
          <div className="flex items-center justify-center space-x-12 text-[3.5vw] font-light text-white">
            <span className="opacity-50">Fr<i>o</i>m Hyderabad</span>
            <span>T<i>o</i> The W<i>o</i>rld</span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .serif {
          font-family: serif;
          font-style: italic;
        }
      `}</style>
    </section>
  );
}
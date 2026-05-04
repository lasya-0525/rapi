"use client";

import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Robotic Process Automation",
    id: "rpa",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
    categories: ["Intelligent Automation", "Process Optimization"],
    size: "large",
    accent: "#054FB8",
  },
  {
    title: "Full Stack Development",
    id: "fullstack",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    categories: ["Web", "API"],
    size: "small",
    accent: "#F32913",
  },
  {
    title: "Big Data Analytics",
    id: "bigdata",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    categories: ["Management", "Real-time"],
    size: "small",
    accent: "#054FB8",
  },
  {
    title: "Digital Platform",
    id: "digital-platform",
    thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop",
    categories: ["Low Code", "Rapid"],
    size: "medium",
    accent: "#F32913",
  },
  {
    title: "Data Digitization",
    id: "data-digitization",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
    categories: ["AI", "ML"],
    size: "wide",
    accent: "#054FB8",
  },
  {
    title: "Product 360",
    id: "product-360",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop",
    categories: ["Strategy", "Design"],
    size: "full",
    accent: "#F32913",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Works() {
  return (
    <section id="works" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-5 lg:px-10">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[3px] rounded-full bg-[#054FB8]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#054FB8]">What We Do</span>
              <div className="w-8 h-[3px] rounded-full bg-[#F32913]" />
            </div>
            <h2 className="text-[12vw] md:text-[6vw] font-extrabold leading-[0.9] tracking-tight lowercase">
              <span className="text-[#0f172a]">our </span>
              <span className="text-[#054FB8]">capa</span><span className="text-[#F32913]">bilities</span>
            </h2>
          </div>
          <p className="text-[#475569] text-sm max-w-xs leading-relaxed font-light">
            We merge intelligent automation with elite engineering to solve complex business hurdles.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[240px]"
        >
          {services.map((service, index) => {
            let gridClasses = "col-span-1 row-span-1";

            if (service.size === "large") gridClasses = "md:col-span-2 md:row-span-2";
            if (service.size === "medium") gridClasses = "md:col-span-1 md:row-span-2";
            if (service.size === "wide") gridClasses = "md:col-span-2 md:row-span-1";
            if (service.size === "full") gridClasses = "md:col-span-3 md:row-span-1";

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`${gridClasses} relative group cursor-none overflow-hidden rounded-2xl bento-card`}
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={service.thumbnail}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                  />
                  {/* Brand colour tinted overlay */}
                  <div
                    className="absolute inset-0 opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(to top, ${service.accent}cc 0%, ${service.accent}30 40%, transparent 100%)`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                {/* Top-left accent dot */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 rounded-full" style={{ background: service.accent }} />
                </div>

                <div className="relative z-10 h-full p-7 flex flex-col justify-end">
                  <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {service.categories.map((cat, i) => (
                        <span
                          key={i}
                          className="text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full font-semibold"
                          style={{
                            background: i === 0 ? `${service.accent}30` : "rgba(255,255,255,0.15)",
                            color: i === 0 ? "white" : "rgba(255,255,255,0.75)",
                            border: `1px solid ${i === 0 ? service.accent + "60" : "rgba(255,255,255,0.2)"}`,
                            backdropFilter: "blur(8px)",
                          }}
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white leading-tight drop-shadow-sm">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ borderColor: service.accent }} />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ borderColor: service.accent }} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style jsx>{`
        .bento-card {
          border: 1px solid rgba(255, 255, 255, 0.7);
          background: rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          box-shadow: 0 4px 20px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8);
        }
        .glass-tag {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.7);
        }
      `}</style>
    </section>
  );
}
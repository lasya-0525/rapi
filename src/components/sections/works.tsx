"use client";

import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Robotic Process Automation",
    id: "rpa",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
    categories: ["Intelligent Automation", "Process Optimization"],
    size: "large" // col-span-2 row-span-2
  },
  {
    title: "Full Stack Development",
    id: "fullstack",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    categories: ["Web", "API"],
    size: "small" // col-span-1 row-span-1
  },
  {
    title: "Big Data Analytics",
    id: "bigdata",
    thumbnail: "/images/works/big-data.png",
    categories: ["Management", "Real-time"],
    size: "small" // col-span-1 row-span-1
  },
  {
    title: "Digital Platform",
    id: "digital-platform",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    categories: ["Low Code", "Rapid"],
    size: "medium" // col-span-1 row-span-2
  },
  {
    title: "Data Digitization",
    id: "data-digitization",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    categories: ["AI", "ML"],
    size: "wide" // col-span-2 row-span-1
  },
  {
    title: "Product 360",
    id: "product-360",
    thumbnail: "/images/works/product-360.png",
    categories: ["Strategy", "Design"],
    size: "full" // col-span-3 row-span-1
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
            <span className="text-[12px] font-medium uppercase tracking-[0.3em] text-[#999] block mb-4">
              What We Do
            </span>
            <h2 className="text-[12vw] md:text-[6vw] font-normal leading-[0.9] tracking-tighter lowercase">
              our capab<i className="font-serif italic text-white normal-case inline-block">i</i>l<i className="font-serif italic text-white normal-case inline-block">i</i>ties
            </h2>
          </div>
          <p className="text-[#666] text-sm max-w-xs leading-relaxed font-light">
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
                className={`${gridClasses} relative group cursor-none overflow-hidden rounded-[4px] bento-card`}
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={service.thumbnail}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                </div>

                <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {service.categories.map((cat, i) => (
                        <span key={i} className="text-[10px] uppercase tracking-widest text-white/50 px-2 py-1 border border-white/10 glass-tag">
                          {cat}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl md:text-2xl font-light text-white leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style jsx>{`
        .bento-card {
          border: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(15, 15, 15, 0.4);
        }
        .glass-tag {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(4px);
        }
        i {
          font-style: italic;
          font-family: serif;
        }
      `}</style>
    </section>
  );
}
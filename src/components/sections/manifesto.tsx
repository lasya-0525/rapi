"use client";

import React, { useRef } from "react";
import { useInView, motion, useScroll, useTransform } from "framer-motion";

/**
 * Manifesto / About Us Section
 * Features:
 * - Signature Lens Backdrop (Grey Ball)
 * - Premium stagger-line text reveal
 * - Parallax scroll effects on text
 */

const manifestoLines = [
  { text: "We Innovate,", size: "text-[8vw] md:text-[6vw]" },
  { text: "Automate, and", size: "text-[8vw] md:text-[6vw]" },
  { text: "Transform.", size: "text-[10vw] md:text-[8vw]", serif: true, accent: true },
  { text: "We are technology natives", size: "text-[4vw] md:text-[2.5vw]" },
  { text: "embracing the", size: "text-[4vw] md:text-[2.5vw]" },
  { text: "creative freedom to", size: "text-[4vw] md:text-[2.5vw]" },
  { text: "deliver solutions", size: "text-[6vw] md:text-[4vw]", serif: true },
  { text: "that connect,", size: "text-[4vw] md:text-[2.5vw]" },
  { text: "scale, and", size: "text-[4vw] md:text-[2.5vw]" },
  { text: "inspire.", size: "text-[8vw] md:text-[5vw]", accent: true },
];

const ManifestoLine = ({ line, index }: { line: typeof manifestoLines[0], index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.5,
    margin: "0px 0px -10% 0px",
    once: false
  });

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${line.size} ${line.serif ? 'font-serif italic' : 'font-sans'} tracking-tighter leading-[1.1]`}
    >
      <motion.span
        initial={{ y: "100%", opacity: 0, rotateX: 45 }}
        animate={isInView ? { y: 0, opacity: 1, rotateX: 0 } : { y: "100%", opacity: 0, rotateX: 45 }}
        transition={{
          duration: 1.2,
          delay: index * 0.05,
          ease: [0.16, 1, 0.3, 1]
        }}
        className={`inline-block font-bold ${line.accent ? 'bg-gradient-to-r from-[#F32913] via-[#054FB8] to-[#4A9FF5] bg-clip-text text-transparent' : 'text-[#0f172a]'}`}
      >
        {line.text}
      </motion.span>
    </div>
  );
};

const BackgroundLens = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.6, 0.2]);

  return (
    <div ref={ref} className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <motion.div
        style={{ scale, opacity }}
        className="relative w-[90vw] h-[90vw] max-w-[1200px] max-h-[1200px] flex items-center justify-center"
      >
        {/* Glow */}
        <div className="absolute inset-0 bg-radial from-[#5c5c42]/30 via-transparent to-transparent blur-[120px]" />

        {/* Lens */}
        <div className="relative w-full h-full rounded-full border border-white/5 shadow-[0_0_150px_rgba(92,92,66,0.2)] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center mix-blend-screen opacity-20"
            style={{
              backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
              filter: 'contrast(120%)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#5c5c42]/10 via-[#1a1a1a]/40 to-black rounded-full" />
        </div>
      </motion.div>
    </div>
  );
};

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative min-h-[120vh] py-32 md:py-48 flex flex-col items-center justify-center overflow-hidden bg-transparent"
    >
      {/* Background signature element */}
      <BackgroundLens />

      {/* Section Title */}
      <div className="absolute top-16 left-5 md:left-10 z-20">
        <span className="text-[10px] md:text-[12px] font-medium uppercase tracking-[0.4em] text-[#64748b] block mb-2">
          02 — About Us
        </span>
        <div className="w-12 h-px bg-[#0f172a]/20" />
      </div>

      <div className="container relative z-10 max-w-[90vw] flex flex-col items-center">
        <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
          {manifestoLines.map((line, index) => (
            <ManifestoLine key={index} line={line} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-32 flex flex-col items-center space-y-12 w-full max-w-2xl px-4"
        >
          <div className="h-20 w-px bg-gradient-to-b from-[#0f172a]/20 to-transparent" />

          <p className="text-center text-[18px] md:text-[22px] text-[#64748b] font-light leading-relaxed">
            RapinnoTech Solutions is a software innovation company dedicated to delivering technological breakthroughs at a rapid pace.
          </p>

          <a
            href="/about"
            className="group relative px-12 py-5 rounded-full border border-[#0f172a]/15 bg-[#0f172a]/[0.02] backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-[#0f172a]/30"
          >
            <div className="absolute inset-0 bg-[#0f172a] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
            <span className="relative z-10 text-[11px] uppercase tracking-[0.3em] font-medium text-[#0f172a] group-hover:text-white transition-colors duration-500">
              Read Full Story
            </span>
          </a>
        </motion.div>
      </div>

      <style jsx global>{`
        @font-face {
          font-family: 'serif';
          src: local('Times New Roman');
        }
      `}</style>
    </section>
  );
}
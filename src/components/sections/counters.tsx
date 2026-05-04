"use client";

import React, { useRef } from "react";
import { motion, useInView, useSpring, useTransform, animate } from "framer-motion";

/**
 * Animated Counter Component
 */
const Counter = ({ value, suffix = "", title, delay = 0, accent = "#054FB8" }: { value: number; suffix?: string; title: string; delay?: number; accent?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        delay: delay,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value, delay]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center p-8 glass-card border transition-all duration-500 group relative overflow-hidden"
      style={{ borderColor: "rgba(255,255,255,0.8)" }}
    >
      {/* Accent top bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-sm transition-opacity duration-500" style={{ background: accent }} />
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: `radial-gradient(ellipse at top, ${accent}12 0%, transparent 70%)` }} />

      <div className="relative z-10 flex flex-col items-center">
        <div className="text-4xl md:text-6xl font-extrabold mb-2 tracking-tight" style={{ color: accent }}>
          {displayValue}{suffix}
        </div>
        <div className="text-[10px] md:text-[12px] uppercase tracking-[0.3em] text-[#64748b] font-semibold group-hover:text-[#0f172a] transition-colors text-center">
          {title}
        </div>
      </div>
    </div>
  );
};

export default function Counters() {
  const metrics = [
    { title: "Projects Delivered", value: 500, suffix: "+", accent: "#054FB8" },
    { title: "Global Clients", value: 50, suffix: "+", accent: "#F32913" },
    { title: "Expert Engineers", value: 200, suffix: "+", accent: "#054FB8" },
    { title: "Years of Innovation", value: 10, suffix: "+", accent: "#F32913" },
    { title: "Client Satisfaction", value: 98, suffix: "%", accent: "#054FB8" },
  ];

  return (
    <section className="relative py-24 bg-transparent overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#0f172a]/10 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#0f172a]/10 to-transparent" />

      <div className="container relative z-10 mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {metrics.map((metric, index) => (
            <Counter
              key={index}
              title={metric.title}
              value={metric.value}
              suffix={metric.suffix}
              delay={index * 0.1}
              accent={metric.accent}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .glass-card {
           background: rgba(255, 255, 255, 0.6);
           backdrop-filter: blur(32px) saturate(180%);
           -webkit-backdrop-filter: blur(32px) saturate(180%);
           border: 1px solid rgba(255, 255, 255, 0.75);
           box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255,255,255,0.8);
           border-radius: 4px;
        }
      `}</style>
    </section>
  );
}

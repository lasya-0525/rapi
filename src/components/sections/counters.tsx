"use client";

import React, { useRef } from "react";
import { motion, useInView, useSpring, useTransform, animate } from "framer-motion";

/**
 * Animated Counter Component
 */
const Counter = ({ value, suffix = "", title, delay = 0 }: { value: number; suffix?: string; title: string; delay?: number }) => {
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
    <div ref={ref} className="flex flex-col items-center justify-center p-8 glass-card border border-[#0f172a]/10 hover:border-[#054FB8]/30 transition-all duration-500 group relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#054FB8]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="text-4xl md:text-6xl font-extrabold text-[#054FB8] group-hover:text-[#F32913] mb-2 tracking-tight transition-colors duration-500">
          {displayValue}{suffix}
        </div>
        <div className="text-[10px] md:text-[12px] uppercase tracking-[0.3em] text-[#475569] font-semibold group-hover:text-[#0f172a] transition-colors">
          {title}
        </div>
      </div>
    </div>
  );
};

export default function Counters() {
  const metrics = [
    { title: "Projects Delivered", value: 500, suffix: "+" },
    { title: "Global Clients", value: 50, suffix: "+" },
    { title: "Expert Engineers", value: 200, suffix: "+" },
    { title: "Years of Innovation", value: 10, suffix: "+" },
    { title: "Client Satisfaction", value: 98, suffix: "%" },
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

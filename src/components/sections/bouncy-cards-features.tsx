"use client";

import React from "react";
import { motion } from "framer-motion";

export type ServiceItem = {
  title: string;
  desc: string;
  capabilities: string[];
  icon: React.ReactNode;
};

export type ServiceCategory = {
  category: string;
  icon: React.ReactNode;
  description: string;
  items: ServiceItem[];
};

function getBouncyGridClass(index: number, total: number): string {
  if (total <= 4) {
    const spans: Record<number, string> = {
      0: "col-span-12 md:col-span-4",
      1: "col-span-12 md:col-span-8",
      2: "col-span-12 md:col-span-8",
      3: "col-span-12 md:col-span-4",
    };
    return spans[index] ?? "col-span-12";
  }
  if (index === 0) return "col-span-12 md:col-span-4";
  if (index === 1) return "col-span-12 md:col-span-8";
  if (index === 2) return "col-span-12 md:col-span-8";
  if (index === 3) return "col-span-12 md:col-span-4";
  return "col-span-12";
}

// Richer gradients — still dark-theme friendly but more colorful
const PANEL_GRADIENTS = [
  "from-violet-500/25 via-violet-600/15 to-black/60 border border-violet-400/20",
  "from-amber-500/20 via-amber-600/10 to-black/50 border border-amber-400/25",
  "from-emerald-500/25 via-emerald-600/15 to-black/60 border border-emerald-400/20",
  "from-rose-500/20 via-rose-600/10 to-black/50 border border-rose-400/20",
  "from-[#5c5c42]/50 via-[#4a4a35] to-black/60 border border-[#7a7a5a]/40",
];

export function BouncyCardsFeatures({ category }: { category: ServiceCategory }) {
  const { category: categoryName, icon: categoryIcon, description, items } = category;

  return (
    <section className="relative mb-24">
      {/* Category header - liquid glass */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card mb-12 p-8 md:p-10"
      >
        <div className="text-white/40 mb-6">{categoryIcon}</div>
        <h2 className="text-3xl font-normal mb-4 uppercase tracking-tight text-white">
          {categoryName}
        </h2>
        <p className="text-white/60 font-light leading-relaxed max-w-2xl">
          {description}
        </p>
      </motion.div>

      {/* Bouncy cards grid - one card per service */}
      <div className="grid grid-cols-12 gap-4">
        {items.map((item, index) => (
          <BounceCard
            key={item.title}
            className={getBouncyGridClass(index, items.length)}
            item={item}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

const BounceCard = ({
  className,
  item,
  index,
}: {
  className: string;
  item: ServiceItem;
  index: number;
}) => {
  const panelGradient = PANEL_GRADIENTS[index % PANEL_GRADIENTS.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[320px] cursor-pointer overflow-hidden rounded-2xl glass-card p-8 ${className}`}
    >
      {/* Top: icon + title */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/80 group-hover:text-white">
          {item.icon}
        </div>
        <h3 className="mx-auto text-center text-2xl font-semibold text-white md:text-3xl">
          {item.title}
        </h3>
        <p className="line-clamp-2 max-w-md text-center text-sm font-light leading-snug text-white/50">
          {item.desc}
        </p>
      </div>

      {/* Sliding panel - more informative: full capability list + hint */}
      <div
        className={`absolute bottom-0 left-4 right-4 top-40 rounded-t-2xl bg-gradient-to-br p-5 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] translate-y-8 ${panelGradient}`}
      >
        <div className="flex h-full flex-col justify-center gap-3 overflow-hidden px-1">
          <span className="text-[10px] uppercase tracking-widest text-white/50">
            Capabilities
          </span>
          <ul className="space-y-1.5 text-left">
            {item.capabilities.slice(0, 5).map((cap) => (
              <li
                key={cap}
                className="flex items-center gap-2 text-sm font-medium text-white/90"
              >
                <span className="h-1 w-1 shrink-0 rounded-full bg-white/60" />
                {cap}
              </li>
            ))}
          </ul>
          {item.capabilities.length > 5 && (
            <span className="text-xs text-white/50">
              +{item.capabilities.length - 5} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { slugify } from "@/utils/slugify";

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

// Richer gradients — still dark-theme friendly but more colorful
const PANEL_GRADIENTS = [
  "from-violet-500/25 via-violet-600/15 to-white/60 border border-violet-400/20",
  "from-amber-500/20 via-amber-600/10 to-white/50 border border-amber-400/25",
  "from-emerald-500/25 via-emerald-600/15 to-white/60 border border-emerald-400/20",
  "from-rose-500/20 via-rose-600/10 to-white/50 border border-rose-400/20",
  "from-[#054FB8]/30 via-[#054FB8]/15 to-white/60 border border-[#054FB8]/30",
];

/**
 * Splits items into rows of the pattern: [4+8], [8+4], [12]
 * Each row is a separate grid container to guarantee correct column spans.
 */
function chunkIntoRows(items: ServiceItem[]): ServiceItem[][] {
  const rows: ServiceItem[][] = [];
  let i = 0;
  while (i < items.length) {
    if (i + 1 < items.length) {
      rows.push([items[i], items[i + 1]]);
      i += 2;
    } else {
      rows.push([items[i]]);
      i += 1;
    }
  }
  return rows;
}

export function BouncyCardsFeatures({ category }: { category: ServiceCategory }) {
  const { category: categoryName, icon: categoryIcon, description, items } = category;
  const rows = chunkIntoRows(items);

  return (
    <section className="relative mb-24">
      {/* Category header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card mb-12 p-8 md:p-10"
      >
        <div className="text-[#475569] mb-6">{categoryIcon}</div>
        <h2 className="text-3xl font-normal mb-4 uppercase tracking-tight text-[#0f172a]">
          {categoryName}
        </h2>
        <p className="text-[#64748b] font-light leading-relaxed max-w-2xl">
          {description}
        </p>
      </motion.div>

      {/* Bouncy cards — one grid container per row */}
      {rows.map((row, rowIndex) => {
        const isEvenRow = rowIndex % 2 === 0;
        return (
          <div key={rowIndex} className={`grid grid-cols-12 gap-4 ${rowIndex < rows.length - 1 ? "mb-4" : ""}`}>
            {row.map((item, colIndex) => {
              const globalIndex = rowIndex * 2 + colIndex;

              let colClass: string;
              if (row.length === 1) {
                colClass = "col-span-12";
              } else if (isEvenRow) {
                colClass = colIndex === 0 ? "col-span-12 md:col-span-4" : "col-span-12 md:col-span-8";
              } else {
                colClass = colIndex === 0 ? "col-span-12 md:col-span-8" : "col-span-12 md:col-span-4";
              }

              return (
                <BounceCard
                  key={item.title}
                  colClass={colClass}
                  item={item}
                  index={globalIndex}
                />
              );
            })}
          </div>
        );
      })}
    </section>
  );
}

const BounceCard = ({
  colClass,
  item,
  index,
}: {
  colClass: string;
  item: ServiceItem;
  index: number;
}) => {
  const panelGradient = PANEL_GRADIENTS[index % PANEL_GRADIENTS.length];

  return (
    <Link href={`/services/${slugify(item.title)}`} className={colClass}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 }}
        whileHover={{ scale: 0.95, rotate: "-1deg" }}
        className="group relative min-h-[320px] cursor-pointer overflow-hidden rounded-2xl glass-card p-8 h-full"
      >
        {/* Top: icon + title */}
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0f172a]/10 text-[#475569] group-hover:text-[#0f172a]">
            {item.icon}
          </div>
          <h3 className="mx-auto text-center text-2xl font-semibold text-[#0f172a] md:text-3xl">
            {item.title}
          </h3>
          <p className="line-clamp-2 max-w-md text-center text-sm font-light leading-snug text-[#64748b]">
            {item.desc}
          </p>
        </div>

        {/* Sliding panel */}
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

            <div className="mt-auto pt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white overflow-hidden whitespace-nowrap">
              <span>Learn More</span>
              <div className="h-[1px] flex-grow bg-white/20" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

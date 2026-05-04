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

// Brand blue & red alternating panel gradients
const PANEL_GRADIENTS = [
  { bg: "linear-gradient(135deg, #054FB8 0%, #1e3a8a 100%)", border: "rgba(5,79,184,0.4)" },
  { bg: "linear-gradient(135deg, #F32913 0%, #b91c1c 100%)", border: "rgba(243,41,19,0.4)" },
  { bg: "linear-gradient(135deg, #054FB8 0%, #0369a1 100%)", border: "rgba(5,79,184,0.4)" },
  { bg: "linear-gradient(135deg, #F32913 0%, #dc2626 100%)", border: "rgba(243,41,19,0.4)" },
  { bg: "linear-gradient(135deg, #0f172a 0%, #054FB8 100%)", border: "rgba(5,79,184,0.5)" },
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
  const panel = PANEL_GRADIENTS[index % PANEL_GRADIENTS.length];
  const isBlue = index % 2 === 0;

  return (
    <Link href={`/services/${slugify(item.title)}`} className={colClass}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 }}
        whileHover={{ scale: 0.95, rotate: "-1deg" }}
        className="group relative min-h-[320px] cursor-pointer overflow-hidden rounded-2xl p-8 h-full"
        style={{
          background: "rgba(255,255,255,0.65)",
          backdropFilter: "blur(32px) saturate(180%)",
          WebkitBackdropFilter: "blur(32px) saturate(180%)",
          border: `1.5px solid ${panel.border}`,
          boxShadow: `0 4px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)`,
        }}
      >
        {/* Subtle top accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
          style={{ background: panel.bg }}
        />

        {/* Top: icon + title */}
        <div className="relative z-10 flex flex-col items-center gap-3 mt-2">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-xl text-white"
            style={{ background: panel.bg }}
          >
            {item.icon}
          </div>
          <h3 className="mx-auto text-center text-2xl font-bold text-[#0f172a] md:text-3xl">
            {item.title}
          </h3>
          <p className="line-clamp-2 max-w-md text-center text-sm font-light leading-snug text-[#64748b]">
            {item.desc}
          </p>
        </div>

        {/* Sliding panel — brand gradient */}
        <div
          className="absolute bottom-0 left-4 right-4 top-40 rounded-t-2xl p-5 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] translate-y-8"
          style={{
            background: panel.bg,
            border: `1px solid ${panel.border}`,
            boxShadow: "0 -4px 20px rgba(0,0,0,0.12)",
          }}
        >
          <div className="flex h-full flex-col justify-center gap-3 overflow-hidden px-1">
            <span className="text-[10px] uppercase tracking-widest text-white/60 font-semibold">
              Capabilities
            </span>
            <ul className="space-y-2 text-left">
              {item.capabilities.slice(0, 5).map((cap) => (
                <li key={cap} className="flex items-center gap-2 text-sm font-medium text-white">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                  {cap}
                </li>
              ))}
            </ul>
            {item.capabilities.length > 5 && (
              <span className="text-xs text-white/50">
                +{item.capabilities.length - 5} more
              </span>
            )}
            <div className="mt-auto pt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/90 font-bold">
              <span>Learn More</span>
              <div className="h-[1px] flex-grow bg-white/30" />
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M7 2l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

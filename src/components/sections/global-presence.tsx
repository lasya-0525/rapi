"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Location {
    id: string;
    country: string;
    city: string;
    description: string;
    cx: number;
    cy: number;
}

const locations: Location[] = [
    {
        id: "usa",
        country: "United States",
        city: "California",
        description: "North American HQ — Innovation & Client Success",
        cx: 150,
        cy: 165,
    },
    {
        id: "germany",
        country: "Germany",
        city: "Europe",
        description: "European Operations — Enterprise & Compliance",
        cx: 480,
        cy: 135,
    },
    {
        id: "india",
        country: "India",
        city: "Hyderabad",
        description: "Global Delivery Center — Engineering & R&D",
        cx: 590,
        cy: 210,
    },
    {
        id: "uae",
        country: "UAE",
        city: "Dubai",
        description: "Middle East Hub — Strategic Partnerships",
        cx: 545,
        cy: 195,
    },
];

// Simplified world map SVG paths
const worldMapPath = `
  M 120,140 Q 130,110 160,115 Q 180,100 200,115 L 195,140 Q 185,170 175,195 Q 160,220 140,225 Q 125,215 115,195 Q 110,170 120,140 Z
  M 130,230 Q 135,225 145,228 Q 155,235 165,260 Q 160,280 145,290 Q 130,285 125,265 Q 122,245 130,230 Z
  M 435,100 Q 450,85 470,90 Q 490,85 510,100 Q 530,90 545,105 L 540,115 Q 555,120 560,135 Q 550,150 530,145 Q 520,155 500,160 Q 485,165 470,155 Q 455,160 440,150 Q 430,135 435,120 Z
  M 440,155 Q 450,160 460,165 Q 475,175 485,190 Q 490,205 470,220 Q 455,225 440,215 Q 435,200 430,180 Q 435,165 440,155 Z
  M 540,140 Q 555,135 570,145 Q 590,140 610,155 Q 625,170 630,190 Q 635,210 620,225 Q 610,235 595,230 Q 580,240 565,235 Q 545,225 540,210 Q 535,190 540,170 Q 538,155 540,140 Z
  M 560,245 Q 575,240 590,245 Q 610,255 620,270 Q 615,285 600,290 Q 580,295 565,280 Q 555,265 560,245 Z
  M 640,160 Q 660,145 685,150 Q 710,140 730,155 Q 745,165 740,180 Q 750,195 740,210 Q 730,220 710,215 Q 695,225 680,220 Q 665,225 650,215 Q 640,200 645,185 Q 635,175 640,160 Z
  M 635,240 Q 660,230 690,240 Q 720,250 740,270 Q 750,290 730,310 Q 705,325 680,315 Q 660,310 650,295 Q 640,275 635,260 Q 630,250 635,240 Z
`;

export default function GlobalPresenceMap() {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-5 lg:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-[12px] uppercase tracking-[0.3em] text-white/40 mb-4 block">
                        Where We Operate
                    </span>
                    <h2 className="text-4xl md:text-5xl font-normal leading-tight tracking-tight text-white">
                        Global Presence
                    </h2>
                    <p className="mt-4 text-white/50 font-light max-w-2xl mx-auto">
                        Strategically positioned across four continents to deliver innovation at every timezone.
                    </p>
                </motion.div>

                {/* Map Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative max-w-5xl mx-auto"
                >
                    <div className="relative bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-sm">
                        <svg
                            viewBox="0 0 900 400"
                            className="w-full h-auto"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {/* Grid lines */}
                            <defs>
                                <pattern id="mapGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="0.3" opacity="0.05" />
                                </pattern>
                            </defs>
                            <rect width="900" height="400" fill="url(#mapGrid)" />

                            {/* Continents */}
                            <path
                                d={worldMapPath}
                                fill="white"
                                fillOpacity="0.06"
                                stroke="white"
                                strokeWidth="0.5"
                                strokeOpacity="0.15"
                            />

                            {/* Connection lines between offices */}
                            <g opacity="0.15">
                                <line x1="150" y1="165" x2="480" y2="135" stroke="#054FB8" strokeWidth="0.8" strokeDasharray="4 4" />
                                <line x1="480" y1="135" x2="590" y2="210" stroke="#054FB8" strokeWidth="0.8" strokeDasharray="4 4" />
                                <line x1="480" y1="135" x2="545" y2="195" stroke="#054FB8" strokeWidth="0.8" strokeDasharray="4 4" />
                                <line x1="545" y1="195" x2="590" y2="210" stroke="#054FB8" strokeWidth="0.8" strokeDasharray="4 4" />
                            </g>

                            {/* Location Markers */}
                            {locations.map((loc) => {
                                const isActive = hovered === loc.id;
                                return (
                                    <g
                                        key={loc.id}
                                        onMouseEnter={() => setHovered(loc.id)}
                                        onMouseLeave={() => setHovered(null)}
                                        className="cursor-pointer"
                                    >
                                        {/* Pulse ring */}
                                        <circle
                                            cx={loc.cx}
                                            cy={loc.cy}
                                            r={isActive ? 20 : 12}
                                            fill={isActive ? "#054FB8" : "transparent"}
                                            fillOpacity={isActive ? 0.15 : 0}
                                            stroke={isActive ? "#054FB8" : "transparent"}
                                            strokeWidth="1"
                                            className="transition-all duration-500"
                                        />
                                        {/* Core dot */}
                                        <circle
                                            cx={loc.cx}
                                            cy={loc.cy}
                                            r={isActive ? 6 : 4}
                                            fill={isActive ? "#054FB8" : "#F32913"}
                                            className="transition-all duration-300"
                                        />
                                        {/* Breathing animation ring */}
                                        <circle
                                            cx={loc.cx}
                                            cy={loc.cy}
                                            r="4"
                                            fill="none"
                                            stroke={isActive ? "#054FB8" : "#F32913"}
                                            strokeWidth="1"
                                            opacity="0.4"
                                        >
                                            <animate
                                                attributeName="r"
                                                values="4;14;4"
                                                dur="2.5s"
                                                repeatCount="indefinite"
                                            />
                                            <animate
                                                attributeName="opacity"
                                                values="0.5;0;0.5"
                                                dur="2.5s"
                                                repeatCount="indefinite"
                                            />
                                        </circle>

                                        {/* Label */}
                                        <text
                                            x={loc.cx}
                                            y={loc.cy - 18}
                                            textAnchor="middle"
                                            fill="white"
                                            fontSize="9"
                                            fontWeight="500"
                                            letterSpacing="0.1em"
                                            opacity={isActive ? 1 : 0.5}
                                            className="transition-opacity duration-300 uppercase pointer-events-none"
                                        >
                                            {loc.country}
                                        </text>
                                    </g>
                                );
                            })}
                        </svg>

                        {/* Hover tooltip */}
                        <AnimatePresence>
                            {hovered && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 border border-white/15 backdrop-blur-xl rounded-xl px-6 py-4 min-w-[280px] text-center"
                                >
                                    {locations
                                        .filter((l) => l.id === hovered)
                                        .map((loc) => (
                                            <div key={loc.id}>
                                                <h4 className="text-white font-medium text-sm tracking-wide">
                                                    {loc.city}, <span className="text-[#054FB8]">{loc.country}</span>
                                                </h4>
                                                <p className="text-white/50 text-xs mt-1 font-light">
                                                    {loc.description}
                                                </p>
                                            </div>
                                        ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Legend */}
                    <div className="flex flex-wrap items-center justify-center gap-8 mt-8">
                        {locations.map((loc) => (
                            <div
                                key={loc.id}
                                onMouseEnter={() => setHovered(loc.id)}
                                onMouseLeave={() => setHovered(null)}
                                className={`flex items-center gap-2 cursor-pointer transition-all duration-300 ${hovered === loc.id ? "opacity-100" : "opacity-50 hover:opacity-80"
                                    }`}
                            >
                                <div className={`w-2 h-2 rounded-full ${hovered === loc.id ? "bg-[#054FB8]" : "bg-[#F32913]"} transition-colors duration-300`} />
                                <span className="text-xs uppercase tracking-widest text-white font-light">
                                    {loc.country}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

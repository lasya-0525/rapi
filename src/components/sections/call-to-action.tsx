"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Call-to-Action section for the homepage.
 * Full-width banner with gradient accent and two CTA buttons.
 */
export default function CallToAction() {
    return (
        <section className="relative py-32 md:py-40 overflow-hidden bg-black">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
                    style={{
                        background:
                            "radial-gradient(circle, #054FB8 0%, transparent 70%)",
                    }}
                />
            </div>

            <div className="container relative z-10 mx-auto px-5 lg:px-10 text-center">
                {/* Pre-label */}
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="inline-block text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#054FB8] font-semibold mb-6"
                >
                    Ready to Innovate?
                </motion.span>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl mx-auto mb-6"
                >
                    Let&apos;s Build Something{" "}
                    <span className="bg-gradient-to-r from-[#054FB8] to-[#4A9FF5] bg-clip-text text-transparent">
                        Extraordinary
                    </span>
                </motion.h2>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-[14px] md:text-[16px] text-white/50 max-w-xl mx-auto mb-12 leading-relaxed"
                >
                    Partner with RapinnoTech to accelerate your digital transformation.
                    From ideation to deployment — we deliver innovation at speed.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-5"
                >
                    {/* Primary CTA */}
                    <a
                        href="/contact"
                        className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#054FB8] text-white text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-semibold overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(5,79,184,0.4)]"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-[#054FB8] to-[#3b82f6] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="relative z-10">Get Started</span>
                        <svg
                            className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>

                    {/* Secondary CTA */}
                    <a
                        href="/services"
                        className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full border border-white/15 text-white/70 text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-medium overflow-hidden transition-all duration-500 hover:border-white/30 hover:text-white"
                    >
                        <div className="absolute inset-0 bg-white/[0.03] group-hover:bg-white/[0.06] transition-colors duration-500" />
                        <span className="relative z-10">Explore Services</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

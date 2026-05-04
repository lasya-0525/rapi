"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Call-to-Action section for the homepage.
 * Full-width banner with gradient accent and two CTA buttons.
 */
export default function CallToAction() {
    return (
        <section className="relative py-8 md:py-12 overflow-hidden px-5 lg:px-10">
            {/* Main card */}
            <div className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#054FB8] to-[#1e3a8a]" />

                {/* Decorative orbs */}
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20"
                    style={{ background: "radial-gradient(circle, #F32913 0%, transparent 70%)" }} />
                <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-15"
                    style={{ background: "radial-gradient(circle, #4A9FF5 0%, transparent 70%)" }} />

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E")`,
                    }} />

                <div className="relative z-10 py-20 md:py-28 px-8 md:px-16 text-center">
                    {/* Pre-label */}
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-white/60 font-semibold mb-6 border border-white/20 rounded-full px-4 py-1.5"
                    >
                        Ready to Innovate?
                    </motion.span>

                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] max-w-4xl mx-auto mb-6 tracking-tight"
                    >
                        Let&apos;s Build Something{" "}
                        <span className="bg-gradient-to-r from-[#F32913] via-[#ff6b47] to-[#fbbf24] bg-clip-text text-transparent">
                            Extraordinary
                        </span>
                    </motion.h2>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base md:text-lg text-white/60 max-w-xl mx-auto mb-12 leading-relaxed font-light"
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
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        {/* Primary CTA */}
                        <a
                            href="/contact"
                            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white text-[#0f172a] text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-bold overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:scale-105"
                        >
                            <span className="relative z-10">Get Started</span>
                            <svg
                                className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>

                        {/* Secondary CTA */}
                        <a
                            href="/services"
                            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full border border-white/25 text-white text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-medium overflow-hidden transition-all duration-500 hover:border-white/60 hover:bg-white/10"
                        >
                            <span className="relative z-10">Explore Services</span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

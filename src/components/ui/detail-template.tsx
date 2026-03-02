"use client";

import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import Link from "next/link";

interface DetailProps {
    title: string;
    category: string;
    description: string;
    elaboratedText: string;
    features: string[];
    benefits: string[];
    imageUrl: string;
    iconName: string;
}

export const DetailTemplate: React.FC<DetailProps> = ({
    title,
    category,
    description,
    elaboratedText,
    features,
    benefits,
    imageUrl,
    iconName,
}) => {
    // Dynamically get the icon from Lucide
    const Icon = (LucideIcons as any)[iconName] || LucideIcons.Zap;

    return (
        <div className="min-h-screen bg-black text-white selection:bg-white/20 pb-20">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover opacity-40 grayscale-[20%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />
                </div>

                <div className="container relative z-10 mx-auto px-5 lg:px-10 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[10px] md:text-[12px] uppercase tracking-[0.5em] text-[#054FB8] mb-6 block">
                            {category}
                        </span>
                        <h1 className="text-[10vw] md:text-[7vw] font-normal leading-[0.9] tracking-tighter mb-8">
                            {title}
                        </h1>
                        <p className="text-lg md:text-xl font-light text-white/60 max-w-2xl mx-auto leading-relaxed">
                            {description}
                        </p>
                    </motion.div>
                </div>

                {/* Floating Icon backdrop */}
                <div className="absolute right-[-5%] bottom-[-5%] opacity-5 select-none pointer-events-none">
                    <Icon size={400} strokeWidth={0.5} />
                </div>
            </section>

            {/* Content Section */}
            <section className="container mx-auto px-5 lg:px-10 -mt-20 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Main Text */}
                    <div className="lg:col-span-12">
                        <div className="glass-card p-10 md:p-16">
                            <h2 className="text-2xl md:text-3xl font-normal mb-8 text-white/90">Overview</h2>
                            <p className="text-lg md:text-2xl font-light text-white/50 leading-relaxed indent-12">
                                {elaboratedText}
                            </p>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="lg:col-span-7">
                        <h2 className="text-[12px] uppercase tracking-[0.3em] text-white/30 mb-8 px-2">Key Capabilities</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {features.map((feature, i) => (
                                <motion.div
                                    key={feature}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass-card p-6 flex items-start gap-4 border border-white/5 hover:border-white/20 transition-all group"
                                >
                                    <div className="mt-1 text-white/30 group-hover:text-[#054FB8] transition-colors">
                                        <LucideIcons.CheckCircle2 size={16} />
                                    </div>
                                    <span className="text-[15px] font-light text-white/70 group-hover:text-white">
                                        {feature}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Benefits List */}
                    <div className="lg:col-span-5">
                        <h2 className="text-[12px] uppercase tracking-[0.3em] text-white/30 mb-8 px-2">Market Impact</h2>
                        <div className="space-y-4">
                            {benefits.map((benefit, i) => (
                                <motion.div
                                    key={benefit}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass-card p-6 border-l-2 border-l-white/10 hover:border-l-[#054FB8] transition-all bg-white/[0.02]"
                                >
                                    <span className="text-lg font-light text-white/80">
                                        {benefit}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-32 text-center border-t border-white/5 pt-32">
                    <p className="text-[12px] uppercase tracking-[0.4em] text-white/30 mb-10">Interested in this solution?</p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <Link
                            href="/contact"
                            className="text-4xl md:text-6xl font-light hover:opacity-50 transition-all group flex items-center gap-4"
                        >
                            Start a project <LucideIcons.ArrowUpRight className="w-10 h-10 md:w-16 md:h-16 opacity-20 group-hover:opacity-100 group-hover:text-[#054FB8] transition-all" />
                        </Link>
                    </div>
                </div>
            </section>

            <style jsx global>{`
        .glass-card {
           background: rgba(255, 255, 255, 0.03);
           backdrop-filter: blur(20px);
           border-radius: 4px;
           border: 1px solid rgba(255, 255, 255, 0.08);
        }
      `}</style>
        </div>
    );
};

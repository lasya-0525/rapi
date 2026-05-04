"use client";

import React from "react";
import WorldMap from "@/components/ui/world-map";
import { motion } from "framer-motion";

export default function GlobalPresenceMap() {
    return (
        <section className="py-24 bg-transparent w-full relative px-5 lg:px-10">
            <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden glass-card border border-white/70 p-6 md:p-10">
            <WorldMap
                dotColor="#F97316"
                locations={[
                    { lat: 36.7783, lng: -119.4179, label: "California", labelPosition: "top" },
                    { lat: 43.6532, lng: -79.3832, label: "Toronto", labelPosition: "top" },
                    { lat: 51.1657, lng: 10.4515, label: "Germany", labelPosition: "top" },
                    { lat: 17.3850, lng: 78.4867, label: "Hyderabad", labelPosition: "left" },
                    { lat: 12.9716, lng: 77.5946, label: "Bengaluru", labelPosition: "bottom" },
                    { lat: -33.8688, lng: 151.2093, label: "Sydney", labelPosition: "top" },
                ]}
            />

            <div className="max-w-7xl mx-auto text-center mt-8 pb-4">
                <p className="font-extrabold font-display tracking-tight text-3xl md:text-5xl text-[#054FB8]">
                    We Are Here To{" "}
                    <span className="text-brand-red">
                        {"Help You".split("").map((letter, idx) => (
                            <motion.span
                                key={idx}
                                className="inline-block"
                                initial={{ x: -10, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.04 }}
                            >
                                {letter === " " ? "\u00A0" : letter}
                            </motion.span>
                        ))}
                    </span>
                </p>
            </div>
            </div>
        </section>
    );
}

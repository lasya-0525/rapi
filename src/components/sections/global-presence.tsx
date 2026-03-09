"use client";

import React from "react";
import WorldMap from "@/components/ui/world-map";
import { motion } from "framer-motion";

export default function GlobalPresenceMap() {
    return (
        <section className="py-24 bg-black w-full relative">
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

            <div className="max-w-7xl mx-auto text-center px-5 lg:px-10 mt-12 pb-10">
                <p className="font-bold font-display tracking-tight text-3xl md:text-5xl text-brand-blue">
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
                <div className="absolute right-10 bottom-10">
                    <button className="bg-white text-black p-3 rounded-md hover:opacity-80 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}

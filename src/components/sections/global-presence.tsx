"use client";

import React from "react";
import WorldMap from "@/components/ui/world-map";
import { motion } from "framer-motion";

export default function GlobalPresenceMap() {
    return (
        <section className="py-24 bg-black w-full">
            <div className="max-w-7xl mx-auto text-center px-5 lg:px-10">
                <p className="font-bold text-xl md:text-4xl text-white">
                    Global{" "}
                    <span className="text-neutral-400">
                        {"Presence".split("").map((letter, idx) => (
                            <motion.span
                                key={idx}
                                className="inline-block"
                                initial={{ x: -10, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.04 }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </span>
                </p>
                <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
                    Strategically positioned across four continents to deliver innovation
                    at every timezone. From California to Hyderabad, we operate where our
                    clients need us most.
                </p>
            </div>
            <WorldMap
                dotColor="#054FB8"
                locations={[
                    { lat: 37.0902, lng: -95.7129, label: "USA", labelPosition: "bottom" },
                    { lat: 53.3811, lng: -1.4701, label: "UK", labelPosition: "top" },
                    { lat: 51.1657, lng: 10.4515, label: "GERMANY", labelPosition: "right" },
                    { lat: 20.5937, lng: 78.9629, label: "INDIA", labelPosition: "bottom" },
                    { lat: -25.2744, lng: 133.7751, label: "AUSTRALIA", labelPosition: "bottom" },
                ]}
            />
        </section>
    );
}

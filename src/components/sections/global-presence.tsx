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
                lineColor="#054FB8"
                dots={[
                    {
                        start: { lat: 33.6846, lng: -117.8265 },  // Irvine, California (USA HQ)
                        end: { lat: 17.385, lng: 78.4867 },        // Hyderabad, India (Delivery Center)
                    },
                    {
                        start: { lat: 17.385, lng: 78.4867 },      // Hyderabad, India
                        end: { lat: 50.1109, lng: 8.6821 },         // Frankfurt, Germany (EU Office)
                    },
                    {
                        start: { lat: 50.1109, lng: 8.6821 },       // Frankfurt, Germany
                        end: { lat: 33.6846, lng: -117.8265 },      // Back to California
                    },
                    {
                        start: { lat: 17.385, lng: 78.4867 },       // Hyderabad, India
                        end: { lat: 25.2048, lng: 55.2708 },         // Dubai, UAE
                    },
                    {
                        start: { lat: 25.2048, lng: 55.2708 },       // Dubai, UAE
                        end: { lat: 50.1109, lng: 8.6821 },          // Frankfurt, Germany
                    },
                ]}
            />
        </section>
    );
}

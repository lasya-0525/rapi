"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";

interface MapLocation {
    lat: number;
    lng: number;
    label: string;
    labelPosition?: "top" | "bottom" | "left" | "right";
}

interface MapProps {
    locations?: MapLocation[];
    dotColor?: string;
}

export default function WorldMap({
    locations = [],
    dotColor = "#054FB8",
}: MapProps) {
    const svgRef = useRef<SVGSVGElement>(null);
    const map = new DottedMap({ height: 100, grid: "diagonal" });

    const svgMap = map.getSVG({
        radius: 0.25,
        color: "#054FB880",
        shape: "circle",
        backgroundColor: "transparent",
    });

    const projectPoint = (lat: number, lng: number) => {
        const x = (lng + 180) * (800 / 360);
        const y = (90 - lat) * (400 / 180);
        return { x, y };
    };

    const getLabelOffset = (position: string) => {
        switch (position) {
            case "top":
                return { dx: 0, dy: -10, anchor: "middle" as const };
            case "bottom":
                return { dx: 0, dy: 16, anchor: "middle" as const };
            case "left":
                return { dx: -8, dy: 4, anchor: "end" as const };
            case "right":
                return { dx: 8, dy: 4, anchor: "start" as const };
            default:
                return { dx: 0, dy: -10, anchor: "middle" as const };
        }
    };

    return (
        <div className="w-full aspect-[2/1] bg-transparent rounded-lg relative font-sans">
            <img
                src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
                className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
                alt="world map"
                height="495"
                width="1056"
                draggable={false}
            />
            <svg
                ref={svgRef}
                viewBox="0 0 800 400"
                className="w-full h-full absolute inset-0 pointer-events-none select-none"
            >
                {locations.map((loc, i) => {
                    const point = projectPoint(loc.lat, loc.lng);
                    const labelPos = getLabelOffset(loc.labelPosition || "top");
                    return (
                        <g key={`location-${i}`}>
                            {/* Solid dot */}
                            <circle
                                cx={point.x}
                                cy={point.y}
                                r="3"
                                fill={dotColor}
                            />
                            {/* Pulsing ring */}
                            <circle
                                cx={point.x}
                                cy={point.y}
                                r="3"
                                fill={dotColor}
                                opacity="0.5"
                            >
                                <animate
                                    attributeName="r"
                                    from="3"
                                    to="10"
                                    dur="1.5s"
                                    begin="0s"
                                    repeatCount="indefinite"
                                />
                                <animate
                                    attributeName="opacity"
                                    from="0.5"
                                    to="0"
                                    dur="1.5s"
                                    begin="0s"
                                    repeatCount="indefinite"
                                />
                            </circle>
                            {/* Place name label */}
                            <motion.text
                                x={point.x + labelPos.dx}
                                y={point.y + labelPos.dy}
                                textAnchor={labelPos.anchor}
                                fill="#0f172a"
                                fontSize="9"
                                fontWeight="700"
                                fontFamily="sans-serif"
                                letterSpacing="0.5"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.3 * i,
                                    ease: "easeOut",
                                }}
                            >
                                {loc.label}
                            </motion.text>
                        </g>
                    );
                })}
            </svg>
        </div>
    );
}

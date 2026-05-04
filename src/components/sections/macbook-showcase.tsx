"use client";

import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export default function MacbookShowcase() {
    return (
        <div className="w-full overflow-hidden bg-[#e5e7eb]">
            <MacbookScroll
                title={
                    <span>
                        Built for Speed. <br /> Engineered for Scale.
                    </span>
                }
                src="/ls.jpg"
                showGradient={true}
            />
        </div>
    );
}

"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const AuroraBackground = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                "fixed inset-0 z-[-50] w-full h-full flex items-center justify-center transition-bg pointer-events-none bg-black",
                className
            )}
        >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className={cn(
                        `
          [--dark-gradient:repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)]
          [--aurora:repeating-linear-gradient(100deg,#00ff96_10%,#ff0096_15%,#7800ff_20%,#00ff96_25%,#ff0096_30%)]
          [background-image:var(--dark-gradient),var(--aurora)]
          [background-size:300%,_200%]
          [background-position:50%_50%,50%_50%]
          filter blur-[10px]
          after:content-[""] after:absolute after:inset-0 after:[background-image:var(--dark-gradient),var(--aurora)] 
          after:[background-size:200%,_100%] 
          after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
          pointer-events-none
          absolute -inset-[10px] opacity-[0.15] will-change-transform`
                    )}
                ></div>
            </div>
        </div>
    );
};

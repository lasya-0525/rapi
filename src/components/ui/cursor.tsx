"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Custom Cursor Component
 * Clones the dot-following cursor from the monopo saigon website.
 * It uses a specific SVG icon (b4cd8ef9cb4bb3b7ec01ea962ee268cc.svg) as visual feedback
 * and follows the mouse movement with a slight lag for "ethereal" feel.
 */

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if target or parent is interactive (a, button, or elements with specific classes)
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("burger") ||
        target.classList.contains("cta")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (typeof window === "undefined") return null;

  // Custom Cursor Style based on high_level_design and computed_styles
  // The dot-cursor class in HTML structure contains an image and a span
  return (
    <div
      className={`dot-cursor pointer-events-none fixed z-[9999] flex items-center justify-center transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
        // Using a slight mix-blend-mode often found in such high-end portfolios
        mixBlendMode: "difference",
      }}
    >
      {/* 
        The specific SVG asset provided in the prompt.
        In the source it's: /_nuxt/b4cd8ef9cb4bb3b7ec01ea962ee268cc.svg
      */}
      <div 
        className={`relative transition-transform duration-500 ease-out ${
          isHovering ? "scale-[2.5]" : "scale-100"
        }`}
      >
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/acc78eba-97f0-496d-a5a0-c62b14e76e8d-monopo-vn/assets/svgs/b4cd8ef9cb4bb3b7ec01ea962ee268cc-1.svg"
          alt="Cursor Icon"
          width={18}
          height={18}
          priority
          className="block h-auto w-[18px]"
        />
        
        {/* Core Dot (represented by the <span> in original structure) */}
        <span 
          className="absolute left-1/2 top-1/2 h-[4px] w-[4px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-0"
        />
      </div>

      <style jsx global>{`
        /* Hide default cursor only when the custom one is active and on desktop */
        @media (min-width: 1024px) {
          html.notouch body, 
          html.notouch a, 
          html.notouch button {
            cursor: none !important;
          }
        }
        
        /* Disable on mobile for better UX */
        @media (max-width: 1023px) {
          .dot-cursor {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Cursor;
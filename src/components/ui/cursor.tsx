"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

const SMOOTH_FACTOR = 0.12; // Lower = more latency, smoother trail

/**
 * Custom Cursor: same cursor as before + a small white dot that follows
 * with latency for a smooth trailing effect.
 */
const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const dotRef = useRef<{ x: number; y: number } | null>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      setPosition({ x, y });
      if (dotRef.current === null) dotRef.current = { x, y };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
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

  // Smooth follow for the dot (latency / trail effect)
  useEffect(() => {
    const lerp = (start: number, end: number, t: number) => start + (end - start) * t;

    const animate = () => {
      if (dotRef.current === null) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }
      dotRef.current.x = lerp(dotRef.current.x, position.x, SMOOTH_FACTOR);
      dotRef.current.y = lerp(dotRef.current.y, position.y, SMOOTH_FACTOR);
      setDotPosition({ x: dotRef.current.x, y: dotRef.current.y });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [position]);

  if (typeof window === "undefined") return null;

  return (
    <>
      {/* Main cursor – same as before, at actual position */}
      <div
        className={`dot-cursor pointer-events-none fixed z-[9999] flex items-center justify-center transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          mixBlendMode: "difference",
        }}
      >
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
        </div>
      </div>

      {/* Small white dot – follows with latency for smooth trail */}
      <div
        className={`dot-cursor pointer-events-none fixed z-[9998] transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: `${dotPosition.x}px`,
          top: `${dotPosition.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <span className="block h-2 w-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
      </div>

      <style jsx global>{`
        @media (min-width: 1024px) {
          html.notouch body,
          html.notouch a,
          html.notouch button {
            cursor: none !important;
          }
        }
        @media (max-width: 1023px) {
          .dot-cursor {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Cursor;
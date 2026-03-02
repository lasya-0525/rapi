"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

/**
 * Cookie Policy Popup
 * - Position: Fixed bottom-center
 * - Style: Liquid glass background (blur + transparency)
 * - Animated entrance/exit
 */
export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookie-consent");
    if (!hasAccepted) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] w-[94vw] max-w-xl pointer-events-auto"
          role="alert"
          aria-live="polite"
        >
          <div className="cookie-glass rounded-2xl px-6 py-5 md:px-8 md:py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            {/* Cookie icon */}
            <div className="flex-shrink-0 hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.06] border border-white/10">
              <span className="text-lg">🍪</span>
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="text-[13px] leading-[1.6] text-white/70 font-normal">
                We use cookies to enhance your browsing experience and analyze site traffic.{" "}
                <a
                  href="https://www.termsfeed.com/live/cb97eed2-d236-4c42-bb7e-0938835e60e3"
                  className="text-white underline underline-offset-2 decoration-white/30 hover:decoration-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cookie Policy
                </a>
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={handleAccept}
                className="h-9 px-6 bg-[#054FB8] hover:bg-[#0960d6] text-white text-[11px] font-semibold uppercase tracking-[0.1em] rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(5,79,184,0.3)]"
              >
                Accept
              </button>
              <button
                onClick={handleClose}
                className="flex items-center justify-center w-8 h-8 rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300"
                aria-label="Close cookie banner"
              >
                <X size={14} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          <style jsx>{`
            .cookie-glass {
              background: rgba(10, 10, 14, 0.55);
              backdrop-filter: blur(40px) saturate(1.8);
              -webkit-backdrop-filter: blur(40px) saturate(1.8);
              border: 1px solid rgba(255, 255, 255, 0.08);
              box-shadow:
                0 20px 60px rgba(0, 0, 0, 0.4),
                0 0 0 1px rgba(255, 255, 255, 0.04) inset,
                0 1px 0 rgba(255, 255, 255, 0.06) inset;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
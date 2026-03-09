"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

/**
 * Cookie Consent Banner
 * - Essential cookies are always active (mandatory)
 * - Users can accept all or reject non-essential cookies
 * - Decision is persisted in localStorage so banner never reappears
 */
export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
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
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] w-[94vw] max-w-2xl pointer-events-auto"
          role="alert"
          aria-live="polite"
        >
          <div className="cookie-glass rounded-2xl px-6 py-5 md:px-8 md:py-6">
            {/* Top row: icon + text */}
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.06] border border-white/10">
                <span className="text-lg">🍪</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-medium text-white/90 mb-1">Cookie Preferences</p>
                <p className="text-[12px] leading-[1.6] text-white/55 font-normal">
                  We use <span className="text-white/80">essential cookies</span> (always active) to keep the site working, and optional analytics cookies to improve your experience.{" "}
                  <Link
                    href="/cookie-policy"
                    className="text-white underline underline-offset-2 decoration-white/30 hover:decoration-white transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </p>
              </div>
            </div>

            {/* Essential cookies note */}
            <div className="flex items-center gap-2 mb-4 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.06]">
              <div className="w-2 h-2 rounded-full bg-[#F32913] flex-shrink-0" />
              <p className="text-[11px] text-white/40 font-normal">
                Essential cookies are mandatory and cannot be disabled — they are required for core site functionality.
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 justify-end">
              <button
                onClick={handleReject}
                className="h-9 px-5 border border-white/15 text-white/60 hover:text-white hover:border-white/30 text-[11px] font-semibold uppercase tracking-[0.1em] rounded-full transition-all duration-300"
              >
                Reject Non-Essential
              </button>
              <button
                onClick={handleAccept}
                className="h-9 px-6 bg-[#054FB8] hover:bg-[#0960d6] text-white text-[11px] font-semibold uppercase tracking-[0.1em] rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(5,79,184,0.3)]"
              >
                Accept All
              </button>
            </div>
          </div>

          <style jsx>{`
            .cookie-glass {
              background: rgba(10, 10, 14, 0.7);
              backdrop-filter: blur(40px) saturate(1.8);
              -webkit-backdrop-filter: blur(40px) saturate(1.8);
              border: 1px solid rgba(255, 255, 255, 0.08);
              box-shadow:
                0 20px 60px rgba(0, 0, 0, 0.5),
                0 0 0 1px rgba(255, 255, 255, 0.04) inset,
                0 1px 0 rgba(255, 255, 255, 0.06) inset;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

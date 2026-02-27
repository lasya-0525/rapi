"use client";

import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";

const manifestoLines = [
  "We Innovate,",
  "Automate, and",
  "Transform.",
  "We are technology natives",
  "embracing the",
  "creative freedom to",
  "deliver solutions",
  "that connect,",
  "scale, and",
  "inspire.",
];

const ManifestoLine = ({ text }: { text: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.8,
    margin: "0px 0px -10% 0px",
  });

  return (
    <span
      ref={ref}
      className="relative block overflow-hidden leading-[1.4] text-manifesto"
    >
      <span
        className={`inline-block transition-transform duration-1000 ease-out ${isInView ? "translate-y-0" : "translate-y-full"
          }`}
      >
        {text}
      </span>
    </span>
  );
};

const ManifestoIcon = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 100 100"
    className="manifesto--icon mt-16 opacity-80"
    aria-hidden="true"
  >
    {/* Three-circle icon representing RapinnoTech's core values:
      Innovate, Automate, Transform. */}
    <circle
      cx="50"
      cy="35"
      r="18"
      fill="none"
      stroke="white"
      strokeWidth="1.5"
    />
    <circle
      cx="38"
      cy="58"
      r="18"
      fill="none"
      stroke="white"
      strokeWidth="1.5"
    />
    <circle
      cx="62"
      cy="58"
      r="18"
      fill="none"
      stroke="white"
      strokeWidth="1.5"
    />
  </svg>
);

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative min-h-[80vh] py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Section Title */}
      <span className="absolute top-10 left-5 md:left-10 text-section-title tracking-[0.1em] opacity-40">
        About Us
      </span>

      <div className="container max-w-[80vw] flex flex-col items-center">
        <div className="flex flex-col items-center text-center space-y-2">
          {manifestoLines.map((line, index) => (
            <ManifestoLine key={index} text={line} />
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center">
          <ManifestoIcon />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12"
          >
            <a
              href="/about"
              className="px-8 py-3 rounded-full border border-white/20 text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500"
            >
              Read Full Story
            </a>
          </motion.div>
        </div>

        {/* About description teaser */}
        <p className="mt-16 text-center text-[16px] md:text-[18px] text-white/60 font-light max-w-3xl leading-relaxed">
          RapinnoTech Solutions is a software innovation company dedicated to delivering technological breakthroughs at a rapid pace. Our mission is to help clients achieve their business goals through innovative solutions and flexible service offerings.
        </p>
      </div>

      <style jsx global>{`
        .text-manifesto {
          font-family: var(--font-sans);
          font-size: 4.5vw;
          line-height: 1.4;
          font-weight: 400;
          letter-spacing: -0.01em;
          color: #ffffff;
        }

        @media (max-width: 768px) {
          .text-manifesto {
            font-size: 8vw;
            line-height: 1.3;
          }
        }

        .text-section-title {
          font-size: 12px;
          font-weight: 500;
          text-transform: uppercase;
        }

        .manifesto--icon {
          animation: pulse 4s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.02);
          }
        }
      `}</style>
    </section>
  );
}
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * The signature visual for Harbour Matcha's hero: a hand-whisked chasen
 * moving in the same brisk W/Z zigzag motion used to whisk real matcha —
 * not a circular stir — with soft ripples expanding outward as it works.
 *
 * All motion here pauses once the element scrolls off-screen (via
 * useInView) — an infinite-loop animation has no reason to keep running
 * and consuming CPU/battery three sections down the page.
 */
export default function MatchaWhisk() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "-10% 0px -10% 0px" });

  return (
    <div
      ref={containerRef}
      className="relative mx-auto flex h-[280px] w-[280px] items-center justify-center sm:h-[360px] sm:w-[360px]"
    >
      {/* Ripples */}
      {[0, 0.8, 1.6].map((delay) => (
        <span
          key={delay}
          className="absolute h-40 w-40 rounded-full border border-matcha/40 sm:h-52 sm:w-52"
          style={{
            animation: `ripple 2.4s ease-out ${delay}s infinite`,
            animationPlayState: isInView ? "running" : "paused",
          }}
        />
      ))}

      {/* Bowl */}
      <svg
        width="220"
        height="220"
        viewBox="0 0 220 220"
        className="relative drop-shadow-[0_25px_40px_rgba(36,51,36,0.18)] sm:h-[280px] sm:w-[280px]"
      >
        <defs>
          <radialGradient id="matchaSurface" cx="45%" cy="40%" r="65%">
            <stop offset="0%" stopColor="#87A874" />
            <stop offset="100%" stopColor="#56714A" />
          </radialGradient>
          <linearGradient id="bowlBody" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#EFE6D8" />
            <stop offset="100%" stopColor="#DCCEB4" />
          </linearGradient>
        </defs>
        <path
          d="M30 90 C30 90 40 190 110 190 C180 190 190 90 190 90 Z"
          fill="url(#bowlBody)"
          stroke="#243324"
          strokeOpacity="0.15"
          strokeWidth="1.5"
        />
        <ellipse cx="110" cy="90" rx="80" ry="18" fill="url(#matchaSurface)" />
        <ellipse cx="110" cy="90" rx="80" ry="18" fill="none" stroke="#243324" strokeOpacity="0.12" strokeWidth="1.5" />
      </svg>

      {/* Whisk — traces a brisk W/Z zigzag across the bowl, the real
          hand-whisking motion, instead of a circular stir */}
      <motion.div
        className="absolute"
        style={{ top: "14%" }}
        animate={
          isInView
            ? {
                x: [-30, 30, -30, 30, -30],
                y: [2, -8, 2, -8, 2],
              }
            : {}
        }
        transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.svg
          width="90"
          height="150"
          viewBox="0 0 90 150"
          animate={isInView ? { rotate: [-6, 6, -6] } : {}}
          transition={{ duration: 0.35, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "45px 20px" }}
        >
          <line x1="45" y1="6" x2="40" y2="60" stroke="#B98A63" strokeWidth="4" strokeLinecap="round" />
          <g stroke="#C9A87C" strokeWidth="1.6" strokeLinecap="round" fill="none">
            <path d="M40 55 Q20 90 30 120" />
            <path d="M40 58 Q30 95 38 122" />
            <path d="M41 60 Q40 98 45 124" />
            <path d="M42 58 Q52 96 50 122" />
            <path d="M42 55 Q62 90 56 118" />
          </g>
        </motion.svg>
      </motion.div>
    </div>
  );
}

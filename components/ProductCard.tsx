"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Drink } from "@/lib/types";

interface ProductCardProps {
  drink: Drink;
  index: number;
}

export default function ProductCard({ drink, index }: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // Mutates CSS custom properties directly via refs instead of React state,
  // so mouse movement never triggers a re-render of the card (image, text,
  // badge) — only the browser's compositor repaints the glow gradient.
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect || !glowRef.current) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    glowRef.current.style.setProperty("--glow-x", `${x}%`);
    glowRef.current.style.setProperty("--glow-y", `${y}%`);
    glowRef.current.style.opacity = "1";
  }

  function handleMouseLeave() {
    if (glowRef.current) glowRef.current.style.opacity = "0";
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative overflow-hidden rounded-[28px] bg-beige/60 p-3 shadow-soft transition-shadow duration-500 hover:shadow-card dark:bg-forest-light/40"
    >
      {/* Mouse-following glow — position driven by CSS vars set via ref, opacity via inline style, no React re-render */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 z-20 rounded-[28px] opacity-0 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(280px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(110,143,92,0.35), transparent 65%)",
        }}
      />

      {drink.badge && (
        <span className="absolute left-6 top-6 z-30 rounded-full bg-forest px-3.5 py-1.5 text-[0.65rem] font-medium tracking-wide text-cream shadow-soft dark:bg-cream dark:text-forest">
          {drink.badge}
        </span>
      )}

      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
        <motion.div
          className="h-full w-full"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={drink.image}
            alt={`${drink.name} — ${drink.tagline}`}
            fill
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 380px"
            className="object-cover"
            priority={index === 0}
          />
        </motion.div>
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, ${drink.accent.to}22, transparent 45%)`,
          }}
        />
      </div>

      <div className="relative z-30 flex flex-col gap-2 px-4 pb-5 pt-5">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-2xl text-forest dark:text-cream">
            {drink.name}
          </h3>
          <span className="text-sm text-matcha dark:text-sage">{drink.price}</span>
        </div>
        <span className="eyebrow !text-clay-dark dark:!text-clay">{drink.tagline}</span>
        <p className="text-sm leading-relaxed text-forest/80 dark:text-cream/75">
          {drink.description}
        </p>
      </div>
    </motion.div>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-beige py-28 dark:bg-forest sm:py-36">
      <div className="container grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-2 aspect-[4/5] w-full overflow-hidden rounded-[32px] shadow-card lg:order-1"
        >
          <Image
            src="/images/about-harbour.svg"
            alt="Illustration of the harbour near Harbour Matcha's stand"
            fill
            sizes="(max-width: 1024px) 90vw, 45vw"
            className="object-cover"
          />
        </motion.div>

        <div className="order-1 flex flex-col items-start gap-6 lg:order-2">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            Our Story
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl leading-[1.15] text-forest dark:text-cream sm:text-5xl"
          >
            Slow, intentional, and made by the water.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-lg text-base leading-relaxed text-forest/80 dark:text-cream/70"
          >
            At Harbour Matcha, every drink is handcrafted using ceremonial-grade
            Japanese matcha and carefully selected ingredients. Inspired by the
            peaceful atmosphere of the harbour, we believe every cup should feel
            slow, intentional, and memorable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 flex items-center gap-8 border-t border-forest/10 pt-6 dark:border-cream/10"
          >
            <div>
              <p className="font-serif text-3xl text-forest dark:text-cream">100%</p>
              <p className="text-xs tracking-wide text-forest/80 dark:text-cream/70">Ceremonial grade</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-forest dark:text-cream">3</p>
              <p className="text-xs tracking-wide text-forest/80 dark:text-cream/70">Drinks, done right</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-forest dark:text-cream">Daily</p>
              <p className="text-xs tracking-wide text-forest/80 dark:text-cream/70">Freshly whisked</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

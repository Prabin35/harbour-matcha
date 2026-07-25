"use client";

import { motion } from "framer-motion";
import { Leaf, Milk, Cherry, Sparkles, LucideIcon } from "lucide-react";
import { features } from "@/lib/data/features";
import { SectionHeading } from "@/components/ui/section-heading";

const iconMap: Record<string, LucideIcon> = {
  leaf: Leaf,
  milk: Milk,
  berry: Cherry,
  sparkles: Sparkles,
};

export default function Features() {
  return (
    <section className="bg-cream py-28 dark:bg-forest-dark sm:py-36">
      <div className="container">
        <SectionHeading
          eyebrow="Why Harbour Matcha"
          title="Quality over quantity, always."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="group flex flex-col items-start gap-5 rounded-3xl border border-forest/8 bg-beige/40 p-8 transition-colors duration-300 hover:border-matcha/30 hover:bg-beige/70 dark:border-cream/10 dark:bg-forest-light/20 dark:hover:bg-forest-light/30"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-matcha/12 text-matcha transition-transform duration-300 group-hover:scale-110 dark:bg-sage/15 dark:text-sage">
                  <Icon size={20} strokeWidth={1.6} />
                </span>
                <h3 className="font-serif text-xl text-forest dark:text-cream">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-forest/80 dark:text-cream/75">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

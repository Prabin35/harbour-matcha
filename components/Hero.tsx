"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import MatchaWhisk from "@/components/MatchaWhisk";
import { siteConfig } from "@/lib/data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden paper-texture bg-gradient-to-b from-beige via-cream to-cream dark:from-forest-dark dark:via-forest-dark dark:to-forest-dark"
    >
      {/* Ambient floating organic shapes (parallax) */}
      <motion.div style={{ y: bgY }} className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-sage/25 blur-3xl animate-floatSlow" />
        <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-matcha/15 blur-3xl animate-float" />
      </motion.div>

      <div className="container relative grid grid-cols-1 items-center gap-16 pt-36 lg:grid-cols-2 lg:pt-32">
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="flex flex-col items-start gap-7 text-left"
        >
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="eyebrow"
          >
            Harbourfront &middot; Small Batch &middot; Ceremonial Grade
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-serif text-[2.75rem] leading-[1.08] text-forest sm:text-6xl lg:text-[4.2rem] dark:text-cream"
          >
            Crafted One <span className="text-gradient-matcha italic">Matcha</span> at a Time.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="max-w-md text-lg leading-relaxed text-forest/80 dark:text-cream/75"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Button
              size="lg"
              onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Our Matcha
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("events")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book an Event
            </Button>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="text-xs tracking-wide text-forest/55 dark:text-cream/50"
          >
            Locally sourced PEI strawberries &amp; blueberries &middot; Ceremonial Uji matcha from Japan
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center"
        >
          <MatchaWhisk />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-forest/80 sm:flex dark:text-cream/70"
      >
        <span className="text-[0.65rem] tracking-widest2">SCROLL</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}

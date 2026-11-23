"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Instagram as InstagramIcon } from "lucide-react";
import { popUpInfo, siteConfig } from "@/lib/data/site";

export default function PopUp() {
  return (
    <section id="popup" className="bg-beige py-24 dark:bg-forest-dark sm:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-[2rem] border border-forest/10 bg-cream/70 px-8 py-12 text-center shadow-soft dark:border-cream/10 dark:bg-forest-light/20 sm:px-14 sm:py-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-matcha/12 px-4 py-1.5 text-xs font-medium uppercase tracking-widest2 text-matcha-dark dark:bg-sage/15 dark:text-sage">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulseDot rounded-full bg-matcha dark:bg-sage" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-matcha dark:bg-sage" />
            </span>
            {popUpInfo.status}
          </span>

          <h2 className="font-serif text-3xl text-forest dark:text-cream sm:text-4xl">
            {popUpInfo.headline}
          </h2>

          <p className="max-w-xl text-base leading-relaxed text-forest/80 dark:text-cream/75">
            {popUpInfo.message}
          </p>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:gap-10">
            <div className="flex items-center gap-2.5 text-sm text-forest/85 dark:text-cream/80">
              <Calendar size={17} className="text-matcha dark:text-sage" strokeWidth={1.6} />
              {popUpInfo.when}
            </div>
            <div className="flex items-center gap-2.5 text-sm text-forest/85 dark:text-cream/80">
              <MapPin size={17} className="text-matcha dark:text-sage" strokeWidth={1.6} />
              {popUpInfo.where}
            </div>
          </div>

          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-sm font-medium text-cream transition-all duration-300 hover:bg-matcha-dark hover:shadow-glow dark:bg-matcha dark:hover:bg-matcha-light"
          >
            <InstagramIcon size={16} strokeWidth={1.8} />
            Follow for Updates
          </a>
        </motion.div>
      </div>
    </section>
  );
}

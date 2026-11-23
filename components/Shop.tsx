"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { retailProducts } from "@/lib/data/shop";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/data/site";

function KeychainIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <circle cx="11" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 10.5 L22 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M19 17 L24.5 22.5 M24.5 17 L19 22.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CharmIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path
        d="M15 5 L17.3 11.2 L24 12 L19 16.4 L20.4 23 L15 19.4 L9.6 23 L11 16.4 L6 12 L12.7 11.2 Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PowderIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path
        d="M9 9 h12 l-1.5 15 a2 2 0 0 1 -2 1.8 h-5 a2 2 0 0 1 -2 -1.8 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M8 9 h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12.5 9 V5.5 h5 V9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11.5 14.5 h7 M11 18 h8 M11.5 21.5 h7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

const iconMap: Record<string, () => JSX.Element> = {
  keychain: KeychainIcon,
  charm: CharmIcon,
  powder: PowderIcon,
};

export default function Shop() {
  const mailtoInterest = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    "Shop interest"
  )}&body=${encodeURIComponent("Hi Harbour Matcha, let me know when the shop launches!")}`;

  return (
    <section id="shop" className="bg-cream py-28 dark:bg-forest sm:py-36">
      <div className="container">
        <SectionHeading eyebrow="Shop" title="Take a little home with you." />
        <p className="mx-auto -mt-10 max-w-lg text-center text-sm font-medium uppercase tracking-widest2 text-clay-dark dark:text-clay">
          Coming Soon
        </p>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {retailProducts.map((product, i) => {
            const Icon = iconMap[product.icon];
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center gap-4 rounded-3xl border border-forest/8 bg-beige/40 p-9 text-center transition-colors duration-300 hover:border-matcha/30 hover:bg-beige/70 dark:border-cream/10 dark:bg-forest-light/20 dark:hover:bg-forest-light/30"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-matcha/12 text-matcha dark:bg-sage/15 dark:text-sage">
                  <Icon />
                </span>
                <h3 className="font-serif text-xl text-forest dark:text-cream">{product.name}</h3>
                <p className="text-sm leading-relaxed text-forest/80 dark:text-cream/75">
                  {product.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 flex justify-center"
        >
          <a
            href={mailtoInterest}
            className="inline-flex items-center gap-2 rounded-full border border-forest/30 px-7 py-3.5 text-sm font-medium text-forest transition-all duration-300 hover:border-matcha hover:bg-matcha/10 dark:border-cream/30 dark:text-cream dark:hover:border-sage"
          >
            <Mail size={16} strokeWidth={1.8} />
            Let Me Know When It Launches
          </a>
        </motion.div>
      </div>
    </section>
  );
}

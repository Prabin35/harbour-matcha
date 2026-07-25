"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Clock, Instagram as InstagramIcon, Mail, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import { SectionHeading } from "@/components/ui/section-heading";

const items = [
  {
    icon: MapPin,
    label: "Location",
    value: `${siteConfig.location.line1}, ${siteConfig.location.line2}`,
    href: siteConfig.location.mapsUrl,
  },
  {
    icon: Clock,
    label: "Hours",
    value: siteConfig.hours.map((h) => `${h.day}: ${h.time}`).join(" · "),
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: siteConfig.instagramHandle,
    href: siteConfig.instagramUrl,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
];

export default function Visit() {
  return (
    <section id="visit" className="bg-cream py-28 dark:bg-forest-dark sm:py-36">
      <div className="container">
        <SectionHeading
          eyebrow="Visit Us"
          title="Come find us by the water."
          description="No seating rush, no long lines — just a quiet stand, made for slowing down."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 aspect-[4/3] w-full overflow-hidden rounded-[28px] shadow-card lg:order-1 lg:col-span-3 lg:aspect-auto"
          >
            <Image
              src="/images/map-placeholder.svg"
              alt="Map showing Harbour Matcha's location"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
            <a
              href={siteConfig.location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-cream px-5 py-2.5 text-xs font-medium tracking-wide text-forest shadow-soft transition-transform hover:scale-105"
            >
              Open in Maps <ArrowUpRight size={13} />
            </a>
          </motion.div>

          <div className="order-1 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:order-2 lg:col-span-2 lg:grid-cols-1">
            {items.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-matcha/12 text-matcha dark:bg-sage/15 dark:text-sage">
                    <Icon size={16} strokeWidth={1.6} />
                  </span>
                  <div>
                    <p className="text-xs tracking-widest2 uppercase text-forest/80 dark:text-cream/70">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-forest dark:text-cream">
                      {item.value}
                    </p>
                  </div>
                </>
              );

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-4 rounded-2xl border border-forest/8 bg-beige/40 p-5 dark:border-cream/10 dark:bg-forest-light/20"
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="hover"
                      className="flex items-start gap-4"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

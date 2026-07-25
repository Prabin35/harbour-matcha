"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram as InstagramIcon } from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import { InstagramPost } from "@/lib/types";

const posts: InstagramPost[] = [
  "Strawberry matcha being poured over ice",
  "Ceremonial matcha whisked to a foam in a chawan",
  "Blueberry matcha layered with milk",
  "Matcha powder being sifted before whisking",
  "Harbour Matcha stand at golden hour",
  "Iced classic matcha on the counter",
].map((alt, i) => ({
  image: `/images/instagram-${i + 1}.svg`,
  alt,
  href: siteConfig.instagramUrl,
}));

export default function Instagram() {
  return (
    <section id="instagram" className="bg-beige py-28 dark:bg-forest sm:py-36">
      <div className="container">
        <div className="flex flex-col items-center gap-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow"
          >
            Follow Along
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-serif text-4xl text-forest dark:text-cream sm:text-5xl"
          >
            {siteConfig.instagramHandle}
          </motion.h2>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            href={siteConfig.instagramUrl}
            data-cursor="hover"
            className="inline-flex items-center gap-2 text-sm tracking-wide text-matcha transition-colors hover:text-matcha-dark dark:text-sage"
          >
            <InstagramIcon size={16} />
            Follow us on Instagram
          </motion.a>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {posts.map((post, i) => (
            <motion.a
              key={i}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.04 }}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-soft"
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                sizes="(max-width: 768px) 45vw, 16vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-forest/0 opacity-0 transition-all duration-300 group-hover:bg-forest/30 group-hover:opacity-100">
                <InstagramIcon size={20} className="text-cream" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

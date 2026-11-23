"use client";

import Image from "next/image";
import { Instagram as InstagramIcon } from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import { InstagramPost } from "@/lib/types";
import { SectionHeading } from "@/components/ui/section-heading";

const captions = [
  "Strawberry matcha being poured over ice",
  "Ceremonial matcha whisked to a foam in a chawan",
  "Blueberry matcha layered with milk",
  "Matcha powder being sifted before whisking",
  "Harbour Matcha stand at golden hour",
  "Iced classic matcha on the counter",
  "Fresh strawberries for the purée",
  "Whisking a bowl of ceremonial matcha",
];

const posts: InstagramPost[] = captions.map((alt, i) => ({
  image: `/images/instagram-${(i % 6) + 1}.svg`,
  alt,
  href: siteConfig.instagramUrl,
}));

// subtle alternating tilt, echoing a handwritten photo wall
const tilts = ["-rotate-2", "rotate-2", "-rotate-1", "rotate-1", "rotate-2", "-rotate-2", "rotate-1", "-rotate-1"];

function Row({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...posts, ...posts];
  return (
    <div className="group flex w-max gap-6 [animation-play-state:running] group-hover:[animation-play-state:paused]">
      <div
        className={`flex gap-6 motion-safe:animate-marquee ${reverse ? "[animation-direction:reverse]" : ""} group-hover:[animation-play-state:paused]`}
      >
        {doubled.map((post, i) => (
          <a
            key={`${post.alt}-${i}`}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative block h-40 w-40 shrink-0 overflow-hidden rounded-2xl bg-beige shadow-soft transition-transform duration-300 hover:z-10 hover:scale-105 hover:rotate-0 dark:bg-forest-light/30 sm:h-48 sm:w-48 ${tilts[i % tilts.length]}`}
          >
            <Image
              src={post.image}
              alt={post.alt}
              fill
              sizes="(min-width: 640px) 192px, 160px"
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-end bg-forest/0 p-3 opacity-0 transition-all duration-300 hover:bg-forest/40 hover:opacity-100">
              <InstagramIcon size={18} className="text-cream" strokeWidth={1.8} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Instagram() {
  return (
    <section id="instagram" className="overflow-hidden bg-beige py-28 dark:bg-forest sm:py-36">
      <div className="container">
        <SectionHeading
          eyebrow="Follow Along"
          title={siteConfig.instagramHandle}
          description="A look at what's being whisked, poured, and sipped this week."
        />
        <div className="mt-6 flex justify-center">
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-matcha-dark transition-colors hover:text-matcha dark:text-sage dark:hover:text-sage-light"
          >
            <InstagramIcon size={16} strokeWidth={1.8} />
            Follow on Instagram
          </a>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-6">
        <Row />
        <Row reverse />
      </div>

      {/* Static accessible fallback for reduced-motion users */}
      <noscript>
        <div className="container mt-10 grid grid-cols-3 gap-4 sm:grid-cols-6">
          {posts.slice(0, 6).map((post) => (
            <div key={post.alt} className="relative h-28 w-full overflow-hidden rounded-xl">
              <Image src={post.image} alt={post.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </noscript>
    </section>
  );
}

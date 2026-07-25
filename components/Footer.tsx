import Image from "next/image";
import { Instagram as InstagramIcon, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-forest/10 bg-beige py-14 dark:border-cream/10 dark:bg-forest">
      <div className="container flex flex-col items-center gap-8 text-center">
        <a href="#home" data-cursor="hover" className="flex items-center gap-2.5 text-forest dark:text-cream">
          <Image src="/images/logo-mark.svg" alt="" width={30} height={30} />
          <span className="font-serif text-lg tracking-wide">{siteConfig.name}</span>
        </a>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-forest/80 dark:text-cream/75">
          <a
            href={siteConfig.instagramUrl}
            data-cursor="hover"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-forest dark:hover:text-cream"
          >
            <InstagramIcon size={14} /> {siteConfig.instagramHandle}
          </a>
          <a
            href={siteConfig.location.mapsUrl}
            data-cursor="hover"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-forest dark:hover:text-cream"
          >
            <MapPin size={14} /> {siteConfig.location.line2}
          </a>
        </div>

        <div className="h-px w-16 bg-forest/15 dark:bg-cream/15" />

        <p className="text-xs tracking-wide text-forest/80 dark:text-cream/70">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

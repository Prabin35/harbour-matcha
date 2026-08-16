"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu as MenuIcon, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data/site";
import { useTheme } from "@/lib/hooks/use-theme";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative transition-all duration-500",
        scrolled
          ? "bg-cream/70 dark:bg-forest-dark/70 backdrop-blur-xl shadow-soft border-b border-forest/5 dark:border-cream/5"
          : "bg-transparent"
      )}
    >
      <nav className="container flex h-20 items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2.5 text-forest dark:text-cream"
        >
          <Image
            src="/images/logo-mark.svg"
            alt=""
            width={32}
            height={32}
            className="text-forest dark:text-cream"
          />
          <span className="font-serif text-lg tracking-wide">{siteConfig.name}</span>
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-forest/75 transition-colors hover:text-forest dark:text-cream/75 dark:hover:text-cream"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="flex h-10 w-10 items-center justify-center rounded-full text-forest transition-colors hover:bg-forest/5 dark:text-cream dark:hover:bg-cream/10"
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <div className="hidden sm:block">
            <Button size="sm" onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}>
              View Menu
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-forest lg:hidden dark:text-cream"
          >
            {mobileOpen ? <X size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </nav>

      <motion.div
        id="mobile-nav-menu"
        initial={false}
        animate={{ height: mobileOpen ? "auto" : 0, opacity: mobileOpen ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden bg-cream/95 dark:bg-forest-dark/95 backdrop-blur-xl lg:hidden"
      >
        <div className="container flex flex-col gap-1 pb-6">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-3 text-base text-forest/80 transition-colors hover:bg-forest/5 dark:text-cream/80 dark:hover:bg-cream/10"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 px-3">
            <Button className="w-full" onClick={() => setMobileOpen(false)}>
              View Menu
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}

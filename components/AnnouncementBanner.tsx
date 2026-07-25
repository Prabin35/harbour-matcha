"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/data/site";

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden bg-forest text-cream"
        >
          <div className="container relative flex items-center justify-center gap-2 py-2.5 text-center text-xs sm:text-sm tracking-wide">
            <Sparkles size={14} className="shrink-0 text-sage" />
            <span>{siteConfig.announcement}</span>
            <button
              onClick={() => setVisible(false)}
              aria-label="Dismiss announcement"
              data-cursor="hover"
              className="absolute right-4 text-cream/60 transition-colors hover:text-cream"
            >
              <X size={15} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

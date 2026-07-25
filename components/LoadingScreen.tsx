"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SESSION_KEY = "harbour-has-loaded";

export default function LoadingScreen() {
  // Starts as false on the server and on first paint; we only flip it to
  // true (and thus show the screen) if sessionStorage confirms this is a
  // fresh session. This avoids forcing every repeat visit within the same
  // session through the same fixed multi-second wait.
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const hasLoadedThisSession = window.sessionStorage.getItem(SESSION_KEY);
    if (!hasLoadedThisSession) {
      setIsLoading(true);
      window.sessionStorage.setItem(SESSION_KEY, "true");
    }
    setChecked(true);
  }, []);

  useEffect(() => {
    if (!isLoading) return;
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 2200);
    return () => clearTimeout(timer);
  }, [isLoading]);

  if (!checked) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          role="status"
          aria-live="polite"
          aria-label="Loading Harbour Matcha"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-cream dark:bg-forest-dark"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative flex flex-col items-center gap-6">
            {/* Chawan (bowl) */}
            <svg width="120" height="100" viewBox="0 0 120 100" fill="none" aria-hidden="true">
              <defs>
                <clipPath id="bowlClip">
                  <path d="M14 40 C14 40 20 88 60 88 C100 88 106 40 106 40 Z" />
                </clipPath>
              </defs>

              {/* Matcha fill */}
              <g clipPath="url(#bowlClip)">
                <rect x="10" y="88" width="100" height="40" fill="#6E8F5C">
                  <animate
                    attributeName="y"
                    from="90"
                    to="40"
                    dur="1.6s"
                    begin="0.3s"
                    fill="freeze"
                    calcMode="spline"
                    keySplines="0.65 0 0.35 1"
                  />
                </rect>
                {/* subtle foam shimmer line */}
                <rect x="10" y="88" width="100" height="4" fill="#C3CFB8" opacity="0.8">
                  <animate
                    attributeName="y"
                    from="90"
                    to="40"
                    dur="1.6s"
                    begin="0.3s"
                    fill="freeze"
                    calcMode="spline"
                    keySplines="0.65 0 0.35 1"
                  />
                </rect>
              </g>

              {/* Bowl outline */}
              <path
                d="M14 40 C14 40 20 88 60 88 C100 88 106 40 106 40 Z"
                stroke="#243324"
                strokeWidth="2.5"
                fill="none"
              />
              <ellipse cx="60" cy="40" rx="46" ry="9" fill="none" stroke="#243324" strokeWidth="2.5" />

              {/* Whisk */}
              <motion.g
                animate={{ rotate: [-10, 10, -10] }}
                transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: "78px 20px" }}
              >
                <line x1="78" y1="20" x2="66" y2="46" stroke="#B98A63" strokeWidth="3" strokeLinecap="round" />
                <path
                  d="M60 44 L64 34 M64 46 L69 35 M68 47 L74 37 M72 47 L78 39"
                  stroke="#B98A63"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </motion.g>
            </svg>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="eyebrow text-forest dark:text-cream"
            >
              Harbour Matcha
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

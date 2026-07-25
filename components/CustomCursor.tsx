"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const lastTarget = useRef<EventTarget | null>(null);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 28, stiffness: 320, mass: 0.4 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const hasTouch = window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(hasTouch);
    if (hasTouch) return;

    document.documentElement.classList.add("custom-cursor-active");

    const handleMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible((v) => (v ? v : true));

      // Skip the DOM traversal entirely when the pointer is still over the
      // same element it was on the previous frame — only re-check hover
      // state when the target actually changes.
      if (e.target === lastTarget.current) return;
      lastTarget.current = e.target;

      const target = e.target as HTMLElement;
      const hoverEl = target.closest(
        'a, button, [data-cursor="hover"], input, textarea'
      );
      setIsHovering(Boolean(hoverEl));
    };

    const handleLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [cursorX, cursorY]);

  if (isTouch) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ opacity: { duration: 0.2 } }}
    >
      <motion.div
        animate={{
          width: isHovering ? 56 : 16,
          height: isHovering ? 56 : 16,
          backgroundColor: isHovering ? "rgba(110,143,92,0.14)" : "rgba(36,51,36,0.9)",
          borderColor: isHovering ? "rgba(110,143,92,0.9)" : "rgba(36,51,36,0)",
        }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-full border-[1.5px] backdrop-blur-sm"
      />
    </motion.div>
  );
}

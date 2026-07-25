import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        cream: "#FAF7F2",
        sage: {
          DEFAULT: "#A8B89A",
          light: "#C3CFB8",
          dark: "#8A9C7B",
        },
        matcha: {
          DEFAULT: "#6E8F5C",
          light: "#87A874",
          dark: "#56714A",
        },
        forest: {
          DEFAULT: "#243324",
          light: "#32452F",
          dark: "#141F14",
        },
        beige: "#EFE6D8",
        clay: {
          DEFAULT: "#B98A63",
          dark: "#7A5533",
        },
      },
      fontFamily: {
        serif: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) translateX(8px) rotate(6deg)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-24px) scale(1.04)" },
        },
        whisk: {
          "0%, 100%": { transform: "rotate(-14deg)" },
          "50%": { transform: "rotate(14deg)" },
        },
        ripple: {
          "0%": { transform: "scale(0.6)", opacity: "0.5" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pourFill: {
          "0%": { height: "0%" },
          "100%": { height: "78%" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        floatSlow: "floatSlow 10s ease-in-out infinite",
        whisk: "whisk 1.1s ease-in-out infinite",
        ripple: "ripple 2.4s ease-out infinite",
        shimmer: "shimmer 3s linear infinite",
        fadeUp: "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        pourFill: "pourFill 1.6s cubic-bezier(0.65, 0, 0.35, 1) forwards",
      },
      boxShadow: {
        soft: "0 8px 30px -12px rgba(36, 51, 36, 0.18)",
        card: "0 20px 50px -20px rgba(36, 51, 36, 0.25)",
        glow: "0 0 60px -10px rgba(110, 143, 92, 0.35)",
      },
      letterSpacing: {
        widest2: "0.28em",
      },
    },
  },
  plugins: [],
};

export default config;

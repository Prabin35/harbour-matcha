import { Drink } from "@/lib/types";

/**
 * CMS-READY CONTENT LAYER
 * ------------------------------------------------------------------
 * This array is the single source of truth for Harbour Matcha's menu.
 * It is intentionally decoupled from the components that render it
 * (see components/Menu.tsx + components/ProductCard.tsx), so the
 * whole site can later be pointed at a headless CMS (Sanity,
 * Contentful, Payload, etc.) by replacing `getDrinks()` below with a
 * fetch call — no component code needs to change, as long as the
 * response is shaped like `Drink[]` from lib/types.ts.
 *
 * Example future swap:
 *   export async function getDrinks(): Promise<Drink[]> {
 *     const res = await sanityClient.fetch(`*[_type == "drink"]`);
 *     return res;
 *   }
 */
export const drinks: Drink[] = [
  {
    slug: "strawberry-matcha",
    name: "Strawberry Matcha",
    emoji: "🍓",
    tagline: "Fresh & fruited",
    description:
      "Fresh strawberry purée layered with ceremonial matcha and silky milk.",
    price: "$7.50",
    image: "/images/strawberry-matcha.svg",
    badge: "Best Seller",
    accent: { from: "#F4A6A0", to: "#6E8F5C" },
  },
  {
    slug: "blueberry-matcha",
    name: "Blueberry Matcha",
    emoji: "🫐",
    tagline: "Deep & creamy",
    description:
      "Homemade blueberry purée with creamy milk and premium ceremonial matcha.",
    price: "$7.50",
    image: "/images/blueberry-matcha.svg",
    accent: { from: "#8FA3D9", to: "#6E8F5C" },
  },
  {
    slug: "classic-matcha",
    name: "Classic Matcha",
    emoji: "🍵",
    tagline: "Pure & traditional",
    description:
      "Traditional ceremonial matcha, whisked by hand, with perfectly steamed milk.",
    price: "$6.50",
    image: "/images/classic-matcha.svg",
    accent: { from: "#A8B89A", to: "#6E8F5C" },
  },
];

export async function getDrinks(): Promise<Drink[]> {
  // Swap this for a real CMS fetch when ready — see note above.
  return Promise.resolve(drinks);
}

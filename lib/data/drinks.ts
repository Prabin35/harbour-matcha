import { Drink, AddOn } from "@/lib/types";

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
    name: "Strawberry Matcha Latte",
    emoji: "🍓",
    tagline: "Fresh & fruited",
    description:
      "Premium Uji matcha with creamy milk and locally sourced PEI strawberries for a smooth, refreshing balance.",
    price: "$8",
    image: "/images/strawberry-matcha.svg",
    badge: "Best Seller",
    accent: { from: "#F4A6A0", to: "#6E8F5C" },
  },
  {
    slug: "blueberry-matcha",
    name: "Blueberry Matcha Latte",
    emoji: "🫐",
    tagline: "Deep & creamy",
    description:
      "Premium Uji matcha blended with creamy milk and locally sourced PEI blueberries for a naturally sweet, fruity twist.",
    price: "$8",
    image: "/images/blueberry-matcha.svg",
    accent: { from: "#8FA3D9", to: "#6E8F5C" },
  },
  {
    slug: "classic-matcha",
    name: "Classic Matcha Latte",
    emoji: "🍵",
    tagline: "Pure & traditional",
    description:
      "Smooth, bold Uji matcha from Japan with creamy milk, naturally rich in umami and clean, sustained energy.",
    price: "$7",
    image: "/images/classic-matcha.svg",
    accent: { from: "#A8B89A", to: "#6E8F5C" },
  },
];

export const addOns: AddOn[] = [
  {
    name: "Make a Cloud Foam",
    description: "With locally sourced strawberry or blueberry",
    price: "$1",
  },
];

export async function getDrinks(): Promise<Drink[]> {
  // Swap this for a real CMS fetch when ready — see note above.
  return Promise.resolve(drinks);
}

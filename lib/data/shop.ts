import { RetailProduct } from "@/lib/types";

/**
 * CMS-ready: same pattern as lib/data/drinks.ts. Swap for a real
 * commerce/CMS fetch once the shop actually launches.
 */
export const retailProducts: RetailProduct[] = [
  {
    name: "Matcha Powder",
    description: "The same ceremonial Uji matcha we whisk at the stand, in a bag for home.",
    icon: "powder",
  },
  {
    name: "Keychains",
    description: "Little hand-whisk and chawan charms for your bag or keys.",
    icon: "keychain",
  },
  {
    name: "Lucky Charms",
    description: "A small good-luck token, inspired by our lighthouse mark.",
    icon: "charm",
  },
];

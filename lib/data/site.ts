import { PopUpInfo } from "@/lib/types";

export const siteConfig = {
  name: "Harbour Matcha",
  tagline: "Crafted One Matcha at a Time.",
  description:
    "Premium ceremonial matcha made fresh at Harbour Matcha — a small matcha stand by the water.",
  url: "https://harbourmatcha.com",
  instagramHandle: "@harbour_matcha",
  instagramUrl: "https://www.instagram.com/harbour_matcha/",
  email: "hello@harbourmatcha.com",
  location: {
    line1: "12 Pier Walk",
    line2: "Harbourfront, Charlottetown, PE",
    mapsUrl: "https://maps.google.com/?q=Harbourfront+Charlottetown",
  },
  hours: [
    { day: "Monday – Friday", time: "7:30 AM – 4:00 PM" },
    { day: "Saturday", time: "8:00 AM – 5:00 PM" },
    { day: "Sunday", time: "9:00 AM – 2:00 PM" },
  ],
  announcement: "Grand Opening Soon — Harbourfront, Charlottetown",
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Menu", href: "#menu" },
    { label: "Instagram", href: "#instagram" },
    { label: "Events", href: "#events" },
    { label: "Shop", href: "#shop" },
    { label: "Visit", href: "#visit" },
  ],
};

export const popUpInfo: PopUpInfo = {
  status: "Pop-Up",
  headline: "Next Pop-Up",
  message:
    "We're planning our next stop around the Island now. Follow along and you'll be the first to know when and where.",
  when: "Date announced on Instagram",
  where: "Prince Edward Island",
};

export interface Drink {
  slug: string;
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  price: string;
  image: string;
  badge?: "Best Seller" | "New" | "Seasonal";
  accent: {
    from: string;
    to: string;
  };
}

export interface AddOn {
  name: string;
  description: string;
  price: string;
}

export interface AddOn {
  name: string;
  description: string;
  price: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: "leaf" | "milk" | "berry" | "sparkles";
}

export interface InstagramPost {
  image: string;
  alt: string;
  href: string;
}

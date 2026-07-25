import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 bg-cream px-6 text-center dark:bg-forest-dark">
      <span className="eyebrow">404</span>
      <h1 className="font-serif text-4xl text-forest dark:text-cream sm:text-5xl">
        This cup hasn&apos;t been poured yet.
      </h1>
      <p className="max-w-md text-base leading-relaxed text-forest/80 dark:text-cream/75">
        The page you're looking for doesn't exist. Let's get you back to
        something warm.
      </p>
      <Link href="/">
        <Button size="lg">Back to Harbour Matcha</Button>
      </Link>
    </div>
  );
}

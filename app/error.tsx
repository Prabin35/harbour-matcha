"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // In production, forward this to an error-monitoring service
    // (Sentry, Vercel Observability, etc.) instead of just logging.
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 bg-cream px-6 text-center dark:bg-forest-dark">
      <span className="eyebrow">Something went wrong</span>
      <h1 className="font-serif text-4xl text-forest dark:text-cream sm:text-5xl">
        The cup slipped.
      </h1>
      <p className="max-w-md text-base leading-relaxed text-forest/80 dark:text-cream/75">
        Something unexpected happened on our end. Give it another try.
      </p>
      <Button size="lg" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}

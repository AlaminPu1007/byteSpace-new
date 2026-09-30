"use client";

import { ArrowUp } from "lucide-react";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";

/** Floating button that appears after the first screen and scrolls back to the top. */
export function ScrollToTop() {
  const visible = useScrolled(500);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-6 right-6 z-40 grid size-12 place-items-center rounded-full bg-lime-400 text-neutral-950 shadow-[0_8px_24px_-6px_rgba(4,8,25,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-lime-300",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <ArrowUp className="size-5" />
    </button>
  );
}

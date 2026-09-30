"use client";

import Link from "next/link";
import { useEffect } from "react";
import { StatusScreen } from "@/components/shared/status-screen";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <StatusScreen
      code="500"
      title="Something went wrong"
      description="An unexpected error occurred on our side. Please try again, or head back to the home page."
    >
      <Button
        type="button"
        onClick={reset}
        className="h-[46px] rounded-full bg-lime-400 px-8 text-base font-medium text-neutral-950 hover:bg-lime-300"
      >
        Try again
      </Button>
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "outline" }),
          "h-[46px] rounded-full border-white/40 bg-transparent px-8 text-base font-medium text-white hover:bg-white/10 hover:text-white",
        )}
      >
        Back to home
      </Link>
    </StatusScreen>
  );
}

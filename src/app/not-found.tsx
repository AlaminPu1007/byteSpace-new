import type { Metadata } from "next";
import Link from "next/link";
import { StatusScreen } from "@/components/shared/status-screen";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Page not found | ByteSpace",
};

export default function NotFound() {
  return (
    <StatusScreen
      code="404"
      title="Page not found"
      description="The page you are looking for doesn't exist or has been moved. Let's get you back to learning."
    >
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "secondary" }),
          "h-[46px] rounded-full bg-lime-400 px-8 text-base font-medium text-neutral-950 hover:bg-lime-300",
        )}
      >
        Back to home
      </Link>
    </StatusScreen>
  );
}

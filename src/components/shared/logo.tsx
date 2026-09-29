import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, dark }: { className?: string; dark?: boolean }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 font-heading text-lg font-semibold", dark ? "text-neutral-950" : "text-white", className)}>
      <span className="grid size-7 place-items-center rounded-md bg-lime-500 text-base font-bold text-neutral-950">
        b
      </span>
      ByteSpace
    </Link>
  );
}

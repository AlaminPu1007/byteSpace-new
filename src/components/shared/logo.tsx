import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Default variant uses the exported logo (white wordmark) for dark backgrounds.
 * The `dark` variant is for light backgrounds, where the white wordmark would disappear.
 */
export function Logo({ className, dark }: { className?: string; dark?: boolean }) {
  if (!dark) {
    return (
      <Link href="/" aria-label="ByteSpace home" className={className}>
        <Image src="/images/logo.png" alt="ByteSpace" width={171} height={37} priority className="h-8 w-auto sm:h-9" />
      </Link>
    );
  }

  return (
    <Link href="/" className={cn("flex items-center gap-2 font-heading text-lg font-semibold text-neutral-950", className)}>
      <span className="grid size-7 place-items-center rounded-md bg-lime-500 text-base font-bold text-neutral-950">
        b
      </span>
      ByteSpace
    </Link>
  );
}

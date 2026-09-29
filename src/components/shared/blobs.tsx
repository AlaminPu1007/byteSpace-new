import Image from "next/image";
import { cn } from "@/lib/utils";

/** Decorative 3D ornaments used on the blue banner sections. */
export function Blobs({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <Image
        src="/images/hero/ornaments.png"
        alt=""
        fill
        sizes="100vw"
        className="object-contain object-top"
      />
    </div>
  );
}

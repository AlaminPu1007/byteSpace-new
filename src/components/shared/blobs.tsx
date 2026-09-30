import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  src?: string;
  className?: string;
};

/**
 * Decorative 3D ornaments for the blue banner sections.
 * The artwork keeps its ornaments in the left and right corners, so each half
 * is cropped from its own edge. This keeps them pinned to the corners and at
 * the design's scale on any banner width or height.
 */
export function Blobs({ src = "/images/cta/ornaments.png", className }: Props) {
  const half = "absolute inset-y-0 w-1/2 overflow-hidden";

  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0", className)}>
      <div className={cn(half, "left-0")}>
        <Image src={src} alt="" fill sizes="1440px" className="object-cover object-left" />
      </div>
      <div className={cn(half, "right-0")}>
        <Image src={src} alt="" fill sizes="1440px" className="object-cover object-right" />
      </div>
    </div>
  );
}

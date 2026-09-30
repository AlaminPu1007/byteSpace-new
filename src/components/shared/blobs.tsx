import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  src?: string;
  className?: string;
};

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

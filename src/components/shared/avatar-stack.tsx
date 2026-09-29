import Image from "next/image";
import { cn } from "@/lib/utils";

const colors = [
  "bg-rose-300",
  "bg-sky-300",
  "bg-amber-300",
  "bg-emerald-300",
  "bg-violet-300",
  "bg-orange-300",
];

const sizes = {
  sm: { dot: "size-6 -ml-2", extra: "min-w-6", px: 24 },
  md: { dot: "size-8 -ml-2", extra: "min-w-8", px: 32 },
  lg: { dot: "size-7 sm:size-9 -ml-2.5", extra: "min-w-7 sm:min-w-9", px: 36 },
  xl: {
    dot: "size-9 -ml-3",
    extra: "min-w-10",
    chip: "size-10 -ml-3 text-xs",
    px: 36,
  },
};

type Props = {
  count?: number;
  extra?: string;
  size?: keyof typeof sizes;
  images?: string[];
  className?: string;
};

export function AvatarStack({
  count = 5,
  extra = "3K+",
  size = "sm",
  images,
  className,
}: Props) {
  const {
    dot,
    extra: extraSize,
    px,
    chip,
  } = sizes[size] as (typeof sizes)[keyof typeof sizes] & { chip?: string };
  const ring = "rounded-full border-2 border-white first:ml-0";

  return (
    <div className={cn("flex items-center", className)}>
      {images
        ? images
            .slice(0, count)
            .map((src, i) => (
              <Image
                key={`${src}-${i}`}
                src={src}
                alt=""
                width={px * 2}
                height={px * 2}
                className={cn(ring, dot, "object-cover")}
              />
            ))
        : colors
            .slice(0, count)
            .map((c, i) => <span key={i} className={cn(ring, dot, c)} />)}
      <span
        className={cn(
          "grid place-items-center rounded-full border-2 border-white bg-lime-500 px-1 text-[10px] font-medium sm:text-xs",
          chip ?? dot,
          extraSize,
        )}
      >
        {extra}
      </span>
    </div>
  );
}

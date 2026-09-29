import { cn } from "@/lib/utils";

type Props = {
  title: string;
  description?: string;
  /** Heading M (44px) or Heading S (36px) from the type scale */
  size?: "m" | "s";
  className?: string;
  light?: boolean;
  /** Overrides the default title width cap, e.g. "max-w-none" to keep a title on one line */
  titleClassName?: string;
};

const titleSizes = {
  m: "text-3xl sm:text-4xl lg:text-[44px]",
  s: "text-2xl sm:text-3xl lg:text-[36px]",
};

export function SectionHeading({ title, description, size = "s", className, light, titleClassName }: Props) {
  return (
    <div className={cn("mx-auto max-w-[1040px] text-center", className)}>
      <h2
        className={cn(
          "mx-auto max-w-[560px] leading-[1.2]",
          titleSizes[size],
          light ? "text-white" : "text-[#040819]",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mx-auto mt-4 max-w-[920px] text-base leading-[1.6] sm:text-lg",
            light ? "text-white/80" : "text-neutral-400",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

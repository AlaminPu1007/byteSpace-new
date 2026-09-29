import { cn } from "@/lib/utils";

type Props = {
  title: string;
  description?: string;
  className?: string;
  light?: boolean;
};

export function SectionHeading({ title, description, className, light }: Props) {
  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      <h2 className={cn("text-2xl sm:text-3xl lg:text-[36px]", light && "text-white")}>
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-sm leading-relaxed sm:text-base",
            light ? "text-white/80" : "text-neutral-500",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

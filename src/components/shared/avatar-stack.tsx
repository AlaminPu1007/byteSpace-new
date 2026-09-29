import { cn } from "@/lib/utils";

const colors = ["bg-rose-300", "bg-sky-300", "bg-amber-300", "bg-emerald-300", "bg-violet-300", "bg-orange-300"];

type Props = {
  count?: number;
  extra?: string;
  size?: "sm" | "lg";
  className?: string;
};

export function AvatarStack({ count = 5, extra = "3K+", size = "sm", className }: Props) {
  const dot = size === "lg" ? "size-7 sm:size-9 -ml-2.5" : "size-6 -ml-2";
  return (
    <div className={cn("flex items-center", className)}>
      {colors.slice(0, count).map((c, i) => (
        <span key={i} className={cn("rounded-full border-2 border-white first:ml-0", dot, c)} />
      ))}
      <span
        className={cn(
          "grid place-items-center rounded-full border-2 border-white bg-lime-500 px-1 text-[10px] font-medium sm:text-xs",
          dot,
          size === "lg" ? "min-w-7 sm:min-w-9" : "min-w-6",
        )}
      >
        {extra}
      </span>
    </div>
  );
}

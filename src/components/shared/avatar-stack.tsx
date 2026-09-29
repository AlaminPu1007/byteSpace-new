import { cn } from "@/lib/utils";

const colors = ["bg-rose-300", "bg-sky-300", "bg-amber-300", "bg-emerald-300", "bg-violet-300"];

export function AvatarStack({ count = 5, extra = "3K+", className }: { count?: number; extra?: string; className?: string }) {
  return (
    <div className={cn("flex items-center", className)}>
      {colors.slice(0, count).map((c, i) => (
        <span key={i} className={cn("-ml-2 size-6 rounded-full border-2 border-white first:ml-0", c)} />
      ))}
      <span className="-ml-2 grid h-6 min-w-6 place-items-center rounded-full border-2 border-white bg-lime-500 px-1 text-[10px] font-medium">
        {extra}
      </span>
    </div>
  );
}

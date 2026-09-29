import { cn } from "@/lib/utils";

/** Decorative shapes used on the blue banner sections. */
export function Blobs({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <span className="absolute -left-10 top-24 size-28 rounded-full border-[22px] border-white sm:size-40" />
      <span className="absolute right-[8%] top-28 hidden size-0 border-x-[36px] border-b-[60px] border-x-transparent border-b-white/90 sm:block" />
      <span className="absolute -right-10 top-10 size-24 rotate-12 rounded-3xl bg-lime-500 sm:size-40" />
      <span className="absolute -left-6 bottom-10 h-8 w-28 -rotate-12 rounded-full bg-lime-500 sm:h-10 sm:w-40" />
    </div>
  );
}

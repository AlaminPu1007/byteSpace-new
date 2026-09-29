import { cn } from "@/lib/utils";

/** Decorative 3D-style shapes used on the blue banner sections. */
export function Blobs({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {/* lime squiggle, top left */}
      <span className="absolute -left-8 top-[44%] h-9 sm:top-[22%] w-40 -rotate-[28deg] rounded-full bg-gradient-to-b from-lime-300 to-lime-500 sm:h-12 sm:w-64" />
      <span className="absolute -left-12 top-[50%] h-9 sm:top-[30%] w-40 -rotate-[28deg] rounded-full bg-gradient-to-b from-lime-300 to-lime-500 sm:h-12 sm:w-64" />
      <span className="absolute -left-16 top-[38%] hidden h-12 w-64 -rotate-[28deg] rounded-full bg-gradient-to-b from-lime-300 to-lime-500 sm:block" />

      {/* white squiggle */}
      <span className="absolute left-[16%] top-[46%] hidden h-6 w-24 -rotate-[24deg] rounded-full bg-gradient-to-b from-white to-neutral-100 lg:block" />
      <span className="absolute left-[17%] top-[50%] hidden h-6 w-24 rotate-[20deg] rounded-full bg-gradient-to-b from-white to-neutral-100 lg:block" />

      {/* white ring */}
      <span className="absolute -left-6 bottom-[8%] size-32 rounded-full border-[26px] border-white shadow-lg sm:left-[4%] sm:size-52 sm:border-[40px]" />

      {/* lime cylinder, right */}
      <span className="absolute -right-10 top-[46%] h-36 sm:top-[18%] w-28 rotate-[28deg] rounded-[2rem] bg-gradient-to-br from-lime-300 to-lime-500 sm:-right-6 sm:h-72 sm:w-48" />

      {/* white cone */}
      <span className="absolute right-[12%] top-[46%] hidden size-0 rotate-[18deg] border-x-[44px] border-b-[90px] border-x-transparent border-b-white lg:block" />

      {/* white squiggle, bottom right */}
      <span className="absolute -right-6 bottom-[14%] h-8 w-32 -rotate-[24deg] rounded-full bg-white sm:h-10 sm:w-48" />
      <span className="absolute -right-2 bottom-[8%] h-8 w-32 rotate-[24deg] rounded-full bg-white sm:h-10 sm:w-48" />
    </div>
  );
}

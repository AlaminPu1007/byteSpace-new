import { BarChart3, Star } from "lucide-react";
import { AvatarStack } from "@/components/shared/avatar-stack";
import { cn } from "@/lib/utils";
import type { Course } from "@/data/landing";

export function CourseCard({ course, className }: { course: Course; className?: string }) {
  return (
    <article className={cn("rounded-3xl border border-neutral-100 bg-white p-3 shadow-sm", className)}>
      <div className={cn("relative h-36 rounded-2xl bg-gradient-to-br sm:h-40", course.tone)}>
        <div className="absolute inset-x-2 bottom-2 flex justify-between gap-1 text-[10px]">
          {[`${course.lessons} Lessons`, course.duration, `${course.comments} Comments`].map((t) => (
            <span key={t} className="rounded-full bg-neutral-100/80 px-2 py-1 text-neutral-600 backdrop-blur">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="px-1 pb-1 pt-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="line-clamp-1 font-heading text-base font-semibold">{course.title}</h3>
          <span className="flex shrink-0 items-center gap-1 text-xs text-neutral-600">
            {course.rating} <Star className="size-3 fill-neutral-300 text-neutral-300" />
          </span>
        </div>
        <p className="mt-1 text-xs text-neutral-500">
          by <span className="text-brand-700">{course.author}</span>
        </p>

        <div className="mt-3 flex items-center justify-between">
          <span className="flex items-center gap-1 rounded-full bg-neutral-50 px-2 py-1 text-xs text-neutral-600">
            <BarChart3 className="size-3" /> {course.level}
          </span>
          <AvatarStack count={4} />
        </div>

        <p className="mt-3 font-heading text-lg font-semibold text-brand-700">
          ${course.price}
          <span className="ml-0.5 text-[10px] font-normal text-neutral-400">/lifetime</span>
        </p>
      </div>
    </article>
  );
}

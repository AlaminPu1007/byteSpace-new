import Image from "next/image";
import { Star } from "lucide-react";
import { AvatarStack } from "@/components/shared/avatar-stack";
import { cn } from "@/lib/utils";
import type { Course } from "@/data/courses";

type Props = {
  course: Course;
  /** Photos for the learner stack */
  avatars: string[];
  className?: string;
};

function LevelIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M13.75 3.33325H16.25V16.6666H13.75V3.33325ZM3.75 11.6666H6.25V16.6666H3.75V11.6666ZM8.75 7.49992H11.25V16.6666H8.75V7.49992Z"
        fill="#4B4C53"
      />
    </svg>
  );
}

export function CourseCard({ course, avatars, className }: Props) {
  const stats = [`${course.lessons} Lessons`, course.duration, `${course.comments} Comments`];

  return (
    <article
      className={cn(
        "@container h-full rounded-[24px] border border-neutral-100 bg-white p-4 transition-shadow duration-300 hover:shadow-[0_12px_32px_-12px_rgba(4,8,25,0.18)]",
        className,
      )}
    >
      <div className="relative aspect-[341/195] overflow-hidden rounded-[20px] bg-neutral-100">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(min-width: 1024px) 352px, (min-width: 640px) 45vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-x-[13px] bottom-[19px] flex justify-between gap-1">
          {stats.map((label) => (
            <span
              key={label}
              className="flex h-[26px] items-center whitespace-nowrap rounded-full bg-[#f6f6f6]/60 px-1.5 text-[10px] text-neutral-700 backdrop-blur-md @[320px]:px-2 @[320px]:text-[11px] @[350px]:px-3 @[350px]:text-xs"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-xl font-semibold leading-[1.2] text-neutral-950">
            {course.title}
          </h3>
          <span className="flex shrink-0 items-center gap-1 text-lg leading-6 text-neutral-500">
            {course.rating}
            <Star className="size-4 fill-neutral-200 text-neutral-200" />
          </span>
        </div>
        <p className="text-sm leading-5 text-neutral-700">
          by <span className="text-brand-800">{course.author}</span>
        </p>

        <div className="mt-4 flex items-center gap-4">
          <span className="flex h-8 items-center gap-1 rounded-full bg-neutral-50 pl-3 pr-4 text-sm text-neutral-700">
            <LevelIcon />
            {course.level}
          </span>
          <AvatarStack images={avatars} count={4} extra={course.learners} size="md" />
        </div>

        <p className="mt-3.5 font-heading text-xl font-semibold leading-[1.2] text-brand-800">
          ${course.price}
          <span className="font-sans text-xs font-normal text-neutral-500">/lifetime</span>
        </p>
      </div>
    </article>
  );
}

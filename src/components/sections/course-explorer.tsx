"use client";

import { Fragment, useState } from "react";
import { Container } from "@/components/shared/container";
import { CourseCard } from "@/components/shared/course-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { getCoursesByCategory, learnerAvatars, type Category } from "@/data/courses";
import { courseCategories } from "@/data/landing";
import { cn } from "@/lib/utils";

const categoryRows = [
  courseCategories.slice(0, 8),
  courseCategories.slice(8, 14),
  courseCategories.slice(14),
];

export function CourseExplorer() {
  const [active, setActive] = useState<Category>(courseCategories[0]);
  const visibleCourses = getCoursesByCategory(active);

  return (
    <section id="courses" className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          size="m"
          title="Discover Your Passion, Build Your Skills"
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-x-4 gap-y-3 lg:gap-y-4">
          {categoryRows.map((row, rowIndex) => (
            <Fragment key={rowIndex}>
              {rowIndex > 0 && <span aria-hidden="true" className="hidden h-0 basis-full xl:block" />}
              {row.map((name) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => setActive(name)}
                  aria-pressed={active === name}
                  className={cn(
                    "h-9 rounded-[24px] px-3.5 text-sm font-medium transition-colors sm:h-11 sm:px-4 sm:text-base",
                    active === name
                      ? "bg-lime-400 text-neutral-950"
                      : "bg-neutral-50 text-neutral-800 hover:bg-neutral-100",
                  )}
                >
                  {name}
                </button>
              ))}
              {rowIndex === categoryRows.length - 1 && (
                <button
                  type="button"
                  className="px-1 text-sm font-medium text-brand-700 hover:underline sm:text-base"
                >
                  + More
                </button>
              )}
            </Fragment>
          ))}
        </div>

        <div
          key={active}
          role="tabpanel"
          aria-live="polite"
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visibleCourses.map((course, i) => (
            <div
              key={course.id}
              className="animate-in h-full fade-in slide-in-from-bottom-6 fill-mode-both duration-500 motion-reduce:animate-none"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <CourseCard
                course={course}
                avatars={Array.from({ length: 4 }, (_, n) => learnerAvatars[(i + n) % learnerAvatars.length])}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Container } from "@/components/shared/container";
import { CourseCard } from "@/components/shared/course-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { getCoursesByCategory, learnerAvatars, type Category } from "@/data/courses";
import { courseCategories } from "@/data/landing";
import { cn } from "@/lib/utils";

// Row breaks follow the design: 8 / 6 / the rest
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

        <div className="mt-8 flex flex-col items-center gap-y-3 sm:gap-y-[22px]">
          {categoryRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 sm:gap-x-4"
            >
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
            </div>
          ))}
        </div>

        {/* Re-keyed on category so the cards re-mount and replay the entrance animation */}
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

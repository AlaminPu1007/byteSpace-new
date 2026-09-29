"use client";

import { useState } from "react";
import { Container } from "@/components/shared/container";
import { CourseCard } from "@/components/shared/course-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { courseCategories, courses } from "@/data/landing";
import { cn } from "@/lib/utils";

export function CourseExplorer() {
  const [active, setActive] = useState(courseCategories[0]);

  return (
    <section id="courses" className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          title="Discover Your Passion, Build Your Skills"
          description="At ByteSpace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {courseCategories.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => setActive(name)}
              aria-pressed={active === name}
              className={cn(
                "rounded-full px-4 py-1.5 text-xs transition-colors sm:text-sm",
                active === name
                  ? "bg-lime-500 font-medium text-neutral-950"
                  : "bg-neutral-50 text-neutral-600 hover:bg-neutral-100",
              )}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </Container>
    </section>
  );
}

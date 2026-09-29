import { CheckCircle2 } from "lucide-react";
import { AvatarStack } from "@/components/shared/avatar-stack";
import { Container } from "@/components/shared/container";
import { CourseCard } from "@/components/shared/course-card";
import { courses, creatorPerks, stats } from "@/data/landing";

export function Growth() {
  return (
    <section
      id="creators"
      className="bg-[radial-gradient(circle_at_10%_10%,var(--color-lime-100),transparent_40%),radial-gradient(circle_at_90%_60%,var(--color-brand-100),transparent_40%)] py-14 sm:py-20"
    >
      <Container className="space-y-16 lg:space-y-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl">Your Path to Professional Growth Starts Here!</h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-neutral-500">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>
            <dl className="mt-8 flex gap-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-heading text-2xl font-semibold text-brand-700">{s.value}</dd>
                  <p className="text-xs text-neutral-500">{s.label}</p>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:ml-auto">
            <CourseCard course={courses[0]} />
            <div className="absolute -right-2 bottom-16 rounded-xl bg-white p-3 shadow-lg sm:-right-8">
              <p className="text-[10px] text-neutral-500">Learning Progress</p>
              <p className="font-heading text-2xl font-semibold">55%</p>
            </div>
          </div>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative mx-auto h-72 w-full max-w-sm rounded-3xl bg-gradient-to-br from-brand-100 to-brand-300 sm:h-96 lg:order-none">
            <div className="absolute left-3 top-6 rounded-xl bg-brand-700 p-3 text-white shadow-lg">
              <p className="text-[10px] text-white/70">Total Revenue</p>
              <p className="font-heading text-lg font-semibold">$120.29</p>
            </div>
            <div className="absolute bottom-24 left-3 rounded-xl bg-white p-3 shadow-lg">
              <p className="text-[10px] text-neutral-500">Year to Date</p>
              <p className="font-heading text-lg font-semibold">$1,200.38</p>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-xl bg-white p-3 shadow-lg">
              <p className="mb-2 text-xs font-medium">Happy Students</p>
              <AvatarStack />
            </div>
          </div>

          <div className="lg:pl-10">
            <h2 className="text-3xl sm:text-4xl">Create &amp; Manage Courses Easily.</h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-neutral-500">
              ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {creatorPerks.map((perk) => (
                <li key={perk} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 fill-brand-700 text-white" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

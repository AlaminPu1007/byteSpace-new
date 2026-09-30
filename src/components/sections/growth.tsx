import Image from "next/image";
import { CheckCircle2, Star } from "lucide-react";
import { AvatarStack } from "@/components/shared/avatar-stack";
import { Container } from "@/components/shared/container";
import { CourseCard } from "@/components/shared/course-card";
import { Glow } from "@/components/shared/glow";
import { courses, learnerAvatars } from "@/data/courses";
import { CountUp } from "@/components/shared/count-up";
import { creatorPerks, stats } from "@/data/landing";

export function Growth() {
  return (
    <section
      id="creators"
      className="relative overflow-x-clip py-14 sm:pb-11 sm:pt-12"
    >
      {/* Positions follow the 1440 x 1460 design canvas */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <Glow
          color="#cbfc01"
          opacity={0.4}
          className="-left-[152px] -top-[466px]"
        />
        <Glow
          color="#003be2"
          opacity={0.08}
          className="-right-[508px] -top-[458px]"
        />
        <Glow
          color="#003be2"
          opacity={0.16}
          className="-left-[508px] top-[calc(51.5%-568px)]"
        />
        <Glow
          color="#cbfc01"
          opacity={0.35}
          size={520}
          className="-left-[260px] bottom-[-90px]"
        />
        <Glow
          color="#003be2"
          opacity={0.24}
          className="-bottom-[465px] -right-[419px]"
        />
      </div>

      <Container className="relative space-y-12 lg:space-y-16">
        <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-10 [--s:0.4] min-[360px]:[--s:0.47] min-[400px]:[--s:0.55] sm:[--s:1] lg:[--s:0.72] xl:[--s:1] lg:grid-cols-[minmax(0,1fr)_calc(596px*var(--s))] lg:gap-x-0">
          <div className="max-lg:text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px]">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="mt-6 max-w-[480px] max-lg:mx-auto text-base leading-[1.6] text-neutral-500">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>
            <dl className="mt-10 flex gap-12 max-lg:justify-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-heading text-[32px] font-semibold leading-[1.2] text-brand-800">
                    <CountUp value={s.value} />
                  </dd>
                  <p className="text-base text-neutral-500">{s.label}</p>
                </div>
              ))}
            </dl>
          </div>

          {/* Laid out at design size on a 795x584 canvas, scaled down as one piece on small screens */}
          <div className="relative mx-auto h-[calc(584px*var(--s))] w-[calc(596px*var(--s))]">
            <div className="absolute left-[calc(-76px*var(--s))] top-0 h-[584px] w-[795px] origin-top-left scale-(--s)">
              <div className="absolute left-[85px] top-[67px] w-[373px]">
                <CourseCard
                  course={courses[0]}
                  avatars={learnerAvatars.slice(0, 4)}
                />
              </div>

              <div
                aria-hidden="true"
                className="absolute left-[130px] top-[530px] h-[110px] w-[520px] rounded-full bg-neutral-950/25 blur-[36px]"
              />

              <Image
                src="/images/hero/student.png"
                alt="Smiling student with headphones holding a laptop"
                width={710}
                height={506}
                className="pointer-events-none absolute left-[64px] top-[78px] max-w-none"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, #000 92%, transparent)",
                }}
              />

              <div className="absolute left-[418px] top-[273px] w-[224px] animate-[float_6s_ease-in-out_infinite] rounded-[20px] bg-white p-4 shadow-[0_16px_40px_-14px_rgba(4,8,25,0.25)]">
                <p className="text-[15px] leading-none text-neutral-950">
                  Learning Progress
                </p>
                <p className="mt-2.5 font-heading text-[43px] font-semibold leading-[1.2] text-neutral-950">
                  55%
                </p>
                <div className="mt-2.5 h-2 rounded-full bg-neutral-50">
                  <div className="h-full w-[55%] rounded-full bg-lime-500" />
                </div>
              </div>

              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-[482px] top-[130px] size-[200px] animate-[float_7s_ease-in-out_0.5s_infinite] bg-contain bg-no-repeat mask-contain mask-no-repeat"
                style={{
                  backgroundColor: "#d4fb20",
                  backgroundImage: "url(/images/growth/squiggle.png)",
                  backgroundBlendMode: "overlay",
                  maskImage: "url(/images/growth/squiggle.png)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-10 [--s:0.45] min-[360px]:[--s:0.5] min-[400px]:[--s:0.62] sm:[--s:1] lg:[--s:0.75] xl:[--s:1] lg:grid-cols-[calc(560px*var(--s))_minmax(0,1fr)] lg:gap-x-10 xl:gap-x-[61px]">
          {/* 560x723 design canvas, scaled as one piece on small screens */}
          <div className="relative mx-auto h-[calc(723px*var(--s))] w-[calc(560px*var(--s))]">
            <div className="absolute left-0 top-0 h-[723px] w-[560px] origin-top-left scale-(--s)">
              <div className="absolute left-0 top-[50px] h-[119px] w-[250px] rounded-2xl bg-brand-800 p-4 text-white">
                <p className="text-base leading-none">Total Revenue</p>
                <p className="mt-0.5 text-[10px] leading-none text-white/70">
                  July 1-28
                </p>
                <p className="mt-3 font-heading text-[28px] font-semibold leading-none">
                  $120.29
                </p>
                <div className="mt-3 h-2 rounded-full bg-white/90">
                  <div className="h-full w-[55%] rounded-full bg-lime-500" />
                </div>
              </div>

              <div className="absolute left-0 top-[201px] h-[134px] w-[134px] rounded-2xl bg-brand-800 p-4 text-white">
                <p className="text-base leading-none">Year to Date</p>
                <p className="mt-0.5 text-[10px] leading-none text-white/70">
                  2023
                </p>
                <p className="mt-3 font-heading text-[22px] font-semibold leading-none">
                  $1,200.38
                </p>
                <span className="mt-3 inline-block rounded-full bg-lime-500 px-2 py-0.5 text-[11px] font-medium leading-4 text-neutral-950">
                  +12$
                </span>
              </div>

              <Image
                src="/images/growth/creator.png"
                alt="Smiling creator with headphones holding a tablet"
                width={582}
                height={723}
                className="pointer-events-none absolute left-[5px] top-0 max-w-none"
              />

              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-[300px] top-[121px] size-[220px] rotate-45 animate-[float_8s_ease-in-out_infinite] bg-contain bg-no-repeat mask-contain mask-no-repeat"
                style={{
                  backgroundColor: "#d4fb20",
                  backgroundImage: "url(/images/growth/squiggle.png)",
                  backgroundBlendMode: "overlay",
                  maskImage: "url(/images/growth/squiggle.png)",
                }}
              />

              <div className="absolute left-[284px] top-[420px] h-[122px] w-[256px] rounded-[20px] bg-white p-4 shadow-[0_16px_40px_-14px_rgba(4,8,25,0.2)]">
                <p className="text-base leading-none text-neutral-950 font-semibold">
                  Happy Students
                </p>
                <p className="mt-1.5 flex items-center gap-1 text-[11px] leading-none text-neutral-950">
                  <span className="font-medium">4.5</span>
                  <span className="text-neutral-400">(240)</span>
                  <Star className="size-3 fill-lime-500 text-lime-500" />
                </p>
                <AvatarStack
                  images={[
                    ...learnerAvatars,
                    learnerAvatars[0],
                    learnerAvatars[2],
                  ]}
                  count={8}
                  extra="2K+"
                  size="xl"
                  className="mt-3"
                />
              </div>
            </div>
          </div>

          <div className="max-lg:text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px]">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="mt-6 max-w-[560px] max-lg:mx-auto text-base leading-[1.6] text-neutral-500 sm:text-lg">
              <span className="font-semibold text-neutral-950">ByteSpace</span>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>
            <ul className="mt-8 space-y-3 max-lg:mx-auto max-lg:w-fit max-lg:text-left text-base text-neutral-950 sm:text-lg">
              {creatorPerks.map((perk) => (
                <li key={perk} className="flex items-center gap-3">
                  <CheckCircle2 className="size-5 fill-brand-800 text-white" />
                  <p className="font-medium">{perk}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

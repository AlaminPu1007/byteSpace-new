import Image from "next/image";
import { Search, Star } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { AvatarStack } from "@/components/shared/avatar-stack";
import { Container } from "@/components/shared/container";
import { ResetForm } from "@/components/shared/reset-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { learnerAvatars } from "@/data/courses";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-800 pt-28 text-white sm:pt-36 lg:pt-40">
      {/* grid lines */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:120px_120px]"
      />

      {/* 3D ornaments: scaled with the viewport, but never smaller than 900px wide */}
      <Image
        src="/images/hero/ornaments.png"
        alt=""
        aria-hidden
        width={2880}
        height={1608}
        priority
        sizes="(min-width: 900px) 100vw, 900px"
        className="pointer-events-none absolute bottom-0 left-1/2 h-auto w-[clamp(900px,100%,2000px)] max-w-none -translate-x-1/2"
      />

      <Navbar />

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-[72px]">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm text-white/90 sm:text-base lg:mt-10 lg:max-w-none">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          <ResetForm className="mx-auto mt-8 flex max-w-[581px] items-start gap-4 lg:mt-14">
            <div className="flex h-12 flex-1 items-center gap-3 rounded-full bg-white px-4 sm:h-[52px] sm:px-5">
              <Search className="size-5 shrink-0 text-neutral-500" />
              <Input
                type="search"
                placeholder="Course, topic, creator"
                aria-label="Search courses"
                className="h-full border-0 bg-transparent px-0 text-neutral-900 shadow-none focus-visible:ring-0"
              />
            </div>
            <Button type="submit" variant="secondary" className="h-11 rounded-full px-6 text-base sm:h-[46px]">
              Search
            </Button>
          </ResetForm>
        </div>
      </Container>

      {/* Semicircle stage, sized from the design: 1149 x 442 */}
      <div className="relative mx-auto mt-16 min-h-[260px] sm:mt-20 w-full max-w-[1149px] lg:mt-[68px] lg:aspect-[1149/442] lg:min-h-0">
        <div className="absolute bottom-0 left-1/2 aspect-[1149/442] w-[max(100%,600px)] -translate-x-1/2">
          <Image
            src="/images/hero/ellipse.png"
            alt=""
            aria-hidden
            fill
            sizes="1149px"
            className="object-fill"
          />
          <Image
            src="/images/hero/student.png"
            alt="Smiling student holding a laptop"
            width={1444}
            height={1030}
            priority
            sizes="(min-width: 1149px) 840px, 73vw"
            className="absolute left-[18.1%] top-[-17.4%] w-[70%] max-w-none"
          />
        </div>

        {/* UI/UX card */}
        <div className="absolute left-[21%] top-[12%] hidden rounded-2xl bg-white px-4 py-3 text-neutral-950 shadow-lg sm:block lg:px-5 lg:py-4">
          <p className="text-sm font-medium lg:text-base">UI/UX Design</p>
          <p className="text-xs text-neutral-500">200 Courses &middot; 1000+ Students</p>
        </div>

        {/* Learning progress card */}
        <div className="absolute right-2 top-[6%] w-36 rounded-2xl bg-white p-3 text-neutral-950 shadow-lg sm:left-[59%] sm:right-auto sm:top-[15%] sm:w-44 sm:p-4 lg:w-[231px] lg:p-5">
          <p className="text-xs sm:text-sm">Learning Progress</p>
          <p className="mt-1 font-heading text-3xl font-semibold sm:text-4xl lg:text-[56px] lg:leading-tight">55%</p>
          <div className="mt-2 h-2 rounded-full bg-neutral-100 lg:mt-3">
            <div className="h-full w-[55%] rounded-full bg-lime-500" />
          </div>
        </div>

        {/* Happy students card */}
        <div className="absolute bottom-4 left-2 rounded-2xl bg-white p-3 text-neutral-950 shadow-lg sm:bottom-auto sm:left-[14.5%] sm:top-[57%] sm:p-4 lg:p-5">
          <p className="text-sm font-medium lg:text-base">Happy Students</p>
          <p className="mb-2 flex items-center gap-1 text-xs text-neutral-500">
            4.5 (240) <Star className="size-3.5 fill-lime-500 text-lime-500" />
          </p>
          <AvatarStack size="lg" count={6} extra="2K+" images={learnerAvatars} />
        </div>
      </div>
    </section>
  );
}

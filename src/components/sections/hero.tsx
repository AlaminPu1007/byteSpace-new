import { Search, Star } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { AvatarStack } from "@/components/shared/avatar-stack";
import { Blobs } from "@/components/shared/blobs";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-800 pt-28 text-white sm:pt-36">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:84px_84px]"
      />
      <Blobs />
      <Navbar />

      <Container className="relative max-w-[1200px]">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-[72px]">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm text-white/90 sm:mt-8 sm:text-base lg:max-w-none">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          <form className="mx-auto mt-8 flex max-w-xl items-center gap-3 sm:mt-10">
            <div className="flex h-12 flex-1 items-center gap-2 rounded-full bg-white px-4 sm:h-14 sm:px-5">
              <Search className="size-5 shrink-0 text-neutral-500" />
              <Input
                type="search"
                placeholder="Course, topic, creator"
                aria-label="Search courses"
                className="h-full border-0 bg-transparent px-1 text-neutral-900 shadow-none focus-visible:ring-0"
              />
            </div>
            <Button type="submit" variant="secondary" className="h-12 rounded-full px-5 text-base sm:h-14 sm:px-7">
              Search
            </Button>
          </form>
        </div>

        {/* Semicircle with student illustration */}
        <div className="relative mx-auto mt-12 h-[280px] w-full max-w-[900px] sm:mt-16 sm:h-[400px] lg:h-[450px]">
          <div className="absolute inset-x-0 bottom-0 top-0 rounded-t-full bg-lime-500" />

          <svg
            viewBox="0 0 320 400"
            role="img"
            aria-label="Smiling student holding a laptop"
            className="absolute bottom-0 left-1/2 h-[95%] -translate-x-1/2"
          >
            <ellipse cx="160" cy="345" rx="150" ry="18" fill="#000" opacity=".08" />
            <path d="M40 400c0-70 40-110 120-110s120 40 120 110z" fill="#5b8fc9" />
            <path d="M110 300c10 30 90 30 100 0l20 100H90z" fill="#f4a3b5" />
            <rect x="140" y="250" width="40" height="55" rx="18" fill="#f1b48d" />
            <ellipse cx="160" cy="180" rx="62" ry="76" fill="#f1b48d" />
            <path d="M92 175c-8-70 30-105 72-105s78 35 68 100c-10-30-30-52-70-52s-58 20-70 57z" fill="#5a2f22" />
            <path d="M120 200q40 40 80 0" stroke="#fff" strokeWidth="9" fill="none" strokeLinecap="round" />
            <path d="M92 190v-30M228 190v-30" stroke="#0b36a4" strokeWidth="16" strokeLinecap="round" />
            <path d="M88 130c10-70 130-70 144 0" stroke="#0b36a4" strokeWidth="8" fill="none" />
            <rect x="170" y="290" width="150" height="90" rx="8" fill="#3a3b3f" transform="rotate(-10 245 335)" />
          </svg>

          <div className="absolute left-0 top-[28%] rounded-2xl bg-white px-4 py-3 text-neutral-950 shadow-lg sm:left-[10%]">
            <p className="text-xs font-medium sm:text-sm">UI/UX Design</p>
            <p className="text-[10px] text-neutral-500 sm:text-xs">200 Courses &middot; 1000+ Students</p>
          </div>

          <div className="absolute right-0 top-[34%] w-36 rounded-2xl bg-white p-3 text-neutral-950 shadow-lg sm:right-[6%] sm:w-52 sm:p-4">
            <p className="text-xs sm:text-sm">Learning Progress</p>
            <p className="mt-1 font-heading text-3xl font-semibold sm:text-5xl">55%</p>
            <div className="mt-3 h-2 rounded-full bg-neutral-100">
              <div className="h-full w-[55%] rounded-full bg-lime-500" />
            </div>
          </div>

          <div className="absolute bottom-6 left-0 rounded-2xl bg-white p-3 text-neutral-950 shadow-lg sm:bottom-8 sm:left-[2%] sm:p-4">
            <p className="text-xs font-medium sm:text-sm">Happy Students</p>
            <p className="mb-2 flex items-center gap-1 text-[10px] text-neutral-500 sm:text-xs">
              4.5 (240) <Star className="size-3 fill-lime-500 text-lime-500" />
            </p>
            <AvatarStack extra="2K+" />
          </div>
        </div>
      </Container>
    </section>
  );
}

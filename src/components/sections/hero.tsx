import { Search } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { AvatarStack } from "@/components/shared/avatar-stack";
import { Blobs } from "@/components/shared/blobs";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-800 pt-28 text-white sm:pt-36">
      <Navbar />
      <Blobs />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px]"
      />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-[64px]">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm text-white/80 sm:text-base">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          <form className="mx-auto mt-8 flex max-w-md items-center gap-2 rounded-full bg-white p-1.5">
            <Search className="ml-3 size-4 shrink-0 text-neutral-400" />
            <Input
              type="search"
              placeholder="Course, topic, creator"
              aria-label="Search courses"
              className="h-9 border-0 bg-transparent px-1 text-neutral-900 shadow-none focus-visible:ring-0"
            />
            <Button type="submit" variant="secondary" className="h-9 rounded-full px-5">
              Search
            </Button>
          </form>
        </div>

        <div className="relative mx-auto mt-10 h-[300px] max-w-3xl sm:h-[380px]">
          <div className="absolute inset-x-8 bottom-0 top-8 rounded-t-full bg-lime-500 sm:inset-x-24" />
          <div className="absolute inset-x-1/4 bottom-0 top-0 rounded-t-[999px] bg-gradient-to-b from-brand-200 to-brand-400" />

          <div className="absolute left-0 top-10 rounded-xl bg-white p-3 text-neutral-900 shadow-lg sm:left-6">
            <p className="text-xs font-medium">UI/UX Design</p>
            <p className="text-[10px] text-neutral-500">230 Courses · 1000+ Students</p>
          </div>
          <div className="absolute right-0 top-14 rounded-xl bg-white p-3 text-neutral-900 shadow-lg sm:right-6">
            <p className="text-[10px] text-neutral-500">Learning Progress</p>
            <p className="font-heading text-2xl font-semibold">55%</p>
            <div className="mt-1 h-1 rounded-full bg-neutral-100">
              <div className="h-full w-[55%] rounded-full bg-lime-500" />
            </div>
          </div>
          <div className="absolute bottom-6 left-0 rounded-xl bg-white p-3 text-neutral-900 shadow-lg sm:left-10">
            <p className="mb-2 text-xs font-medium">Happy Students</p>
            <AvatarStack />
          </div>
        </div>
      </Container>
    </section>
  );
}

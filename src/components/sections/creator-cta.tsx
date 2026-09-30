import Link from "next/link";
import { Blobs } from "@/components/shared/blobs";
import { Container } from "@/components/shared/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CreatorCta() {
  return (
    <section className="relative overflow-hidden bg-brand-800 py-16 text-white sm:py-20 lg:py-[84px]">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:120px_120px]"
      />
      <Blobs className="opacity-30 xl:opacity-100" />

      <Container className="relative text-center">
        <h2 className="mx-auto max-w-[600px] text-3xl sm:text-4xl lg:text-[44px]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="mx-auto mt-6 max-w-[964px] text-base leading-[1.6] text-white/90 sm:text-lg lg:mt-10">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <Link
          href="/signup"
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "mt-8 h-[46px] rounded-full bg-lime-400 px-[34px] text-base font-medium text-neutral-950 hover:bg-lime-300 lg:mt-10",
          )}
        >
          Join as Creator
        </Link>
      </Container>
    </section>
  );
}

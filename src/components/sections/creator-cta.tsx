import Link from "next/link";
import { Blobs } from "@/components/shared/blobs";
import { Container } from "@/components/shared/container";
import { buttonVariants } from "@/components/ui/button";

export function CreatorCta() {
  return (
    <section className="relative overflow-hidden bg-brand-800 py-20 text-white sm:py-28">
      <Blobs />
      <Container className="relative text-center">
        <h2 className="mx-auto max-w-lg text-3xl sm:text-4xl">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/80">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <Link
          href="/signup"
          className={buttonVariants({ variant: "secondary", className: "mt-8 h-11 rounded-full px-7" })}
        >
          Join as Creator
        </Link>
      </Container>
    </section>
  );
}

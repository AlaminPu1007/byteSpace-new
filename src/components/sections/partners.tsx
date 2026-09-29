import Image from "next/image";
import { Container } from "@/components/shared/container";
import { partnerLogos } from "@/data/landing";

export function Partners() {
  return (
    <section className="bg-neutral-50 py-12 sm:py-16 lg:py-20">
      <Container className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 lg:flex-nowrap lg:justify-between lg:gap-x-4">
        {partnerLogos.map((logo) => (
          <Image
            key={logo.src}
            src={logo.src}
            alt="Partner logo"
            // the exported files are @2x
            width={logo.width / 2}
            height={logo.height / 2}
            className="h-auto w-[140px] sm:w-[150px] lg:w-[140px] xl:w-[167px]"
          />
        ))}
      </Container>
    </section>
  );
}

import Image from "next/image";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { learningPaths } from "@/data/landing";

export function LearningPaths() {
  return (
    <section className="pb-14 sm:pb-20">
      <Container>
        <SectionHeading
          title="Explore Diverse Learning Paths at Bytespace"
          titleClassName="max-w-none"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6">
          {learningPaths.map(({ label, icon }) => (
            <li
              key={label}
              className="flex flex-col items-center justify-center gap-5 rounded-[24px] border border-neutral-200 bg-white px-3 py-8 text-center font-sans text-lg font-medium leading-[1.2] text-neutral-950 transition-shadow hover:shadow-md sm:text-xl lg:aspect-square lg:justify-start lg:py-0 lg:pt-[calc(50%-55px)] lg:max-xl:text-base"
            >
              <span className="grid size-[66px] place-items-center rounded-full bg-lime-400">
                <Image src={icon} alt="" width={36} height={36} />
              </span>
              {label}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

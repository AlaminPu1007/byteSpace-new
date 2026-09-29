import { Briefcase, Camera, Code, Laptop, Megaphone, PenTool, type LucideIcon } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { learningPaths } from "@/data/landing";

const icons: Record<(typeof learningPaths)[number]["icon"], LucideIcon> = {
  PenTool,
  Code,
  Laptop,
  Briefcase,
  Megaphone,
  Camera,
};

export function LearningPaths() {
  return (
    <section className="pb-14 sm:pb-20">
      <Container>
        <SectionHeading
          title="Explore Diverse Learning Paths at ByteSpace"
          description="At ByteSpace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {learningPaths.map(({ label, icon }) => {
            const Icon = icons[icon];
            return (
              <li
                key={label}
                className="flex flex-col items-center gap-3 rounded-2xl border border-neutral-100 bg-white px-4 py-6 text-sm font-medium shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-lime-500">
                  <Icon className="size-5" />
                </span>
                {label}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

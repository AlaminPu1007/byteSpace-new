import { Container } from "@/components/shared/container";
import { partnerLogos } from "@/data/landing";

export function Partners() {
  return (
    <section className="bg-neutral-50 py-10 sm:py-14">
      <Container className="grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {partnerLogos.map((name, i) => (
          <div
            key={i}
            className="flex items-center justify-center gap-2 font-heading text-base font-medium text-neutral-400"
          >
            <span className="size-5 rounded-full border-2 border-neutral-400" />
            {name}
          </div>
        ))}
      </Container>
    </section>
  );
}

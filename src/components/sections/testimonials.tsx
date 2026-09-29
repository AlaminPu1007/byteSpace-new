import { Container } from "@/components/shared/container";
import { testimonials } from "@/data/landing";

const avatarTones = ["bg-amber-300", "bg-neutral-300", "bg-sky-300"];

export function Testimonials() {
  return (
    <section className="bg-[radial-gradient(circle_at_20%_20%,var(--color-lime-100),transparent_45%),radial-gradient(circle_at_80%_80%,var(--color-brand-100),transparent_45%)] py-14 sm:py-20">
      <Container>
        <div className="grid items-end gap-6 lg:grid-cols-2">
          <h2 className="text-3xl sm:text-4xl">Discover What Our Community Is Saying</h2>
          <p className="text-sm leading-relaxed text-neutral-500">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={t.name} className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className={`size-12 rounded-full ${avatarTones[i % avatarTones.length]}`} />
                <figcaption>
                  <p className="font-heading text-base font-semibold">{t.name}</p>
                  <p className="text-xs text-brand-700">{t.role}</p>
                </figcaption>
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-neutral-600">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

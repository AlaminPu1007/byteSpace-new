import { FadeImage } from "@/components/shared/fade-image";
import { Container } from "@/components/shared/container";
import { Glow } from "@/components/shared/glow";
import { testimonials } from "@/data/landing";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20 lg:pb-[58px] lg:pt-[75px]">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <Glow color="#cbfc01" opacity={0.55} size={520} className="left-1/2 top-[202px] -translate-x-1/2 -translate-y-1/2" />
        <Glow color="#cbfc01" opacity={0.45} size={560} className="-right-[145px] top-[352px] -translate-y-1/2" />
        <Glow color="#003be2" opacity={0.3} size={700} className="-left-[207px] top-[713px] -translate-y-1/2" />
      </div>

      <Container className="relative xl:max-w-[1280px]">
        <div className="grid items-end gap-6 max-lg:text-center lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:gap-x-8 xl:grid-cols-[1fr_580px] xl:gap-x-0">
          <h2 className="text-3xl text-[#040819] sm:text-4xl xl:text-[44px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="text-base leading-[1.6] text-neutral-600 sm:text-lg">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-10 grid auto-rows-fr items-stretch gap-6 md:grid-cols-2 lg:mt-[72px] lg:grid-cols-3 lg:gap-10">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-[32px] transition-transform duration-300 hover:-translate-y-1.5 max-md:text-center border border-neutral-100 bg-white p-6 shadow-[0_12px_40px_-8px_rgba(4,8,25,0.12)]">
              <span className="relative block size-20 animate-pulse overflow-hidden rounded-full bg-neutral-100 has-[img.opacity-100]:animate-none max-md:mx-auto">
                <FadeImage
                  src={t.image}
                  alt={t.name}
                  width={160}
                  height={160}
                  className="size-full object-cover"
                />
              </span>
              <figcaption className="mt-6">
                <p className="font-heading text-xl font-semibold leading-[1.2] text-[#040819]">{t.name}</p>
                <p className="mt-1 text-lg leading-7 text-brand-800">{t.role}</p>
              </figcaption>
              <blockquote className="mt-6 text-lg leading-[1.6] text-neutral-600">
                &quot;{t.quote}&quot;
              </blockquote>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

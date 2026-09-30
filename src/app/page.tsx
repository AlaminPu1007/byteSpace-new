import { Footer } from "@/components/layout/footer";
import { CourseExplorer } from "@/components/sections/course-explorer";
import { CreatorCta } from "@/components/sections/creator-cta";
import { Growth } from "@/components/sections/growth";
import { Hero } from "@/components/sections/hero";
import { LearningPaths } from "@/components/sections/learning-paths";
import { Partners } from "@/components/sections/partners";
import { Testimonials } from "@/components/sections/testimonials";
import { Reveal } from "@/components/shared/reveal";
import { ScrollToTop } from "@/components/shared/scroll-to-top";

export default function Home() {
  return (
    <main>
      <Hero />
      <Reveal>
        <Partners />
      </Reveal>
      <Reveal>
        <CourseExplorer />
      </Reveal>
      <Reveal>
        <LearningPaths />
      </Reveal>
      <Reveal>
        <Growth />
      </Reveal>
      <Reveal>
        <CreatorCta />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Footer />
      <ScrollToTop />
    </main>
  );
}

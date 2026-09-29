import { Footer } from "@/components/layout/footer";
import { CourseExplorer } from "@/components/sections/course-explorer";
import { CreatorCta } from "@/components/sections/creator-cta";
import { Growth } from "@/components/sections/growth";
import { Hero } from "@/components/sections/hero";
import { LearningPaths } from "@/components/sections/learning-paths";
import { Partners } from "@/components/sections/partners";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <CourseExplorer />
      <LearningPaths />
      <Growth />
      <CreatorCta />
      <Testimonials />
      <Footer />
    </main>
  );
}

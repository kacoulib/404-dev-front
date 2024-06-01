// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import InformationSection from "./experience-section";
import SkillsSection from "./skills-section";
import Testimonial from "./testimonial";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <InformationSection />
      <Testimonial />
      <SkillsSection />
      <Footer />
    </>
  );
}

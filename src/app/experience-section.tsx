"use client";
import { Typography } from "@material-tailwind/react";
import InfoCard from "@/components/info-card";
import { EXPERIENCE } from "@/utils/data";

export function InformationSection() {
  return (
    <section id="experience" className="pb-14 px-8">
      <div className="container mx-auto">
        <div className="mb-10">
          <Typography
            color="blue-gray"
            className="mb-2 text-3xl font-bold text-center sticky top-12"
          >
            Experiences
          </Typography>
          <Typography variant="lead" className="!text-gray-500 text-center">
            See my experience as a developer.
          </Typography>
        </div>
        {EXPERIENCE.map((category, idx) => (
          <div key={idx} id={category.categoryId} className="mb-12">
            <Typography variant="h2" color="blue-gray" className="mb-10">
              {category.category}
            </Typography>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {category.experiences.map((experience, idx) => (
                <InfoCard key={idx} {...experience} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InformationSection;

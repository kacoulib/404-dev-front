"use client";
import { Typography } from "@material-tailwind/react";

import SkillsCard from "@/components/skill-card";
import { SKILLS } from "@/utils/data";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="container gap-20 mt-36 mx-auto items-center"
    >
      <div>
        <div className="mb-10">
          <Typography color="blue-gray" className="mb-2 text-3xl font-bold">
            Skills
          </Typography>
          <Typography variant="lead" className="!text-gray-500">
            Check out my technical and soft skills.
          </Typography>
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12 lg:grid-cols-2">
          {SKILLS.map((props, idx) => (
            <SkillsCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;

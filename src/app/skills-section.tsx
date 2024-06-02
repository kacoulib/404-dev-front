/* eslint-disable @next/next/no-img-element */
"use client";
import { Chip, Typography } from "@material-tailwind/react";

import { SKILLS } from "@/utils/data";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="container gap-20 pt-6 px-8 mt-30 mx-auto items-center"
    >
      <div className="container mx-auto">
        <div className="mb-7">
          <Typography color="blue-gray" className="mb-2 text-3xl font-bold">
            Skills
          </Typography>
          <Typography variant="lead" className="!text-gray-500">
            Check out my technical and soft skills.
          </Typography>
        </div>

        <div className="flex flex-col flex-wrap gap-8">
          {SKILLS.map((props, idx) => (
            <div key={idx}>
              <h4>{props.category}</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {props.skills.map((skill, idx) => (
                  <Chip
                    key={idx}
                    icon={<img src={skill.icon} alt={skill.name} />}
                    className="text-[#035266] bg-[#ecf3f4] font-semibold py-2 px-3 capitalize"
                    value={skill.name}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;

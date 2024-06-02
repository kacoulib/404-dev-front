"use client";
import { Typography } from "@material-tailwind/react";
import InfoCard, { InfoCardProps } from "@/components/info-card";
import { EXPERIENCE } from "@/utils/data";
import { useState } from "react";
import { Modal } from "@/components/modal";
import { SingleExperience } from "@/components/SingleExperience";

export function InformationSection() {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState<string>("");
  const [currentExperience, setCurrentExperience] = useState<
    InfoCardProps | undefined
  >(undefined);

  const handleClick = (category: string, title: string) => {
    const experience = EXPERIENCE.find(
      (exp) => exp.category === category
    )?.experiences.find((exp) => exp.title === title);

    setCategory(category);
    setCurrentExperience(experience);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section id="experience" className="pb-14 px-8">
      <div className="container mx-auto">
        <div className="mb-10">
          <Typography
            color="blue-gray"
            className="mb-2 text-3xl font-bold text-center top-12"
          >
            Experiences
          </Typography>
          <Typography variant="lead" className="!text-gray-500 text-center">
            See my experience as a developer.
          </Typography>
        </div>
        {EXPERIENCE.map((category, idx) => (
          <div key={idx} id={category.categoryId} className="mb-12">
            <Typography variant="h2" color="blue-gray" className="mb-10 sticky">
              {category.category}
            </Typography>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {category.experiences.map((experience, idx) => (
                <InfoCard
                  key={idx}
                  {...experience}
                  onClick={() =>
                    handleClick(category.category, experience.title)
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <Modal open={open} handler={handleClose}>
        {currentExperience && (
          <SingleExperience category={category} {...currentExperience} />
        )}
      </Modal>
    </section>
  );
}

export default InformationSection;

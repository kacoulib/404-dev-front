import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip,
} from "@material-tailwind/react";
import { InfoCardProps } from "./info-card";
import { cx } from "@/utils/css";

interface SingleExperienceProps extends InfoCardProps {
  category: string;
}

export function SingleExperience(props: SingleExperienceProps) {
  return (
    <Card className="single-experience w-full md:flex-row flex-col">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-full md:w-2/5 shrink-0 rounded-r-none"
      >
        <div
          style={{
            backgroundImage: `url(${props.image})`,
          }}
          className={cx(
            "min-h-[200px] md:min-h-full md:min-w-full bg-no-repeat bg-center bg-cover",
            props.coverContain ? "bg-contain" : "bg-cover"
          )}
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          {props.category}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {props.title}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          {props.children}
        </Typography>
        {props.skills && (
          <div className="flex flex-wrap gap-2">
            {props.skills.map((skill, idx) => (
              <Chip
                key={idx}
                className="text-[#035266] bg-[#ecf3f4] font-normal capitalize"
                value={skill}
              />
            ))}
          </div>
        )}
      </CardBody>
    </Card>
  );
}

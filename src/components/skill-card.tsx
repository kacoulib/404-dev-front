import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import Image from "next/image";

interface SkillProps {
  name: string;
  icon: string;
  link: string;
}

interface SkillsCardProps {
  category: string;
  skills: SkillProps[];
}

export function SkillsCard({ category, skills }: SkillsCardProps) {
  return (
    <Card className="mb-8">
      <CardHeader
        className="flex items-center justify-between rounded-none overflow-visible bg-blue-500 p-4"
        floated={false}
        shadow={false}
      >
        <Typography color="white" variant="h5">
          {category}
        </Typography>
      </CardHeader>
      <CardBody className="grid grid-cols-2 gap-4 p-4">
        {skills.map((skill, idx) => (
          <a
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            key={idx}
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <Image src={skill.icon} alt={skill.name} width={24} height={24} />
            <Tooltip content={skill.name}>
              <Typography color="blue-gray" variant="h4">
                {skill.name}
              </Typography>
            </Tooltip>
          </a>
        ))}
      </CardBody>
    </Card>
  );
}

export default SkillsCard;

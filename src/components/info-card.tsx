import { cx } from "@/utils/css";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { truncateText } from "@/utils/fn";
import reactToString from "@/utils/reactToString";

interface SocialLink {
  className?: string;
  url: string;
  platform:
    | "LinkedIn"
    | "GitHub"
    | "Twitter"
    | "Facebook"
    | "Instagram"
    | "AppStore"
    | "PlayStore"
    | "YouTube";
}

export type Skills =
  | "React.js"
  | "Restful API"
  | "Frontend Development"
  | "Animation"
  | "Node.js"
  | "WordPress"
  | "Fullstack Development"
  | "SaaS"
  | "Mobile Development (iOS, Android)"
  | "MongoDB"
  | "JavaScript"
  | "HTML5"
  | "CSS3"
  | "Angular"
  | "TypeScript"
  | "PHP"
  | "Laravel"
  | "MySQL"
  | "Express.js"
  | "Bootstrap"
  | "Ionic"
  | "React Native"
  | "Material-UI"
  | "Git"
  | "SEO"
  | "Agile Methodologies"
  | "Test-Driven Development (TDD)"
  | "Jest"
  | "PostgreSQL";

export interface InfoCardProps {
  icon?: string;
  title: string;
  date: string;
  image?: string;
  website: string;
  socials: SocialLink[];
  children: JSX.Element;
  coverContain?: boolean;
  skills?: Skills[];
  onClick?: () => void;
}

export function InfoCard({
  icon,
  title,
  date,
  image,
  website,
  socials,
  children,
  onClick,
}: InfoCardProps) {
  const text = reactToString(children);
  const excerpt = truncateText(text, 20);

  return (
    <Card className="shadow-lg mb-8 border border-gray-300 overflow-hidden">
      <div onClick={onClick}>
        <CardHeader className="flex items-center justify-between rounded-none overflow-visible mx-0 py-2 px-4 mt-0 shadow-none">
          <div className="flex flex-col w-full">
            <Typography color="blue-gray" variant="h5" className="w-full">
              {title}
            </Typography>
            <Typography className="!text-gray-500 font-medium text-xs">
              {date}
            </Typography>
          </div>
          {!!icon && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="max-w-[100px] w-fit h-fit max-h-8"
              src={icon}
              alt={title}
            />
          )}
        </CardHeader>
        {!!image && (
          <div
            className="w-full h-[300px] bg-center bg-no-repeat bg-cover overflow-hidden"
            style={{ backgroundImage: `url(${image})` }}
          />
        )}
      </div>
      <CardBody className="grid justify-start !px-3.5 pt-2">
        <Typography className="font-normal mb-4 text-base tracking-tight">
          {excerpt}
        </Typography>
        <div className="flex space-x-4">
          <Link
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 underline"
          >
            <i className="fa-solid fa-globe" />
          </Link>
          {socials.map((social, idx) => (
            <Social key={idx} {...social} />
          ))}
        </div>
      </CardBody>
    </Card>
  );
}

export default InfoCard;

function Social({ url, platform }: SocialLink) {
  const { className, icon } = socialClassName[platform];
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cx("underline", className)}
    >
      {icon}
    </Link>
  );
}

const socialClassName: Record<
  SocialLink["platform"],
  {
    className: string;
    icon: React.ReactNode;
  }
> = {
  LinkedIn: {
    className: "text-[#0066c8]",
    icon: <i className="fa-brands fa-linkedin" />,
  },
  GitHub: {
    className: "text-gray-500",
    icon: <i className="fa-brands fa-github" />,
  },
  Twitter: {
    className: "text-blue-400",
    icon: <i className="fa-brands fa-twitter" />,
  },
  Facebook: {
    className: "text-blue-600",
    icon: <i className="fa-brands fa-facebook" />,
  },
  Instagram: {
    className: "text-pink-500",
    icon: <i className="fa-brands fa-instagram" />,
  },
  AppStore: {
    className: "text-black",
    icon: <i className="fa-brands fa-apple" />,
  },
  PlayStore: {
    className: "text-[#a5c53b]",
    icon: <i className="fa-brands fa-android" />,
  },
  YouTube: {
    className: "text-red-500",
    icon: <i className="fa-brands fa-youtube" />,
  },
};

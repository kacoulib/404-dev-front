import { cx } from "@/utils/css";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

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

export interface InfoCardProps {
  icon?: string;
  title: string;
  date: string;
  image?: string;
  website: string;
  socials: SocialLink[];
  children: React.ReactNode;
}

export function InfoCard({
  icon,
  title,
  date,
  image,
  website,
  socials,
  children,
}: InfoCardProps) {
  return (
    <Card className="mb-8">
      <CardHeader className="flex items-center justify-between rounded-none overflow-visible">
        <div className="flex flex-col gap-1 w-full">
          <Typography color="blue-gray" variant="h5" className="w-full">
            {title}
          </Typography>
          <Typography color="blue-gray" className="font-semibold text-xs">
            {date}
          </Typography>
        </div>
        {!!icon && (
          <img className="max-w-[100px] w-fit max-h-8" src={icon} alt={title} />
        )}
      </CardHeader>
      {!!image && (
        <div
          className="w-full h-[300px] bg-center bg-no-repeat bg-cover overflow-hidden"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      <CardBody className="grid justify-start !px-3.5 pt-2">
        <Typography className="font-normal !text-gray-500 mb-4">
          {children}
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

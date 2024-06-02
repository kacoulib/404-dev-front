import { IconButton } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

export function Socials() {
  return (
    <div className="gap-2 lg:flex">
      <IconButton variant="text" color="black">
        <Link href="https://x.com/kacoulib" target="_blank">
          <i className="fa-brands fa-twitter text-lg" />
        </Link>
      </IconButton>

      <IconButton variant="text" color="blue">
        <Link href="https://www.linkedin.com/in/kacoulib/" target="_blank">
          <i className="fa-brands fa-linkedin text-lg" />
        </Link>
      </IconButton>

      <IconButton variant="text" color="gray">
        <Link href="https://www.malt.fr/profile/kacoulib" target="_bank">
          <Image
            width={24}
            height={24}
            src="https://dam.malt.com/rebranding2020/malt-logo/icon-76x76"
            alt="karim coulibaly malt user"
          />
        </Link>
      </IconButton>
    </div>
  );
}

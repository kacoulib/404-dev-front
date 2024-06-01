"use client";

import { IconButton, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="relative w-full">
      <div className="grid place-items-center min-h-[92vh] px-8">
        <div className="container mx-auto grid place-items-center h-max text-center">
          <Typography variant="h1" color="blue-gray">
            Welcome to my professional resume page!
          </Typography>
          <Typography
            variant="lead"
            color="gray"
            className="mt-4 mb-12 w-full md:max-w-full lg:max-w-4xl"
          >
            I am a seasoned <strong>web and mobile developer</strong>{" "}
            specializing in <strong>full-stack development</strong> with{" "}
            <strong>React</strong>, <strong>Node.js</strong>, and{" "}
            <strong>SaaS</strong> solutions. Explore my{" "}
            <Link href="#skills" className="text-blue-500">
              <strong>skills</strong>
            </Link>
            ,{" "}
            <Link href="#qualifications" className="text-blue-500">
              <strong>qualifications</strong>
            </Link>
            , and extensive{" "}
            <Link href="#experience" className="text-blue-500">
              <strong>experience</strong>
            </Link>{" "}
            in creating robust applications for both{" "}
            <Link href="#web" className="text-blue-500">
              <strong>web</strong>
            </Link>{" "}
            and{" "}
            <Link href="#mobile" className="text-blue-500">
              <strong>mobile platforms</strong>
            </Link>
            .
          </Typography>
          <Typography className="mt-12 mb-4 text-blue-gray-900 font-medium uppercase">
            Connect with me on:
          </Typography>
          <div className="gap-2 lg:flex">
            <IconButton variant="text" color="blue">
              <Link href="https://x.com/kacoulib" target="_blank">
                <i className="fa-brands fa-twitter text-lg" />
              </Link>
            </IconButton>

            <IconButton variant="text" color="gray">
              <Link
                href="https://www.linkedin.com/in/kacoulib/"
                target="_blank"
              >
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
        </div>
      </div>
    </div>
  );
}

export default Hero;

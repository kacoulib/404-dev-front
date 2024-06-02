"use client";

import { Socials } from "@/components/socials";
import { handleScroll } from "@/utils/events";
import { Typography } from "@material-tailwind/react";
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
            I am a seasoned{" "}
            <strong className="cursor-pointer" onClick={handleScroll("#saas")}>
              web
            </strong>{" "}
            and{" "}
            <strong
              className="cursor-pointer"
              onClick={handleScroll("#mobile")}
            >
              mobile developer
            </strong>{" "}
            specializing in <strong>full-stack development</strong> with{" "}
            <strong>React</strong>, <strong>Node.js</strong>, and{" "}
            <strong className="cursor-pointer" onClick={handleScroll("#saas")}>
              SaaS
            </strong>{" "}
            solutions. Explore my{" "}
            <Link
              href="#skills"
              className="text-blue-500"
              onClick={handleScroll("#skills")}
            >
              <strong>skills</strong>
            </Link>
            ,{" "}
            <Link href="#qualifications" className="text-blue-500">
              <strong>qualifications</strong>
            </Link>
            , and extensive{" "}
            <Link
              href="#experience"
              className="text-blue-500"
              onClick={handleScroll("#mobile")}
            >
              <strong>experience</strong>
            </Link>{" "}
            in creating robust applications for both{" "}
            <Link
              href="#saas"
              className="text-blue-500"
              onClick={handleScroll("#saas")}
            >
              <strong>web</strong>
            </Link>{" "}
            and{" "}
            <Link
              href="#mobile"
              className="text-blue-500"
              onClick={handleScroll("#mobile")}
            >
              <strong>mobile platforms</strong>
            </Link>
            .
          </Typography>
          <Typography className="mt-12 mb-4 text-blue-gray-900 font-medium uppercase">
            Connect with me on:
          </Typography>
          <Socials />
        </div>
      </div>
    </div>
  );
}

export default Hero;

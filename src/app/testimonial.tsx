"use client";

import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";
import { TESTIMONIALS } from "@/utils/data";

export function Testimonial() {
  const [active, setActive] = React.useState(3);

  const activeTestimonial =
    TESTIMONIALS.find((t) => t.id === active) || TESTIMONIALS[0];

  return (
    <section id="testimonials" className="pt-12 px-8">
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-20 text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            What Clients Say
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12"
          >
            Discover what clients have to say about their experiences working
            with me. My clients satisfaction is my greatest achievement!
          </Typography>
        </div>
        <Card color="transparent" shadow={false} className="py-8 lg:flex-row">
          <CardBody className="w-full lg:gap-10 h-full lg:!flex justify-between">
            <div className="flex flex-col-reverse md:flex-col justify-between h-auto w-full mb-10 lg:mb-0">
              <div>
                <Typography
                  variant="h3"
                  color="blue-gray"
                  className="mt-8 md:mt-0 mb-4 font-bold lg:max-w-xs"
                >
                  {activeTestimonial.category}
                </Typography>
                <Typography className="mb-3 w-full lg:w-8/12 font-normal !text-gray-500">
                  {activeTestimonial.text}
                </Typography>
                <Typography variant="h6" color="blue-gray" className="mb-0.5">
                  {activeTestimonial.name} - {activeTestimonial.title}
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal mb-5 !text-gray-500"
                >
                  {activeTestimonial.company}
                </Typography>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                {TESTIMONIALS.map((testimonial) => (
                  <React.Fragment key={testimonial.id}>
                    <Avatar
                      variant="rounded"
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      size="sm"
                      className={`cursor-pointer ${
                        active === testimonial.id ? "opacity-100" : "opacity-50"
                      }`}
                      onClick={() => setActive(testimonial.id)}
                    />
                    <div className="w-[1px] h-[36px] bg-blue-gray-100" />
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="hidden md:block h-[21rem] rounded-lg w-full sm:w-[18rem] shrink-0">
              <Image
                width={768}
                height={768}
                src={activeTestimonial.avatar}
                alt={activeTestimonial.name}
                className="h-full rounded-lg w-full object-cover"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Testimonial;

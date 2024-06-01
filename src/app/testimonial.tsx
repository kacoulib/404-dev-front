"use client";

import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";

interface Testimonial {
  id: number;
  category: string;
  text: string;
  name: string;
  title: string;
  company: string;
  link: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    category: "Mobile App Development",
    text: "Dans le cadre de la création d’une application mobile très complexe, avec des délais serrés, pour les équipes retail d’une maison de luxe, Karim et son équipe ont été extrêmement réactifs, disponibles, impliqués, forces de proposition et ont fait preuve d’un très grand professionnalisme. J’espère collaborer de nouveau avec Karim en qui je fais désormais entièrement confiance! ",
    name: "Margaux Vidrequin",
    title: "Graphic Designer",
    company: "Balenciaga",
    link: "https://www.linkedin.com/in/margaux-vidrequin-4796b775/",
    avatar:
      "https://media.licdn.com/dms/image/D4E03AQHpPOmDZR173Q/profile-displayphoto-shrink_400_400/0/1676929280385?e=1722470400&v=beta&t=XsGsW5sL0NaaWjWy-6m3ee1_41osFxu0PY0py8vzMk0",
  },
  {
    id: 2,
    category: "Web Development",
    link: "https://www.linkedin.com/in/marcusflorentin/",
    text: "Karim et moi avons travaillé ensemble pour la conception d'un devis ansi qu'un prévisionnel de projet digital, pour un grand groupe de renom... Karim a su faire preuve d'une grande expertise concernant la création d'un \"back-end\" et ses \"API's\" pour notre client.",
    name: "Marcus Florentin",
    title: "Architecte logiciels",
    company: "Tech Innovations",
    avatar:
      "https://media.licdn.com/dms/image/C4D03AQErdghSMJXdNw/profile-displayphoto-shrink_400_400/0/1596641793587?e=1722470400&v=beta&t=BdnssPPjkZfqNAqia3NlP-xTbSE-2dNJneNkCWT1Ae4",
  },
  {
    id: 3,
    category: "Web Development",
    text: "Ayant collaboré avec Karim sur une mission freelance, je le recommande pour ses compétences en développement web et son sérieux.",
    name: "Taha Faher",
    link: "https://www.linkedin.com/in/faher/",
    title: "Producteur d'émission B2B",
    company: "Média France",
    avatar:
      "https://media.licdn.com/dms/image/D5603AQGscbH91gFC_g/profile-displayphoto-shrink_800_800/0/1707423505856?e=1722470400&v=beta&t=pSyucyJTQ9_ScNqAgDXdP1RUe_IKa3zPEAT__qwwNCU",
  },
  {
    id: 4,
    category: "Web Development",
    text: "Travail soigné et pointu, développeur à l'écoute, disponible et réactif. Je recommande Karim à 100%.",
    name: "Ariane Bienvenue",
    link: "https://www.linkedin.com/in/ariane-kensa/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=fr",
    title: "Designer web, mise en page",
    company: "Ariane Bienvenue",
    avatar:
      "https://media.licdn.com/dms/image/C5603AQH-18giKnCaCw/profile-displayphoto-shrink_800_800/0/1516817942896?e=1722470400&v=beta&t=EapOMWlbyZgloQJLpJQkivLiCwdi-YRUWUgcpYMfFRg",
  },
  {
    id: 5,
    category: "Web Development",
    text: "Nous avons confié à Karim le co- développement de notre comparateur de prix, cœur de notre activité. Il a travaillé en collaboration avec notre CTO sur toute la durée de la mission en se montrant impliqué, disponible et professionnel. Je recommande vivement !",
    name: "Nicolas Kadiri",
    link: "https://www.linkedin.com/in/nicolas-kadiri/?originalSubdomain=fr",
    title: "Président & Fondateur Eurekles",
    company: "Eurekles",
    avatar:
      "https://media.licdn.com/dms/image/C4D03AQE93shr1zYU4A/profile-displayphoto-shrink_400_400/0/1624187081961?e=1722470400&v=beta&t=jIKplgPKnFyGZTlyKXUPLBN7o8LUGUzO4EI3l8ijSp8",
  },
  {
    id: 6,
    category: "Web Development",
    text: "Très bonne prestation de Karim. Il à été fort de proposition et nous apporté une grande aide. Rien à dire, nous sommes vraiment très satisfait ! Recommander à 100%",
    name: "Quentin Colus",
    link: "https://www.linkedin.com/in/nicolas-kadiri/?originalSubdomain=fr",
    title: "Lead Service Designer",
    company: "Nexity",
    avatar:
      "https://media.licdn.com/dms/image/D4E35AQED8z7Oh23cjg/profile-framedphoto-shrink_400_400/0/1712076722392?e=1717862400&v=beta&t=BERA1D4jd7ZI_2el8bt-xEkA2OuzlHIQRT_rlR6YY4A",
  },
];

export function Testimonial() {
  const [active, setActive] = React.useState(3);

  const activeTestimonial =
    testimonials.find((t) => t.id === active) || testimonials[0];

  return (
    <section id="testimonials" className="pt-12 px-8 min-h-screen">
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
          <CardBody className="w-full lg:gap-10 h-full lg:!flex justify-between ">
            <div className="w-full mb-10 lg:mb-0">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold lg:max-w-xs"
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
              <div className="flex items-center gap-4">
                {testimonials.map((testimonial) => (
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
                    <div className="w-[1px] h-[36px] bg-blue-gray-100 "></div>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="h-[21rem] rounded-lg w-full sm:w-[18rem] shrink-0">
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

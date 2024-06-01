"use client";
import { Typography } from "@material-tailwind/react";

import SkillsCard from "@/components/skill-card";

const SKILLS = [
  {
    category: "Compétences principales",
    skills: [
      {
        name: "React.js",
        icon: "https://reactjs.org/favicon.ico",
        link: "https://reactjs.org/",
      },
      {
        name: "Node.js",
        icon: "https://nodejs.org/static/images/favicons/favicon.png",
        link: "https://nodejs.org/",
      },
      {
        name: "Fullstack Development",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1200px-Markdown-mark.svg.png",
        link: "https://en.wikipedia.org/wiki/Full-stack_developer",
      },
      {
        name: "SaaS",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1200px-Markdown-mark.svg.png",
        link: "https://en.wikipedia.org/wiki/Software_as_a_service",
      },
      {
        name: "Mobile Development (iOS, Android)",
        icon: "https://reactnative.dev/img/favicon.ico",
        link: "https://developer.apple.com/ios/",
      },
    ],
  },
  {
    category: "Autres compétences",
    skills: [
      {
        name: "MongoDB",
        icon: "https://www.mongodb.com/assets/images/global/favicon.ico",
        link: "https://www.mongodb.com/",
      },
      {
        name: "JavaScript",
        icon: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
        link: "https://www.javascript.com/",
      },
      {
        name: "HTML5",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/langfr-260px-HTML5_logo_and_wordmark.svg.png",
        link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
      },
      {
        name: "CSS3",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/langfr-260px-CSS3_logo_and_wordmark.svg.png",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "Angular",
        icon: "https://angular.io/assets/images/favicons/favicon.ico",
        link: "https://angular.io/",
      },
      {
        name: "TypeScript",
        icon: "https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "PHP",
        icon: "https://www.php.net/favicon.ico",
        link: "https://www.php.net/",
      },
      {
        name: "Laravel",
        icon: "https://laravel.com/img/favicon/favicon-16x16.png",
        link: "https://laravel.com/",
      },
      {
        name: "MySQL",
        icon: "https://labs.mysql.com/common/themes/sakila/favicon.ico",
        link: "https://www.mysql.com/",
      },
      {
        name: "Express.js",
        icon: "https://expressjs.com/images/favicon.png",
        link: "https://expressjs.com/",
      },
      {
        name: "Bootstrap",
        icon: "https://getbootstrap.com/docs/4.0/assets/img/favicons/favicon.ico",
        link: "https://getbootstrap.com/",
      },
      {
        name: "Ionic",
        icon: "https://ionicframework.com/favicon.ico",
        link: "https://ionicframework.com/",
      },
      {
        name: "React Native",
        icon: "https://reactnative.dev/img/favicon.ico",
        link: "https://reactnative.dev/",
      },
      {
        name: "Material-UI",
        icon: "https://material-ui.com/static/favicon.ico",
        link: "https://material-ui.com/",
      },
      {
        name: "Git",
        icon: "https://git-scm.com/favicon.ico",
        link: "https://git-scm.com/",
      },
      {
        name: "SEO",
        icon: "https://www.google.com/favicon.ico",
        link: "https://www.google.com/search/howsearchworks/optimization/",
      },
      {
        name: "Agile Methodologies",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1200px-Markdown-mark.svg.png",
        link: "https://en.wikipedia.org/wiki/Agile_software_development",
      },
      {
        name: "Test-Driven Development (TDD)",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1200px-Markdown-mark.svg.png",
        link: "https://en.wikipedia.org/wiki/Test-driven_development",
      },
      {
        name: "Jest",
        icon: "https://jestjs.io/img/favicon/favicon.ico",
        link: "https://jestjs.io/",
      },
      {
        name: "PostgreSQL",
        icon: "https://www.postgresql.org/favicon.ico",
        link: "https://www.postgresql.org/",
      },
    ],
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="container gap-20 mt-36 mx-auto items-center"
    >
      <div>
        <div className="mb-10">
          <Typography color="blue-gray" className="mb-2 text-3xl font-bold">
            Skills
          </Typography>
          <Typography variant="lead" className="!text-gray-500">
            Check out my technical and soft skills.
          </Typography>
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12 lg:grid-cols-2">
          {SKILLS.map((props, idx) => (
            <SkillsCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;

"use client";
import { Typography } from "@material-tailwind/react";
import InfoCard, { InfoCardProps } from "@/components/info-card";

const EXPERIENCE: {
  categoryId: string;
  category: string;
  experiences: InfoCardProps[];
}[] = [
  {
    categoryId: "web",
    category: "Websites",
    experiences: [
      {
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB+klEQVR4Ae2XQ7gcQRRGK7aTXZxtbGPu7Tir2Da6bsfWNrvYto15U7djZxPbtq2aZ48neOf7/l337dPlEimRxuBdTbKIUNN6XesMpsvRmhgUMX6TCq6RDZuIcaq0jc7mwYbVRhyqlUsEgXQmQ1vJeIUYf6YYG7+7n1O4TCroM9jlKCX8Qe6uX5wYI3Rx36PFYRq5HFX1zwhPsZTRlBhepvYByTBHunCSR7GN9pO4flbhCcT41ZM/tPZjBREMdPFwC7z0S+CnSNdnbqVMnkbPsoQCl/wRsPYbTb0crO/I5WgRV8AZUgEdGz9LBowswDAj1AJReUJ7GuUXJkPfMAn8lArGCzMCyvolYEMDyXDTkxDjhwR1bfcoJoaHoZiGkmFfgrq3hIYUzguPALwRmqGMtcMhoBN3Op7xRWCwEytIhas8SVJdHdeuVUhnQUIB92BUcDxsAhpiozIxfgmdALxManMaFToBfJTk7kYMCzwVGKIaVJIKN3oTsvF2VN2rIikmTRLppYIp+lAajPMAMSyPOmWdEilhqgbViNEOlsDvOD17wYllBkZAgUAK6FO1VA1qCV+w9jcsYjE0N9kYKW1cKhlPkI3XPQrjSckwsJtnh1bPGXygTiFrv6OmqbALKWOCZeNCYlCS4W7UlDtnKRjSY6u+1ISYlG5SafwCY5JHRJ3jtpcAAAAASUVORK5CYII=",
        title: "Eurekles",
        date: "Décembre 2019 - Novembre 2021",
        website: "https://www.eurekles.com/",
        image:
          "https://media.licdn.com/dms/image/C4D22AQEn7YUQxxt3Aw/feedshare-shrink_2048_1536/0/1623227491694?e=1720051200&v=beta&t=N-4Vw3XZ2Cf6T2ZL0Uq2-imcbaYaEyz9bvvf0qD7BQU",
        socials: [
          {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/company/eurekles/?originalSubdomain=fr",
          },
        ],
        children:
          "Développement d'une nouvelle solution d'acquisition immobilière pour les étudiants. Utilisation de React.js pour le front-end et Node.js pour le back-end, avec une intégration de MongoDB et Google Maps API.",
      },
      {
        icon: "https://kitlenid.fr/logo.svg",
        title: "Développeur Fullstack - Nexity (kit le nid)",
        date: "Décembre 2019 - Novembre 2021",
        image: "https://dam.malt.com/6fde98c6-10e8-4d8b-a120-701f66cabca8",
        website: "https://kitlenid.fr",
        socials: [
          {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/company/kitlenid",
          },
          {
            platform: "Instagram",
            url: "https://www.instagram.com/kitlenid",
          },
        ],
        children:
          "Développement d'une nouvelle solution d'acquisition immobilière pour les étudiants. Utilisation de React.js pour le front-end et Node.js pour le back-end, avec une intégration de MongoDB et Google Maps API.",
      },
      {
        icon: "https://static-p46175-e229011.adobeaemcloud.com/a3b99389148af1bc6e27f0c4b50c6458468d86e18bd44f70b9acd44cd2d1b0f1/resources/images/favicon-32x32.png",
        title: "Développeur Fullstack - Accor Hotels",
        date: "Juin 2019 - Juillet 2019",
        image: "https://dam.malt.com/kftrgjkdr1tckdppo3qa",
        website: "https://all.accor.com/a/fr.html",
        socials: [
          {
            platform: "Facebook",
            url: "https://www.facebook.com/ALL/",
          },
          {
            platform: "Instagram",
            url: "https://www.instagram.com/all",
          },
          {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/company/all-accorlivelimitless/",
          },
          {
            platform: "YouTube",
            url: "https://www.youtube.com/All_AccorLiveLimitless",
          },
          {
            platform: "Twitter",
            url: "https://twitter.com/all",
          },
        ],
        children:
          "Développement d'une nouvelle solution d'acquisition immobilière pour les étudiants. Utilisation de React.js pour le front-end et Node.js pour le back-end, avec une intégration de MongoDB et Google Maps API.",
      },
      {
        icon: "https://www.puydufou.com/france/themes/custom/puy_du_fou/favicon.ico",
        title: "Lead Developer Frontend - Puy Du Fou",
        date: "Avril 2019 - Juin 2019",
        image: "https://dam.malt.com/t07npoe7rprskasxafyh",
        website: "https://puydufou.com",
        socials: [
          {
            platform: "LinkedIn",
            url: "https://linkedin.com/company/puydufou",
          },
          { platform: "Twitter", url: "https://twitter.com/puydufou" },
        ],
        children:
          "Élaboration d'une application de prise de photo souvenir interactive. Gestion d'équipe et optimisation de code pour des performances accrues et une meilleure réactivité sur mobile et tablette.",
      },
      {
        icon: "https://medias-france.fr/wp-content/uploads/cropped-logo-medias-france-1.png",
        title: "Développeur Web, Intégrateur - Médias France",
        date: "Février 2017 - Mai 2017",
        website: "https://medias-france.fr",
        socials: [
          {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/company/medias-france",
          },
        ],
        children:
          "Création d'une plateforme web sécurisée pour la conversion et l'extraction automatique de fichiers Excel. Utilisation de JavaScript, PHP, et jQuery pour le développement front-end et back-end.",
      },
      {
        title: "Développeur Web, Les Éphémères",
        date: "2017",
        image:
          "https://www.arianekensa.com/wp-content/uploads/2016/07/carrefmr2-450x430.jpg",
        website: "https://www.arianekensa.com/portfolio/les-ephemeres/",
        socials: [],
        children:
          "Création d'une plateforme web sécurisée pour la conversion et l'extraction automatique de fichiers Excel. Utilisation de JavaScript, PHP, et jQuery pour le développement front-end et back-end.",
      },
    ],
  },
  {
    categoryId: "mobile",
    category: "Mobile Apps",
    experiences: [
      {
        icon: "https://static.wixstatic.com/media/6a3f14_b0b9e19941f04290b3e6067b6f39bb48%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/6a3f14_b0b9e19941f04290b3e6067b6f39bb48%7Emv2.png",
        title: "Mimsha",
        date: "Avril 2024 - Aujourd'hui",
        image:
          "https://static.wixstatic.com/media/6a3f14_0166cda06af1405eae07263ef62a74bc~mv2.png/v1/crop/x_32,y_0,w_2898,h_2578/fill/w_726,h_646,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Psd.png",
        website: "https://www.mimsha.com/",
        socials: [
          {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/company/mimshaworld/?originalSubdomain=fr",
          },
          {
            className: "text-black",
            platform: "AppStore",
            url: "https://apps.apple.com/fr/app/mimsha/id1567287754",
          },
          {
            platform: "PlayStore",
            url: "https://play.google.com/store/apps/details?id=com.mimsha&hl=fr&gl=US",
          },
        ],
        children:
          "Développement des animations et optimisation des performances de l'application. Review du code existant et définition des guidelines front.",
      },
      {
        icon: "https://app.wealthcome.fr/wealthcome.ico",
        title: "Wealthcome",
        date: "Novembre 2022 - Aujourd'hui",
        image:
          "https://media.licdn.com/dms/image/D4E22AQGUQOfavkKa7Q/feedshare-shrink_800/0/1692869155014?e=1720051200&v=beta&t=IAKkqQnlwlcsIgSrD6yxxHnrWqBZ_wp6yfvfQs5GRM8",
        website: "https://pro.wealthcome.fr/",
        socials: [
          {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/company/wealthcome",
          },
          {
            platform: "Facebook",
            url: "https://www.facebook.com/people/Wealthcome/100076531013609/",
          },
          {
            platform: "Twitter",
            url: "https://x.com/wealthcome3",
          },
          {
            platform: "Instagram",
            url: "https://www.instagram.com/wealthcome.fr/",
          },
          {
            platform: "YouTube",
            url: "https://www.youtube.com/@wealthcomefr",
          },
        ],
        children:
          "Développement des animations et optimisation des performances de l'application. Review du code existant et définition des guidelines front.",
      },
      {
        icon: "https://avatars.githubusercontent.com/u/24407824?s=200&v=4",
        title: "Roomchazer",
        date: "Novembre 2022 - Aujourd'hui",

        website: "https://www.roomchazer.com",
        socials: [
          {
            platform: "Facebook",
            url: "https://www.facebook.com/roomchazer",
          },
          {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/company/roomchazer",
          },
          {
            platform: "Instagram",
            url: "https://www.instagram.com/roomchazer",
          },
        ],
        children:
          "Développement des animations et optimisation des performances de l'application. Review du code existant et définition des guidelines front.",
      },
      {
        icon: "https://www.balenciaga.com/on/demandware.static/Sites-BAL-R-WEUR-Site/-/default/dw6150e049/images/favicons/favicon-32x32.png",
        title: "Consultant digital - Balenciaga",
        date: "Août 2018 - Septembre 2018",
        image: "https://example.com/balenciaga-image.jpg",
        website: "https://www.balenciaga.com",
        socials: [
          { platform: "Instagram", url: "https://instagram.com/balenciaga" },
        ],
        children:
          "Élaboration du cahier des charges pour une application mobile interne. Coordination d'une équipe de freelance et rédaction de spécifications fonctionnelles détaillées.",
      },
      {
        title: "Intégrateur Mobile - Iicontact",
        date: "Février 2018 - Mars 2018",
        image:
          "https://static.cnews.fr/sites/default/files/styles/image_750_422/public/iicontact_0.jpg?itok=PpU-E9Rp",
        website: "https://iicontact.com",
        socials: [
          {
            platform: "LinkedIn",
            url: "https://linkedin.com/company/iicontact",
          },
        ],
        children:
          "Développement des animations et optimisation des performances de l'application. Review du code existant et définition des guidelines front.",
      },
    ],
  },
];

export function InformationSection() {
  return (
    <section id="experience" className="pb-14 px-8">
      <div className="container mx-auto">
        <div className="mb-10">
          <Typography
            color="blue-gray"
            className="mb-2 text-3xl font-bold text-center"
          >
            Experiences
          </Typography>
          <Typography variant="lead" className="!text-gray-500 text-center">
            See my experience as a developer.
          </Typography>
        </div>
        {EXPERIENCE.map((category, idx) => (
          <div key={idx} id={category.categoryId} className="mb-12">
            <Typography variant="h2" color="blue-gray" className="mb-10">
              {category.category}
            </Typography>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {category.experiences.map((experience, idx) => (
                <InfoCard key={idx} {...experience} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InformationSection;

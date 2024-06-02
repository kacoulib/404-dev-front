"use client";
/* eslint-disable react/no-unescaped-entities */
import { InfoCardProps, Skills } from "@/components";

export const EXPERIENCE: {
  categoryId: string;
  category: string;
  experiences: InfoCardProps[];
}[] = [
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
        coverContain: true,
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
        children: (
          <div>
            <p>
              Lors de mon travail sur Mimsha (Livraison et expédition de colis
              entre particuliers), j'ai apporté des améliorations significatives
              en corrigeant des bugs, en ajoutant des animations, en optimisant
              l'ergonomie, et en assurant la traduction de l'application.
            </p>
            <ul>
              <li>Correction de bugs</li>
              <li>Ajout d'animations interactives</li>
              <li>Optimisation de l'ergonomie utilisateur</li>
              <li>Assurance de la traduction multilingue</li>
              <li>Intégration de nouvelles fonctionnalités</li>
              <li>Amélioration des performances de l'application</li>
              <li>Refactorisation du code pour une meilleure maintenabilité</li>
              <li>
                Collaboration avec l'équipe de conception pour l'interface
                utilisateur
              </li>
              <li>Assistance technique et support post-lancement</li>
            </ul>
          </div>
        ),
        skills: ["Mobile Development (iOS, Android)", "Animation"],
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
        children: (
          <div>
            <p>
              Dans le cadre de ce projet, j'ai participé au développement de
              l'application mobile pour Android et iOS. Mes responsabilités
              comprenaient l'implémentation du routage, la gestion des appels
              API, la structuration du projet et l'amélioration de l'expérience
              utilisateur.
            </p>
            <ul>
              <li>Développement de l'application mobile pour Android et iOS</li>
              <li>Implémentation du routage</li>
              <li>Gestion des appels API</li>
              <li>Structuration du projet</li>
              <li>Amélioration de l'expérience utilisateur</li>
              <li>Optimisation des performances de l'application</li>
              <li>
                Tests et débogage pour assurer la stabilité de l'application
              </li>
              <li>
                Collaboration avec l'équipe de conception pour l'intégration des
                interfaces utilisateur
              </li>
            </ul>
          </div>
        ),
        skills: [
          "Mobile Development (iOS, Android)",
          "Fullstack Development",
          "React Native",
          "TypeScript",
          "Animation",
        ],
      },
      {
        icon: "https://res.cloudinary.com/rchzr/image/upload/h_16,w_16/v1/RoomChazer/cmiyxjkqt33le1pkjdq5",
        title: "Roomchazer",
        date: "Novembre 2022 - Aujourd'hui",
        image: "/image/roomchazer_screen.png",
        website: "https://www.roomchazer.com",
        coverContain: true,
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
        children: (
          <div>
            <p>
              Dans ce projet, j'ai contribué à la création de l'application
              mobile et du site web de RoomChazer.
            </p>
            <ul>
              <li>Développement de l'application mobile</li>
              <li>Création et intégration du site web</li>
              <li>Implémentation des fonctionnalités de réservation</li>
              <li>
                Optimisation de l'interface utilisateur pour une meilleure
                expérience
              </li>
              <li>
                Tests et débogage pour assurer la stabilité de l'application et
                du site web
              </li>
            </ul>
          </div>
        ),
        skills: [
          "Mobile Development (iOS, Android)",
          "Fullstack Development",
          "React Native",
          "TypeScript",
          "Animation",
        ],
      },
      {
        icon: "https://www.balenciaga.com/on/demandware.static/Sites-BAL-R-WEUR-Site/-/default/dw6150e049/images/favicons/favicon-32x32.png",
        title: "Balenciaga",
        date: "Août 2018 - Septembre 2018",
        image: "https://example.com/balenciaga-image.jpg",
        website: "https://www.balenciaga.com",
        socials: [
          { platform: "Instagram", url: "https://instagram.com/balenciaga" },
        ],
        children: (
          <div>
            <p>
              Lors de cette mission, j'ai eu l'opportunité d'élaborer le cahier
              des charges pour une application mobile interne destinée aux
              employé(e)s de Balenciaga.
            </p>
            <ul>
              <li>
                Recueil des besoins, audit de l'existant, analyse de cahier des
                charges, bench
              </li>
              <li>Élaboration du cahier des charges</li>
              <li>Rédaction de spécifications fonctionnelles détaillées</li>
              <li>Estimation budgétaire et chiffrage</li>
            </ul>
          </div>
        ),
        skills: ["Mobile Development (iOS, Android)", "Fullstack Development"],
      },
      {
        icon: "https://avatars.githubusercontent.com/u/24407824?s=200&v=4",
        title: "Iicontact",
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
        children: (
          <div>
            <p>
              iContact, c’est une application qui met la technologie au service
              des rencontres.
            </p>
            <ul>
              <li>Réalisation des animations de l’application</li>
              <li>Review du code existant</li>
              <li>Définition de guidelines front</li>
              <li>Formulaire d’inscription et validation</li>
            </ul>
          </div>
        ),
        skills: ["Mobile Development (iOS, Android)", "Animation"],
      },
    ],
  },
  {
    categoryId: "saas",
    category: "Saas / Web Apps",
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
        coverContain: true,
        children: (
          <div>
            <p>
              L'énergie simplifiée. Notre vocation : faciliter vos achats
              d’énergie.
            </p>
            <p>
              Experts des marchés du gaz naturel et de l’électricité, nous vous
              donnons accès à un ensemble d’offres et de services connexes en
              quelques clics.
            </p>
            <p>
              Sur ce projet fait en React et Node.js, j'ai aidé sur le front-end
              et le back-end à différentes étapes.
            </p>
            <ul>
              <li>Développement de l'interface utilisateur en React</li>
              <li>Implémentation des composants front-end</li>
              <li>
                Gestion des appels API et intégration des services back-end
              </li>
              <li>Développement des fonctionnalités back-end en Node.js</li>
              <li>Optimisation des performances de l'application</li>
              <li>Tests et débogage pour assurer la stabilité du projet</li>
              <li>
                Collaboration avec l'équipe de conception pour intégrer les
                interfaces utilisateur
              </li>
              <li>Assistance technique et support post-lancement</li>
            </ul>
          </div>
        ),
        skills: [
          "React.js",
          "Node.js",
          "SaaS",
          "Fullstack Development",
          "Mobile Development (iOS, Android)",
        ],
      },
      {
        icon: "https://kitlenid.fr/logo.svg",
        title: "Nexity (kit le nid)",
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
        children: (
          <div>
            <p>
              Au sein de Nexity, j'ai eu la chance de pouvoir travailler sur
              l'une de leur nouvelle solution d'acquisition immobilier à
              destination des jeunes étudiants.
            </p>
            <p>
              Ma mission dans l'équipe était le développement "from scratch" de
              la plateforme en utilisant du React pour le front-end et Node.js
              pour le back-end.
            </p>
            <div>Je suis intervenu sur les différentes étapes du projet :</div>
            <ul>
              <li>
                Conception de l'architecture Front React.js & Back Node.js
              </li>
              <li>Développement de la plateforme</li>
              <li>Création de l'api</li>
              <li>Système d'envoi de mail</li>
              <li>Recherche de biens via l'api google maps</li>
            </ul>
          </div>
        ),
        skills: [
          "React.js",
          "Node.js",
          "MongoDB",
          "SaaS",
          "Fullstack Development",
        ],
      },
      {
        icon: "https://static-p46175-e229011.adobeaemcloud.com/a3b99389148af1bc6e27f0c4b50c6458468d86e18bd44f70b9acd44cd2d1b0f1/resources/images/favicon-32x32.png",
        title: "Accor Hotels",
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
        children: (
          <div>
            <p>
              Réduction/suppression des obstacles empêchant les utilisateurs :
              personnes valides, seniors, personnes en situation de handicap
              (déficience visuelle, déficience auditive, mobilité réduite,
              troubles cognitifs).
            </p>
            <p>
              D'accéder aux contenus ou d'interagir avec les différents sites
              web d'AccorHotels.
            </p>
            <ul>
              <li>
                Évaluation et amélioration de l'accessibilité des sites web pour
                assurer une expérience utilisateur inclusive.
              </li>
              <li>
                Implémentation des méthodologies Agile pour une gestion de
                projet flexible et réactive.
              </li>
              <li>
                Utilisation avancée de HTML et CSS3 pour structurer et styliser
                les contenus web de manière conforme aux standards.
              </li>
              <li>
                Adoption des recommandations W3C pour garantir la compatibilité
                et l'accessibilité des sites web à un large public.
              </li>
            </ul>
          </div>
        ),
        skills: [
          "HTML5",
          "CSS3",
          "Agile Methodologies",
          "SEO",
          "Fullstack Development",
        ],
      },
      {
        icon: "https://www.puydufou.com/france/themes/custom/puy_du_fou/favicon.ico",
        title: "Puy Du Fou",
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
        children: (
          <div>
            <p>
              Dans une équipe constituée de cinq développeurs, nous avons
              élaboré une application de prise de photo souvenir sur borne
              interactive à destination du public du Puy du Fou.
            </p>
            <ul>
              <li>
                Manipulation d’image (Filtre visuel, rotation, montage, rognage)
              </li>
              <li>Stockage de donnée de masse</li>
              <li>Optimisation de code</li>
              <li>Gestion responsive mobile et tablettes</li>
            </ul>
          </div>
        ),
        skills: [
          "React.js",
          "Restful API",
          "Frontend Development",
          "Animation",
        ],
      },
      {
        icon: "https://medias-france.fr/wp-content/uploads/cropped-logo-medias-france-1.png",
        title: "Médias France",
        date: "Février 2017 - Mai 2017",
        website: "https://medias-france.fr",
        socials: [
          {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/company/medias-france",
          },
        ],
        children: (
          <div>
            <p>
              Lors de cette mission, j’ai mis à la disposition de l’agence Média
              France une plateforme web sécurisée permettant aux employé(e)s
              d'extraire et de convertir automatiquement leur fichier Excel
              avant d’être utilisé par une application tiers.
            </p>
            <ul>
              <li>Création d'une API</li>
              <li>Conversion de fichier CSV en PHP vers format web (JSON)</li>
              <li>Gestion responsive mobile et tablettes</li>
              <li>Algorithmique</li>
            </ul>
          </div>
        ),
        skills: [
          "PHP",
          "MySQL",
          "Express.js",
          "Bootstrap",
          "HTML5",
          "CSS3",
          "Angular",
        ],
      },
      {
        title: "Les Éphémères",
        date: "2017",
        image:
          "https://www.arianekensa.com/wp-content/uploads/2016/07/carrefmr2-450x430.jpg",
        website: "https://www.arianekensa.com/portfolio/les-ephemeres/",
        socials: [],
        children: (
          <div>
            <p>
              Dans le cadre d'une résidence temporaire dans un lieu inédit en
              transition, un artiste issu de l'art contemporain ou urbain est
              invité à investir l'espace pour en faire l'écrin de sa création.
            </p>
            <ul>
              <li>Création de thème WordPress</li>
              <li>Gestion responsive mobile et tablettes</li>
              <li>Newsletter/emailing</li>
            </ul>
          </div>
        ),
        skills: ["HTML5", "CSS3", "PHP", "WordPress", "MySQL"],
      },
    ],
  },
];

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

export const TESTIMONIALS: Testimonial[] = [
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

interface ISkills {
  name: Skills;
  icon: string;
  link: string;
}

export const SKILLS:
  | {
      category: string;
      skills: ISkills[];
    }[] = [
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

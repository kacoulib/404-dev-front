import "./globals.css";
import type { Metadata } from "next";

import { Layout } from "@/components";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.404-dev.com"),
  title: "404‑DEV — Sites web, applications mobiles & solutions IA",
  description:
    "Studio produit senior : création de sites web, applications mobiles et solutions IA utiles. Plus de 10 ans d’expérience, une équipe directe et des coûts maîtrisés.",
  alternates: { canonical: "/", languages: { fr: "/", en: "/en" } },
  openGraph: {
    title: "404‑DEV — Sites web, applications mobiles & solutions IA",
    description:
      "Studio produit senior pour vos sites web, applications mobiles et solutions IA.",
    url: "https://www.404-dev.com",
    siteName: "404‑DEV",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body id="body" className="font-mona">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

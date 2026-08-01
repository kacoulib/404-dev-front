import "./globals.css";
import type { Metadata } from "next";

import { Layout } from "@/components";

export const metadata: Metadata = {
  title: "404-DEV, INC.",
  description:
    "404-DEV, INC. — a software company building mobile and web applications. Contact us at contact@404-dev.com.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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

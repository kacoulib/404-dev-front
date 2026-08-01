import { Typography } from "@material-tailwind/react";
import { NAV_MENU } from "./navbar";
import { handleScroll } from "@/utils/events";
import { Socials } from "./socials";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <div className="flex flex-col items-center gap-1 text-center md:items-start md:text-left">
            <Typography className="font-normal !text-gray-700">
              &copy; {CURRENT_YEAR} <span className="font-semibold">404-DEV, INC.</span> — All rights
              reserved.
            </Typography>
            <Typography variant="small" className="font-normal !text-gray-600">
              <a href="mailto:contact@404-dev.com" className="hover:text-gray-900 hover:underline">
                contact@404-dev.com
              </a>
              {" · "}
              <a href="/support" className="hover:text-gray-900 hover:underline">
                Support
              </a>
            </Typography>
          </div>
          <Socials />
          <ul className="flex gap-8 items-center">
            {NAV_MENU.map((nav, index) => (
              <li key={index}>
                <Typography
                  as="a"
                  onClick={handleScroll(nav.href)}
                  href={nav.href}
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {nav.children}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

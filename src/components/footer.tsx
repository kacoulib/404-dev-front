import { Typography, Button } from "@material-tailwind/react";
import { NAV_MENU } from "./navbar";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <Typography className="text-center font-normal !text-gray-700">
            &copy; {CURRENT_YEAR} Made with{" "}
            <a href="https://www.material-tailwind.com" target="_blank">
              Material Tailwind
            </a>{" "}
            by{" "}
            <a href="https://x.com/kacoulib" target="_blank">
              @kacouilb
            </a>
            .
          </Typography>
          <ul className="flex gap-8 items-center">
            {NAV_MENU.map((nav, index) => (
              <li key={index}>
                <Typography
                  as="a"
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

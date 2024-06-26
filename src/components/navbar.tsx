import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { handleScroll } from "@/utils/events";

interface INavItem {
  children: React.ReactNode;
  href: string;
}

export const NAV_MENU: INavItem[] = [
  { children: "Mobile Apps", href: "#mobile" },
  { children: "Saas", href: "#saas" },
  { children: "Testimonials", href: "#testimonials" },
  { children: "Skills", href: "#skills" },
];

function NavItem({
  children,
  href = "#",
  onClick,
}: INavItem & { onClick: (to: string) => (e: React.MouseEvent) => void }) {
  return (
    <li>
      <Typography
        as="a"
        href={href}
        variant="paragraph"
        color="gray"
        onClick={onClick(href)}
        className="flex items-center gap-2 font-medium text-gray-900"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar
      fullWidth
      blurred={false}
      shadow={false}
      color="white"
      className="sticky top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href="#"
          color="blue-gray"
          className="text-lg font-bold"
          onClick={handleScroll("#body")}
        >
          404 DEV
        </Typography>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map((nav, index) => (
            <NavItem key={index} {...nav} onClick={handleScroll} />
          ))}
        </ul>
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map((nav, index) => (
              <NavItem key={index} {...nav} onClick={handleScroll} />
            ))}
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;

import React from "react";
import {
  Navbar as MTNavbar,
  Button,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";


const NAV_MENU = [
  {
    name: "Page",
    icon: RectangleStackIcon,
  },
  {
    name: "Account",
    icon: UserCircleIcon,
  },
  {
    name: "Docs",
    icon: CommandLineIcon,
    href: "https://www.material-tailwind.com/docs/react/installation",
  },
];

export function Navbar() {
  // const [open, setOpen] = React.useState(false);
  // const [isScrolling, setIsScrolling] = React.useState(false);

  // const handleOpen = () => setOpen((cur) => !cur);

  // React.useEffect(() => {
  //   window.addEventListener(
  //     "resize",
  //     () => window.innerWidth >= 960 && setOpen(false)
  //   );
  // }, []);

  // React.useEffect(() => {
  //   function handleScroll() {
  //     if (window.scrollY > 0) {
  //       setIsScrolling(true);
  //     } else {
  //       setIsScrolling(false);
  //     }
  //   }

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <MTNavbar
      shadow={true}
      fullWidth
      blurred={false}
      color={"transparent"}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Image
            src={"/images/logo.svg"}
            alt="logo"
            width={68}
            height={68}
          />
        </div>
        <div className="items-center gap-4 lg:flex">
          <Button className="bg-primary shadow-primary">Log in</Button>
        </div>
        {/* <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton> */}
      </div>
      {/* <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-gray-900">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-4">
            <Button variant="text">Log in</Button>
            <a href="https://www.materila-tailwind.com/blocks" target="_blank">
              <Button color="gray">blocks</Button>
            </a>
          </div>
        </div>
      </Collapse> */}
    </MTNavbar>
  );
}

export default Navbar;

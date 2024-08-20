import { Typography, IconButton } from "@material-tailwind/react";
import Link from "next/link";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <div className="flex w-fit justify-center gap-2">
            <IconButton size="sm" color="red" variant="text">
              <i className="fa-brands fa-twitter text-lg" />
            </IconButton>
            <IconButton size="sm" color="red" variant="text">
              <i className="fa-brands fa-youtube text-lg" />
            </IconButton>
            <IconButton size="sm" color="red" variant="text">
              <i className="fa-brands fa-instagram text-lg" />
            </IconButton>
            <IconButton size="sm" color="red" variant="text">
              <i className="fa-brands fa-github text-lg" />
            </IconButton>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="text-center mt-12 font-normal !text-gray-700"
        >
          &copy; {CURRENT_YEAR} Made by{" "}
          <Link href="https://thecosmicblock.com/" target="_blank" className="hover:color-primary">
            The Cosmic Blocs
          </Link>.
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;

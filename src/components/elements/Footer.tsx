import Link from "next/link";
import Logo from "./Logo";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t py-6 px-4 fixed bottom-0 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section: Logo */}
        <div className="flex items-center gap-4">
          <Logo />
        </div>

        <div>
          <span className="text-gray-600 dark:text-gray-300 text-sm">
            © {new Date().getFullYear()}{" "}
            <Link
              className="hover:text-blue-500 font-bold"
              href="https://c.tenor.com/oj_S2xseej8AAAAC/tenor.gif"
              target="_blank"
              aria-label="Chandrashekhar"
            >
              Chandrashekhar.
            </Link>{" "}
            All rights reserved.
          </span>
        </div>

        {/* Right Section*/}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <Link
            href="https://github.com/StarDust130"
            target="_blank"
            aria-label="GitHub"
          >
            <GitHubLogoIcon className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors" />
          </Link>
          <Link
            href="mailto:csyadav0513@gmail.com"
            target="_blank"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

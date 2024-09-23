import Link from "next/link";
import { Button } from "../ui/button";
import Logo from "./Logo";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-2 py-2">
      <div className="flex justify-center items-center gap-8">
        <Logo />
        <Link
          href={"/leaderboard"}
          className="hover:text-gray-300  cursor-pointer font-medium"
        >
          Leaderboard
        </Link>
        <Link
          href={"/about"}
          className="hover:text-gray-300  cursor-pointer font-medium"
        >
          About us
        </Link>
      </div>
      {/* Left Side */}
      <div className="flex justify-center items-center gap-3">
        <Link href={"login"}>
          {" "}
          <Button>Login</Button>
        </Link>
        <Link href="register">
          <Button variant={"ghost"}>Register</Button>
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
};
export default Header;

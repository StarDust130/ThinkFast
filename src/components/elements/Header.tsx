import { Button } from "../ui/button";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex justify-between items-center ">
      <div className="flex justify-center items-center gap-8">
        <Logo />
        <p>Leaderboard</p>
        <p>About us</p>
      </div>
      <div className="flex justify-center items-center gap-3">
        <Button>Sign In</Button>
        <Button variant={"ghost"}>Register</Button>
      </div>
    </header>
  );
};
export default Header;

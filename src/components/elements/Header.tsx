import Image from "next/image";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="flex justify-between items-center ">
      <div className="flex justify-center items-center">
        <Image src="/icon.png" alt="logo" width={100} height={100} />
        <p>Think Fast</p>
      </div>
      <div className="flex justify-center items-center gap-3">
        <p >About us</p>
        <Button>Sign In</Button>
        <Button variant={"ghost"}>Register</Button>
      </div>
    </header>
  );
};
export default Header;

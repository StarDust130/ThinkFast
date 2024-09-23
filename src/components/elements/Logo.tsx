import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex justify-center items-center">
      <Image src="/logo.png" alt="logo" width={40} height={40} />
      <p className="font-bold md:text-lg">Think Fast</p>
    </Link>
  );
};
export default Logo;

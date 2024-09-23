import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex justify-center items-center gap-1">
      <Image src="/logo.png" alt="logo" width={40} height={40} />
      <p>Think Fast</p>
    </Link>
  );
};
export default Logo;

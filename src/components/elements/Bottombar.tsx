/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";

interface BottombarProps {
  href: string;
  currentPath: string;
  icon: any;
  label: string;
}

const Bottombar = ({
  href,
  currentPath,
  icon: Icon,
  label,
}: BottombarProps) => {
  const isActive = currentPath === href;

  return (
    <Link
      href={href}
      className={`flex flex-col items-center text-gray-500 transition-all duration-300 ${
        isActive ? "text-black dark:text-white" : "hover:text-gray-700"
      }`}
    >
      <div
        className={`h-10 w-10 flex justify-center items-center rounded-full ${
          isActive
            ? "bg-gray-100 dark:bg-gray-300"
            : "hover:bg-gray-100 dark:hover:bg-gray-950"
        }`}
      >
        <Icon
          className={`h-6 w-6 transition-all ${
            isActive ? " text-black brightness-200" : ""
          }`}
        />
      </div>
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
};

export default Bottombar;

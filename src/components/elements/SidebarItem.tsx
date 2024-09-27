/* eslint-disable @typescript-eslint/no-explicit-any */

import Link from "next/link";

const SidebarItem = ({ href, currentPath, icon: Icon, label }: any) => {
  const isActive = currentPath === href;

  return (
    <Link
      href={href}
      prefetch={true}
      className={`flex items-center p-3  text-gray-500 dark:hover:bg-gray-100 dark:hover:text-black hover:bg-gray-100 hover:text-gray-700 transition-all duration-300 rounded ${
        isActive
          ? "bg-gray-100 text-gray-700 dark:bg-gray-100 dark:text-black "
          : ""
      }`}
    >
      <Icon className="h-6 w-6" />
      <span className="ml-4 text-base">{label}</span>
    </Link>
  );
};

export default SidebarItem;

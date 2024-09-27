"use client";
import {
  BadgePlus,
  Brain,
  LayoutDashboard,
  LogOut,
  ShoppingBag,
  Sparkles,
  SquareKanban,
  Swords,
} from "lucide-react";
import { useClerk } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import Bottombar from "./Bottombar";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const { signOut } = useClerk();
  const currentPath = usePathname();

  return (
    <>
      {/* Sidebar for large screens */}
      <div className="hidden h-full w-48 fixed top-0 bg-white dark:bg-black left-0 flex-col border-e lg:flex">
        <div className="flex-grow px-2 mt-20 space-y-4">
          <SidebarItem
            href="/dashboard"
            currentPath={currentPath}
            icon={LayoutDashboard}
            label="Dashboard"
          />
          <SidebarItem
            href="/quiz"
            currentPath={currentPath}
            icon={Brain}
            label="Quiz"
          />
          <SidebarItem
            href="/quiz/create-quiz"
            currentPath={currentPath}
            icon={BadgePlus}
            label="Create Quiz"
          />
          <SidebarItem
            href="/quiz/room"
            currentPath={currentPath}
            icon={Swords}
            label="Join Room"
          />
          <SidebarItem
            href="/leaderboard"
            currentPath={currentPath}
            icon={SquareKanban}
            label="LeaderBoard"
          />
          <SidebarItem
            href="/ai"
            currentPath={currentPath}
            icon={Sparkles}
            label="AI"
          />
          <SidebarItem
            href="/shop"
            currentPath={currentPath}
            icon={ShoppingBag}
            label="Shop"
          />
        </div>
        <div className="mt-4 mb-5 flex justify-start w-full  items-start">
          <Button
            variant={"ghost"}
            onClick={() => signOut()}
            className="flex justify-start items-center p-3  dark:text-white text-gray-500 w-full hover:text-gray-700 transition-all duration-300 rounded"
          >
            <LogOut className="h-6 w-6" />
            <span className="ml-4 text-lg">Logout</span>
          </Button>
        </div>
      </div>

      {/* Bottom Navbar for Small Screens */}
      <div className="fixed inset-x-0 bottom-0  flex justify-around p-3 shadow-lg lg:hidden border-t z-50 bg-white dark:bg-black">
        <Bottombar
          href="/dashboard"
          currentPath={currentPath}
          icon={LayoutDashboard}
          label="Dashboard"
        />
        <Bottombar
          href="/quiz"
          currentPath={currentPath}
          icon={Brain}
          label="Quiz"
        />
        <Bottombar
          href="/quiz/create-quiz"
          currentPath={currentPath}
          icon={BadgePlus}
          label="Create Quiz"
        />
        <Bottombar
          href="/quiz/room"
          currentPath={currentPath}
          icon={Swords}
          label="Room"
        />
        <Bottombar
          href="/ai"
          currentPath={currentPath}
          icon={Sparkles}
          label="AI"
        />
      </div>
    </>
  );
};

export default Sidebar;

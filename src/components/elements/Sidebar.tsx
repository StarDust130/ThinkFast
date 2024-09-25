"use client";
import {
  BadgePlus,
  History,
  LayoutDashboard,
  LogOut,
  ShoppingBag,
  Sparkles,
  SquareKanban,
  Swords,
} from "lucide-react";
import Link from "next/link";
import { useClerk } from "@clerk/nextjs";
import { Button } from "../ui/button";

const Sidebar = () => {
  const { signOut } = useClerk();

  return (
    <>
      {/* Sidebar for large screens */}
      <div className="hidden h-full w-48  flex-col border-e lg:flex">
        <div className="flex-grow mt-4 px-2 space-y-4">
          <Link
            href="/dashboard"
            className="flex items-center p-3 dark:text-white text-gray-500 dark:hover:bg-gray-700 hover:bg-gray-100 hover:text-gray-700 transition-all duration-300 rounded"
          >
            <LayoutDashboard className="h-6 w-6" />
            <span className="ml-4 text-lg">Dashboard</span>
          </Link>
          <Link
            href="/quiz/create-quiz"
            className="flex items-center p-3 dark:text-white text-gray-500 dark:hover:bg-gray-700 hover:bg-gray-100 hover:text-gray-700 transition-all duration-300 rounded"
          >
            <BadgePlus className="h-6 w-6" />
            <span className="ml-4 text-lg">Create Quiz</span>
          </Link>
          <Link
            href="/quiz/123"
            className="flex items-center p-3 dark:text-white text-gray-500 dark:hover:bg-gray-700 hover:bg-gray-100 hover:text-gray-700 transition-all duration-300 rounded"
          >
            <Swords className="h-6 w-6" />
            <span className="ml-4 text-lg">Room</span>
          </Link>
          <Link
            href="/quiz/123"
            className="flex items-center p-3 dark:text-white text-gray-500 dark:hover:bg-gray-700 hover:bg-gray-100 hover:text-gray-700 transition-all duration-300 rounded"
          >
            <SquareKanban className="h-6 w-6" />
            <span className="ml-4 text-lg">LeaderBoard</span>
          </Link>
          <Link
            href="/history"
            className="flex items-center p-3 dark:text-white text-gray-500 dark:hover:bg-gray-700 hover:bg-gray-100 hover:text-gray-700 transition-all duration-300 rounded"
          >
            <History className="h-6 w-6" />
            <span className="ml-4 text-lg">History</span>
          </Link>
          <Link
            href="/ai"
            className="flex items-center p-3 dark:text-white text-gray-500 dark:hover:bg-gray-700 hover:bg-gray-100 hover:text-gray-700 transition-all duration-300 rounded"
          >
            <Sparkles className="h-6 w-6" />
            <span className="ml-4 text-lg">AI</span>
          </Link>
          <Link
            href="/shop"
            className="flex items-center p-3 dark:text-white text-gray-500 dark:hover:bg-gray-700 hover:bg-gray-100 hover:text-gray-700 transition-all duration-300 rounded"
          >
            <ShoppingBag className="h-6 w-6" />
            <span className="ml-4 text-lg">Shop</span>
          </Link>
        </div>
        <div className="mt-4 mb-5">
          <Button
            variant={"ghost"}
            onClick={() => signOut()}
            className="flex items-center p-3 dark:text-white text-gray-500 dark:hover:bg-gray-700 hover:bg-gray-100 hover:text-gray-700 transition-all duration-300 rounded"
          >
            <LogOut className="h-6 w-6" />
            <span className="ml-4 text-lg">Logout</span>
          </Button>
        </div>
      </div>

      {/* Bottom Navbar for Small Screens */}
      <div className="fixed inset-x-0 bottom-0 flex justify-around p-3 shadow-lg lg:hidden border-t bg-white   dark:bg-black">
        <Link
          href="/dashboard"
          className="flex flex-col items-center text-gray-500  hover:text-gray-700"
        >
          <LayoutDashboard className="h-6 w-6" />
          <span className="text-xs">Dashboard</span>
        </Link>

        <Link
          href="/quiz/123"
          className="flex flex-col items-center text-gray-500 hover:text-gray-700"
        >
          <Swords className="h-6 w-6" />
          <span className="text-xs">Room</span>
        </Link>

        <Link
          href="/quiz/create-quiz"
          className="flex flex-col items-center text-gray-500 hover:text-gray-700"
        >
          <BadgePlus className="h-6 w-6" />
          <span className="text-xs">Create Quiz</span>
        </Link>

        <Link
          href="/ai"
          className="flex flex-col items-center text-gray-500 hover:text-gray-700"
        >
          <Sparkles className="h-6 w-6" />
          <span className="text-xs">AI</span>
        </Link>

        <Link
          href="/history"
          className="flex flex-col items-center text-gray-500 hover:text-gray-700"
        >
          <History className="h-6 w-6" />
          <span className="text-xs">History</span>
        </Link>
      </div>
    </>
  );
};

export default Sidebar;

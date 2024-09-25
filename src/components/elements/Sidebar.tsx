"use client";
import {
  BadgePlus,
  History,
  LayoutDashboard,
  LogOut,
  ShoppingBag,
  Sparkles,
  Swords,
} from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useClerk } from "@clerk/nextjs";
import { Button } from "../ui/button";

const Sidebar = () => {
  const { signOut } = useClerk();

  return (
    <>
      {/* Sidebar for large screens */}
      <TooltipProvider>
        <div className="hidden h-screen w-16 flex-col items-center justify-start border-e lg:flex">
          <div className="mt-4 space-y-1">
            <Tooltip>
              <Link
                href="/dashboard"
                className="group relative flex justify-center p-3 transition-all duration-300"
              >
                <TooltipTrigger>
                  <LayoutDashboard />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Dashboard</p>
                </TooltipContent>
              </Link>
            </Tooltip>
          </div>
          <div className="mt-4 space-y-1">
            <Tooltip>
              <Link
                href="/quiz/create-quiz"
                className="group relative flex justify-center p-3 transition-all duration-300"
              >
                <TooltipTrigger>
                  <BadgePlus />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Create Quiz</p>
                </TooltipContent>
              </Link>
            </Tooltip>
          </div>
          <div className="mt-4 space-y-1">
            <Tooltip>
              <Link
                href="/quiz/123"
                className="group relative flex justify-center p-3 transition-all duration-300"
              >
                <TooltipTrigger>
                  <Swords />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Room</p>
                </TooltipContent>
              </Link>
            </Tooltip>
          </div>
          <div className="mt-4 space-y-1">
            <Tooltip>
              <Link
                href="/history"
                className="group relative flex justify-center p-3 transition-all duration-300"
              >
                <TooltipTrigger>
                  <History />
                </TooltipTrigger>
                <TooltipContent>
                  <p>History</p>
                </TooltipContent>
              </Link>
            </Tooltip>
          </div>
          <div className="mt-4 space-y-1">
            <Tooltip>
              <Link
                href="/ai"
                className="group relative flex justify-center p-3 transition-all duration-300"
              >
                <TooltipTrigger>
                  <Sparkles />
                </TooltipTrigger>
                <TooltipContent>
                  <p>AI</p>
                </TooltipContent>
              </Link>
            </Tooltip>
          </div>
          <div className="mt-4 space-y-1">
            <Tooltip>
              <Link
                href="/shop"
                className="group relative flex justify-center p-3 transition-all duration-300"
              >
                <TooltipTrigger>
                  <ShoppingBag />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Shop</p>
                </TooltipContent>
              </Link>
            </Tooltip>
          </div>
          <div className="mt-4 space-y-1 sticky bottom-5">
            <Tooltip>
              <Button
                variant={"ghost"}
                onClick={() => signOut()}
                className="group relative flex justify-center p-3 transition-all duration-300"
              >
                <TooltipTrigger>
                  <LogOut />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Logout</p>
                </TooltipContent>
              </Button>
            </Tooltip>
          </div>
        </div>

        {/* Bottom Navbar for Small Screens */}
        <div className="fixed inset-x-0 bottom-0 flex justify-around  p-3 shadow-lg lg:hidden">
          <Link
            href="/dashboard"
            className="flex flex-col items-center text-gray-500 hover:text-gray-700"
          >
            <LayoutDashboard className="h-6 w-6" />
            <span className="text-xs">Dashboard</span>
          </Link>

          <Link
            href="/quiz/123"
            className="flex flex-col items-center text-gray-500 hover:text-gray-700"
          >
            <Swords className="h-10 w-10" />
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
      </TooltipProvider>
    </>
  );
};

export default Sidebar;

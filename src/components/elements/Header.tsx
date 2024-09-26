"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import Logo from "./Logo";
import { ModeToggle } from "./ModeToggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose, // Import SheetClose
} from "@/components/ui/sheet";
import { SignedIn, SignedOut, useClerk, UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";

const Header = () => {
  const { signOut } = useClerk();
  return (
    <header className="flex justify-between items-center border-b w-full px-4 py-3 z-50  bg-white dark:bg-black fixed top-0  right-0   ">
      {/* Logo */}
      <div className="flex items-center">
        <Logo />
      </div>

      {/* Navigation Links - Hidden on small screens */}
      <nav className="hidden md:flex gap-8">
        <Link
          className="font-medium hover:text-gray-500 dark:hover:text-gray-300"
          href="/quiz"
        >
          Quiz
        </Link>
        <Link
          className="font-medium hover:text-gray-500 dark:hover:text-gray-300"
          href="/about"
        >
          About Us
        </Link>
        <Link
          className="font-medium hover:text-gray-500 dark:hover:text-gray-300"
          href="/help"
        >
          Help
        </Link>
      </nav>

      {/* Right side */}
      <div className="flex items-center gap-5">
        {/* Show on large screens */}

        <div className="hidden md:flex gap-2">
          <SignedOut>
            <Link href="/sign-in">
              <Button>Login</Button>
            </Link>
            <Link href="/sign-up">
              <Button variant="ghost">Register</Button>
            </Link>
          </SignedOut>

          <SignedIn>
            {/* Mount the UserButton component */}
            <UserButton />
          </SignedIn>

          <ModeToggle />
        </div>

        {/* Show on small screens */}
        <div className="md:hidden flex items-center gap-4 ">
          <SignedIn>
            {/* Mount the UserButton component */}
            <UserButton />
          </SignedIn>
          <Sheet>
            <SheetTrigger>
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-4">
                <SheetClose asChild>
                  <Link
                    href="/leaderboard"
                    className="font-medium hover:underline"
                  >
                    Leaderboard
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link href="/quiz" className="font-medium hover:underline">
                    Quiz
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link href="/about" className="font-medium hover:underline">
                    About Us
                  </Link>
                </SheetClose>
                <SignedOut>
                  <SheetClose asChild>
                    <Link
                      href="/sign-in"
                      className="font-medium hover:underline"
                    >
                      Login
                    </Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link
                      href="/sign-up"
                      className="font-medium hover:underline"
                    >
                      Register
                    </Link>
                  </SheetClose>
                </SignedOut>
                <SignedIn>
                  <SheetClose asChild>
                    <Link href="/shop" className="font-medium hover:underline">
                      Shop
                    </Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Button
                      variant={"ghost"}
                      onClick={() => signOut()}
                      className="flex justify-start font-medium items-center p-1 w-full"
                    >
                      Logout
                    </Button>
                  </SheetClose>
                </SignedIn>
              </nav>

              <span className="absolute bottom-3 left-5">
                <ModeToggle />
              </span>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

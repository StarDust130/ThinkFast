"use client";

import { Button } from "@/components/ui/button";
import { Undo2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const error = () => {
  return (
    <div>
      <div className="grid h-screen place-content-center px-4">
        <div className="text-center">
          <Image src="/error.png" alt="404" width={500} height={500} />

          <h1 className="mt-6 text-2xl font-bold tracking-tight sm:text-4xl">
            Oops! Something Went Wrong.
          </h1>

          <p className="mt-4 text-gray-500">
            It seems you&apos;re lost in the digital wilderness. This page
            doesn&apos;t exist.
          </p>

          <Link href={"/"}>
            <Button variant={"secondary"} className="mt-3">
              <Undo2 className="mr-1" size={16} /> Let&apos;s Get You Back Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default error;

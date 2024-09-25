import { Button } from "@/components/ui/button";
import { Undo2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const notFound = () => {
  return (
    <div>
      <div className="grid h-screen place-content-center  px-4">
        <div className="text-center">
          <Image src="/not-found.png" alt="404" width={300} height={300} />

          <h1 className="mt-6 text-2xl font-bold tracking-tight  sm:text-4xl">
            Uh-oh!
          </h1>

          <p className="mt-4 text-gray-500">We can&apos;t find that page.</p>

          <Link href={"/"}>
            <Button variant={"secondary"} className="mt-3">
              {" "}
              <Undo2 className="mr-1" size={16} /> Go Back
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default notFound;

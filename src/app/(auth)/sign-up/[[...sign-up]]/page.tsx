"use client";
import { SignUp, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

const Page = () => {
  const { user } = useUser();

  if (user) redirect("/dashboard");

  if (!user) {
    return (
      <>
        <div className="w-full lg:grid lg:max-h-[500px] lg:grid-cols-2 xl:max-h-[800px]">
          <div className="flex items-center justify-center ">
            <div className="mx-auto grid w-[350px] gap-6">
              <div>
                <SignUp signInUrl="/sign-in" />
              </div>
            </div>
          </div>
          <div className="hidden  lg:block">
            <Image
              src="/anime-girl-1.jpg"
              alt="Image"
              width="1920"
              height="1080"
              className="h-full w-full object-cover rounded-2xl dark:brightness-[1.2] "
            />
          </div>
        </div>
      </>
    );
  }
};
export default Page;

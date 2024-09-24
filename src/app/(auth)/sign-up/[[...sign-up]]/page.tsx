import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div>
              <SignUp signInUrl="/sign-in" />
            </div>
          </div>
        </div>
        <div className="hidden  lg:block">
          <Image
            placeholder="blur"
            blurDataURL="blur.jpeg"
            src="/anime-girl-1.jpg"
            alt="Image"
            width="1920"
            height="1080"
            className="h-full w-full object-cover rounded-xl  "
          />
        </div>
      </div>
    </>
  );
};
export default page;

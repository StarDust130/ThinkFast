"use client";
import { SignUp } from "@clerk/nextjs";

const page = () => {
  return (
    <div>
      <SignUp  signInUrl="/sign-in" />;

    </div>
  );
};
export default page;

import { Dashboard } from "@/components/screen/Dashboard"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Dashboard",
};


const page = () => {
  return (
    <div className="flex mt-10 justify-center flex-col items-center w-full h-full">
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-500 to-red-500 drop-shadow-lg text-center">
        Dashboard 
      </h1>
      <Dashboard />
    </div>
  );
}
export default page


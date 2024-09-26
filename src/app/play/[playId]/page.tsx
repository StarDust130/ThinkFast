
import PlayGround from "@/components/screen/PlayGround";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PlayGround",
  description: "PlayGround page",
};
const page = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <h1 className="text-4xl font-bold">PlayGround page</h1>
      <PlayGround />
    </div>
  );
};
export default page;

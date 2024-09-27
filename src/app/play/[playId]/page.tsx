import PlayGround from "@/components/screen/PlayGround";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PlayGround",
  description: "PlayGround page",
};
const page = ({ params }: { params: { playId: number } }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <PlayGround params={params.playId} />
    </div>
  );
};
export default page;

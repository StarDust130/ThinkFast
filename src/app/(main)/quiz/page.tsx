import Quiz from "@/components/screen/Quiz";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Quiz",
  description:
    "Test your knowledge in various categories! Pick your favorite and get started.",
};


const page = () => {
  return (
    <Quiz />
  )
}
export default page
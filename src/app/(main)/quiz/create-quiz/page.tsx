import { CreateQuizPage } from "@/components/screen/CreateQuizPage"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Quiz",
  description: "Create Quiz  to play with friends and family", 
};

const page = () => {
  return (
    <CreateQuizPage />
  )
}
export default page
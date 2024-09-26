import { Dashboard } from "@/components/screen/Dashboard"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Dashboard",
};


const page = () => {
  return (
    <Dashboard />
  )
}
export default page


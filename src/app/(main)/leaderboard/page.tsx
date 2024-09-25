"use client";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const Page = () => {
  const { user } = useUser();

  if (!user) redirect("/");

  return <div>Leaderboard page</div>;
};

export default Page;

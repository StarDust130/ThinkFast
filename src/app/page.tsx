import { BackgroundLines } from "@/components/ui/background-lines";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-sans py-2 md:py-10 relative z-20 font-bold ">
          Welcome to ThinkFast!
        </h2>
        <p className="max-w-xl mx-auto text-xs sm:text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          Ready to test your brainpower? ThinkFast is the ultimate quiz app
          where speed meets knowledge. Challenge yourself with rapid-fire
          questions, beat the clock, and outsmart your friends. Get your mind
          racing and see if you have what it takes to claim the top spot!
        </p>
      </BackgroundLines>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/dashboard">
          <Button size={"lg"}>Get Started</Button>
        </Link>

        <Link href="/about">
          <Button size={"lg"} variant={"outline"}>
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
}

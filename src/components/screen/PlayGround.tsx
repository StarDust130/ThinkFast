import Image from "next/image";
import { StartGameCard } from "../elements/StartGameCard";
import { ModeToggle } from "../elements/ModeToggle";
import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import { cards } from "@/lib/extra";

interface PlayGroundProps {
  params: number; // Assuming params is the category number
}

const PlayGround = ({ params }: PlayGroundProps) => {
  // Ensure params is treated as a number
  const categoryParam = Number(params);

  // Debug: Log params and the card found
  console.log("Category Param:", categoryParam);

  // Find the relevant card based on the category from the params
  const card = cards.find((item) => item.category === categoryParam);

  // Debug: Log the card
  console.log("Found Card:", card);

  // If no matching card is found, display a fallback UI
  if (!card) {
    return <div>No category found for this game.</div>;
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center w-full h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 dark:from-gray-800 dark:via-gray-900 dark:to-gray-700 relative">
        {/* Fun Background Pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('/pattern.svg')] bg-center bg-cover" />

        {/* Left Section: Dynamic Anime Image from cards array */}
        <div className="relative w-full hidden lg:flex lg:w-1/2 h-full justify-center items-center p-4">
          <div className="relative w-full h-full lg:h-[80%]">
            <Image
              src={card.src} // Dynamically load the image from the card
              layout="fill"
              objectFit="cover"
              alt={card.title} // Use the card's title as alt text
              className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Right Section: Start Game Card and Info */}
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2 h-full p-6 lg:p-10 text-gray-900 dark:text-gray-100">
          <div className="text-center mb-6 animate-fadeIn">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-200 mb-2">
              Ready to Start the Quiz? 🎉
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
              Category: {card.title} {/* Display the category title */}
            </p>
          </div>

          {/* Start Game Card */}
          <div className="w-full max-w-lg">
            <StartGameCard />
          </div>
        </div>
      </div>

      <span className="absolute top-3 right-3 z-50">
        <ModeToggle />
      </span>

      <span className="absolute top-3 left-3 z-50">
        <Link href={"/quiz"}>
          <Button variant="outline" size="icon" className="h-7 w-7 z-50">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
        </Link>
      </span>
    </>
  );
};

export default PlayGround;

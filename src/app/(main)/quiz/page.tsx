// import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { FocusCards } from "@/components/ui/focus-cards";
import { cards } from "@/lib/extra";
import { Brain, Dice6, SquareKanban } from "lucide-react";
import Link from "next/link";

function Quiz() {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 p-4 md:p-12">
      {/* Cool Header with a Quiz Icon */}
      <div className="flex flex-col md:flex-row justify-between gap-4 items-center space-y-2 md:space-y-0">
        <Brain
          size={40} // Adjusted size for smaller screens
          name="brain-circuit"
          className="text-purple-500 animate-pulse"
        />
        <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-lg text-center">
          Select Your Quiz Category
        </h1>
      </div>

      {/* Description with subtle animation */}
      <p className="text-base md:text-lg text-gray-600 animate-fade-in text-center">
        Test your knowledge in various categories! Pick your favorite and get
        started.
      </p>

      {/* CTA Buttons with icons */}
      <div className="mt-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 animate-slide-up">
        <Button className="flex items-center space-x-2 px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-lg transform hover:scale-105 hover:from-indigo-500 hover:to-blue-500 transition-all duration-300 ease-out">
          <Dice6 name="dice-5" className="w-5 h-5" />
          <span>Random Quiz</span>
        </Button>
        <Link href={"/leaderboard"}>
          <Button className="flex items-center space-x-2 px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg shadow-lg transform hover:scale-105 hover:from-teal-500 hover:to-green-500 transition-all duration-300 ease-out">
            <SquareKanban name="trophy" className="w-5 h-5" />
            <span>View Leaderboard</span>
          </Button>
        </Link>
      </div>

      {/* Focus Cards for categories */}
      <FocusCards cards={cards} />

      {/* New Challenges Section */}
      <div className="mt-4">
        <p className="text-xs md:text-sm text-gray-500 animate-bounce text-center">
          New challenges await! 🎯
        </p>
      </div>
    </div>
  );
}

export default Quiz;

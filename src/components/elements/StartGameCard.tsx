"use client";
import { CheckIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSearchParams } from "next/navigation";

export function StartGameCard() {
  const searchParams = useSearchParams();
  const difficulty = searchParams.get("difficulty") || "Easy";
  const numberOfQuestions = searchParams.get("numberOfQuestions") || "10";
  const type = searchParams.get("type") || "Multiple Choice";

  return (
    <Card className="max-w-md mx-auto rounded-xl shadow-xl p-6">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-3xl font-bold dark:text-sky-400 text-sky-700">
          Quiz Settings
        </CardTitle>
        <CardDescription className="text-base ">
          Review your settings and get ready to play!
        </CardDescription>
      </CardHeader>

      <CardContent className="grid gap-5 pt-2">
        <div className="space-y-4 text-lg">
          <div className="flex items-center">
            <CheckIcon className="mr-2 h-5 w-5" />
            <p className="font-semibold">
              Difficulty: <span className="font-normal">{difficulty}</span>
            </p>
          </div>

          <div className="flex items-center">
            <CheckIcon className="mr-2 h-5 w-5" />
            <p className="font-semibold">
              Number of Questions:{" "}
              <span className="font-normal">{numberOfQuestions}</span>
            </p>
          </div>

          <div className="flex items-center">
            <CheckIcon className="mr-2 h-5 w-5" />
            <p className="font-semibold">
              Question Type: <span className="font-normal">{type}</span>
            </p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-6">
        <Button className="w-full py-3 text-lg font-medium dark:text-white bg-sky-600 dark:by-sky-400 dark:hover:bg-sky-500 hover:bg-sky-700 transition-all rounded-lg flex items-center justify-center shadow-lg hover:shadow-2xl">
          Start the Quiz! 🚀
        </Button>
      </CardFooter>
    </Card>
  );
}

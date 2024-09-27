/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "../ui/input";

const userName = "ChandrShekhar";
const difficulties = ["easy", "medium", "hard"];
const questionTypes = ["Both", "Multiple Choice", "True/False"];

const PlayGround = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState("medium");
  const [numberOfQuestions, setNumberOfQuestions] = useState(5);
  const [selectedType, setSelectedType] = useState("Multiple Choice");
  const [timeLimit, setTimeLimit] = useState(30); // Added time limit state

  const handleStartQuiz = () => {
    console.log({
      selectedDifficulty,
      numberOfQuestions,
      selectedType,
      timeLimit,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-6">
      {/* Header section */}

      {/* Quiz settings */}
      <div className="w-full max-w-lg  rounded-lg  p-6 space-y-6">
        <div className="w-full flex-col flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Hello, {userName}!</h2>
          <p className="text-center text-sm text-gray-600">
            Configure your quiz settings below.
          </p>
        </div>

        {/* Difficulty */}
        <div>
          <Label>Select Difficulty:</Label>
          <Select
            value={selectedDifficulty}
            // onChange={(e) => setSelectedDifficulty(e.target.value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select difficulty" />
            </SelectTrigger>
            <SelectContent>
              {difficulties.map((difficulty) => (
                <SelectItem key={difficulty} value={difficulty}>
                  {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Number of Questions */}
        <div>
          <Label className="block mb-1 text-lg font-semibold">
            Number of Questions:
          </Label>
          <Input
            type="number"
            value={numberOfQuestions}
            onChange={(e) => setNumberOfQuestions(Number(e.target.value))}
            min="1"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
          />
        </div>

        <div>
          <Label>Question Type</Label>
          <Select
            value={selectedType}
            // onChange={(e) => setSelectedType(e.target.value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Question Type" />
            </SelectTrigger>
            <SelectContent>
              {questionTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Time Limit */}
        <div>
          <Label className="block mb-1 text-lg font-semibold">
            Time Limit (in seconds):
          </Label>
          <Input
            type="number"
            value={timeLimit}
            onChange={(e) => setTimeLimit(Number(e.target.value))}
            min="1"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
          />
        </div>
      </div>
    </div>
  );
};

export default PlayGround;

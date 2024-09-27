/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState, useEffect } from "react";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";
import { useClerk } from "@clerk/nextjs";

// Define props type for the component
interface ModalProps {
  setQuery: (query: {
    difficulty: string;
    numberOfQuestions: number;
    type: string;
  }) => void;
}

const difficulties = ["easy", "medium", "hard"];
const questionTypes = ["Both", "Multiple_Choice", "True_False"];

const Modal: React.FC<ModalProps> = ({ setQuery }) => {
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<string>("medium");
  const [numberOfQuestions, setNumberOfQuestions] = useState<number>(5);
  const [selectedType, setSelectedType] = useState<string>("Multiple_Choice");

  const { user } = useClerk();

  // Automatically update the parent state whenever inputs change
  useEffect(() => {
    setQuery({
      difficulty: selectedDifficulty,
      numberOfQuestions,
      type: selectedType === "Both" ? "" : selectedType.toLowerCase(),
    });
  }, [selectedDifficulty, numberOfQuestions, selectedType, setQuery]);

  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-6">
      <div className="rounded-3xl w-full p-6 space-y-6">
        <div className="w-full flex-col flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500">
            Hello, {user?.firstName}!
          </h2>
          <p className="text-center text-sm">
            Configure your quiz settings below.
          </p>
        </div>

        {/* Difficulty Selection */}
        <div>
          <Label>Select Difficulty:</Label>
          <Select
            value={selectedDifficulty}
            onValueChange={setSelectedDifficulty}
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

        {/* Number of Questions Input */}
        <div>
          <Label>Number of Questions:</Label>
          <Input
            type="number"
            value={numberOfQuestions}
            onChange={(e) => setNumberOfQuestions(Number(e.target.value))}
            min="1"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
          />
        </div>

        {/* Question Type Selection */}
        <div>
          <Label>Question Type</Label>
          <Select value={selectedType} onValueChange={setSelectedType}>
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
      </div>
    </div>
  );
};

export default Modal;

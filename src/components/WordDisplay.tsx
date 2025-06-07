import React, { useEffect, useState } from "react";
import useRandomWord from "../hooks/useRandomWord";
import { Alphabet } from "../types";

interface KeyDisplayProps {
  letter: string;
  guessedLetters: Alphabet[];
}
function KeyDisplay({ letter, guessedLetters }: KeyDisplayProps) {
  return (
    <div
      className={`bg-[#1E3397] ${
        letter === " " ? "opacity-0" : "opacity-100"
      } max-w-30 flex-1 h-20 lg:h-40 rounded-3xl flex items-center justify-center border-[#150F66] ${
        guessedLetters.includes(letter as Alphabet)
          ? "border-b-4 border-x-2"
          : "border-0"
      }`}
    >
      <div
        className={`w-full h-full bg-[#2562FF] flex items-center justify-center rounded-3xl transition-all duration-300 ease-in-out border-t-4 border-x-2 border-[#3D74FE] ${
          guessedLetters.includes(letter as Alphabet)
            ? "opacity-100"
            : "opacity-0"
        }`}
      >
        <p className="text-4xl text-white font-bold">{letter}</p>
      </div>
    </div>
  );
}

interface WordDisplayProps {
  guessedLetters: Alphabet[];
  word: string;
}

export default function WordDisplay({
  guessedLetters,
  word,
}: WordDisplayProps) {
  const [mapped, setMapped] = useState<string[]>([]);

  useEffect(() => {
    if (!word) return;

    const mapped = word
      .split("")
      .map((char) => char.toUpperCase()) as Alphabet[];
    setMapped(mapped);
  }, [word]);

  return (
    <div className="w-[90%] flex items-center justify-center gap- lg:gap-5 max-w-[1100px]">
      {mapped.map((letter: string, index: number) => (
        <KeyDisplay
          guessedLetters={guessedLetters}
          letter={letter}
          key={index}
        />
      ))}
    </div>
  );
}

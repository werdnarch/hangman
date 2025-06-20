import React from "react";
import { Alphabet } from "@/src/types";

interface KeyProps {
  setGuessedLetters: React.Dispatch<React.SetStateAction<Alphabet[]>>;
  letter: Alphabet;
  guessedLetters: Alphabet[];
  setGuessCount: React.Dispatch<React.SetStateAction<number>>;
  word: string;
}
interface KeyPadProps {
  setGuessedLetters: React.Dispatch<React.SetStateAction<Alphabet[]>>;
  guessedLetters: Alphabet[];
  setGuessCount: React.Dispatch<React.SetStateAction<number>>;
  word: string;
}

function Key({
  letter,
  setGuessedLetters,
  setGuessCount,
  word,
  guessedLetters,
}: KeyProps) {
  const handleKeyClick = () => {
    if (guessedLetters.includes(letter)) return;

    if (!word.toUpperCase().includes(letter)) {
      setGuessCount((prev) => prev + 1);
    }

    if (guessedLetters) setGuessedLetters((prev) => [...prev, letter]);
  };
  return (
    <div
      onClick={handleKeyClick}
      className={`w-full rounded-2xl text-[#261676] cursor-pointer h-25 bg-white text-4xl font-bold flex items-center justify-center   transition-colors duration-300 ease-in-out ${
        guessedLetters.includes(letter)
          ? "opacity-15 pointer-events-none"
          : "opacity-100 hover:bg-[#2562FF] hover:text-white"
      }`}
    >
      {letter}
    </div>
  );
}

export default function KeyPad({
  setGuessedLetters,
  setGuessCount,
  guessedLetters,
  word,
}: KeyPadProps) {
  const alphabet: Alphabet[] = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return (
    <div className="flex flex-col mx-auto max-w-[900px] w-[95%] gap-5">
      <div className="grid grid-cols-9 gap-1 md:gap-3">
        {alphabet?.slice(0, 9).map((letter: Alphabet, index: number) => (
          <Key
            word={word}
            setGuessCount={setGuessCount}
            guessedLetters={guessedLetters}
            setGuessedLetters={setGuessedLetters}
            key={index}
            letter={letter}
          />
        ))}
      </div>
      <div className="grid grid-cols-9 gap-1 md:gap-3">
        {alphabet?.slice(9, 18).map((letter: Alphabet, index: number) => (
          <Key
            word={word}
            setGuessCount={setGuessCount}
            guessedLetters={guessedLetters}
            setGuessedLetters={setGuessedLetters}
            key={index}
            letter={letter}
          />
        ))}
      </div>
      <div className="grid grid-cols-8 w-[80%] mx-auto gap-1 md:gap-3 justify-center">
        {alphabet?.slice(18, 26).map((letter: Alphabet, index: number) => (
          <Key
            word={word}
            setGuessCount={setGuessCount}
            guessedLetters={guessedLetters}
            setGuessedLetters={setGuessedLetters}
            key={index}
            letter={letter}
          />
        ))}
      </div>
    </div>
  );
}

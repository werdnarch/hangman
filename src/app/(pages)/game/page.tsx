"use client";

import GameOver from "@/src/components/GameOver";
import GameWon from "@/src/components/GameWon";
import KeyPad from "@/src/components/KeyPad";
import MenuButton from "@/src/components/MenuButton";
import WordDisplay from "@/src/components/WordDisplay";
import { useGameContext } from "@/src/context/GameContext";
import useLocalStorage from "@/src/hooks/useLocalStorage";
import useRandomWord from "@/src/hooks/useRandomWord";
import { Alphabet } from "@/src/types";
import React, { useEffect, useState } from "react";

export default function page() {
  const { category, setCategory } = useGameContext();
  const [guessCount, setGuessCount] = useState<number>(0);
  const [maxGuesses, setMaxGuesses] = useState<number>(0);
  const { word, getRandomWord } = useRandomWord();
  const [gameStatus, setGameStatus] = useState<"Playing" | "Won" | "Over">(
    "Playing"
  );

  const [guessedLetters, setGuessedLetters] = useState<Alphabet[]>([]);

  function calculateAllowedGuesses(word: string, buffer = 3) {
    const uniqueLetters = new Set(word.toLowerCase().replace(/[^a-z]/g, ""));
    return uniqueLetters.size + buffer;
  }

  const resetGame = () => {
    getRandomWord(); // sets new random word
    setGameStatus("Playing"); // reset status
    setGuessedLetters([]); // clear guessed letters
    setGuessCount(0); // reset guess count
  };

  useEffect(() => {
    if (!word) return;

    const maxGuesses = calculateAllowedGuesses(word);

    setMaxGuesses(maxGuesses);

    if (guessCount > maxGuesses) {
      setGameStatus("Over");
    }

    const isWon = [...new Set(word.toUpperCase())].every((letter) =>
      guessedLetters.includes(letter as Alphabet)
    );

    if (isWon) {
      setGameStatus("Won");
    }
  }, [gameStatus, word, guessedLetters, guessCount]);

  if (!category) return null;

  return (
    <main className="main h-full flex items-center justify-center flex-col">
      <header className="flex items-center p-6 max-w-[1280px] w-full mx-auto text-white gap-6">
        <MenuButton />
        <p className="text-3xl lg:text-6xl lowercase">{category}</p>
      </header>
      <section className="h-full flex flex-col gap-40 items-center justify-center w-full">
        <WordDisplay
          setGuessCount={setGuessCount}
          word={word ?? ""}
          guessedLetters={guessedLetters}
        />
        <KeyPad
          word={word ?? ""}
          setGuessCount={setGuessCount}
          guessedLetters={guessedLetters}
          setGuessedLetters={setGuessedLetters}
        />
      </section>
      {gameStatus === "Over" && (
        <GameOver resetGame={resetGame} word={word ?? ""} />
      )}
      {gameStatus === "Won" && (
        <GameWon resetGame={resetGame} word={word ?? ""} />
      )}
    </main>
  );
}

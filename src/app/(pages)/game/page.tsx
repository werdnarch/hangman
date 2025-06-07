"use client";

import KeyPad from "@/src/components/KeyPad";
import MenuButton from "@/src/components/MenuButton";
import WordDisplay from "@/src/components/WordDisplay";
import { useGameContext } from "@/src/context.tsx/GameContext";
import useLocalStorage from "@/src/hooks/useLocalStorage";
import useRandomWord from "@/src/hooks/useRandomWord";
import { Alphabet } from "@/src/types";
import React, { useState } from "react";

export default function page() {
  const { category, setCategory } = useGameContext();
  const { word } = useRandomWord();

  const [guessedLetters, setGuessedLetters] = useState<Alphabet[]>([]);

  if (!category) return null;

  return (
    <main className="main h-full flex items-center justify-center flex-col">
      <header className="flex items-center p-6 max-w-[1280px] w-full mx-auto text-white gap-6">
        <MenuButton />
        <p className="text-3xl lg:text-6xl lowercase">{category}</p>
      </header>

      <section className="h-full flex flex-col gap-40 items-center justify-center w-full">
        <WordDisplay word={word ?? ""} guessedLetters={guessedLetters} />
        <KeyPad
          guessedLetters={guessedLetters}
          setGuessedLetters={setGuessedLetters}
        />
      </section>
    </main>
  );
}

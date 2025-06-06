"use client";

import React, { useEffect, useState } from "react";
import ReturnButton from "@/src/components/ReturnButton";
import HowToContainer from "@/src/components/HowToContainer";
import { useRouter } from "next/navigation";

export default function page() {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleReturn = () => {
    setIsMounted(false);

    setTimeout(() => {
      router.back();
    }, 700);
  };

  return (
    <main className="h-full flex items-center justify-center">
      <header
        className={`flex items-center transition-all duration-700 ease-in-out justify-between absolute w-[90%] ${
          isMounted ? "top-8 lg:top-15" : "-top-full"
        }  left-1/2 -translate-x-1/2`}
      >
        <ReturnButton handleReturn={handleReturn} />
        <p className="text-5xl lg:text-7xl text-outline">How to Play</p>
      </header>

      <section className="flex flex-col lg:flex-row items-center gap-6 w-[90%] max-w-5xl ">
        <div className="relative w-full h-35 lg:h-[50vh] max-h-[450px]">
          <div
            className={`absolute top-1/2 -translate-y-1/2 w-full h-full transition-all duration-900 ease-in-out ${
              isMounted
                ? "left-1/2 -translate-x-1/2 opacity-100"
                : "-left-full opacity-0"
            }`}
          >
            <HowToContainer>
              <p className="text-2xl lg:text-5xl text-[#271677] flex gap-1 lg:flex-col items-center">
                <span className="text-[#2562FE] lg:text-6xl">01</span> Choose a
                category
              </p>
              <p className="text-[#887DC0]">
                First, choose a word category, like animals or movies. The
                computer then randomly selects a secret word from that topic and
                shows you blanks for each letter of the word.
              </p>
            </HowToContainer>
          </div>
        </div>

        <div className="relative w-full h-35 lg:h-[50vh] max-h-[450px]">
          <div
            className={`absolute top-1/2 -translate-y-1/2 lg:delay-150 w-full h-full transition-all duration-900 ease-in-out ${
              isMounted
                ? "left-1/2 -translate-x-1/2 opacity-100"
                : "left-full lg:-left-full  opacity-0"
            }`}
          >
            <HowToContainer>
              <p className="text-2xl lg:text-5xl text-[#271677] flex gap-1 lg:flex-col items-center">
                <span className="text-[#2562FE] lg:text-6xl">02</span> Guess
                letters
              </p>
              <p className="text-[#887DC0]">
                Take turns guessing letters. The computer fills in the relevant
                blank spaces if your guess is correct. If it’s wrong, you lose
                some health, which empties after eight incorrect guesses.
              </p>
            </HowToContainer>
          </div>
        </div>

        <div className="relative w-full h-35 lg:h-[50vh] max-h-[450px]">
          <div
            className={`absolute top-1/2 -translate-y-1/2 lg:delay-300 w-full h-full transition-all duration-900 ease-in-out ${
              isMounted
                ? "left-1/2 -translate-x-1/2 opacity-100"
                : "-left-full  opacity-0"
            }`}
          >
            <HowToContainer>
              <p className="text-2xl lg:text-5xl text-[#271677] flex gap-1 lg:flex-col items-center">
                <span className="text-[#2562FE] lg:text-6xl">03</span> Win or
                lose
              </p>
              <p className="text-[#887DC0]">
                You win by guessing all the letters in the word before your
                health runs out. If the health bar empties before you guess the
                word, you lose
              </p>
            </HowToContainer>
          </div>
        </div>
      </section>
    </main>
  );
}

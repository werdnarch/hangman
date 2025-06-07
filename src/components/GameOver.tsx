import React, { useState } from "react";
import Title from "./Title";
import { useRouter } from "next/navigation";

interface GameOverProps {
  word: string;
  resetGame: () => void;
}

export default function GameOver({ word, resetGame }: GameOverProps) {
  const router = useRouter();

  const handleNewCategory = () => {
    router.push("/categories");
  };

  const handlePlayAgain = () => {
    router.refresh();
  };

  const handleQuit = () => {
    router.push("/");
  };
  return (
    <div
      className={`fixed z-100 h-full w-full transition-all duration-300 bg-[#2C43AF]/50 top-0 left-0 flex items-center justify-center`}
    >
      <div
        className={`w-11/12 bg-[#253AA6] left-1/2 -translate-x-1/2 max-w-[500px] rounded-[50px] border-x-3 border-[#140E66] border-b-8 absolute transition-all duration-700 ease-in-out`}
      >
        <div className="w-full h-full border-t-8 border-[#3D74FE] border-x-2 rounded-[50px] rounded-b-5xl p-8 flex flex-col items-center gap-8 pt-30 relative">
          <div className="max-w-[400px] w-[90%]  p-4 absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center">
            <Title title="Game Over" />
          </div>

          <p className="text-white text-4xl">Answer: {word}</p>
          <button
            onClick={resetGame}
            className="uppercase bg-[#2562FE] p-2 w-[180px] border-4 border-b-[#140E66] border-t-[#3D74FE] border-x-0 cursor-pointer text-white rounded-full transition-all duration-300 ease-in-out hover:bg-[#4279FE]"
          >
            <p className="text-2xl">Play Again</p>
          </button>

          <button
            onClick={handleNewCategory}
            className="uppercase bg-[#2562FE] p-2 w-[180px] border-4 border-b-[#140E66] border-t-[#3D74FE] border-x-0 cursor-pointer text-white rounded-full transition-all duration-300 ease-in-out hover:bg-[#4279FE]"
          >
            <p className="text-2xl">New Category</p>
          </button>

          <button
            onClick={handleQuit}
            className="uppercase bg-[#FF71FF] p-2 w-[180px] border-4 border-b-[#140E66] border-t-[#C743FB] border-x-0 cursor-pointer text-white rounded-full transition-all duration-300 ease-in-out hover:bg-[#EF8DFE]"
          >
            <p className="text-2xl">Quit Game</p>
          </button>
        </div>
      </div>
    </div>
  );
}

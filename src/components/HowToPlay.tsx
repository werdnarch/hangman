import React from "react";

interface HowToPlayProps {
  handleHowToPlay: () => void;
}

export default function HowToPlay({ handleHowToPlay }: HowToPlayProps) {
  return (
    <button
      onClick={handleHowToPlay}
      className="uppercase bg-[#2562FE] p-2 w-[180px] border-4 border-b-[#140E66] border-t-[#3D74FE] border-x-0 cursor-pointer text-white rounded-full"
    >
      <p className="text-2xl">How to play</p>
    </button>
  );
}

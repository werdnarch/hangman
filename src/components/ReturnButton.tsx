import React from "react";
import Image from "next/image";

interface ReturnButtonProps {
  handleReturn: () => void;
}

export default function ReturnButton({ handleReturn }: ReturnButtonProps) {
  return (
    <button
      onClick={handleReturn}
      className="rounded-full circle overflow-hidden cursor-pointer"
    >
      <div className="w-full h-full p-3 flex items-center justify-center hover:bg-white/30">
        <div className="relative">
          <Image
            src="/images/icon-back.svg"
            alt="return"
            width={25}
            height={0}
            style={{ height: `auto` }}
          ></Image>
        </div>
      </div>
    </button>
  );
}

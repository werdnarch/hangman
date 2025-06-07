import { useRouter } from "next/navigation";
import React from "react";
import { useGameContext } from "../context.tsx/GameContext";

interface CategoryItemProps {
  setIsMounted: (value: boolean) => void;
  isMounted: boolean;
  className?: string;
  category:
    | "Movies"
    | "TV Shows"
    | "Countries"
    | "Capital Cities"
    | "Animals"
    | "Sports";
}

export default function CategoryItem({
  className,
  isMounted,
  category,
  setIsMounted,
}: CategoryItemProps) {
  const router = useRouter();
  const { setCategory } = useGameContext();

  const handleClick = () => {
    setCategory(category);
    setIsMounted(false);
    setTimeout(() => {
      router.push("/game");
    }, 700);
  };
  return (
    <div
      onClick={handleClick}
      className={`w-full text-center ${className} ${
        isMounted
          ? "left-1/2 opacity-100 -translate-x-1/2 top-0"
          : "-left-full opacity-0"
      } flex items-center justify-center rounded-2xl md:rounded-3xl border-b-4 border-[#150F66] border-x-2 cursor-pointer absolute h-full text-white transition-all duration-900 ease-in-out`}
    >
      <div className="w-full h-full flex items-center justify-center border-t-5 bg-[#2562FE] border-[#3D74FE] rounded-2xl md:rounded-3xl">
        <p className="text-3xl lg:text-5xl">{category}</p>
      </div>
    </div>
  );
}

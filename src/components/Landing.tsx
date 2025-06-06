"use client";

import React, { use, useEffect, useState } from "react";
import Logo from "./Logo";
import PlayButton from "./PlayButton";
import HowToPlay from "./HowToPlay";
import { useRouter } from "next/navigation";

export default function Landing() {
  const [active, setActive] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setActive(true);
  }, []);

  const handlePlayButton = () => {
    setActive(false);
    setTimeout(() => {
      router.push("/categories");
    }, 500);
  };

  const handleHowToPlay = () => {
    setActive(false);
    setTimeout(() => {
      router.push("/instructions");
    }, 700);
  };

  return (
    <div
      className={`w-11/12 bg-[#253AA6] transition-all duration-900 ease-in-out absolute ${
        active ? "top-1/2 -translate-y-1/2" : "-top-full"
      }  left-1/2 -translate-x-1/2 max-w-[500px] rounded-[50px] border-x-3 border-[#140E66] border-b-8`}
    >
      <div className="w-full h-full border-t-8 border-[#3D74FE] border-x-2 rounded-[50px] rounded-b-5xl p-8 flex flex-col items-center gap-8 pt-30 relative">
        <Logo />
        <PlayButton handlePlayButton={handlePlayButton} />
        <HowToPlay handleHowToPlay={handleHowToPlay} />
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Title from "./Title";
import useMenu from "../hooks/useRef";
import { useRouter } from "next/navigation";

export default function MenuButton() {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const { menuRef, buttonRef } = useMenu(() => setMenuActive(false));
  const router = useRouter();

  const handleQuit = () => {
    setMenuActive(false);
    setTimeout(() => {
      router.push("/");
    }, 500);
  };

  const handleNewCategory = () => {
    setMenuActive(false);
    setTimeout(() => {
      router.push("/categories");
    }, 700);
  };

  return (
    <section>
      <button
        ref={buttonRef}
        onClick={() => setMenuActive((prev) => !prev)}
        className="circle rounded-full w-8 aspect-square flex items-center justify-center cursor-pointer"
      >
        <Image
          src="/images/icon-menu.svg"
          alt="menu"
          width={20}
          height={0}
          style={{ height: `auto` }}
        ></Image>
      </button>

      {/* MENU */}

      <div
        className={`fixed z-100 h-full w-full transition-all duration-300 bg-[#2C43AF]/50 top-0 left-0 flex items-center ${
          menuActive
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } justify-center`}
      >
        <div
          ref={menuRef}
          className={`w-11/12 bg-[#253AA6] left-1/2 -translate-x-1/2 max-w-[500px] rounded-[50px] border-x-3 border-[#140E66] border-b-8 absolute transition-all duration-700 ease-in-out ${
            menuActive ? "top-1/2 -translate-y-1/2 " : "-top-full"
          }`}
        >
          <div className="w-full h-full border-t-8 border-[#3D74FE] border-x-2 rounded-[50px] rounded-b-5xl p-8 flex flex-col items-center gap-8 pt-30 relative">
            <div className="max-w-[400px] w-[90%]  p-4 absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center">
              <Title title="Paused" />
            </div>
            <button
              onClick={() => setMenuActive(false)}
              className="uppercase bg-[#2562FE] p-2 w-[180px] border-4 border-b-[#140E66] border-t-[#3D74FE] border-x-0 cursor-pointer text-white rounded-full transition-all duration-300 ease-in-out hover:bg-[#4279FE]"
            >
              <p className="text-2xl">CONTINUE</p>
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
    </section>
  );
}

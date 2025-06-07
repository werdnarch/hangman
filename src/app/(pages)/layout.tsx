"use client";
import GameContextProvider from "@/src/context.tsx/GameContext";
import React, { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <main className="main h-full">
      <GameContextProvider>{children}</GameContextProvider>
    </main>
  );
}

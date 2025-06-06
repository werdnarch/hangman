import React, { ReactNode } from "react";

export default function HowToContainer({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white h-full p-4 w-full lg:flex flex-col justify-evenly lg:text-center lg:text-2xl rounded-2xl md:rounded-4xl">
      {children}
    </div>
  );
}

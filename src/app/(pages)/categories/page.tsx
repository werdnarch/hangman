"use client";

import ReturnButton from "@/src/components/ReturnButton";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CategoryItem from "@/src/components/CategoryItem";

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
    <main className="p-8 relative h-full flex items-center justify-center">
      <header
        className={`flex items-center transition-all duration-700 ease-in-out justify-between absolute w-[90%] ${
          isMounted ? "top-8 lg:top-15" : "-top-full"
        }  left-1/2 -translate-x-1/2`}
      >
        <ReturnButton handleReturn={handleReturn} />
        <p className="text-5xl lg:text-7xl text-outline">Pick a Category</p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center max-w-6xl w-full">
        <div className="w-full relative h-15 md:h-25 lg:h-40">
          <CategoryItem
            category="Movies"
            isMounted={isMounted}
            className={``}
          />
        </div>
        <div className="w-full relative h-15 md:h-25 lg:h-40">
          <CategoryItem
            category="TV Shows"
            isMounted={isMounted}
            className={`delay-100`}
          />
        </div>
        <div className="w-full relative h-15 md:h-25 lg:h-40">
          <CategoryItem
            category="Countries"
            isMounted={isMounted}
            className={`delay-200`}
          />
        </div>
        <div className="w-full relative h-15 md:h-25 lg:h-40">
          <CategoryItem
            category="Capital Cities"
            isMounted={isMounted}
            className={`delay-300`}
          />
        </div>
        <div className="w-full relative h-15 md:h-25 lg:h-40">
          <CategoryItem
            category="Animals"
            isMounted={isMounted}
            className={`delay-400`}
          />
        </div>
        <div className="w-full relative h-15 md:h-25 lg:h-40">
          <CategoryItem
            category="Sports"
            isMounted={isMounted}
            className={`delay-500`}
          />
        </div>
      </section>
    </main>
  );
}

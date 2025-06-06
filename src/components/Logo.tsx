import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 ">
      <Image
        src={"/images/logo.svg"}
        alt="logo"
        width={300}
        height={0}
        style={{ height: `auto` }}
        className="lg:w-[400px]"
      ></Image>
    </div>
  );
}

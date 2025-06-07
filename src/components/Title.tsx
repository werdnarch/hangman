import { title } from "process";
import React from "react";

export default function Title({ title }: { title: string }) {
  return (
    <div className="title gradient-text">
      <p className="shadow">{title}</p>
      <p className="text-outline">{title}</p>
    </div>
  );
}

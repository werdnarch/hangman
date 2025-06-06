import React, { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return <main className="main h-full">{children}</main>;
}

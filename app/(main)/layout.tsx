import React from "react";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main className={outfit?.className}>{children}</main>;
};

export default layout;

import { Quicksand } from "next/font/google";
import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

export const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap"
});

export function merge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

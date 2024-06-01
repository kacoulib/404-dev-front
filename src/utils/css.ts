import { twMerge } from "tailwind-merge";

export function cx(...classes: (string | undefined)[]) {
  return twMerge(...classes);
}

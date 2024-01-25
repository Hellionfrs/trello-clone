import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// combine tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

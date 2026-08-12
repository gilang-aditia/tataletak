import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Gabungkan kelas Tailwind. twMerge membuat kelas yang dikirim lewat prop
 * `className` menang atas kelas bawaan komponen saat keduanya bentrok
 * (mis. `max-w-*` di MobileMockup), bukan bergantung pada urutan di CSS.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

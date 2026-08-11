import type { CSSProperties } from "react";

// Efek teks bertumpuk khas judul besar. Dipakai hero dan judul tiap halaman.
export const headlineStyle: CSSProperties = {
  fontFamily: '"Arial Black", Impact, sans-serif',
  textShadow: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    .map((offset) => `${offset}px ${offset}px 0 #001A99`)
    .join(", "),
};

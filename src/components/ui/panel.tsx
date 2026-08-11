import type { ReactNode } from "react";

/** Blok putih membulat di dasar halaman — dipakai ulang di semua halaman. */
export const Panel = ({ children }: { children: ReactNode }) => {
  return (
    <section className="bg-white text-black rounded-t-[2.5rem] md:rounded-t-[3.5rem] px-6 py-12 md:px-10 md:py-16 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.2)] mt-auto w-full">
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
};

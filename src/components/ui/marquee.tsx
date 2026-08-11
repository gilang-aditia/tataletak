const items = [
  "COMPANY PROFILE",
  "LANDING PAGE",
  "RAWAT & UBAH",
  "TATA LETAK DARI NOL",
  "SIAP DI PONSEL",
];

/** Pita berjalan miring sebagai jeda antara hero biru dan blok putih. */
export const Marquee = () => {
  return (
    <div className="relative z-10 my-10 md:my-16">
      {/* Lebih lebar dari layar supaya kemiringan tidak menyisakan celah di tepi;
          sisanya dipotong oleh overflow-hidden milik rangka di layout.tsx. */}
      <div className="w-[104%] -ml-[2%] -rotate-2 bg-[#CCFF00] py-3 md:py-4 overflow-hidden shadow-xl">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
              {items.map((item) => (
                <span key={item} className="flex items-center">
                  <span className="px-5 md:px-8 text-black font-black uppercase text-sm md:text-xl tracking-tight whitespace-nowrap">
                    {item}
                  </span>
                  <span className="text-black text-base md:text-xl">&#9733;</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

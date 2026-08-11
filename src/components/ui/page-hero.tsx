import { headlineStyle } from "@/lib/typography";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

/** Kepala halaman interior: judul besar di atas latar biru, seragam dengan beranda. */
export const PageHero = ({ eyebrow, title, description }: PageHeroProps) => {
  return (
    <main className="flex-1 relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-10 pt-6 pb-20 md:pt-10 md:pb-28">
      <div className="max-w-4xl">
        <p className="font-mono text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#CCFF00]">
          {eyebrow}
        </p>
        <h1
          className="mt-4 text-[clamp(2.75rem,9vw,96px)] font-black leading-[0.85] tracking-tighter text-white uppercase"
          style={headlineStyle}
        >
          {title}
        </h1>
        <p className="mt-8 max-w-2xl text-sm md:text-lg leading-relaxed text-white/90">
          {description}
        </p>
      </div>
    </main>
  );
};

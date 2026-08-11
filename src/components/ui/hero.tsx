"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

import { ArrowGreenLeft, ArrowGreenRight, CircularBadge } from "@/components/ui/accents";
import { thumb } from "@/lib/images";
import { headlineStyle } from "@/lib/typography";

type FloatingCardProps = {
  image: string;
  title: string;
  meta: string;
  /* Kelas posisi + rotasi supaya dua kartu bisa dibedakan tanpa menduplikasi markup. */
  wrapperClassName: string;
  cardClassName: string;
  duration: number;
  delay?: number;
  travel: number;
};

const FloatingCard = ({
  image,
  title,
  meta,
  wrapperClassName,
  cardClassName,
  duration,
  delay = 0,
  travel,
}: FloatingCardProps) => (
  <motion.div
    animate={{ y: [0, travel, 0] }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    className={`absolute z-30 pointer-events-auto ${wrapperClassName}`}
  >
    <div className={`w-24 sm:w-40 md:w-52 bg-white/20 backdrop-blur-md border border-white/40 rounded-2xl sm:rounded-[2rem] p-2 sm:p-3 flex flex-col shadow-2xl hover:rotate-0 transition-transform duration-500 ${cardClassName}`}>
      <div className="relative w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border border-white/30">
        <Image src={image} alt={title} fill sizes="(max-width: 640px) 96px, 208px" className="object-cover" />
      </div>
      <div className="px-1 pt-2 pb-1 sm:pt-3">
        <p className="font-bold text-[10px] sm:text-sm md:text-base text-white leading-tight">{title}</p>
        <p className="text-[8px] sm:text-[10px] md:text-xs text-white/80 mt-0.5 sm:mt-1 leading-tight">{meta}</p>
      </div>
    </div>
  </motion.div>
);

export const Hero = () => {
  return (
    <main className="flex-1 relative z-10 pt-4 pb-32 md:pt-8 md:pb-48 px-4 flex flex-col items-center justify-center w-full max-w-[1440px] mx-auto">

      {/* Penjelas singkat: siapa kami, tepat di bawah navbar. */}
      <p className="relative z-30 text-center font-mono text-[11px] md:text-sm uppercase tracking-[0.25em] text-[#CCFF00] px-4">
        Pengrajin website · Company profile · Landing page
      </p>

      {/* Massive Typography & Elements Container */}
      <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center z-10 mt-6 mb-16">

        {/* Text Stack */}
        <div className="w-full flex flex-col items-center relative z-10 space-y-2 md:space-y-4">

          {/* #RAKIT */}
          <div className="w-full flex justify-start pl-[10%] md:pl-[25%] relative z-30">
            <h1 className="text-[clamp(4.5rem,12vw,160px)] font-black leading-[0.85] tracking-tighter text-[#CCFF00] m-0 p-0 uppercase" style={headlineStyle}>
              #RAKIT
            </h1>
          </div>

          {/* TATA */}
          <div className="w-full flex justify-center relative z-20">
            <p className="text-[clamp(5rem,15vw,220px)] font-black leading-[0.85] tracking-tighter text-white m-0 p-0 uppercase" style={headlineStyle}>
              TATA
            </p>
          </div>

          {/* LETAK */}
          <div className="w-full flex justify-start pl-[15%] md:pl-[30%] relative z-10">
            <p className="text-[clamp(4.5rem,12vw,160px)] font-black leading-[0.85] tracking-tighter text-white m-0 p-0 uppercase" style={headlineStyle}>
              LETAK
            </p>
          </div>

        </div>

        {/* Absolute Overlays (Cards, Arrows, Badge) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">

          <FloatingCard
            image={thumb.companyProfile}
            title="Company profile"
            meta="Kopi Ruang · 14 hari"
            wrapperClassName="bottom-[-70%] left-0 sm:bottom-[10%] xl:left-[-10%]"
            cardClassName="rotate-[-12deg]"
            duration={5}
            travel={-15}
          />

          <FloatingCard
            image={thumb.landingPage}
            title="Landing page"
            meta="Klinik Sehat · 7 hari"
            wrapperClassName="bottom-[-70%] right-0 sm:bottom-auto sm:top-[15%] xl:right-[-10%]"
            cardClassName="rotate-[12deg]"
            duration={6}
            delay={1}
            travel={-20}
          />

          {/* Decorative Arrow Left */}
          <div className="absolute bottom-[0%] left-[0%] md:left-[10%] w-24 h-24 md:w-32 md:h-32 z-20">
            <ArrowGreenLeft />
          </div>

          {/* Decorative Arrow Right */}
          <div className="absolute top-[5%] right-[0%] md:right-[10%] w-24 h-24 md:w-32 md:h-32 z-20">
            <ArrowGreenRight />
          </div>

          {/* Circular Badge */}
          <div className="absolute bottom-[-10%] md:bottom-[-30%] right-[0%] md:right-[15%] z-40 pointer-events-auto">
            <CircularBadge />
          </div>

        </div>
      </div>

      {/* Ajakan bertindak. mt besar dipakai untuk melewati kartu & badge yang
          menggantung di bawah container teks (bottom-[-70%] dan md:bottom-[-30%]). */}
      <div className="relative z-30 mt-40 sm:mt-32 md:mt-36 w-full max-w-2xl mx-auto text-center px-2">
        <p className="text-base md:text-xl leading-relaxed text-white">
          Kami merakit website <span className="text-[#CCFF00] font-semibold">company profile</span> dan{" "}
          <span className="text-[#CCFF00] font-semibold">landing page</span> untuk usaha kecil dan menengah.
          Dikerjakan satu per satu, bukan template pasaran.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <Link
            href="/portofolio"
            className="px-6 py-3 rounded-full bg-[#CCFF00] text-black text-sm font-black uppercase tracking-wide hover:opacity-90 transition-opacity"
          >
            Lihat portofolio
          </Link>
          <Link
            href="/harga"
            className="px-6 py-3 rounded-full border border-white/60 text-white text-sm font-semibold hover:bg-white hover:text-[#0038FF] transition-colors"
          >
            Cek harga paket
          </Link>
        </div>
      </div>
    </main>
  );
};

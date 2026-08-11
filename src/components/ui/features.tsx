import Image from "next/image";

import { ArrowBlack1, ArrowBlack2 } from "@/components/ui/accents";
import { thumb } from "@/lib/images";

const cardClass =
  "bg-[#F8F9FA] rounded-[2rem] p-8 flex flex-col items-center text-center relative h-64 border border-gray-100";
const arrowClass = "hidden md:block absolute -right-12 bottom-8 w-16 h-16 z-30";

export const Features = () => {
  return (
    <section className="bg-white text-black rounded-t-[2.5rem] md:rounded-t-[3.5rem] px-6 py-12 md:px-10 md:py-16 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.2)] mt-auto w-full">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          {/* Card 1 */}
          <div className={cardClass}>
            <h2 className="text-xl md:text-2xl uppercase leading-tight mb-2 font-black">
              COMPANY<br />PROFILE
            </h2>
            <p className="text-[10px] md:text-xs text-black/60 font-bold mb-auto">
              calon klien percaya sebelum mereka menelepon
            </p>

            <div className="relative w-full flex justify-center mt-6">
              <div className="flex items-center bg-[#0038FF] rounded-2xl p-2 pr-16 text-white shadow-lg relative z-10">
                <div className="relative w-8 h-8 rounded-lg mr-3 border border-white/30 overflow-hidden flex-shrink-0">
                  <Image src={thumb.companyProfile} alt="" fill sizes="32px" className="object-cover" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold leading-none">Kopi Ruang</p>
                  <p className="text-[8px] text-white/70 leading-none mt-1">7 halaman</p>
                </div>
              </div>
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#CCFF00] text-black font-black text-[10px] px-3 py-2 rounded-xl z-20 shadow-md">
                14 HARI
              </div>
            </div>

            <div className={arrowClass}>
              <ArrowBlack1 />
            </div>
          </div>

          {/* Card 2 */}
          <div className={cardClass}>
            <h2 className="text-xl md:text-2xl uppercase leading-tight mb-2 font-black">
              LANDING<br />PAGE
            </h2>
            <p className="text-[10px] md:text-xs text-black/60 font-bold mb-auto">
              satu laman, satu tujuan: pengunjung jadi pesanan
            </p>

            <div className="relative w-full flex justify-center mt-6">
              <div className="flex items-center bg-[#0038FF] rounded-full p-1.5 text-white shadow-lg">
                <div className="bg-white/20 text-white font-bold text-sm px-4 py-2 rounded-full mr-2">
                  98
                </div>
                <div className="font-bold text-xs px-4">
                  PageSpeed
                </div>
              </div>

              <div className="absolute -bottom-6 right-1/3 bg-[#CCFF00] rounded-full p-2.5 shadow-lg transform rotate-12 z-20">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-black stroke-current" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </div>

            <div className={arrowClass}>
              <ArrowBlack2 />
            </div>
          </div>

          {/* Card 3 */}
          <div className={cardClass}>
            <h2 className="text-xl md:text-2xl uppercase leading-tight mb-2 font-black">
              RAWAT<br />&amp; UBAH
            </h2>
            <p className="text-[10px] md:text-xs text-black/60 font-bold mb-auto">
              tambah halaman atau ubah tata letak tanpa mulai dari nol
            </p>

            <div className="flex flex-col items-center bg-[#CCFF00] rounded-[2rem] px-6 py-4 text-black shadow-lg mt-6 relative w-full max-w-[200px]">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1">Biaya rawat / bulan</p>
              <p className="text-xl font-black">Rp350.000</p>

              <div className="absolute -bottom-2 left-8 w-5 h-5 bg-[#CCFF00] transform rotate-45"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

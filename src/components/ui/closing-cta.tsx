import Link from "next/link";

import { contact } from "@/lib/site";

/** Blok penutup: kartu biru di dalam area putih supaya sudut membulatnya terlihat. */
export const ClosingCta = () => {
  return (
    <section className="bg-white px-6 pb-16 md:px-10 md:pb-24 relative z-20 w-full">
      <div className="max-w-6xl mx-auto bg-[#0038FF] rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none"></div>

        <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <p className="font-mono text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#CCFF00]">
              Diskusi pertama gratis
            </p>
            <h2 className="mt-4 text-4xl md:text-7xl font-black uppercase leading-[0.85] tracking-tighter">
              Siap
              <br />
              merakit?
            </h2>
            <p className="mt-6 max-w-md text-sm md:text-base text-white/80 leading-relaxed">
              Ceritakan usahamu. Kami balas dengan saran struktur website dan perkiraan biayanya
              — tanpa kamu perlu memutuskan apa pun hari itu juga.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:items-end">
            <Link
              href="/kontak"
              className="px-8 py-4 rounded-full bg-[#CCFF00] text-black text-sm font-black uppercase tracking-wide text-center hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Mulai diskusi
            </Link>
            <a
              href={contact.whatsappUrl}
              className="px-8 py-4 rounded-full border border-white/60 text-white text-sm font-semibold text-center hover:bg-white hover:text-[#0038FF] transition-colors whitespace-nowrap"
            >
              Langsung WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/ui/page-hero";
import { Panel } from "@/components/ui/panel";

export const metadata: Metadata = {
  title: "Proses",
  description: "Lima tahap pengerjaan website, dari percakapan awal sampai serah terima.",
};

const steps = [
  {
    title: "Dengar dulu",
    time: "1–2 hari",
    body: "Kami tanya soal usahamu: siapa pembelinya, apa yang paling sering ditanyakan, dan apa yang ingin dicapai website ini. Tanpa biaya, tanpa ikatan.",
  },
  {
    title: "Susun kerangka",
    time: "2–3 hari",
    body: "Isi website dipetakan jadi struktur halaman. Kamu melihat rangka tata letaknya lebih dulu, sebelum satu pun warna dipasang.",
  },
  {
    title: "Rakit tampilan",
    time: "4–7 hari",
    body: "Kerangka diberi rupa: warna, huruf, gambar, dan gerak seperlunya. Kamu bisa melihat perkembangannya lewat tautan pratinjau kapan saja.",
  },
  {
    title: "Uji di banyak layar",
    time: "1–2 hari",
    body: "Dicoba di ponsel, tablet, dan layar besar. Kecepatan muat, tautan, dan formulir diperiksa satu per satu.",
  },
  {
    title: "Tayang & serah terima",
    time: "1 hari",
    body: "Website dipasang di domain milikmu. Kamu dapat panduan singkat cara mengganti isi sendiri, plus masa dukungan 30 hari.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Proses"
        title="Cara kami bekerja"
        description="Tidak ada tahap yang disembunyikan. Kamu tahu sedang di mana posisi pekerjaan, dan apa yang perlu kamu siapkan di tiap tahap."
      />

      <Panel>
        <ol className="space-y-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="bg-[#F8F9FA] border border-gray-100 rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row md:items-start gap-5"
            >
              <span className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0038FF] text-white font-black text-xl flex items-center justify-center">
                {index + 1}
              </span>

              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-3">
                  <h2 className="text-xl md:text-2xl font-black uppercase leading-tight">{step.title}</h2>
                  <span className="bg-[#CCFF00] text-black text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                    {step.time}
                  </span>
                </div>
                <p className="mt-3 text-sm md:text-base text-black/70 leading-relaxed">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200 pt-8">
          <p className="text-sm md:text-base font-bold text-black/70 text-center sm:text-left">
            Tahap pertama gratis. Mulai dari cerita soal usahamu.
          </p>
          <Link
            href="/kontak"
            className="px-6 py-3 rounded-full bg-[#0038FF] text-white text-sm font-black uppercase tracking-wide hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Mulai diskusi
          </Link>
        </div>
      </Panel>
    </>
  );
}

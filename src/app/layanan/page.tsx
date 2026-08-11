import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/ui/page-hero";
import { Panel } from "@/components/ui/panel";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Pembuatan website company profile, landing page, dan perawatan berkala untuk usaha kecil dan menengah.",
};

const services = [
  {
    name: "Company profile",
    lead: "Website profil usaha yang membuat calon klien yakin sebelum menghubungi.",
    includes: [
      "5–10 halaman: beranda, tentang, layanan, portofolio, kontak",
      "Tata letak dirancang dari nol mengikuti isi usahamu",
      "Formulir kontak yang masuk ke email atau WhatsApp",
      "Siap tampil rapi di ponsel, tablet, dan layar besar",
    ],
    duration: "10–14 hari kerja",
  },
  {
    name: "Landing page",
    lead: "Satu laman fokus untuk satu tujuan: promo, peluncuran produk, atau pendaftaran.",
    includes: [
      "Alur satu halaman yang mengarah ke satu tombol tindakan",
      "Bagian penawaran, bukti, dan tanya jawab",
      "Terhubung ke WhatsApp atau formulir pendaftaran",
      "Dioptimalkan agar memuat cepat di jaringan seluler",
    ],
    duration: "5–7 hari kerja",
  },
  {
    name: "Rawat & ubah",
    lead: "Website yang sudah jadi tetap perlu diurus. Kami rawat tanpa kamu perlu mulai dari nol.",
    includes: [
      "Perubahan teks, gambar, dan tata letak",
      "Penambahan halaman baru menyusul kebutuhan",
      "Pemantauan agar situs tetap hidup dan cepat",
      "Cadangan berkala dan pembaruan keamanan",
    ],
    duration: "Langganan bulanan",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Layanan"
        title="Yang kami kerjakan"
        description="Kami tidak menjual template. Setiap halaman dirakit mengikuti isi dan cara kerja usahamu — mulai dari struktur, tata letak, sampai kata-kata di dalamnya."
      />

      <Panel>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <article
              key={service.name}
              className="bg-[#F8F9FA] border border-gray-100 rounded-[2rem] p-8 flex flex-col"
            >
              <h2 className="text-2xl font-black uppercase leading-tight">{service.name}</h2>
              <p className="mt-3 text-sm text-black/60 font-bold leading-relaxed">{service.lead}</p>

              <ul className="mt-6 space-y-3 mb-8">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-black/80 leading-relaxed">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[#0038FF] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-auto inline-flex self-start bg-[#CCFF00] text-black text-[11px] font-black uppercase tracking-wider px-4 py-2 rounded-full">
                {service.duration}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200 pt-8">
          <p className="text-sm md:text-base font-bold text-black/70 text-center sm:text-left">
            Belum yakin yang mana yang cocok? Kami bantu petakan dulu.
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

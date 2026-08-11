import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/ui/page-hero";
import { Panel } from "@/components/ui/panel";

export const metadata: Metadata = {
  title: "Harga",
  description: "Paket pembuatan landing page dan company profile beserta biaya perawatan bulanan.",
};

// Angka contoh — sesuaikan dengan tarifmu sendiri.
const packages = [
  {
    name: "Laman",
    price: "Rp3.500.000",
    unit: "sekali bayar",
    lead: "Satu landing page untuk promo, peluncuran, atau pendaftaran.",
    items: ["1 halaman penuh", "Terhubung WhatsApp / formulir", "Selesai 5–7 hari kerja", "Dukungan 30 hari"],
    featured: false,
  },
  {
    name: "Profil",
    price: "Rp8.500.000",
    unit: "sekali bayar",
    lead: "Company profile lengkap untuk usaha yang sedang tumbuh.",
    items: ["5–10 halaman", "Tata letak dirancang dari nol", "Formulir kontak & peta lokasi", "Dasar SEO & kecepatan muat", "Dukungan 60 hari"],
    featured: true,
  },
  {
    name: "Rawat",
    price: "Rp350.000",
    unit: "per bulan",
    lead: "Untuk website yang sudah tayang dan perlu diurus terus.",
    items: ["Perubahan isi tiap bulan", "Cadangan berkala", "Pemantauan & pembaruan", "Boleh berhenti kapan saja"],
    featured: false,
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Harga"
        title="Paket & biaya"
        description="Harga di bawah ini titik mulai, bukan harga mati. Setelah kami dengar kebutuhanmu, kamu terima rincian penawaran tertulis sebelum apa pun dikerjakan."
      />

      <Panel>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {packages.map((pack) => (
            <article
              key={pack.name}
              className={`rounded-[2rem] p-8 flex flex-col border ${
                pack.featured
                  ? "bg-[#0038FF] text-white border-[#0038FF] shadow-xl lg:-mt-4 lg:pb-12"
                  : "bg-[#F8F9FA] text-black border-gray-100"
              }`}
            >
              {pack.featured && (
                <span className="self-start bg-[#CCFF00] text-black text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
                  Paling sering diambil
                </span>
              )}

              <h2 className="text-2xl font-black uppercase leading-tight">{pack.name}</h2>
              <p className={`mt-2 text-sm font-bold leading-relaxed ${pack.featured ? "text-white/70" : "text-black/60"}`}>
                {pack.lead}
              </p>

              <p className="mt-6 text-3xl md:text-4xl font-black tracking-tight">{pack.price}</p>
              <p className={`text-xs font-bold uppercase tracking-wider ${pack.featured ? "text-white/60" : "text-black/40"}`}>
                {pack.unit}
              </p>

              <ul className="mt-6 space-y-3 mb-8">
                {pack.items.map((item) => (
                  <li key={item} className={`flex gap-3 text-sm leading-relaxed ${pack.featured ? "text-white/90" : "text-black/80"}`}>
                    <span className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${pack.featured ? "bg-[#CCFF00]" : "bg-[#0038FF]"}`} />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/kontak"
                className={`mt-auto text-center px-6 py-3 rounded-full text-sm font-black uppercase tracking-wide transition-opacity hover:opacity-90 ${
                  pack.featured ? "bg-[#CCFF00] text-black" : "bg-[#0038FF] text-white"
                }`}
              >
                Ambil paket ini
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-10 text-xs md:text-sm text-black/50 font-bold leading-relaxed">
          Belum termasuk biaya domain dan hosting tahunan (kisaran Rp500.000–Rp1.500.000 per tahun,
          dibayar langsung ke penyedia atas nama usahamu). Pembayaran dibagi dua tahap: separuh di
          awal, separuh saat serah terima.
        </p>
      </Panel>
    </>
  );
}

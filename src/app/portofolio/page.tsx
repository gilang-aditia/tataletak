import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/ui/page-hero";
import { Panel } from "@/components/ui/panel";
import { cover } from "@/lib/images";

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Contoh website company profile dan landing page yang pernah kami rakit.",
};

// Contoh isian — ganti dengan pekerjaan aslimu.
const projects = [
  { name: "Kopi Ruang", kind: "Company profile", year: "2025", note: "7 halaman, katalog biji kopi", image: cover.kopiRuang },
  { name: "Klinik Sehat", kind: "Landing page", year: "2025", note: "Pendaftaran pasien via WhatsApp", image: cover.klinikSehat },
  { name: "Atlas Logistik", kind: "Company profile", year: "2024", note: "Pelacakan armada & profil layanan", image: cover.atlasLogistik },
  { name: "Studio Kriya", kind: "Landing page", year: "2024", note: "Peluncuran koleksi rotan", image: cover.studioKriya },
  { name: "Ternak Mandiri", kind: "Company profile", year: "2024", note: "Profil peternakan & harga ternak", image: cover.ternakMandiri },
  { name: "Balai Pelatihan", kind: "Landing page", year: "2023", note: "Pendaftaran kelas per gelombang", image: cover.balaiPelatihan },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Portofolio"
        title="Pernah kami rakit"
        description="Sebagian pekerjaan yang sudah tayang. Tiap proyek dimulai dari percakapan, bukan dari memilih template."
      />

      <Panel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <article
              key={project.name}
              className="bg-[#F8F9FA] border border-gray-100 rounded-[2rem] overflow-hidden flex flex-col"
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={project.image}
                  alt={`Cuplikan website ${project.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <span className="absolute top-4 left-4 bg-[#CCFF00] text-black text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full">
                  {project.kind}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="text-lg font-black uppercase leading-tight">{project.name}</h2>
                  <span className="text-xs font-bold text-black/40">{project.year}</span>
                </div>
                <p className="mt-2 text-sm text-black/60 font-bold leading-relaxed">{project.note}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200 pt-8">
          <p className="text-sm md:text-base font-bold text-black/70 text-center sm:text-left">
            Usahamu berikutnya di daftar ini?
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

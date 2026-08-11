import type { Metadata } from "next";

import { PageHero } from "@/components/ui/page-hero";
import { Panel } from "@/components/ui/panel";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Hubungi kami untuk diskusi pembuatan website company profile atau landing page.",
};

const prepare = [
  "Nama usaha dan bidangnya",
  "Siapa yang kamu harap datang ke website ini",
  "Website atau akun media sosial yang sudah ada, kalau ada",
  "Contoh website yang kamu suka — beserta alasannya",
  "Perkiraan waktu tayang yang kamu incar",
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Kontak"
        title="Ayo ngobrol"
        description="Diskusi pertama gratis dan tanpa ikatan. Ceritakan usahamu, kami balas dengan saran struktur website dan perkiraan biayanya."
      />

      <Panel>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#0038FF] text-white rounded-[2rem] p-8 md:p-10 flex flex-col">
            <h2 className="text-2xl md:text-3xl font-black uppercase leading-tight">
              Hubungi langsung
            </h2>
            <p className="mt-3 text-sm text-white/70 font-bold leading-relaxed">
              Paling cepat lewat WhatsApp. Kami balas pada {contact.hours}.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={contact.whatsappUrl}
                className="flex items-center justify-between gap-4 bg-[#CCFF00] text-black rounded-2xl px-6 py-4 font-black hover:opacity-90 transition-opacity"
              >
                <span className="text-sm uppercase tracking-wide">WhatsApp</span>
                <span className="text-sm">{contact.whatsappLabel}</span>
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="flex items-center justify-between gap-4 bg-white/10 border border-white/30 rounded-2xl px-6 py-4 font-bold hover:bg-white/20 transition-colors"
              >
                <span className="text-sm uppercase tracking-wide">Email</span>
                <span className="text-sm break-all">{contact.email}</span>
              </a>
            </div>

            <p className="mt-auto pt-8 text-xs font-bold uppercase tracking-wider text-white/50">
              {contact.city}
            </p>
          </div>

          <div className="bg-[#F8F9FA] border border-gray-100 rounded-[2rem] p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-black uppercase leading-tight">
              Siapkan ini dulu
            </h2>
            <p className="mt-3 text-sm text-black/60 font-bold leading-relaxed">
              Tidak wajib lengkap. Makin banyak yang kamu ceritakan di awal, makin cepat kami
              bisa memberi perkiraan yang masuk akal.
            </p>

            <ul className="mt-8 space-y-4">
              {prepare.map((item) => (
                <li key={item} className="flex gap-3 text-sm md:text-base text-black/80 leading-relaxed">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#0038FF] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Panel>
    </>
  );
}

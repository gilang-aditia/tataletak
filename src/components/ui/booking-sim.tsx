import { MobileMockup, type ChatMessage } from "@/components/ui/great-ui-mobile-mockup";
import { thumb } from "@/lib/images";
import { contact } from "@/lib/site";

/* Percakapan contoh. Ditulis sekali di tingkat modul supaya acuannya stabil dan
   autoplay di MobileMockup tidak mulai ulang tiap render. */
const conversation: ChatMessage[] = [
  {
    id: 1,
    isCurrentUser: true,
    timestamp: "10.05",
    text: "Halo, saya mau bikin landing page untuk klinik gigi. Bisa?",
  },
  {
    id: 2,
    isCurrentUser: false,
    timestamp: "10.06",
    text: "Halo! Bisa 👋 Untuk klinik biasanya satu halaman sudah cukup: layanan, profil dokter, lokasi, lalu tombol booking.",
  },
  {
    id: 3,
    isCurrentUser: true,
    timestamp: "10.07",
    text: "Berapa lama pengerjaannya, dan berapa biayanya?",
  },
  {
    id: 4,
    isCurrentUser: false,
    timestamp: "10.08",
    imageUrl: thumb.landingPage,
    imageAlt: "Contoh landing page yang pernah dikerjakan",
    imageCaption: "7 hari kerja, mulai Rp3.500.000 — sudah termasuk domain tahun pertama.",
  },
  {
    id: 5,
    isCurrentUser: true,
    timestamp: "10.10",
    text: "Oke, saya lanjut. Mulai kapan?",
  },
  {
    id: 6,
    isCurrentUser: false,
    timestamp: "10.11",
    text: "Besok draf struktur halamannya kami kirim ✅",
  },
];

const steps = [
  {
    title: "Cerita singkat",
    detail: "Usahamu apa, target pengunjungnya siapa. Tidak perlu brief formal.",
  },
  {
    title: "Kami balas dengan angka",
    detail: "Struktur halaman, lama pengerjaan, dan biaya — di pesan yang sama.",
  },
  {
    title: "Draf jalan",
    detail: "Setuju hari ini, besok draf tata letaknya sudah bisa kamu lihat.",
  },
];

/** Simulasi pemesanan lewat WhatsApp — memperlihatkan alur pesan pertama sampai deal. */
export const BookingSim = () => {
  return (
    <section className="relative z-10 w-full px-6 py-12 md:px-10 md:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">

        <div>
          <p className="font-mono text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#CCFF00]">
            Simulasi pemesanan
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-black uppercase leading-[0.85] tracking-tighter text-white">
            Mulai dari
            <br />
            satu pesan
          </h2>

          <p className="mt-6 max-w-md text-sm md:text-base leading-relaxed text-white/80">
            Tidak ada formulir panjang atau rapat perkenalan. Begini biasanya percakapan
            pertama berjalan — persis seperti yang akan kamu alami.
          </p>

          <ol className="mt-8 space-y-5">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#CCFF00] text-sm font-black text-black">
                  {index + 1}
                </span>
                <div>
                  <p className="text-sm md:text-base font-bold text-white">{step.title}</p>
                  <p className="mt-1 text-xs md:text-sm leading-relaxed text-white/70">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>

          <a
            href={contact.whatsappUrl}
            className="mt-8 inline-block rounded-full bg-[#CCFF00] px-6 py-3 text-sm font-black uppercase tracking-wide text-black transition-opacity hover:opacity-90"
          >
            Kirim pesan pertama
          </a>
        </div>

        {/* Percakapan hanya ilustrasi; isinya sudah diringkas di kolom kiri. */}
        <div className="flex justify-center lg:justify-end" aria-hidden="true">
          <MobileMockup
            headerTitle="Tata Letak"
            headerSubtitle="biasanya balas < 1 jam"
            avatarFallback="TL"
            messages={conversation}
          />
        </div>

      </div>
    </section>
  );
};

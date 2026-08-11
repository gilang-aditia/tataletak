// Angka contoh — ganti dengan catatan aslimu sebelum tayang.
const stats = [
  { value: "48", label: "Website tayang" },
  { value: "6", label: "Tahun merakit" },
  { value: "12", label: "Hari rata-rata" },
  { value: "100%", label: "Dirancang dari nol" },
];

const faqs = [
  {
    q: "Berapa lama sampai website saya tayang?",
    a: "Landing page 5–7 hari kerja, company profile 10–14 hari kerja. Hitungannya mulai saat isi (teks dan foto) sudah lengkap di tangan kami.",
  },
  {
    q: "Saya belum punya domain dan hosting.",
    a: "Kami bantu daftarkan, tapi atas nama usahamu — bukan atas nama kami. Jadi kalau suatu saat kamu pindah ke penyedia jasa lain, kendali tetap di tanganmu.",
  },
  {
    q: "Nanti saya bisa ganti isinya sendiri?",
    a: "Bisa. Saat serah terima kamu dapat panduan singkat untuk mengganti teks dan gambar. Kalau tidak mau repot, ada paket rawat bulanan yang menangani itu.",
  },
  {
    q: "Bagaimana kalau saya belum punya foto atau teks?",
    a: "Kami bantu susun kerangka teksnya dari hasil wawancara, dan memakai foto stok berlisensi sebagai penambal sampai foto aslimu siap.",
  },
  {
    q: "Pembayarannya bagaimana?",
    a: "Dua tahap: separuh di awal sebagai tanda jadi, separuh saat website siap tayang. Tidak ada biaya tersembunyi di luar domain dan hosting tahunan.",
  },
];

export const Proof = () => {
  return (
    <section className="bg-white text-black px-6 pb-14 md:px-10 md:pb-20 relative z-20 w-full">
      <div className="max-w-6xl mx-auto">

        {/* Angka ringkas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#F8F9FA] border border-gray-100 rounded-[2rem] p-6 md:p-8 text-center"
            >
              <p className="text-4xl md:text-6xl font-black tracking-tighter text-[#0038FF]">
                {stat.value}
              </p>
              <p className="mt-2 text-[10px] md:text-xs font-black uppercase tracking-wider text-black/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Tanya jawab */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-8 lg:gap-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-black uppercase leading-[0.9] tracking-tight">
              Yang sering
              <br />
              ditanyakan
            </h2>
            <p className="mt-4 text-sm md:text-base text-black/60 font-bold leading-relaxed">
              Belum terjawab di sini? Tanyakan langsung — kami balas tanpa perlu kamu memesan
              apa pun dulu.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-[#F8F9FA] border border-gray-100 rounded-[1.5rem] px-6 py-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none font-black text-sm md:text-base uppercase leading-tight">
                  {faq.q}
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#0038FF] text-white flex items-center justify-center text-lg leading-none transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm md:text-base text-black/70 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

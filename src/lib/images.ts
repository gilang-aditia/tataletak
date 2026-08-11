// Hanya dua lebar ini yang di-allowlist di next.config.ts (images.remotePatterns.search
// dicocokkan persis). Union type-nya sengaja sempit supaya lebar lain ketahuan saat
// typecheck, bukan jadi error "hostname is not configured" yang menyesatkan saat runtime.
type UnsplashWidth = 400 | 1200;

const unsplash = (id: string, width: UnsplashWidth) =>
  `https://images.unsplash.com/${id}?w=${width}&q=80`;

/** Thumbnail kecil untuk kartu melayang di hero. */
export const thumb = {
  companyProfile: unsplash("photo-1517245386807-bb43f82c33c4", 400),
  landingPage: unsplash("photo-1498050108023-c5249f4df085", 400),
};

/** Gambar lebar untuk kartu portofolio. */
export const cover = {
  kopiRuang: unsplash("photo-1517245386807-bb43f82c33c4", 1200),
  klinikSehat: unsplash("photo-1519389950473-47ba0277781c", 1200),
  atlasLogistik: unsplash("photo-1460925895917-afdab827c52f", 1200),
  studioKriya: unsplash("photo-1481487196290-c152efe083f5", 1200),
  ternakMandiri: unsplash("photo-1454165804606-c3d57bc86b40", 1200),
  balaiPelatihan: unsplash("photo-1522202176988-66273c2fd55f", 1200),
};

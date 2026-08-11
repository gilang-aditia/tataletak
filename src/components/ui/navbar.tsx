import Link from "next/link";

import { brand, navLinks } from "@/lib/site";

const linkClass =
  "px-4 py-1.5 rounded-full border border-white/30 text-white text-xs font-semibold hover:bg-white/10 transition-colors whitespace-nowrap";

export const Navbar = () => {
  return (
    <header className="relative z-20 w-full">
      <nav className="flex items-center justify-between px-6 py-6 md:px-10 md:py-8 max-w-[1440px] mx-auto w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1" aria-label={`${brand.name} — beranda`}>
          <span className="bg-white text-black font-black tracking-tight text-xs md:text-sm px-3 py-1.5 rounded-2xl rounded-bl-sm relative shadow-sm">
            {brand.first}
            <span className="absolute -bottom-1.5 left-0 w-3 h-3 bg-white" style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}></span>
          </span>
          <span className="bg-[#CCFF00] text-black font-black text-xs md:text-sm px-3 py-1.5 rounded-full border-[1.5px] border-white shadow-sm">
            {brand.second}
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/kontak"
          className="px-4 md:px-6 py-2 rounded-full border border-white text-white text-xs md:text-sm font-semibold hover:bg-white hover:text-[#0038FF] transition-colors whitespace-nowrap"
        >
          Konsultasi gratis
        </Link>
      </nav>

      {/* Menu mobile: baris yang bisa digeser, tanpa JS sama sekali. */}
      <div className="md:hidden flex items-center gap-2 overflow-x-auto px-6 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className={linkClass}>
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
};

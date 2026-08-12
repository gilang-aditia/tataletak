"use client";

import React, { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

/*
 * Mockup ponsel bergaya WhatsApp. Diadaptasi dari Great UI (MIT) — lihat catatan
 * di bawah berkas. Perubahan terhadap sumber aslinya:
 * - impor dari "motion/react", bukan "framer-motion" (paket yang dipakai proyek ini)
 * - urutan autoplay dibuat generik supaya jumlah pesan bebas, bukan dipatok 5
 * - varian `dark:` dihapus: rangka halaman di layout.tsx selalu biru, jadi ponsel
 *   yang ikut gelap sendirian akan terlihat seperti kecelakaan
 * - varian `xs:` dihapus (Tailwind v4 tidak punya breakpoint itu secara bawaan)
 * - <img> diganti next/image agar lolos aturan lint proyek
 */

const DoubleCheckIcon = ({ className = "h-3.5 w-3.5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.045 0.584961L11.9883 1.52829L5.85833 7.65829L2.55833 4.35829L3.50167 3.41496L5.85833 5.77163L11.045 0.584961ZM14.345 0.584961L15.2883 1.52829L9.15833 7.65829L8.215 6.71496L14.345 0.584961ZM9.15833 9.54496L5.85833 6.24496L6.80167 5.30163L9.15833 7.65829L14.345 2.47163L15.2883 3.41496L9.15833 9.54496Z" />
  </svg>
);

const PhoneCallIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const VideoCallIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polygon points="23 7 16 12 23 17 23 7" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
);

const ArrowLeftIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const MoreVerticalIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="5" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="12" cy="19" r="2" />
  </svg>
);

const PaperclipIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
  </svg>
);

const CameraIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

const MicrophoneIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </svg>
);

const EmojiIcon = ({ className = "h-4.5 w-4.5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth={3} />
    <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth={3} />
  </svg>
);

const subscribeToNothing = () => () => {};

/**
 * false saat render di server dan pada render hidrasi pertama, true setelahnya.
 * useReducedMotion() bernilai null di server tapi sudah boolean saat hidrasi, jadi
 * tanpa gerbang ini markup awal klien bisa berbeda dari server (khususnya bagi
 * pengguna prefers-reduced-motion) dan memicu hydration mismatch.
 */
const useIsHydrated = () =>
  useSyncExternalStore(
    subscribeToNothing,
    () => true,
    () => false,
  );

export interface ChatMessage {
  id: number;
  /** true = gelembung hijau di kanan (pengunjung), false = balasan di kiri. */
  isCurrentUser: boolean;
  timestamp: string;
  text?: string;
  imageUrl?: string;
  imageAlt?: string;
  imageCaption?: string;
}

/* Jeda autoplay, dalam milidetik. */
const TYPING_MS = 1400; // lama indikator "sedang mengetik" sebelum balasan muncul
const READ_MS = 1100; // jeda antar pesan supaya sempat terbaca
const HOLD_MS = 3200; // tahan percakapan penuh sebelum diulang dari awal

export interface MobileMockupProps {
  headerTitle?: string;
  headerSubtitle?: string;
  avatarUrl?: string;
  avatarFallback?: string;
  messages: ChatMessage[];
  autoPlay?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function MobileMockup({
  headerTitle = "Tata Letak",
  headerSubtitle = "online",
  avatarUrl,
  avatarFallback = "TL",
  messages,
  autoPlay = true,
  className,
  children,
}: MobileMockupProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [frameIndex, setFrameIndex] = useState(0);

  const isHydrated = useIsHydrated();

  /* Sebelum hidrasi percakapan tampil utuh — itu juga yang dilihat pembaca
     tanpa JavaScript. Animasi baru mengambil alih setelah komponen hidup. */
  const isAnimated = autoPlay && !children && !prefersReducedMotion && isHydrated;

  /* Percakapan dipecah jadi deretan frame — berapa pesan yang terlihat, apakah
     indikator mengetik tampil, dan berapa lama frame itu ditahan. Dibangun dari
     daftar pesan (bukan indeks tetap) supaya panjang percakapan bebas diubah. */
  const timeline = useMemo(() => {
    const frames = [{ count: 0, typing: false, hold: 600 }];

    messages.forEach((msg, index) => {
      // Balasan lawan bicara didahului indikator mengetik.
      if (!msg.isCurrentUser) {
        frames.push({ count: index, typing: true, hold: TYPING_MS });
      }
      frames.push({ count: index + 1, typing: false, hold: READ_MS });
    });

    // Percakapan penuh ditahan lebih lama sebelum diputar ulang dari awal.
    frames[frames.length - 1].hold = HOLD_MS;
    return frames;
  }, [messages]);

  const frame = timeline[frameIndex] ?? timeline[0];

  /* frameIndex wajib jadi dependency: dua frame berurutan bisa punya `hold`
     yang sama, jadi bersandar pada nilai hold saja membuat effect tidak
     dijalankan ulang dan animasi berhenti di tengah jalan. */
  useEffect(() => {
    if (!isAnimated) return;

    const { hold } = timeline[frameIndex] ?? timeline[0];
    const id = setTimeout(
      () => setFrameIndex((prev) => (prev + 1) % timeline.length),
      hold,
    );
    return () => clearTimeout(id);
  }, [isAnimated, timeline, frameIndex]);

  const displayMessages = isAnimated ? messages.slice(0, frame.count) : messages;
  const showTyping = isAnimated && frame.typing;

  /* Kolom pesan memakai justify-end; saat isinya melebihi tinggi layar ponsel,
     browser tidak ikut menggulir sendiri, jadi digulir manual ke pesan terbaru. */
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [displayMessages, showTyping]);


  return (
    <div
      className={cn(
        "relative mx-auto flex w-full max-w-[245px] select-none items-center justify-center py-2 sm:max-w-[285px]",
        className,
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.94, rotate: -1.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ y: -6, rotate: 0.5, transition: { duration: 0.25 } }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        className="relative flex h-[490px] w-full transform-gpu flex-col overflow-hidden rounded-[40px] bg-neutral-900 p-2.5 shadow-2xl sm:h-[560px]"
      >
        {/* Tombol fisik di sisi rangka. */}
        <div className="absolute -left-[5px] top-24 h-8 w-[2.5px] rounded-l-xs bg-neutral-700" />
        <div className="absolute -left-[5px] top-36 h-10 w-[2.5px] rounded-l-xs bg-neutral-700" />
        <div className="absolute -left-[5px] top-48 h-10 w-[2.5px] rounded-l-xs bg-neutral-700" />
        <div className="absolute -right-[5px] top-32 h-14 w-[2.5px] rounded-r-xs bg-neutral-700" />

        <div className="relative isolate flex h-full w-full transform-gpu flex-col overflow-hidden rounded-[30px] bg-[#efeae2] text-neutral-900">
          {/* Bilah status */}
          <div className="z-30 flex shrink-0 items-center justify-between bg-[#008069] px-4 pb-1 pt-2 text-[11px] font-semibold text-white">
            <span className="w-10 text-left font-bold tracking-tight">10:13</span>

            <div className="flex items-center justify-end gap-1.5 text-white">
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="16" width="3.5" height="5" rx="0.5" />
                <rect x="7.5" y="12" width="3.5" height="9" rx="0.5" />
                <rect x="13" y="8" width="3.5" height="13" rx="0.5" />
                <rect x="18.5" y="4" width="3.5" height="17" rx="0.5" />
              </svg>
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
              <svg className="h-2.5 w-4" fill="none" viewBox="0 0 24 14" stroke="currentColor" strokeWidth={2}>
                <rect x="1" y="1" width="18" height="12" rx="3" />
                <rect x="3" y="3" width="11" height="8" rx="1.5" fill="currentColor" />
                <path d="M21 4v6" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Bilah percakapan */}
          <div className="z-20 flex shrink-0 items-center justify-between bg-[#008069] px-3 py-1.5 text-white">
            <div className="flex items-center gap-1.5">
              <span className="text-white/90">
                <ArrowLeftIcon />
              </span>

              <div className="relative flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#0038FF] text-[10px] font-black text-[#CCFF00]">
                {avatarUrl ? (
                  <Image src={avatarUrl} alt="" fill sizes="28px" className="object-cover" />
                ) : (
                  <span>{avatarFallback}</span>
                )}
              </div>

              <div className="flex min-w-0 flex-col">
                <span className="max-w-[110px] truncate text-[11.5px] font-semibold leading-tight text-white">
                  {headerTitle}
                </span>
                <span className="mt-0.5 text-[9.5px] font-medium leading-none text-emerald-200">
                  {headerSubtitle}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-white/90">
              <VideoCallIcon className="h-3.5 w-3.5" />
              <PhoneCallIcon className="h-3.5 w-3.5" />
              <MoreVerticalIcon className="h-3.5 w-3.5" />
            </div>
          </div>

          {/* Isi percakapan */}
          <div className="relative flex min-h-0 flex-1 flex-col justify-end overflow-hidden bg-[#efeae2] p-2.5">
            {children ? (
              <div className="relative z-10 h-full w-full overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {children}
              </div>
            ) : (
              <>
                <div className="relative z-10 mx-auto mb-1.5 rounded-full bg-white/90 px-2.5 py-0.5 text-[9px] font-medium text-neutral-600">
                  Hari ini
                </div>

                <div
                  ref={scrollRef}
                  className="relative z-10 flex flex-1 flex-col justify-end space-y-1.5 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  <AnimatePresence mode="sync">
                    {displayMessages.map((msg) => (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        className={cn("flex flex-col", msg.isCurrentUser ? "items-end" : "items-start")}
                      >
                        <div
                          className={cn(
                            "relative flex max-w-[85%] flex-col rounded-xl px-2.5 py-1 text-[11px]",
                            msg.isCurrentUser
                              ? "rounded-tr-none bg-[#dcf8c6] text-neutral-900"
                              : "rounded-tl-none bg-white text-neutral-900",
                          )}
                        >
                          {msg.imageUrl ? (
                            <div className="flex min-w-[150px] flex-col gap-1">
                              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
                                <Image
                                  src={msg.imageUrl}
                                  alt={msg.imageAlt ?? ""}
                                  fill
                                  sizes="150px"
                                  className="object-cover"
                                />
                              </div>
                              {msg.imageCaption && (
                                <p className="mt-0.5 px-0.5 text-[10.5px] leading-tight">{msg.imageCaption}</p>
                              )}
                            </div>
                          ) : (
                            <p className="text-[11px] leading-tight">{msg.text}</p>
                          )}

                          <div className="mt-0.5 flex items-center justify-end gap-1 self-end">
                            <span
                              className={cn(
                                "text-[8.5px]",
                                msg.isCurrentUser ? "text-emerald-800/70" : "text-neutral-400",
                              )}
                            >
                              {msg.timestamp}
                            </span>
                            {msg.isCurrentUser && <DoubleCheckIcon className="h-3 w-3 text-[#34b7f1]" />}
                          </div>
                        </div>
                      </motion.div>
                    ))}

                    {showTyping && (
                      <motion.div
                        key="typing"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-start"
                      >
                        <div className="flex items-center gap-1.5 rounded-xl rounded-tl-none bg-white px-3 py-2">
                          <span className="text-[10px] font-semibold text-emerald-600">mengetik</span>
                          <div className="flex items-center gap-1">
                            {[0, 1, 2].map((dotIndex) => (
                              <motion.span
                                key={dotIndex}
                                className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                                animate={{ y: [0, -3, 0], opacity: [0.4, 1, 0.4] }}
                                transition={{ duration: 0.6, repeat: Infinity, delay: dotIndex * 0.15 }}
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </>
            )}
          </div>

          {/* Kolom ketik */}
          <div className="z-20 flex shrink-0 items-center gap-1.5 bg-[#f0f2f5] p-2">
            <span className="p-1 text-neutral-600">
              <EmojiIcon />
            </span>
            <div className="flex flex-1 items-center justify-between rounded-full bg-white px-3 py-1.5 text-xs text-neutral-400">
              <span className="truncate">Ketik pesan</span>
              <div className="flex items-center gap-2 text-neutral-400">
                <PaperclipIcon />
                <CameraIcon />
              </div>
            </div>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#00a884] text-white">
              <MicrophoneIcon />
            </span>
          </div>

          <div className="flex shrink-0 justify-center bg-[#f0f2f5] pb-1.5 pt-0.5">
            <div className="h-1 w-24 rounded-full bg-neutral-400" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default MobileMockup;

/**
 * Great UI Component — https://great-ui.com · https://github.com/Saurabh-2607/GreatUI
 * Author: Saurabh Sharma. Released under the MIT License.
 */

import { BookingSim } from "@/components/ui/booking-sim";
import { ClosingCta } from "@/components/ui/closing-cta";
import { Features } from "@/components/ui/features";
import { Hero } from "@/components/ui/hero";
import { Marquee } from "@/components/ui/marquee";
import { Proof } from "@/components/ui/proof";

export default function Page() {
  return (
    <>
      <Hero />
      <Marquee />
      <BookingSim />
      <Features />
      <Proof />
      <ClosingCta />
    </>
  );
}

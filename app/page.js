import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";

import bgGrid from "@/app/components/Hero/bg-grid.png";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-black text-white overflow-hidden">

      {/* ⭐ FIXED Background Grid — NOT stretched, stays at top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none opacity-[0.18] brightness-500 mix-blend-screen">

        <Image
          src={bgGrid}
          alt="grid background"

          /* ❌ Removed fill (it was stretching the image) */
          /* ❌ Removed object-cover (it distorted image) */

          width={1920}
          height={900}

          className="
            w-full 
            h-auto 
            object-top      /* stick to the top */
            object-contain  /* keep original proportions */
            select-none
          "
          priority
        />
      </div>

      {/* Page Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>

    </main>
  );
}

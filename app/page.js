import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";

import bgGrid from "@/app/components/Hero/bg-grid.png";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-black text-white overflow-hidden">

      {/* GLOBAL Background Grid */}
      <div className="absolute inset-0 opacity-[0.18] brightness-300 mix-blend-screen pointer-events-none">

        <Image
          src={bgGrid}
          alt="grid background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>

    </main>
  );
}

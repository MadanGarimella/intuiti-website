"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full py-4 px-6 md:px-14 flex items-center justify-between bg-[#0b0b0b]">

      {/* LEFT AREA — LOGO + TITLE */}
      <div className="flex items-center gap-3">

        {/* FIXED LOGO — NEVER SHRINKS */}
        <div className="min-w-[70px] min-h-[70px] md:min-w-[80px] md:min-h-[80px] relative">
          <Image
            src="/logo2.png"
            alt="Intuiti Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* TEXT TITLE */}
        <div className="leading-tight text-white font-serif">
          <h1 className="text-lg md:text-xl">Intuiti</h1>
          <h2 className="text-lg md:text-xl text-red-500">
            Corporates<span className="text-red-500">.</span>
          </h2>
        </div>
      </div>

      {/* CENTER MENU — HIDDEN ON MOBILE */}
      <div className="hidden md:flex items-center gap-12 bg-white shadow-md rounded-full px-6 py-3 font-serif">
        <a href="#" className="text-gray-800 hover:text-black text-md transition">Services</a>
        <a href="#" className="text-gray-800 hover:text-black text-md transition">Our Work</a>
        <a href="#" className="text-gray-800 hover:text-black text-md transition">FAQ’s</a>
        <a href="#" className="text-gray-800 hover:text-black text-md transition">Contact</a>
      </div>

      {/* CTA BUTTON — HIDDEN ON MOBILE */}
      <button className="hidden md:flex bg-black text-white rounded-full px-6 py-2 text-md items-center gap-3 hover:bg-gray-900 transition font-serif">
        Book a Call 
        <span className="text-2xl">→</span>
      </button>

      {/* MOBILE HAMBURGER */}
      <button
        className="md:hidden text-white text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black text-white py-6 px-6 flex flex-col gap-6 text-md font-serif md:hidden border-t border-gray-800">
          <a href="#" className="hover:text-red-400">Services</a>
          <a href="#" className="hover:text-red-400">Our Work</a>
          <a href="#" className="hover:text-red-400">FAQ’s</a>
          <a href="#" className="hover:text-red-400">Contact</a>
          <button className="bg-white text-black rounded-full px-6 py-3 w-max">
            Book a Call →
          </button>
        </div>
      )}
    </nav>
  );
}

"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-0 left-0 w-full 
        py-4 px-6 md:px-14 
        flex items-center justify-between 
        bg-transparent
        z-50
      "
    >
      {/* LEFT AREA — LOGO + TITLE */}
      <div className="flex items-center gap-3">
        <div className="min-w-[70px] min-h-[70px] md:min-w-[80px] md:min-h-[80px] relative">
          <Image
            src="/logo2.png"
            alt="Intuiti Logo"
            fill
            className="object-contain"
          />
        </div>

        <div className="leading-tight text-white font-serif">
          <h1 className="text-lg md:text-xl">Intuiti</h1>
          <h2 className="text-lg md:text-xl text-red-500">
            Corporates<span className="text-red-500">.</span>
          </h2>
        </div>
      </div>

      {/* CENTER MENU */}
      <div className="hidden md:flex items-center gap-12 bg-white shadow-md rounded-full px-6 py-3 font-serif">
        <a href="#" className="text-gray-800 hover:text-black text-md transition">
          Services
        </a>
        <a href="#" className="text-gray-800 hover:text-black text-md transition">
          Our Work
        </a>
        <a href="#" className="text-gray-800 hover:text-black text-md transition">
          FAQ’s
        </a>
        <a href="#" className="text-gray-800 hover:text-black text-md transition">
          Contact
        </a>
      </div>

      {/* CTA BUTTON */}
      <button
        className="
          hidden md:flex relative overflow-hidden
          bg-black text-white rounded-full px-6 py-2 text-md
          items-center gap-3 font-serif
          transition-all duration-300
          group
        "
      >
        <span
          className="
            absolute inset-0 bg-gradient-to-r from-red-600 to-red-400
            translate-x-[-100%] group-hover:translate-x-0
            transition-transform duration-500 ease-out
            blur-md opacity-70
          "
        ></span>

        <span
          className="
            absolute inset-0 bg-gradient-to-r from-black to-red-600
            translate-x-[-100%] group-hover:translate-x-0
            transition-transform duration-500 ease-out
          "
        ></span>

        <span className="relative z-10 flex items-center gap-3">
          Book a Call <span className="text-2xl">→</span>
        </span>
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
        <div className="absolute top-20 left-0 w-full bg-black/80 backdrop-blur-md text-red-500 py-6 px-6 flex flex-col gap-6 text-md font-serif md:hidden">
          <a href="#" className="hover:text-red-400">
            Services
          </a>
          <a href="#" className="hover:text-red-400">
            Our Work
          </a>
          <a href="#" className="hover:text-red-400">
            FAQ’s
          </a>
          <a href="#" className="hover:text-red-400">
            Contact
          </a>
          <button className="bg-white text-black rounded-full px-6 py-3 w-max">
            Book a Call →
          </button>
        </div>
      )}
    </nav>
  );
}

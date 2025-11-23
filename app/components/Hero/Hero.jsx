"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import meta from "@/assets/images/meta.png";
import googleAds from "@/assets/images/google-ads.png";
import linkedin from "@/assets/images/linkedin.png";

import leftQuote from "@/assets/images/quote-left.png";
import rightQuote from "@/assets/images/quote-right.png";

export default function Hero() {
  return (
    <section
      className="
        relative w-full min-h-[90vh]
        flex flex-col items-center justify-start
        text-white pb-20 pt-10
      "
    >
      {/* LEFT QUOTE */}
      {/* <div className="absolute top-50 right-255 w-64 rotate-[-10deg] opacity-95 pointer-events-none">
        <motion.div
        initial={{ opacity: 0, y: 0, scale: 0.1 }}
          animate={{ opacity: 1, y: 8, scale: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        >
            <Image src={leftQuote} alt="Left Quote" className="w-full h-auto" />
        </motion.div>
        
      </div> */}

      {/* RIGHT QUOTE */}
      {/* <div className="absolute top-100 left-260 w-64 rotate-[10deg] opacity-95 pointer-events-none">
        <motion.div
        initial={{ opacity: 0, y: 0, scale: 0.1 }}
          animate={{ opacity: 1, y: 8, scale: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        >
        <Image src={rightQuote} alt="Right Quote" className="w-full h-auto" />
        </motion.div>
        
        
      </div> */}

      {/* ICON ARC (animated) */}
      <div className="relative flex items-center justify-center gap-16 mt-10 mb-6">

        {/* ---------------------------------------------------------- */}
        {/* 1) CENTER ICON — CHANGE POSITION HERE                     */}
        {/* ---------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 0, scale: 0.1 }}
          animate={{ opacity: 1, y: 8, scale: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          
          /* 🔥 EDIT THESE VALUES (Ex: translate-x-[20px], translate-y-[-10px]) */
          className="translate-x-[-120px] translate-y-[300px]"
        >
          <Image
            src={googleAds}
            alt="Google Ads"
            width={110}
            height={110}
            className="object-contain opacity-95"
          />
        </motion.div>

        {/* ---------------------------------------------------------- */}
        {/* 2) LEFT ICON — CHANGE POSITION HERE                       */}
        {/* ---------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, x: 0, y: 0, scale: 0.1 }}
          animate={{ opacity: 1, x: -50, y: 10, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.85, ease: "easeOut" }}

          /* 🔥 EDIT THESE VALUES */
          className="translate-x-[-20px] translate-y-[30px]"
        >
          <Image
            src={meta}
            alt="Meta"
            width={130}
            height={130}
            className="object-contain opacity-90"
          />
        </motion.div>

        {/* ---------------------------------------------------------- */}
        {/* 3) RIGHT ICON — CHANGE POSITION HERE                      */}
        {/* ---------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, x: 0, y: 0, scale: 0.1 }}
          animate={{ opacity: 1, x: 60, y: 12, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.85, ease: "easeOut" }}
          
          /* 🔥 EDIT THESE VALUES */
          className="translate-x-[120px] translate-y-[120px]"
        >
          <Image
            src={linkedin}
            alt="LinkedIn"
            width={130}
            height={130}
            className="object-contain opacity-90"
          />
        </motion.div>

      </div>

      {/* MAIN HEADING */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          text-xl md:text-5xl font-semibold 
          leading-tight text-center max-w-2xl font-serif
        "
      >
        We Build Brands That <br />
        Break Through the Noise.
      </motion.h1>

      {/* SUBHEADING */}
      <motion.p
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        className="
          mt-4 text-lg md:text-xl opacity-85
          max-w-2xl mx-auto text-center leading-relaxed font-serif
        "
      >
        Performance-driven solutions designed to <br />Attract, Convert, and Retain
        customers.
      </motion.p>

      {/* CTA BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
        className="mt-8"
      >
        <button
          className="
            px-10 py-4 bg-white text-black rounded-full
            text-lg font-medium shadow-[0_0_35px_rgba(255,255,255,0.25)]
            hover:shadow-[0_0_45px_rgba(255,255,255,0.35)]
            transition-all duration-300 font-serif
          "
        >
          Book a 30-Min Call
        </button>
      </motion.div>
    </section>
  );
}

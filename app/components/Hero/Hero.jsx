"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import meta from "@/assets/images/meta.png";
import googleAds from "@/assets/images/google-ads.png";
import linkedin from "@/assets/images/linkedin.png";

import leftQuote from "@/assets/images/quote-left.png";
import rightQuote from "@/assets/images/quote-right.png";

import teamGraphic from "@/assets/images/team-graphic.png";
import spotlight from "@/assets/images/spotlight.png"; // ✅ FIXED — correct import

export default function Hero() {
  const items = [
    "Performance Marketing",
    "Brand Awareness",
    "End-to-End Content Creation",
    "Social Media Marketing",
    "Web Design & Development",
  ];

  return (
    <>
      {/* ----------------------------- */}
      {/*         HERO SECTION          */}
      {/* ----------------------------- */}

      <section
        className="
          relative w-full min-h-[90vh]
          flex flex-col items-center justify-start
          text-white pb-20 pt-10
        "
      >
        {/* ICON ARC */}
        <div className="relative flex items-center justify-center gap-16 mt-10 mb-6">
          {/* Center Icon – Google Ads */}
          <motion.div
            initial={{ opacity: 0, y: 0, scale: 0.1 }}
            animate={{ opacity: 1, y: 8, scale: 1 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            className="translate-x-[-120px] translate-y-[300px]"
          >
            <Image
              src={googleAds}
              alt="Google Ads"
              width={90}
              height={90}
              className="object-contain opacity-95"
            />
          </motion.div>

          {/* Left Icon – Meta */}
          <motion.div
            initial={{ opacity: 0, x: 0, y: 0, scale: 0.1 }}
            animate={{ opacity: 1, x: -50, y: 10, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.85, ease: "easeOut" }}
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

          {/* Right Icon – LinkedIn */}
          <motion.div
            initial={{ opacity: 0, x: 0, y: 0, scale: 0.1 }}
            animate={{ opacity: 1, x: 60, y: 12, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.85, ease: "easeOut" }}
            className="translate-x-[180px] translate-y-[120px]"
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
            leading-tight text-center max-w-2xl font-serif translate-y-8
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
            max-w-2xl mx-auto text-center leading-relaxed font-serif translate-y-12
          "
        >
          Performance-driven solutions designed to <br />
          Attract, Convert, and Retain customers.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
          className="mt-8"
        >
          <button
            className="
              px-10 py-3 bg-white text-black rounded-full
              text-lg font-medium shadow-[0_0_35px_rgba(255,255,255,0.25)]
              hover:shadow-[0_0_45px_rgba(255,255,255,0.35)]
              transition-all duration-300 font-serif translate-y-15
            "
          >
            Book a 30-Min Call
          </button>
        </motion.div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/*            🔥 SECOND SECTION — ADDED BELOW                    */}
      {/* ------------------------------------------------------------- */}

      <section className="w-full flex flex-col items-center text-center pt-10 pb-10">
        {/* Top Mini Section */}
        <div className="max-w-xl px-6 mt-5 font-serif">
          <p className="text-xl md:text-4xl font-semibold">
            We Don’t Just Plan…
          </p>
          <p className="text-xl md:text-3xl font-semibold mt-1">
            We Get The Job Done.
          </p>

          <p className="text-md mt-4 leading-relaxed">
            At{" "}
            <span className="text-red-600 font-semibold">
              Intuiti Corporates
            </span>
            , we don’t just set visions; we ensure they reach the right audience
            and drive real-world impact. We provide a comprehensive ecosystem of
            services designed to scale your business.
          </p>

          <button
            className="
              mt-5 bg-black text-white text-lg px-5 py-2 rounded-full
              border border-white/20 hover:bg-red-600
              transition duration-300 flex items-center gap-2 mx-auto font-serif
            "
          >
            Our Services <span className="text-md">→</span>
          </button>
        </div>

        {/* ------------------------------ */}
        {/*  🔥 Expertise Section with BG  */}
        {/* ------------------------------ */}

        <div className="relative w-full flex flex-col items-center mt-20">
          {/* BACKGROUND SPOTLIGHT */}
          <div className="absolute inset-0 w-full h-full opacity-40 pointer-events-none">
            <Image
              src={spotlight} // ✅ FIXED — now loads properly
              alt="Expertise Background"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Expertise Buttons */}
          <div className="relative z-10 w-full max-w-xl flex flex-col gap-4 font-serif">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Our Expertise
            </h2>

            {items.map((item, index) => (
              <button
                key={index}
                className="
                  relative overflow-hidden text-white
                  rounded-full py-3 text-md group font-serif
                "
              >
                {/* Glow */}
                <span
                  className="
                    absolute inset-0 bg-gradient-to-r from-red-600 to-red-400
                    translate-x-[-100%] group-hover:translate-x-0
                    transition-transform duration-500 ease-out blur-md opacity-70
                  "
                ></span>

                {/* Sliding Overlay */}
                <span
                  className="
                    absolute inset-0 bg-gradient-to-r from-black to-red-600
                    translate-x-[-100%] group-hover:translate-x-0
                    transition-transform duration-1000 ease-out
                  "
                ></span>

                <span className="relative z-10">{item}</span>
              </button>
            ))}
            {/* Contact Us */}
            <button
              className="
            mt-8 text-lg bg-black text-white px-6 py-2 rounded-full border
            hover:bg-red-600 transition duration-400
            flex items-center gap-2 mx-auto font-serif
          "
            >
              Contact Us <span className="text-md">→</span>
            </button>
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div
          className="
            mt-16 w-full max-w-4xl bg-[#191919] rounded-xl p-10
            flex flex-col md:flex-row items-center gap-10
          "
        >
          <div className="flex-1 text-left font-serif">
            <p className="text-xl opacity-70 mb-2">
              Are you Ready to Bring your <br />
              <span className="text-red-600 font-semibold">
                Vision on Board?
              </span>
              <br />
              Contact Intuiti Corporates Today!
            </p>

            <p className="text-[15px] leading-relaxed opacity-70 mt-6">
              At{" "}
              <span className="text-red-600 font-semibold">
                Intuiti Corporates
              </span>
              , we don’t just craft stories; we ensure they reach the right
              audience and drive real-world impact.
            </p>
          </div>

          {/* FINAL IMAGE FIXED */}
          <div className="flex-1 flex justify-center">
            <Image
              src={teamGraphic}
              alt="Team illustration"
              width={320}
              height={280}
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
}

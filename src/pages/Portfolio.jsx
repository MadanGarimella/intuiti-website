import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ================= Animated Counter ================= */

const AnimatedNumber = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate(latest) {
          setDisplay(Number(latest.toFixed(1)));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

/* ================= Fade Animation ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Portfolio = () => {
  return (
    <div className="bg-white text-black overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center px-6 md:px-20 bg-black text-white overflow-hidden">

        <h2 className="absolute top-20 left-0 text-[120px] md:text-[220px] font-extrabold text-transparent stroke-text-white opacity-10 pointer-events-none">
          PORTFOLIO
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-6xl"
        >
          <p className="uppercase tracking-widest text-sm text-gray-400 mb-6">
            Selected Work
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            Real Brands. <br />
            Real Performance. <br />
            Real Growth.
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl">
            We engineer scalable revenue systems across industries.
          </p>
        </motion.div>
      </section>

      {/* ================= F&B SECTION ================= */}
      <section className="relative py-40 px-6 md:px-20 bg-[#f8f8f8] overflow-hidden">

        <h2 className="absolute top-10 left-0 text-[140px] md:text-[220px] font-extrabold text-transparent stroke-text opacity-5 pointer-events-none">
          F&B
        </h2>

        <div className="relative z-10 max-w-7xl mx-auto space-y-32">

          {/* Epicure */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="group flex flex-col md:flex-row gap-16 items-center"
          >
            {/* 🔥 Styled Image */}
            <div className="md:w-1/2 flex justify-center">
              <div className="relative p-10 transition-all duration-500">
                <img
                  src="/epicure.png"
                  alt="Epicure"
                  className="w-full max-w-[320px] object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold mb-4">
                Epicure – The Cafe Bites
              </h3>

              <p className="text-gray-600 mb-10">
                Hyper-local Meta campaigns driving footfall and customer acquisition.
              </p>

              <div className="flex gap-12">
                <div>
                  <p className="text-3xl font-bold">
                    <AnimatedNumber value={3.2} suffix="x" />
                  </p>
                  <span className="text-gray-500 text-sm">ROAS</span>
                </div>
                <div>
                  <p className="text-3xl font-bold">
                    <AnimatedNumber value={8} suffix="K+" />
                  </p>
                  <span className="text-gray-500 text-sm">Leads</span>
                </div>
                <div>
                  <p className="text-3xl font-bold">
                    <AnimatedNumber value={200} suffix="K" />
                  </p>
                  <span className="text-gray-500 text-sm">Reach</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Smaakenzzo */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="group flex flex-col md:flex-row-reverse gap-16 items-center"
          >
            <div className="md:w-1/2 flex justify-center">
              <div className="relative p-10 transition-all duration-500">
                <img
                  src="/smaakenzzo.png"
                  alt="Smaakenzzo"
                  className="w-full max-w-[320px] object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold mb-4 text-[#f181c7] font-serif">
                Smaakenzzo
              </h3>

              <p className="text-gray-600 mb-10">
                Performance-focused creatives and acquisition funnels.
              </p>

              <div className="flex gap-12">
                <div>
                  <p className="text-3xl font-bold">
                    <AnimatedNumber value={3.8} suffix="x" />
                  </p>
                  <span className="text-gray-500 text-sm">ROAS</span>
                </div>
                <div>
                  <p className="text-3xl font-bold">
                    <AnimatedNumber value={9} suffix="K+" />
                  </p>
                  <span className="text-gray-500 text-sm">Leads</span>
                </div>
                <div>
                  <p className="text-3xl font-bold">
                    <AnimatedNumber value={250} suffix="K" />
                  </p>
                  <span className="text-gray-500 text-sm">Reach</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= JEWELRY SECTION ================= */}
      <section className="relative py-40 px-6 md:px-20 bg-black text-white overflow-hidden">

        <h2 className="absolute top-10 left-0 text-[140px] md:text-[220px] font-extrabold text-transparent stroke-text-white opacity-10 pointer-events-none">
          JEWELRY
        </h2>

        <div className="relative z-10 max-w-7xl mx-auto">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="group flex flex-col md:flex-row gap-16 items-center"
          >
            <div className="md:w-1/2 flex justify-center">
              <div className="relative p-10 transition-all duration-500">
                <img
                  src="/Haraa.png"
                  alt="Haraa"
                  className="w-full max-w-[320px] object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold mb-4 text-[#FFD700] font-serif">
                Haraa Gold, Diamonds & Silver
              </h3>

              <p className="text-gray-300 mb-10">
                Luxury-focused campaigns targeting high-value buyers with precision funnels.
              </p>

              <div className="flex gap-12">
                <div>
                  <p className="text-3xl font-bold">
                    <AnimatedNumber value={4} suffix="x" />
                  </p>
                  <span className="text-gray-400 text-sm">ROAS</span>
                </div>
                <div>
                  <p className="text-3xl font-bold">
                    <AnimatedNumber value={7} suffix="K+" />
                  </p>
                  <span className="text-gray-400 text-sm">Leads</span>
                </div>
                <div>
                  <p className="text-3xl font-bold">
                    <AnimatedNumber value={240} suffix="K+" />
                  </p>
                  <span className="text-gray-400 text-sm">Reach</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default Portfolio;
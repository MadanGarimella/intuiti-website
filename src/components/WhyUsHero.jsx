import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const WhyUsHero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-20 bg-black text-white overflow-hidden">

      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay bg-[url('/noise.png')]" />

      {/* Outline Text */}
      <h2 className="absolute top-20 left-0 text-[120px] md:text-[220px] font-extrabold text-transparent stroke-text-white opacity-10 pointer-events-none">
        WHY US
      </h2>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl"
      >
        <p className="uppercase tracking-widest text-sm text-gray-400 mb-6">
          Our Advantage
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
          Strategy First. <br />
          Performance Always. <br />
          Growth That Compounds.
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl">
          We don’t run random campaigns. We design structured growth systems that scale predictably and profitably.
        </p>
      </motion.div>

      {/* Scroll Indicator */}
      {/* <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center items-start p-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div> */}

    </section>
  );
};

export default WhyUsHero;
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#1f120a] via-[#3a1d0f] to-[#813c1e] text-white overflow-hidden">

      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay bg-[url('/noise.png')]" />

      {/* Subtle Glow */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 top-0 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-3xl"
      />

      <div className="relative z-10 flex items-center min-h-screen mt-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="px-6 md:px-20 max-w-7xl"
        >

          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm mb-8"
          >
            🚀 Performance Marketing Experts
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8"
          >
            We Help Brands <br />
            Scale Revenue <br />
            With Performance Ads
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10"
          >
            From Meta Ads to Google Ads and high-converting creatives,
            we build scalable growth systems for ambitious businesses.
          </motion.p>

          <motion.div variants={fadeUp} className="flex gap-6 flex-wrap">

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-orange-500 hover:bg-orange-600 text-black px-8 py-4 rounded-full font-semibold transition"
            >
              Book a Call →
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="border border-white/30 px-8 py-4 rounded-full hover:bg-white/10 transition"
            >
              See Our Work
            </motion.button>

          </motion.div>

        </motion.div>
      </div>

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

export default Hero;
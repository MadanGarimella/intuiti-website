import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-screen bg-[#0B0B0B] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/20 blur-3xl rounded-full opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 py-20 flex flex-col lg:flex-row items-center gap-16 min-h-screen">

        {/* LEFT CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1"
        >
          {/* Social Proof */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm mb-6 border border-white/10"
          >
            🚀 Trusted by 10+ Brands 
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-2xl md:text-4xl font-semibold leading-tight mb-6"
          >
            We Help Brands <br />
            Scale Revenue <br />
            With Performance Marketing
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="text-gray-400 text-lg md:text-lg max-w-xl mb-10"
          >
            We build high-converting ad systems using Meta, Google, and
            creative strategies that actually drive revenue — not just clicks.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              onClick={() => navigate("/contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-orange-500 hover:bg-orange-600 text-black px-8 py-4 rounded-full font-semibold transition"
            >
              Book a Call →
            </motion.button>

            <motion.button
              onClick={() => navigate("/portfolio")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="border border-white/20 px-8 py-4 rounded-full hover:bg-white/10 transition"
            >
              See Our Work
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 w-full"
        >
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] rounded-2xl backdrop-blur-md flex items-center justify-center overflow-hidden">
            
            {/* Placeholder Content */}
            <p className="text-gray-500 text-sm">
              Product Video / Dashboard Preview
            </p>

            {/* Optional: Add Image */}
            <img 
              src="/image.jpeg" 
              alt="Product Preview" 
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
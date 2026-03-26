import {
  Megaphone,
  BarChart3,
  Search,
  Palette,
  PenTool,
  TrendingUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";

const benefits = [
  {
    title: "Increase Revenue, Not Just Traffic",
    description:
      "We focus on ROI-driven campaigns that directly impact your bottom line.",
    icon: TrendingUp,
    size: "large",
  },
  {
    title: "High-Converting Ad Systems",
    description:
      "Meta & Google ads engineered to consistently generate leads and sales.",
    icon: Megaphone,
  },
  {
    title: "Stronger Brand Authority",
    description:
      "Build a premium, trustworthy presence across all digital platforms.",
    icon: Palette,
  },
  {
    title: "Consistent Content Engine",
    description:
      "Content systems that attract, engage, and convert your ideal audience.",
    icon: PenTool,
  },
  {
    title: "Data-Driven Growth Decisions",
    description:
      "Every move backed by analytics, not guesswork.",
    icon: BarChart3,
  },
  {
    title: "Dominate Search Rankings",
    description:
      "SEO strategies that bring long-term, compounding organic growth.",
    icon: Search,
    size: "wide",
  },
];

const ServicesGrid = () => {
  const navigate = useNavigate();

  return (
    <section className="py-28 bg-[#0B0B0B] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-20">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
            What You Actually Get
          </h2>
          <p className="text-gray-400 text-lg">
            We don’t just offer services — we build systems that drive real,
            measurable growth for your business.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px] md:auto-rows-[240px]">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            const cardRef = useRef(null);

            let sizeClass = "md:col-span-1 md:row-span-1";

            switch (item.size) {
              case "large":
                sizeClass = "md:col-span-2 md:row-span-2";
                break;
              case "wide":
                sizeClass = "md:col-span-2 md:row-span-1";
                break;
              case "tall":
                sizeClass = "md:col-span-1 md:row-span-2";
                break;
            }

            const handleMouseMove = (e) => {
              const rect = cardRef.current.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              cardRef.current.style.setProperty("--x", `${x}px`);
              cardRef.current.style.setProperty("--y", `${y}px`);
            };

            return (
              <motion.div
                key={index}
                ref={cardRef}
                onMouseMove={handleMouseMove}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`
                  ${sizeClass}
                  group relative
                  rounded-2xl
                  p-6 md:p-7
                  border border-white/10
                  bg-gradient-to-br from-white/[0.06] to-white/[0.02]
                  backdrop-blur-xl
                  overflow-hidden
                  transition-all duration-300
                  hover:border-orange-500/40
                `}
              >
                {/* Cursor Glow */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
                  style={{
                    background: `radial-gradient(600px circle at var(--x) var(--y), rgba(249,115,22,0.15), transparent 40%)`,
                  }}
                />

                {/* Parallax Content */}
                <motion.div
                  className="relative z-10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <Icon
                    className="mb-4 text-orange-400"
                    size={item.size === "large" ? 34 : 26}
                  />

                  <h3
                    className={`font-semibold mb-3 ${
                      item.size === "large"
                        ? "text-2xl md:text-3xl"
                        : "text-lg"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-gray-400 ${
                      item.size === "large"
                        ? "text-base md:text-lg max-w-md"
                        : "text-sm"
                    }`}
                  >
                    {item.description}
                  </p>

                  {/* Extra for Large Card */}
                  {item.size === "large" && (
                    <div className="mt-4 text-orange-400 font-semibold text-sm">
                      {/* ₹2Cr+ Revenue Generated for Clients */}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20">
          <button
            onClick={() => navigate("/contact")}
            className="bg-orange-500 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
          >
            Let’s Build Your Growth System →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
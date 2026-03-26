import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "E-commerce Founder",
    content:
      "We scaled from ₹3L to ₹12L/month in just 90 days. The structure and execution are on another level.",
  },
  {
    name: "Ananya Gupta",
    role: "Beauty Brand Owner",
    content:
      "Finally found a team that understands performance marketing. Clear strategy, real results.",
  },
  {
    name: "Karthik Reddy",
    role: "Startup Founder",
    content:
      "Our ROAS improved by 3x within weeks. The system they built is predictable and scalable.",
  },
  {
    name: "Priya Mehta",
    role: "D2C Brand",
    content:
      "From creatives to funnels, everything just works together. Best decision we made.",
  },
];

const Testimonials = () => {
  const navigate = useNavigate();

  return (
    <section className="py-28 bg-[#0B0B0B] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-20">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Loved by People Worldwide
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Real results from real businesses. Our systems are built to scale —
            and our clients prove it.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            flex md:grid md:grid-cols-3 gap-6
            overflow-x-auto md:overflow-visible
            pb-4 md:pb-0
            no-scrollbar
          "
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="
                min-w-[300px] md:min-w-0
                bg-gradient-to-br from-white/[0.06] to-white/[0.02]
                border border-white/10
                rounded-2xl
                p-6
                backdrop-blur-xl
                relative
                hover:border-orange-500/40
                transition-all duration-300
              "
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4 text-orange-400">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                “{item.content}”
              </p>

              {/* User */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-semibold">
                  {item.name[0]}
                </div>

                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-gray-400">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button
            onClick={() => navigate("/contact")}
            className="bg-orange-500 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
          >
            Work With Us →
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
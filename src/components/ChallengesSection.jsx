import { Search, Settings, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Audit & Strategy",
    description:
      "We analyze your current marketing, identify gaps, and build a clear growth roadmap tailored to your business.",
    icon: Search,
  },
  {
    title: "Build & Launch",
    description:
      "We create high-converting campaigns, funnels, and creatives designed to generate consistent leads and sales.",
    icon: Settings,
  },
  {
    title: "Optimize & Scale",
    description:
      "We continuously optimize performance using data to scale revenue predictably and profitably.",
    icon: TrendingUp,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-28 bg-[#0B0B0B] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-20">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            How We Work
          </h2>

          <p className="text-gray-400 text-lg">
            A simple, proven 3-step system to turn your marketing into <br />a
            predictable revenue engine.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="
                  group
                  relative
                  rounded-2xl
                  p-8
                  border border-white/10
                  bg-gradient-to-br from-white/[0.06] to-white/[0.02]
                  backdrop-blur-xl
                  overflow-hidden
                  transition-all duration-300
                  hover:border-orange-500/40
                "
              >
                {/* Step Number */}
                <div className="absolute top-6 right-6 text-white/10 text-5xl font-bold">
                  0{index + 1}
                </div>

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-orange-500/10 to-transparent" />

                <div className="relative z-10">
                  <Icon className="mb-6 text-orange-400" size={30} />

                  <h3 className="text-xl font-semibold mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
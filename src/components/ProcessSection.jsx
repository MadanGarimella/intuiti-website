import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "₹15,000",
    highlight: false,
    features: [
      "1 Platform (Meta or Google Ads)",
      "Basic Funnel Setup",
      "Ad Creative Support",
      "Weekly Optimization",
      "Performance Reporting",
    ],
  },
  {
    name: "Growth",
    price: "₹30,000",
    highlight: true,
    features: [
      "Meta + Google Ads",
      "Full Funnel Strategy",
      "Advanced Creatives",
      "A/B Testing",
      "Conversion Optimization",
      "Weekly Reports + Insights",
    ],
  },
  {
    name: "Scale",
    price: "₹60,000",
    highlight: false,
    features: [
      "Multi-Platform Ads",
      "Full Growth System",
      "Creative Production",
      "Advanced Scaling Strategy",
      "Daily Optimization",
      "Dedicated Support",
    ],
  },
];

const PricingSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-28 bg-[#0B0B0B] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-20">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Pricing That Scales With You
          </h2>

          <p className="text-gray-400 text-lg">
            Choose a plan based on your growth stage. No hidden costs. Just
            structured systems designed to drive results.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`
                relative
                rounded-2xl
                p-8
                border
                backdrop-blur-xl
                transition-all duration-300
                ${
                  plan.highlight
                    ? "border-orange-500 bg-white/[0.08] scale-105 shadow-[0_0_40px_rgba(249,115,22,0.2)]"
                    : "border-white/10 bg-white/[0.04] hover:border-orange-500/40"
                }
              `}
            >
              {/* Most Popular Badge */}
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-black text-xs px-4 py-1 rounded-full font-semibold">
                  Most Popular
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-xl font-semibold mb-4">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="text-3xl font-bold mb-6">
                {plan.price}
                <span className="text-sm text-gray-400 font-medium">
                  {" "} /month
                </span>
              </div>

              {/* CTA */}
              <button
                onClick={() => navigate("/contact")}
                className={`
                  w-full mb-6 py-3 rounded-lg font-semibold transition
                  ${
                    plan.highlight
                      ? "bg-orange-500 text-black hover:scale-105"
                      : "bg-white/10 hover:bg-white/20"
                  }
                `}
              >
                Get Started →
              </button>

              {/* Features */}
              <ul className="space-y-3 text-sm text-gray-400">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-orange-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
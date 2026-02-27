import { BarChart3, Target, Layers, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Performance-Driven Strategy",
    description:
      "Every campaign is engineered with measurable KPIs and revenue-focused outcomes.",
    icon: BarChart3,
  },
  {
    title: "Full-Funnel Execution",
    description:
      "From awareness to conversion, we build scalable marketing systems that work together.",
    icon: Target,
  },
  {
    title: "Scalable Growth Systems",
    description:
      "Our frameworks are designed to grow with your business — not limit it.",
    icon: Layers,
  },
  {
    title: "Transparent Reporting",
    description:
      "Clear dashboards, real metrics, and actionable insights — no vanity numbers.",
    icon: ShieldCheck,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">

        {/* Section Header */}
        <p className="text-primary font-semibold mb-4">
          Why Choose Intuiti Coporates
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Built for brands that want
          <br className="hidden md:block" />
          predictable, scalable growth.
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          We combine performance marketing expertise with structured execution
          to deliver consistent results across industries.
        </p>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group bg-[#F7F7F7] rounded-3xl p-8 transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-2"
              >
                <div className="flex justify-center mb-6">
                  <Icon
                    size={36}
                    className="text-primary transition-colors duration-300 group-hover:text-primary"
                  />
                </div>

                <h4 className="text-lg font-semibold mb-4">
                  {feature.title}
                </h4>

                <p className="text-sm text-gray-600 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20">
          <Link
            to="/contact"
            className="inline-block bg-primary text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
          >
            Book Your Free Strategy Call →
          </Link>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
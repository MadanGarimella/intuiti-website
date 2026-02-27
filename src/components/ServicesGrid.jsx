import {
  Megaphone,
  BarChart3,
  Search,
  Palette,
  PenTool,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    title: "Meta & Google Ads",
    description:
      "High-converting paid ad campaigns engineered to generate measurable ROI and scalable growth.",
    icon: Megaphone,
  },
  {
    title: "Social Media Marketing",
    description:
      "Strategic content and paid promotions to build brand authority and drive engagement.",
    icon: BarChart3,
  },
  {
    title: "Search Engine Optimization",
    description:
      "Data-driven SEO strategies to increase visibility and dominate search rankings.",
    icon: Search,
  },
  {
    title: "Branding",
    description:
      "Build a powerful brand identity that resonates and differentiates in competitive markets.",
    icon: Palette,
  },
  {
    title: "Content Marketing",
    description:
      "Conversion-focused content systems that attract, nurture, and convert audiences.",
    icon: PenTool,
  },
  {
    title: "Performance Strategy",
    description:
      "Full-funnel marketing systems designed for sustainable and scalable business growth.",
    icon: TrendingUp,
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-24 bg-[#F7F7F7]">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Services
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Comprehensive digital marketing solutions tailored to elevate your
            online presence and accelerate sustainable growth.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="
                  group
                  bg-white
                  rounded-3xl
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:bg-black
                  hover:text-white
                  hover:-translate-y-2
                  cursor-pointer
                "
              >
                <Icon
                  size={32}
                  className="
                    mb-6
                    text-black
                    transition-colors
                    duration-300
                    group-hover:text-primary
                  "
                />

                <h3 className="text-xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 mb-6 transition-colors duration-300 group-hover:text-gray-300">
                  {service.description}
                </p>

                {/* <span className="text-sm font-semibold flex items-center gap-2 transition-colors duration-300 group-hover:text-primary">
                  Learn more →
                </span> */}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <button className="bg-primary text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition duration-300">
            Get Started
          </button>
        </div>

      </div>
    </section>
  );
};

export default ServicesGrid;
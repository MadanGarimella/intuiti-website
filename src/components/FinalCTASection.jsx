import { Link } from "react-router-dom";
import glowImage from "../assets/cta-glow.png";

const FinalCTASection = () => {
  return (
    
    <section className="relative pt-32 pb-20 overflow-hidden">

      {/* Background Image */}
      <img
        src={glowImage}
        alt="Glow background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative container mx-auto px-6 text-center text-white max-w-3xl">

        <h2 className="text-4xl md:text-4xl font-bold mb-6 leading-tight font-serif">
          Ready to build a predictable
          <br />
          growth engine?
        </h2>

        <p className="text-gray-300 text-lg mb-10">
          Let’s transform your marketing into a scalable,
          structured system designed for long-term results.
        </p>

        <Link
          to="/contact"
          className="inline-block bg-primary text-black px-10 py-5 rounded-full font-semibold text-lg hover:scale-105 transition duration-300"
        >
          Book Your Strategy Call →
        </Link>

        <p className="text-gray-400 text-sm mt-6">
          Free 30-minute consultation. No obligations.
        </p>

      </div>
    </section>
  );
};

export default FinalCTASection;
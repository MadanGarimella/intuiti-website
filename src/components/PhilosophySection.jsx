const FoundationsSection = () => {
  return (
    <section className="py-32 bg-[#F4F4F4]">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <h2 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-20">
          OUR FOUNDATIONS
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* 1 */}
          <div className="bg-white border border-gray-200 p-12 relative group hover:bg-black transition-all duration-500">
            <span className="absolute top-8 right-10 text-6xl font-bold text-gray-200 group-hover:text-gray-800 transition">
              1.
            </span>

            <h3 className="text-2xl font-bold mb-6 group-hover:text-white transition">
              Our Philosophy
            </h3>

            <p className="text-gray-600 leading-relaxed group-hover:text-gray-300 transition">
              Creativity without structure leads to inconsistency.
              We build marketing systems engineered for clarity,
              scalability, and measurable growth.
            </p>
          </div>

          {/* 2 */}
          <div className="bg-[#EAF1F7] p-12 relative group hover:bg-primary transition-all duration-500">
            <span className="absolute top-8 right-10 text-6xl font-bold text-gray-300 group-hover:text-white transition">
              2.
            </span>

            <h3 className="text-2xl font-bold mb-6 group-hover:text-white transition">
              Our Expertise
            </h3>

            <p className="text-gray-700 leading-relaxed group-hover:text-white transition">
              From strategic positioning and content ecosystems
              to performance marketing and conversion systems,
              we operate across the full digital growth stack.
            </p>
          </div>

          {/* 3 */}
          <div className="bg-primary p-12 relative group hover:scale-[1.02] transition-all duration-500">
            <span className="absolute top-8 right-10 text-6xl font-bold text-black/30">
              3.
            </span>

            <h3 className="text-2xl font-bold mb-6 text-black">
              Our Team
            </h3>

            <p className="text-black/80 leading-relaxed">
              Strategy, design, content, and performance —
              unified under one structure. Collaboration drives
              faster execution and stronger outcomes.
            </p>
          </div>

          {/* 4 */}
          <div className="bg-[#EDE8DF] p-12 relative group hover:bg-black transition-all duration-500">
            <span className="absolute top-8 right-10 text-6xl font-bold text-gray-400 group-hover:text-gray-700 transition">
              4.
            </span>

            <h3 className="text-2xl font-bold mb-6 group-hover:text-white transition">
              Our Story
            </h3>

            <p className="text-gray-700 leading-relaxed group-hover:text-gray-300 transition">
              Founded with a single principle —
              growth must be engineered, not improvised.
              Today, we help brands build scalable marketing systems
              designed for long-term dominance.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FoundationsSection;
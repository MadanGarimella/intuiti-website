const values = [
  "Clarity over complexity",
  "Data over assumptions",
  "Strategy before execution",
  "Performance over promises",
];

const ValuesSection = () => {
  return (
    <section className="py-24 bg-gray-300">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Section Heading */}
        <div className="mb-24">
          <h3 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Our Principles
          </h3>
          <div className="w-20 h-[2px] bg-black mt-6"></div>
        </div>

        {/* Vertical Line Wrapper */}
        <div className="relative">
          {/* Vertical Line */}
          {/* <div className="absolute left-6 top-0 h-full w-[1px] bg-gray-200"></div> */}

          {/* Values List */}
          <div className="space-y-24">
            {values.map((value, index) => (
              <div key={index} className="relative pl-20 group">

                {/* Number */}
                <div className="absolute left-0 text-6xl font-light text-gray-400 group-hover:text-black transition-colors duration-500">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <div>
                  <h4 className="text-xl md:text-2xl font-medium text-gray-900 group-hover:tracking-wide transition-all duration-300">
                    {value}
                  </h4>
                  <p className="mt-4 text-gray-500 max-w-lg">
                    We build with intention. Every decision aligns with measurable impact and long-term strategic clarity.
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ValuesSection;
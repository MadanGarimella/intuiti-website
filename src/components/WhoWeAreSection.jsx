const WhoWeAreSection = () => {
  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Built for brands that want predictable growth.
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            We specialize in transforming marketing from scattered
            efforts into structured performance engines.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our approach combines strategic planning, data-driven
            execution, and continuous optimization to deliver
            measurable results — not vanity metrics.
          </p>
        </div>

        <div className="bg-[#F4F4F4] p-10 rounded-3xl">
          <h4 className="text-xl font-semibold mb-4 text-primary">
            What We Believe
          </h4>

          <ul className="space-y-4 text-gray-700">
            <li>• Growth should be systematic.</li>
            <li>• Strategy comes before execution.</li>
            <li>• Data drives decisions.</li>
            <li>• Performance matters more than promises.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default WhoWeAreSection;
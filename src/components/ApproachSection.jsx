const ApproachSection = () => {
  return (
    <section className="py-40 bg-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">

        <div>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            Structured. Strategic. Scalable.
          </h3>

          <p className="text-gray-600 text-lg leading-relaxed">
            Our framework begins with deep research,
            followed by strategic architecture and
            disciplined execution — all tracked through
            performance metrics that matter.
          </p>
        </div>

        <div className="space-y-8">
          <div className="border-l-2 border-primary pl-6">
            <h4 className="font-semibold mb-2">01 — Research</h4>
            <p className="text-gray-600">
              Market positioning & competitor mapping.
            </p>
          </div>

          <div className="border-l-2 border-primary pl-6">
            <h4 className="font-semibold mb-2">02 — Architecture</h4>
            <p className="text-gray-600">
              Funnel systems & campaign structure.
            </p>
          </div>

          <div className="border-l-2 border-primary pl-6">
            <h4 className="font-semibold mb-2">03 — Optimization</h4>
            <p className="text-gray-600">
              Continuous performance scaling.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ApproachSection;
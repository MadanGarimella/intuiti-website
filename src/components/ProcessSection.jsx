import { useEffect, useRef, useState } from "react";

const steps = [
  {
    title: "Discovery & Audit",
    items: [
      "Market & competitor analysis",
      "Positioning evaluation",
      "Performance audit",
    ],
  },
  {
    title: "Strategy & Architecture",
    items: [
      "Funnel structure design",
      "Channel selection",
      "Conversion strategy",
    ],
  },
  {
    title: "Launch & Optimization",
    items: [
      "Campaign deployment",
      "A/B testing",
      "Performance tracking",
    ],
  },
  {
    title: "Scale & Automation",
    items: [
      "Budget scaling",
      "Process automation",
      "Growth reporting",
    ],
  },
];

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [lineProgress, setLineProgress] = useState(0);
  const containerRef = useRef(null);
  const stepRefs = useRef([]);

  /* ============================
     INTERSECTION OBSERVER
  ============================ */

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveStep(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* ============================
     LINE DRAW ANIMATION
  ============================ */

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress =
        (windowHeight - rect.top) / (rect.height + windowHeight);

      const clamped = Math.min(Math.max(progress, 0), 1);
      setLineProgress(clamped);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-24 bg-[#F4F4F4]" ref={containerRef}>
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-xs mb-4">
            Our Process
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-2xl">
            A structured system engineered for growth.
          </h2>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* Background Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-300" />

          {/* Animated Drawing Line */}
          <div
            className="hidden md:block absolute left-1/2 top-0 w-[2px] bg-primary transition-all duration-300 ease-out"
            style={{
              height: `${lineProgress * 100}%`,
            }}
          />

          {steps.map((step, index) => {
            const isActive = index <= activeStep;

            return (
              <div
                key={index}
                data-index={index}
                ref={(el) => (stepRefs.current[index] = el)}
                className={`relative md:flex items-center mb-16 ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >

                {/* CARD */}
                <div
                  className={`md:w-5/12 p-6 rounded-2xl shadow-sm transition-all duration-700 ${
                    isActive
                      ? "bg-white opacity-100 translate-y-0"
                      : "bg-white opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <h4 className="text-lg font-semibold mb-4">
                    {step.title}
                  </h4>

                  <ul className="space-y-2 text-sm text-gray-600">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span
                          className={`w-2 h-2 mt-2 rounded-full transition ${
                            isActive
                              ? "bg-primary"
                              : "bg-gray-300"
                          }`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* NUMBER CIRCLE */}
                <div
                  className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full items-center justify-center text-sm font-semibold transition-all duration-500 ${
                    isActive
                      ? "bg-primary text-white border-2 border-primary shadow-[0_0_15px_rgba(255,107,0,0.6)]"
                      : "bg-white border-2 border-gray-300 text-gray-500"
                  }`}
                >
                  {index + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
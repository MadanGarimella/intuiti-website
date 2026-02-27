import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 1, suffix: "+", label: "Years of experience" },
  { value: 5, suffix: "+", label: "Team members" },
  { value: 10, suffix: "+", label: "Clients worldwide" },
];

const StatsSection = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateNumbers();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateNumbers = () => {
    stats.forEach((stat, index) => {
      let start = 0;
      const duration = 1500;
      const increment = stat.value / (duration / 16);

      const counter = setInterval(() => {
        start += increment;

        if (start >= stat.value) {
          start = stat.value;
          clearInterval(counter);
        }

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = Math.floor(start);
          return updated;
        });
      }, 16);
    });
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-white text-center"
    >
      <div className="container mx-auto px-6 max-w-4xl">

        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Meet Intuiti
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed mb-20">
          We are strategists, analysts, and performance marketers focused on
          building structured systems that help brands scale with clarity
          and confidence.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-5xl md:text-6xl font-bold text-black">
                {counts[index]}
                {stat.suffix}
              </div>

              <p className="text-gray-500 mt-4 text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
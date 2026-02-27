import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to see results?",
    answer:
      "Most campaigns begin generating measurable insights within 30 days. Significant scaling typically occurs between 60–90 days depending on industry and budget.",
  },
  {
    question: "Do you require long-term contracts?",
    answer:
      "We focus on performance and partnership. While we recommend a minimum engagement period for optimization, we prioritize results over rigid contracts.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We work with startups, e-commerce brands, professional services, and growth-focused businesses looking for structured marketing systems.",
  },
  {
    question: "How do you measure performance?",
    answer:
      "We track KPIs tied directly to revenue — ROAS, CPA, lead quality, and conversion rates — not vanity metrics.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-28 bg-[#F8F8F8]">
      <div className="container mx-auto px-6 max-w-3xl">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-xs mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Common Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className="font-medium text-lg">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? "max-h-40 px-6 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
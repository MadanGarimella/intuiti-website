import { Check, X } from "lucide-react";

const rows = [
  {
    label: "Cost",
    intuiti: "Fair, transparent",
    other: "Variable / project-based",
  },
  {
    label: "Expertise",
    intuiti: "Senior talent, diverse skills",
    other: "Varies by team",
  },
  {
    label: "Turnaround",
    intuiti: "Fast, reliable",
    other: "Often slower",
  },
  {
    label: "Flexibility",
    intuiti: "Scale anytime",
    other: "Contract-based",
  },
  {
    label: "Client Focus",
    intuiti: "Dedicated growth partner",
    other: "Multiple clients at once",
  },
  {
    label: "Support",
    intuiti: "Customer Retention",
    other: "Often ends at delivery",
  },
];

const ComparisonSection = () => {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-widest text-sm mb-4">
            The Comparison
          </p>

          <h2 className="text-4xl font-bold">
            Intuiti Corporates vs Typical Agencies
          </h2>
        </div>

        {/* Table */}
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-gray-200">

          {/* Head Row */}
          <div className="grid grid-cols-3 bg-[#F8F8F8] p-6 font-semibold text-lg">
            <div></div>
            <div className="text-center text-primary">
              Intuiti Corporates
            </div>
            <div className="text-center text-gray-600">
              Other Agencies
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-3 p-6 border-t border-gray-100 items-center"
            >
              <div className="font-medium">{row.label}</div>

              <div className="flex items-center justify-center gap-2 text-black">
                <Check size={18} className="text-primary" />
                <span>{row.intuiti}</span>
              </div>

              <div className="flex items-center justify-center gap-2 text-gray-600">
                <X size={18} className="text-gray-400" />
                <span>{row.other}</span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ComparisonSection;
import { TrendingDown, DollarSign, BarChart, Users, Target, AlertCircle } from "lucide-react";

const challenges = [
  {
    title: "Inconsistent Lead Flow",
    description:
      "Unpredictable marketing results that make revenue forecasting difficult.",
    icon: TrendingDown,
  },
  {
    title: "High Ad Spend, Low ROI",
    description:
      "Budget is spent without structured optimization or measurable returns.",
    icon: DollarSign,
  },
  {
    title: "Weak Conversion Funnels",
    description:
      "Traffic without strategy leads to lost opportunities and poor sales performance.",
    icon: Target,
  },
  {
    title: "Lack of Data Clarity",
    description:
      "Decisions are made on assumptions instead of actionable analytics.",
    icon: BarChart,
  },
  {
    title: "Poor Brand Positioning",
    description:
      "Unclear messaging makes it hard to stand out in competitive markets.",
    icon: Users,
  },
  {
    title: "Scaling Challenges",
    description:
      "Growth plateaus because systems are not built for long-term expansion.",
    icon: AlertCircle,
  },
];

const ChallengesSection = () => {
  return (
    <section className="bg-[#F8F8F8] mb-10 mt-14 py-10">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-primary uppercase tracking-widest text-sm mb-4">
            The Market Reality
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            The Challenges Modern
            <br className="hidden md:block" />
            Businesses Face
          </h2>

          <p className="text-gray-600 text-lg">
            Growth today requires more than random campaigns. Without structure,
            businesses struggle to scale predictably.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((item, index) => {
            const Icon = item.icon;

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
                  hover:shadow-lg
                  hover:-translate-y-2
                "
              >
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition">
                  <Icon className="text-primary" size={28} />
                </div>

                <h4 className="text-xl font-semibold mb-4">
                  {item.title}
                </h4>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ChallengesSection;
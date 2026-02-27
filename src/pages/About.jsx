import PhilosophySection from "../components/PhilosophySection";
import ApproachSection from "../components/ApproachSection";
import ValuesSection from "../components/ValuesSection";
import FinalCTASection from "../components/FinalCTASection";
import StatsSection from "../components/StatsSection";
import AboutHero from "../components/AboutUsHero";

const About = () => {
  return (
    <>
      {/* Hero */}
      <AboutHero />
      <StatsSection />

      {/* Philosophy */}
      <PhilosophySection />

      {/* Approach */}
      <ApproachSection />
      

      {/* Core Values */}
      <ValuesSection />

      {/* Final CTA */}
      <FinalCTASection />
    </>
  );
};

export default About;
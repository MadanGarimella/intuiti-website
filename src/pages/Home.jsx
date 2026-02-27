import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import ChallengesSection from "../components/ChallengesSection";
import ProcessSection from "../components/ProcessSection";

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <ChallengesSection />
      <ProcessSection />
      <WhyChooseUs />
    </>
  );
};

export default Home;
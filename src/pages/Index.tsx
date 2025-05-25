import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import WorksSection from "@/components/sections/WorksSection";
import FeaturesSection from "@/components/sections/FeaturesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <WorksSection />
      <FeaturesSection />
    </div>
  );
};

export default Index;

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import InstallSection from "@/components/InstallSection";
import GuideSection from "@/components/GuideSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <OverviewSection />
      <InstallSection />
      <GuideSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Index;

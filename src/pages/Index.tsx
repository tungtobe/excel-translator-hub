import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainPointSection from "@/components/PainPointSection";
import OverviewSection from "@/components/OverviewSection";
import InstallSection from "@/components/InstallSection";
import GuideSection from "@/components/GuideSection";
import FaqSection from "@/components/FaqSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PainPointSection />
      <OverviewSection />
      <InstallSection />
      <GuideSection />
      <FaqSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;

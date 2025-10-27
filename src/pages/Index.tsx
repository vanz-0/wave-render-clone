import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BundlesSection } from "@/components/BundlesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { SocialCTA } from "@/components/SocialCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <BundlesSection />
        <BenefitsSection />
        <SocialCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

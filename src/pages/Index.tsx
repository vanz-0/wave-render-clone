import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BundlesSection } from "@/components/BundlesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { SocialCTA } from "@/components/SocialCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <BundlesSection />
        <SocialCTA />
        <BenefitsSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

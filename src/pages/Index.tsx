import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BundlesSection } from "@/components/BundlesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { SocialCTA } from "@/components/SocialCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ReviewsDisplay } from "@/components/ReviewsDisplay";
import { ReviewPrompt } from "@/components/ReviewPrompt";
import { MobileBackButton } from "@/components/MobileBackButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <BundlesSection />
        <ReviewsDisplay />
        <SocialCTA />
        <BenefitsSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ReviewPrompt />
      <MobileBackButton />
    </div>
  );
};

export default Index;

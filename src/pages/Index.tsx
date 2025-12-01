import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BundlesSection } from "@/components/BundlesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { SocialCTA } from "@/components/SocialCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ReviewsDisplay } from "@/components/ReviewsDisplay";
import { ReviewPrompt } from "@/components/ReviewPrompt";
import { SnowfallEffect } from "@/components/SnowfallEffect";
import { HolidayPopup } from "@/components/HolidayPopup";

const Index = () => {
  return (
    <div className="flex flex-col bg-background text-foreground relative">
      <SnowfallEffect />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <BundlesSection />
        <ReviewsDisplay />
        <SocialCTA />
        <BenefitsSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ReviewPrompt />
      <HolidayPopup />
    </div>
  );
};

export default Index;

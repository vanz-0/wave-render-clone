import { Button } from "./ui/button";
import { Check, Gift, ArrowRight } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Wave Pattern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-purple-950/20">
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 Q 25 30, 50 50 T 100 50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-purple-500"/>
              <path d="M0 70 Q 25 50, 50 70 T 100 70" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-pink-500"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-pattern)" />
        </svg>
      </div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold animate-pulse-glow">
            <Gift className="h-4 w-4" />
            BLACK FRIDAY EXCLUSIVE
            <Gift className="h-4 w-4" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Save Big on Authentic
            </span>
            <br />
            <span className="text-foreground">Beauty & Wellness Bundles</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Premium Garnier, Dove & Safari Cosmetics bundles delivered across Nairobi
          </p>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            <Gift className="mr-2 h-5 w-5" />
            UP TO 71% OFF + FREE DELIVERY
            <Gift className="ml-2 h-5 w-5" />
          </Button>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 text-sm pt-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Check className="h-4 w-4 text-green-500" />
              <span>Valid Zone 1 & 2 Nairobi</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Check className="h-4 w-4 text-green-500" />
              <span>Authentic Products Guaranteed</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Check className="h-4 w-4 text-green-500" />
              <span>Same-Day Dispatch</span>
            </div>
          </div>

          {/* Countdown Timer */}
          <CountdownTimer />
        </div>
      </div>
    </section>
  );
};

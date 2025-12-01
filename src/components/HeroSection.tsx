import { Button } from "./ui/button";
import { Check, Gift, ArrowRight } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";
export const HeroSection = () => {
  return <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Starry Night Sky Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="stars" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="hsl(45 93% 47%)" className="animate-twinkle" />
              <circle cx="80" cy="60" r="1.5" fill="white" className="animate-twinkle" style={{ animationDelay: '0.5s' }} />
              <circle cx="140" cy="40" r="1" fill="hsl(45 93% 47%)" className="animate-twinkle" style={{ animationDelay: '1s' }} />
              <circle cx="60" cy="120" r="2" fill="white" className="animate-twinkle" style={{ animationDelay: '1.5s' }} />
              <circle cx="180" cy="140" r="1" fill="hsl(45 93% 47%)" className="animate-twinkle" style={{ animationDelay: '2s' }} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stars)" />
        </svg>
      </div>

      {/* Christmas Tree Silhouettes */}
      <div className="absolute bottom-0 left-0 w-32 h-40 opacity-10">
        <svg viewBox="0 0 100 120" fill="hsl(120 61% 34%)">
          <path d="M50 10 L65 35 L55 35 L70 60 L60 60 L75 85 L25 85 L40 60 L30 60 L45 35 L35 35 Z" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-40 h-48 opacity-10">
        <svg viewBox="0 0 100 120" fill="hsl(120 61% 34%)">
          <path d="M50 10 L65 35 L55 35 L70 60 L60 60 L75 85 L25 85 L40 60 L30 60 L45 35 L35 35 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <a href="#bundles" className="inline-flex items-center gap-2 bg-gradient-to-r from-primary via-secondary to-accent text-white px-6 py-2.5 rounded-full text-sm font-semibold animate-pulse-glow hover:scale-105 transition-transform duration-300 cursor-pointer">
            <span className="animate-twinkle">🎄</span>
            HOLIDAY EXCLUSIVE
            <span className="animate-twinkle">🎁</span>
          </a>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Celebrate the Season with
            </span>
            <br />
            <span className="text-foreground">Authentic Beauty & Wellness Bundles</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">Gift premium beauty essentials from trusted brands like Garnier, Dove & Nivea - wrapped with love & delivered across Nairobi</p>

          {/* CTA Button */}
          <a href="https://chat.whatsapp.com/YOUR_GROUP_LINK" target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto max-w-md mx-auto">
            <Button size="lg" className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-white px-4 py-4 md:px-8 md:py-6 text-sm md:text-lg rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-accent/50 transition-all duration-500 hover:scale-105 group relative overflow-hidden">
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
              <span className="relative flex items-center justify-center gap-2 md:gap-3">
                <span className="text-2xl group-hover:rotate-12 transition-transform duration-500">🎁</span>
                <span className="text-center leading-tight">Get Your Holiday Deals</span>
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-500" />
              </span>
            </Button>
          </a>

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
    </section>;
};
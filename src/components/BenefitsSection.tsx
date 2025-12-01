import { Card, CardContent } from "./ui/card";
import { Truck, Gift, Sparkles, Diamond } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Truck,
      title: "FREE Nairobi Delivery",
      description: "Zone 1 & 2",
      color: "text-primary"
    },
    {
      icon: Gift,
      title: "🎁 Holiday Gift Wrapping",
      description: "Luxury presentation ready",
      color: "text-secondary"
    },
    {
      icon: Sparkles,
      title: "Bonus Beauty Samples",
      description: "Test new products risk-free",
      color: "text-accent"
    },
    {
      icon: Diamond,
      title: "5% Loyalty Points",
      description: "Join our community",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Gold sparkle background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/10" />
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent rounded-full blur-3xl opacity-10 animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-primary rounded-full blur-3xl opacity-10 animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-card/80 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-300 hover:scale-105 animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Decorative snowflakes in corners */}
              <div className="absolute top-2 right-2 text-accent/20 animate-twinkle">❄️</div>
              <CardContent className="p-6 text-center space-y-3">
                <div className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center ${benefit.color}`}>
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

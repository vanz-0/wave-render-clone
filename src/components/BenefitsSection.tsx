import { Card, CardContent } from "./ui/card";
import { Truck, Gift, Sparkles, Diamond } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Truck,
      title: "FREE Nairobi Delivery",
      description: "Zone 1 & 2",
      color: "text-orange-500"
    },
    {
      icon: Gift,
      title: "Premium Gift Packaging",
      description: "Luxury presentation ready",
      color: "text-pink-500"
    },
    {
      icon: Sparkles,
      title: "Bonus Beauty Samples",
      description: "Test new products risk-free",
      color: "text-purple-500"
    },
    {
      icon: Diamond,
      title: "5% Loyalty Points",
      description: "Join our community",
      color: "text-blue-500"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-950/20 via-background to-pink-950/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-pink-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-card/80 backdrop-blur-sm border-border hover:border-purple-500/50 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center space-y-3">
                <div className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center ${benefit.color}`}>
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

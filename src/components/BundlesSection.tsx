import { BundleCard } from "./BundleCard";
import bigSaleBundle from "@/assets/big-sale-bundle.png";
import glamGlowBundle from "@/assets/glam-glow-bundle.png";
import confidenceBundle from "@/assets/confidence-bundle.png";
import { Sparkles } from "lucide-react";

export const BundlesSection = () => {
  const bundles = [
    {
      title: "Big Sale Beauty Essentials",
      description: "Complete skincare routine with DR.DESS premium products",
      image: bigSaleBundle,
      badge: "THIS WEEK ONLY",
      perfectFor: [
        "Daily skincare routine",
        "Anti-aging & hydration",
        "All skin types"
      ],
      whatsInside: [
        "DR.DESS Collagen Body Lotion (300ml)",
        "Aloe Vera Gel (300g)",
        "Acnes Clean Mousse (150ml)",
        "+ 2 more items"
      ],
      regularPrice: "Ksh 4,500",
      salePrice: "Ksh 2,000",
      savings: "Ksh 2,500 (56% OFF!)",
      stock: "Only 8 left in stock!",
      rating: 5
    },
    {
      title: "Glam & Glow Makeup Kit",
      description: "Complete makeup collection for stunning looks",
      image: glamGlowBundle,
      badge: "SALE ON NOW!!!",
      perfectFor: [
        "Makeup enthusiasts",
        "Special occasions",
        "Creating bold looks"
      ],
      whatsInside: [
        "False Eyelash Extension Kit",
        "Matte Liquid Lipstick (Red)",
        "Waterproof Mascara",
        "+ 3 more items"
      ],
      regularPrice: "Ksh 3,500",
      salePrice: "Ksh 1,000",
      savings: "Ksh 2,500 (71% OFF!)",
      stock: "Only 12 left in stock!",
      rating: 5
    },
    {
      title: "Confidence Builder Set",
      description: "Natural everyday makeup essentials",
      image: confidenceBundle,
      badge: "SALE ON NOW!!!",
      perfectFor: [
        "Natural everyday looks",
        "Contouring beginners",
        "Multi-use products"
      ],
      whatsInside: [
        "FIT Eyeshadow Palette (Neutrals)",
        "Liquid Concealer (Full Coverage)",
        "Contour Powder Palette",
        "+ 3 more items"
      ],
      regularPrice: "Ksh 3,200",
      salePrice: "Ksh 1,000",
      savings: "Ksh 2,200 (69% OFF!)",
      stock: "Only 15 left in stock!",
      rating: 5
    }
  ];

  return (
    <section className="py-16 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/5 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 text-purple-600 dark:text-pink-400 mb-4">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Limited Time Offers</span>
            <Sparkles className="h-5 w-5" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Black Friday Bundle Bonanza
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete routines that save you money & simplify your wellness journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bundles.map((bundle, index) => (
            <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              <BundleCard {...bundle} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

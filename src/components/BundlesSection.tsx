import { useState, useEffect } from "react";
import { BundleCard } from "./BundleCard";
import { EmailCollectionForm } from "./EmailCollectionForm";
import { ReviewPrompt } from "./ReviewPrompt";
import bigSaleBundle from "@/assets/big-sale-bundle.png";
import glamGlowBundle from "@/assets/glam-glow-bundle.png";
import confidenceBundle from "@/assets/confidence-bundle.png";
import { Sparkles } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export const BundlesSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

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
    <section id="bundles" className="py-16 px-4 relative">
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

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >
          <CarouselContent className="-ml-4 transition-transform duration-500 ease-out">
            {bundles.map((bundle, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 animate-fade-in">
                <BundleCard {...bundle} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 md:-left-4 h-10 w-10 rounded-md border-2 border-border bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg disabled:opacity-30" />
          <CarouselNext className="right-0 md:-right-4 h-10 w-10 rounded-md border-2 border-border bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg disabled:opacity-30" />
        </Carousel>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current 
                  ? "w-8 bg-gradient-to-r from-pink-600 to-purple-600" 
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-16 space-y-12">
          <EmailCollectionForm />
          <ReviewPrompt />
        </div>
      </div>
    </section>
  );
};

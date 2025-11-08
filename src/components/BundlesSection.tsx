import { useState, useEffect } from "react";
import { BundleCard } from "./BundleCard";
import { EmailCollectionForm } from "./EmailCollectionForm";
import { ReviewPrompt } from "./ReviewPrompt";
import bigSaleBundle from "@/assets/big-sale-bundle.png";
import glamGlowBundle from "@/assets/glam-glow-bundle.png";
import confidenceBundle from "@/assets/confidence-bundle.png";
import perfumeBundle from "@/assets/perfume-bundle.png";
import communityBundle from "@/assets/community-bundle.png";
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
      rating: 5,
      isPurchasable: true
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
      rating: 5,
      isPurchasable: true
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
      rating: 5,
      isPurchasable: true
    },
    {
      title: "Luxury Perfume Collection",
      description: "Premium fragrances at 30% OFF - prices vary by selection",
      image: perfumeBundle,
      badge: "30% OFF",
      perfectFor: [
        "Gift giving",
        "Signature scents",
        "Long-lasting fragrances"
      ],
      whatsInside: [
        "Eau de Parfum (100ml)",
        "Body Mist (200ml)",
        "Perfume Travel Set",
        "+ 2 more items"
      ],
      regularPrice: "Starting from Ksh 2,000",
      salePrice: "30% OFF",
      savings: "Save 30% on every perfume",
      stock: "Limited Stock",
      rating: 5,
      isPurchasable: false
    },
    {
      title: "Community VIP Bundle",
      description: "Join our community for exclusive perks & up to 50% off",
      image: communityBundle,
      badge: "FIRST 100 ONLY",
      perfectFor: [
        "Early access to new products",
        "Exclusive member discounts",
        "Community events & giveaways"
      ],
      whatsInside: [
        "Follow us on social media",
        "Join our WhatsApp community",
        "Leave a verified review",
        "Get up to 50% OFF on future orders"
      ],
      regularPrice: "N/A",
      salePrice: "FREE",
      savings: "Up to 50% on all future orders!",
      stock: "Only 100 spots available!",
      rating: 5,
      isPurchasable: false
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
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent drop-shadow-2xl animate-pulse-slow">
              BLACK FRIDAY
            </span>
            <br />
            <span className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Bundle Bonanza
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium">
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

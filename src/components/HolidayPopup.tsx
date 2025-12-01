import { useState, useEffect } from "react";
import { X, Gift, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent } from "./ui/dialog";

export const HolidayPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("holidayPopupSeen");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("holidayPopupSeen", "true");
  };

  const handleShopNow = () => {
    handleClose();
    document.getElementById("bundles")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden border-2 border-accent">
        <div className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 rounded-full bg-background/80 p-2 hover:bg-background transition-colors"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 text-6xl opacity-20 animate-twinkle">❄️</div>
          <div className="absolute top-4 right-20 text-4xl opacity-20 animate-twinkle" style={{ animationDelay: '1s' }}>⭐</div>
          <div className="absolute bottom-4 left-8 text-5xl opacity-20 animate-twinkle" style={{ animationDelay: '2s' }}>🎄</div>

          <div className="p-8 text-center space-y-6 relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse-glow">
              <Sparkles className="h-4 w-4" />
              HOLIDAY SEASON EXCLUSIVE
              <Sparkles className="h-4 w-4" />
            </div>

            {/* Main content */}
            <div className="space-y-3">
              <div className="text-5xl animate-gentle-bounce">🎁</div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Celebrate the Season with Us!
              </h2>
              <p className="text-lg text-muted-foreground">
                Unwrap amazing deals on premium beauty & wellness bundles
              </p>
            </div>

            {/* Offers */}
            <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-4 space-y-2">
              <div className="flex items-center justify-center gap-2 text-foreground font-semibold">
                <Gift className="h-5 w-5 text-primary" />
                <span>Up to 71% OFF Holiday Bundles</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-foreground font-semibold">
                <Gift className="h-5 w-5 text-secondary" />
                <span>FREE Nairobi Delivery</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-foreground font-semibold">
                <Gift className="h-5 w-5 text-accent" />
                <span>Premium Gift Wrapping Available</span>
              </div>
            </div>

            {/* CTA */}
            <Button
              onClick={handleShopNow}
              size="lg"
              className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-white text-lg py-6 rounded-xl"
            >
              <Gift className="mr-2 h-5 w-5" />
              Shop Holiday Deals Now
            </Button>

            <p className="text-xs text-muted-foreground">
              Limited time offers • While stocks last
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

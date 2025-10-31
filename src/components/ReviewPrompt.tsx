import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Star, Gift } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ReviewPrompt = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [review, setReview] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      toast({
        title: "Please add a rating",
        description: "Select stars to rate your experience.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      toast({
        title: "Thank You! 🎁",
        description: "Your review helps us serve you better. Check your email for an exclusive discount code!",
      });
      setRating(0);
      setReview("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-600/10 via-purple-600/10 to-pink-600/10 p-8 md:p-12 border border-pink-200 dark:border-pink-800">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-600/5 to-purple-600/5" />
      
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 text-pink-600 dark:text-purple-400 mb-4">
          <Gift className="h-6 w-6" />
          <span className="text-sm font-semibold uppercase tracking-wider">Reward for Your Feedback</span>
          <Gift className="h-6 w-6" />
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Love Our Deals? Tell Us!
          </span>
        </h3>
        
        <p className="text-lg text-muted-foreground mb-6">
          Share your experience and unlock an exclusive <span className="font-bold text-pink-600 dark:text-pink-400">20% discount code</span> for your next purchase!
        </p>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              size="lg"
              className="h-14 px-10 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold text-lg"
            >
              Leave a Review & Get 20% OFF
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="text-2xl">Share Your Experience</DialogTitle>
              <DialogDescription>
                Rate our products and service. Your feedback helps us improve!
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Rating</label>
                <div className="flex gap-2 justify-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        className={`h-10 w-10 ${
                          star <= (hoveredRating || rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="review" className="text-sm font-medium">
                  Your Review (Optional)
                </label>
                <Textarea
                  id="review"
                  placeholder="Tell us about your experience with our products..."
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || rating === 0}
                className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
              >
                {isSubmitting ? "Submitting..." : "Submit Review & Get Discount"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>

        <div className="flex items-center justify-center gap-1 mt-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="ml-2 text-sm text-muted-foreground">
            Trusted by 1,000+ happy customers
          </span>
        </div>
      </div>
    </div>
  );
};

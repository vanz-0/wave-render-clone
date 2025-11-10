import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "./ui/button";
import { Star, X } from "lucide-react";

export const ReviewPrompt = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    checkIfShouldPrompt();
  }, []);

  const checkIfShouldPrompt = async () => {
    // Check localStorage first to avoid annoying users
    const hasBeenPrompted = localStorage.getItem('reviewPrompted');
    if (hasBeenPrompted) return;

    // Check if user has interacted with us (in orders or subscribers)
    const email = localStorage.getItem('userEmail');
    if (!email) return;

    try {
      // Check if they've already left a review
      const { data: existingReview } = await supabase
        .from('reviews')
        .select('id')
        .eq('email', email)
        .single();

      if (existingReview) {
        localStorage.setItem('reviewPrompted', 'true');
        return;
      }

      // Check if they're in our database (orders or subscribers)
      const [ordersResult, subscribersResult] = await Promise.all([
        supabase.from('orders').select('id').eq('customer_email', email).single(),
        supabase.from('email_subscribers').select('id').eq('email', email).single(),
      ]);

      if (ordersResult.data || subscribersResult.data) {
        setUserEmail(email);
        setShowPrompt(true);
      }
    } catch (error) {
      console.error('Error checking review status:', error);
    }
  };

  const handleClose = () => {
    setShowPrompt(false);
    localStorage.setItem('reviewPrompted', 'true');
  };

  const handleReviewClick = () => {
    const reviewSection = document.getElementById('review-section');
    if (reviewSection) {
      reviewSection.scrollIntoView({ behavior: 'smooth' });
      handleClose();
    }
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-20 right-4 z-40 max-w-sm">
      <div className="bg-gradient-to-br from-purple-600/95 to-pink-600/95 backdrop-blur-sm text-white p-6 rounded-2xl shadow-2xl animate-slide-in-right">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-white/80 hover:text-white"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="space-y-4">
          <div className="flex gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Love our deals?</h3>
            <p className="text-sm text-white/90">
              Share your experience and help others discover amazing beauty essentials! Plus, get exclusive rewards.
            </p>
          </div>

          <Button
            onClick={handleReviewClick}
            className="w-full bg-white text-purple-600 hover:bg-white/90"
          >
            Leave a Review & Get 20% OFF
          </Button>
        </div>
      </div>
    </div>
  );
};

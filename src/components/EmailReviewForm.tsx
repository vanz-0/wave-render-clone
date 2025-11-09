import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Star, Sparkles, Gift } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  rating: z.number().min(1, "Please select a rating").max(5),
  review: z.string().trim().max(1000, "Review must be less than 1000 characters").optional(),
});

export const EmailReviewForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [review, setReview] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const result = formSchema.safeParse({
      name,
      email,
      rating,
      review: review || undefined,
    });

    if (!result.success) {
      const firstError = result.error.errors[0];
      toast({
        title: "Validation Error",
        description: firstError.message,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Submit email subscriber
      const { error: emailError } = await supabase
        .from('email_subscribers')
        .insert([{ email }]);

      if (emailError && emailError.code !== '23505') {
        throw emailError;
      }

      // Submit review
      const { error: reviewError } = await supabase
        .from('reviews')
        .insert([{ 
          name,
          email,
          rating,
          review_text: review || null
        }]);

      if (reviewError) {
        throw reviewError;
      }

      // Send welcome email
      await supabase.functions.invoke('send-welcome-email', {
        body: { email }
      });

      toast({
        title: "Success! 🎉",
        description: "You're subscribed and your review is submitted! Check your email for exclusive deals and a 20% discount code.",
      });
      
      // Reset form
      setName("");
      setEmail("");
      setRating(0);
      setReview("");
    } catch (error) {
      console.error('Error submitting:', error);
      toast({
        title: "Error",
        description: "Failed to submit. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-purple-600/10 p-8 md:p-12 border border-purple-200 dark:border-purple-800">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5" />
      
      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-purple-600 dark:text-pink-400 mb-4">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Exclusive Rewards</span>
            <Sparkles className="h-5 w-5" />
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Get VIP Access + 20% OFF!
            </span>
          </h3>
          
          <p className="text-lg text-muted-foreground mb-2">
            Subscribe to our newsletter and leave a review to unlock:
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm font-semibold mt-4">
            <div className="flex items-center gap-2 text-purple-600 dark:text-pink-400">
              <Gift className="h-5 w-5" />
              <span>20% Discount Code</span>
            </div>
            <div className="flex items-center gap-2 text-purple-600 dark:text-pink-400">
              <Mail className="h-5 w-5" />
              <span>Exclusive Early Access</span>
            </div>
            <div className="flex items-center gap-2 text-purple-600 dark:text-pink-400">
              <Star className="h-5 w-5" />
              <span>Hot Deals First</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12"
                required
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 h-12"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Star className="h-4 w-4 text-purple-600" />
              Rate Your Experience with Our Deals
            </label>
            <div className="flex gap-2 justify-center sm:justify-start">
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
              Share Your Experience (Optional)
            </label>
            <Textarea
              id="review"
              placeholder="Tell us what you love about our deals..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
              rows={4}
              className="resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting || rating === 0}
            className="w-full h-12 px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-lg"
          >
            {isSubmitting ? "Submitting..." : "Subscribe & Get My Rewards"}
          </Button>
        </form>

        <p className="text-xs text-muted-foreground mt-4 text-center">
          We respect your privacy. Unsubscribe anytime. Your review helps us serve you better!
        </p>
      </div>
    </div>
  );
};
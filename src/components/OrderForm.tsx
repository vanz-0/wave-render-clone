import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { ShoppingCart, MapPin } from "lucide-react";

const orderSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(15),
  location: z.string().trim().min(3, "Location must be at least 3 characters").max(200),
});

interface OrderFormProps {
  dealTitle: string;
  dealPrice: string;
  dealId: string;
  onClose: () => void;
}

export const OrderForm = ({ dealTitle, dealPrice, dealId, onClose }: OrderFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = orderSchema.safeParse({ name, email, phone, location });

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
      // Save order to database
      const { error: orderError } = await supabase
        .from('orders')
        .insert([{ 
          customer_name: name,
          customer_email: email,
          customer_phone: phone,
          deal_id: dealId,
          deal_title: dealTitle,
          deal_price: dealPrice,
          status: 'pending'
        }]);

      if (orderError) throw orderError;

      // Create WhatsApp message
      const whatsappMessage = encodeURIComponent(
        `Hello! I'd like to order:\n\n` +
        `📦 Product: ${dealTitle}\n` +
        `💰 Price: ${dealPrice}\n` +
        `👤 Name: ${name}\n` +
        `📍 Location: ${location}\n` +
        `📱 Phone: ${phone}\n\n` +
        `I've already paid via M-Pesa. Please confirm my order!`
      );
      
      const phoneNumber = "+254735558830";
      window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');

      toast({
        title: "Order Submitted! 🎉",
        description: "Redirecting you to WhatsApp to confirm your order.",
      });

      onClose();
    } catch (error) {
      console.error('Error submitting order:', error);
      toast({
        title: "Error",
        description: "Failed to submit order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name *</Label>
        <Input
          id="name"
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number *</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="0712345678"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="location" className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          Delivery Location (Nairobi) *
        </Label>
        <Input
          id="location"
          type="text"
          placeholder="e.g., Westlands, Kilimani, CBD"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>

      <div className="bg-muted p-4 rounded-lg space-y-2">
        <p className="text-sm font-semibold">Order Summary:</p>
        <p className="text-sm">{dealTitle}</p>
        <p className="text-lg font-bold text-purple-600">{dealPrice}</p>
        <p className="text-xs text-muted-foreground">
          After submitting, you'll be redirected to WhatsApp to confirm payment via M-Pesa
        </p>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
      >
        <ShoppingCart className="h-4 w-4 mr-2" />
        {isSubmitting ? "Processing..." : "Confirm Order & Contact via WhatsApp"}
      </Button>
    </form>
  );
};

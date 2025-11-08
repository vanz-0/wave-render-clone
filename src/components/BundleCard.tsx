import { Button } from "./ui/button";
import { Check, ShoppingCart, Heart, Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface BundleCardProps {
  title: string;
  description: string;
  image: string;
  badge: string;
  perfectFor: string[];
  whatsInside: string[];
  regularPrice: string;
  salePrice: string;
  savings: string;
  stock: string;
  rating: number;
  isPurchasable?: boolean;
}

export const BundleCard = ({
  title,
  description,
  image,
  badge,
  perfectFor,
  whatsInside,
  regularPrice,
  salePrice,
  savings,
  stock,
  rating,
  isPurchasable = true,
}: BundleCardProps) => {
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerLocation, setCustomerLocation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const { toast } = useToast();

  const handleOrderSubmit = async () => {
    if (!customerName || !customerPhone) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and phone number.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Save order to database
      const { error: dbError } = await supabase
        .from('orders')
        .insert([{
          customer_name: customerName,
          customer_phone: customerPhone,
          customer_email: customerEmail || null,
          deal_title: title,
          deal_price: salePrice,
          status: 'pending'
        }]);

      if (dbError) throw dbError;

      // Send WhatsApp message
      const phoneNumber = "+254735558830";
      const message = encodeURIComponent(
        `Hello! This is ${customerName}. I came by your Black Friday Exclusive Website and I would like to know more about ${title}. My contact: ${customerPhone}${customerEmail ? `, Email: ${customerEmail}` : ''}${customerLocation ? `, Location: ${customerLocation}` : ''}`
      );
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');

      toast({
        title: "Order Received! 🎉",
        description: "We'll contact you shortly via WhatsApp to confirm your order.",
      });

      setIsOpen(false);
      setCustomerName("");
      setCustomerPhone("");
      setCustomerEmail("");
      setCustomerLocation("");
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

  const handleLearnMore = () => {
    const phoneNumber = "+254735558830";
    const message = encodeURIComponent(
      `Hello! I came by your Black Friday Exclusive Website and I would like to know more about ${title} and how to join your community for exclusive deals.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <Card className="bg-card border-border hover:border-purple-500/50 transition-all duration-500 overflow-hidden group hover:shadow-2xl hover:shadow-purple-500/20 animate-fade-in hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-500"
        />
        <Badge className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-none group-hover:scale-110 transition-transform duration-500 animate-pulse-slow">
          {badge}
        </Badge>
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div className="flex items-start gap-2">
          <span className="text-2xl group-hover:scale-125 transition-transform duration-300">✨</span>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{title}</h3>
            <p className="text-sm text-muted-foreground group-hover:text-foreground mt-1 transition-colors duration-300">{description}</p>
          </div>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowDetails(!showDetails)}
          className="w-full text-xs text-muted-foreground hover:text-foreground"
        >
          {showDetails ? "Show Less ▲" : "View Details ▼"}
        </Button>

        {showDetails && (
          <div className="space-y-4 animate-in slide-in-from-top-2">
            <div>
              <p className="font-semibold text-foreground mb-2">Perfect For:</p>
              <div className="space-y-1">
                {perfectFor.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold text-foreground mb-2">What's Inside: {whatsInside.length}-Piece Set</p>
              <div className="space-y-1">
                {whatsInside.map((item, index) => (
                  <p key={index} className="text-sm text-muted-foreground pl-4">• {item}</p>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="space-y-2 pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground line-through">Regular Price: {regularPrice}</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-sm text-foreground">Black Friday:</span>
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {salePrice}
            </span>
          </div>
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg px-3 py-2">
            <p className="text-sm font-semibold text-green-600 dark:text-green-400">
              YOU SAVE: {savings}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-1">
            <span className="text-sm text-orange-500">🔥</span>
            <span className="text-sm font-medium text-orange-500">{stock}</span>
          </div>
          <div className="flex items-center gap-1">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>

        <div className="flex gap-2 pt-4">
          {isPurchasable ? (
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 group/btn">
                  <ShoppingCart className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
                  Order Now
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Complete Your Order</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone" 
                      placeholder="0735558830" 
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email (Optional)</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="john@example.com" 
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Delivery Location (Optional)</Label>
                    <Input 
                      id="location" 
                      placeholder="Brentwood Arcade, Kiambu Rd" 
                      value={customerLocation}
                      onChange={(e) => setCustomerLocation(e.target.value)}
                    />
                  </div>
                  <div className="bg-muted p-4 rounded-lg space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Item:</span>
                      <span className="font-semibold">{title}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Price:</span>
                      <span className="font-bold text-lg bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{salePrice}</span>
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg space-y-3 border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-sm text-green-800 dark:text-green-200">M-Pesa Payment Options:</h4>
                    <div className="space-y-2 text-xs">
                      <div>
                        <p className="font-medium text-green-700 dark:text-green-300">Buy Goods Till Number:</p>
                        <p className="text-green-900 dark:text-green-100 font-bold">9094685</p>
                      </div>
                      <div>
                        <p className="font-medium text-green-700 dark:text-green-300">PayBill Number:</p>
                        <p className="text-green-900 dark:text-green-100 font-bold">211090</p>
                        <p className="text-green-700 dark:text-green-300">Account: YOUR NAME</p>
                      </div>
                    </div>
                  </div>
                  <Button 
                    onClick={handleOrderSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                  >
                    {isSubmitting ? "Processing..." : "Confirm Order"}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    We'll contact you via WhatsApp to confirm delivery details
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          ) : (
            <Button 
              onClick={handleLearnMore}
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 group/btn"
            >
              <ShoppingCart className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
              Learn More
            </Button>
          )}
          <Button variant="outline" size="icon" className="border-border hover:bg-accent hover:scale-110 transition-all duration-300 group/heart">
            <Heart className="h-4 w-4 group-hover/heart:fill-red-500 group-hover/heart:text-red-500 transition-all duration-300" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

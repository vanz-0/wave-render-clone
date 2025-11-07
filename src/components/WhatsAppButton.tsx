import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp business number
    const phoneNumber = "254700000000"; // Format: country code + number without +
    const message = encodeURIComponent("Hi! I'm interested in your Black Friday deals.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-to-r from-green-500 to-green-600 shadow-2xl hover:from-green-600 hover:to-green-700 hover:scale-110 transition-all duration-300 animate-bounce"
      size="icon"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </Button>
  );
};

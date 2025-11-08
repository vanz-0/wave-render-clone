import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+254735558830";
    const message = encodeURIComponent("Hello! I came by your Black Friday Exclusive Website and I would like to know more about your deals and community.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-to-r from-green-500 to-green-600 shadow-2xl hover:from-green-600 hover:to-green-700 hover:scale-110 transition-all duration-300"
      size="icon"
      aria-label="Contact us on WhatsApp"
      style={{
        animation: "subtle-float 3s ease-in-out infinite"
      }}
    >
      <MessageCircle className="h-7 w-7 text-white" />
      <style>{`
        @keyframes subtle-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </Button>
  );
};

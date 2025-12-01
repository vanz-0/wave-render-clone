import { Sparkles } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import logo from "@/assets/logo.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-1.5 px-4 text-center text-xs md:text-sm font-medium animate-fade-in">
        <div className="flex items-center justify-center gap-2">
          <span className="animate-twinkle">🎄</span>
          <span>HOLIDAY SEASON SALE: UP TO 71% OFF • FREE NAIROBI DELIVERY</span>
          <span className="animate-twinkle">🎁</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background/95 backdrop-blur-md border-b border-border px-4 py-4">
        <div className="flex items-center justify-between max-w-full">
          <div className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="One Health Essentials Logo" 
              className="h-10 w-auto transition-transform duration-300 hover:scale-110 animate-fade-in"
            />
            <div className="text-sm md:text-base font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              No.1 Health Essentials
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:block text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground">
              Premium Beauty & Wellness • Nairobi's #1 Destination
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

import { Sparkles } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import logo from "@/assets/logo.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white py-1.5 px-4 text-center text-xs md:text-sm font-medium animate-fade-in">
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="h-3 w-3 md:h-4 md:w-4 animate-pulse-slow" />
          <span>BLACK FRIDAY: 71% OFF • FREE NAIROBI DELIVERY</span>
          <Sparkles className="h-3 w-3 md:h-4 md:w-4 animate-pulse-slow" />
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background/95 backdrop-blur-md border-b border-border px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="One Health Essentials Logo" 
              className="h-12 w-auto transition-transform duration-300 hover:scale-110 animate-fade-in"
            />
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              One Health Essentials
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

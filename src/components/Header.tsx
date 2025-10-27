import { Sparkles } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white py-2.5 px-4 text-center text-sm md:text-base font-medium animate-fade-in">
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="h-4 w-4 animate-pulse" />
          <span>BLACK FRIDAY: 71% OFF • FREE NAIROBI DELIVERY • ENDS SOON</span>
          <Sparkles className="h-4 w-4 animate-pulse" />
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background/95 backdrop-blur-md border-b border-border px-4 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              One Health Essentials
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:block text-sm text-muted-foreground">
              Premium Beauty & Wellness • Nairobi's #1 Destination
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

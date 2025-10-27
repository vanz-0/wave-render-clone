import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 16,
    minutes: 32,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 mt-8 animate-fade-in">
      <div className="flex items-center gap-3 text-foreground/90 animate-pulse">
        <Clock className="h-6 w-6 text-accent" />
        <span className="text-xl font-semibold tracking-wide">DEAL ENDS IN</span>
      </div>
      
      <div className="flex gap-4 md:gap-6">
        <div className="group relative bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-5 md:p-6 min-w-[90px] md:min-w-[100px] text-center shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] animate-scale-in">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative text-5xl md:text-6xl font-bold text-white tracking-tight">{String(timeLeft.hours).padStart(2, '0')}</div>
          <div className="relative text-xs md:text-sm text-purple-200 mt-2 font-medium uppercase tracking-wider">Hours</div>
        </div>
        
        <div className="flex items-center text-3xl font-bold text-accent animate-pulse">:</div>
        
        <div className="group relative bg-gradient-to-br from-pink-600 to-pink-800 rounded-2xl p-5 md:p-6 min-w-[90px] md:min-w-[100px] text-center shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] animate-scale-in" style={{ animationDelay: '0.1s' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative text-5xl md:text-6xl font-bold text-white tracking-tight">{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div className="relative text-xs md:text-sm text-pink-200 mt-2 font-medium uppercase tracking-wider">Minutes</div>
        </div>
        
        <div className="flex items-center text-3xl font-bold text-accent animate-pulse">:</div>
        
        <div className="group relative bg-gradient-to-br from-orange-600 to-orange-800 rounded-2xl p-5 md:p-6 min-w-[90px] md:min-w-[100px] text-center shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative text-5xl md:text-6xl font-bold text-white tracking-tight">{String(timeLeft.seconds).padStart(2, '0')}</div>
          <div className="relative text-xs md:text-sm text-orange-200 mt-2 font-medium uppercase tracking-wider">Seconds</div>
        </div>
      </div>
    </div>
  );
};

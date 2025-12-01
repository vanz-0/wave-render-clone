import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

const getTimeUntilMidnightET = () => {
  const now = new Date();
  const etNow = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));
  
  const midnightET = new Date(etNow);
  midnightET.setHours(24, 0, 0, 0);
  
  const diff = midnightET.getTime() - etNow.getTime();
  
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  return { hours, minutes, seconds };
};

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilMidnightET());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeUntilMidnightET());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 mt-8 animate-fade-in">
      <div className="flex items-center gap-3 text-foreground/90">
        <span className="text-2xl animate-twinkle">🔔</span>
        <span className="text-xl font-semibold tracking-wide">HOLIDAY OFFER ENDS IN</span>
      </div>
      
      <div className="flex gap-4 md:gap-6">
        <div className="group relative bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-5 md:p-6 min-w-[90px] md:min-w-[100px] text-center shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_hsl(0_72%_50%/0.6)] animate-scale-in">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative text-5xl md:text-6xl font-bold text-white tracking-tight">{String(timeLeft.hours).padStart(2, '0')}</div>
          <div className="relative text-xs md:text-sm text-white/80 mt-2 font-medium uppercase tracking-wider">Hours</div>
        </div>
        
        <div className="flex items-center text-3xl font-bold text-accent animate-pulse-slow">:</div>
        
        <div className="group relative bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl p-5 md:p-6 min-w-[90px] md:min-w-[100px] text-center shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_hsl(120_61%_34%/0.6)] animate-scale-in" style={{ animationDelay: '0.1s' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative text-5xl md:text-6xl font-bold text-white tracking-tight">{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div className="relative text-xs md:text-sm text-white/80 mt-2 font-medium uppercase tracking-wider">Minutes</div>
        </div>
        
        <div className="flex items-center text-3xl font-bold text-accent animate-pulse-slow">:</div>
        
        <div className="group relative bg-gradient-to-br from-accent to-accent/80 rounded-2xl p-5 md:p-6 min-w-[90px] md:min-w-[100px] text-center shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_hsl(45_93%_47%/0.6)] animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative text-5xl md:text-6xl font-bold text-white tracking-tight">{String(timeLeft.seconds).padStart(2, '0')}</div>
          <div className="relative text-xs md:text-sm text-white/80 mt-2 font-medium uppercase tracking-wider">Seconds</div>
        </div>
      </div>
    </div>
  );
};

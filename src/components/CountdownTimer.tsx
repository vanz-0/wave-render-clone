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
    <div className="flex flex-col items-center gap-4 mt-8">
      <div className="flex items-center gap-2 text-foreground/80">
        <Clock className="h-5 w-5" />
        <span className="text-lg font-medium">DEAL ENDS IN:</span>
      </div>
      
      <div className="flex gap-3">
        <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-4 min-w-[80px] text-center shadow-lg">
          <div className="text-4xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
          <div className="text-sm text-purple-200 mt-1">HOURS</div>
        </div>
        
        <div className="bg-gradient-to-br from-pink-600 to-pink-800 rounded-2xl p-4 min-w-[80px] text-center shadow-lg">
          <div className="text-4xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div className="text-sm text-pink-200 mt-1">MINS</div>
        </div>
        
        <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-2xl p-4 min-w-[80px] text-center shadow-lg">
          <div className="text-4xl font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</div>
          <div className="text-sm text-orange-200 mt-1">SECS</div>
        </div>
      </div>
    </div>
  );
};

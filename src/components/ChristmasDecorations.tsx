export const ChristmasTree = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 100 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M50 10 L65 35 L55 35 L70 60 L60 60 L75 85 L25 85 L40 60 L30 60 L45 35 L35 35 Z" fill="hsl(120 61% 34%)" />
    <rect x="45" y="85" width="10" height="15" fill="hsl(25 75% 47%)" />
    <circle cx="50" cy="15" r="3" fill="hsl(45 93% 47%)" className="animate-twinkle" />
    <circle cx="45" cy="40" r="2" fill="hsl(0 72% 50%)" className="animate-twinkle" style={{ animationDelay: '0.5s' }} />
    <circle cx="55" cy="45" r="2" fill="hsl(45 93% 47%)" className="animate-twinkle" style={{ animationDelay: '1s' }} />
    <circle cx="42" cy="65" r="2" fill="hsl(0 72% 50%)" className="animate-twinkle" style={{ animationDelay: '1.5s' }} />
    <circle cx="58" cy="70" r="2" fill="hsl(45 93% 47%)" className="animate-twinkle" style={{ animationDelay: '2s' }} />
  </svg>
);

export const Ornament = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 30 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="13" y="0" width="4" height="6" fill="hsl(45 93% 47%)" />
    <circle cx="15" cy="20" r="12" fill="hsl(0 72% 50%)" />
    <circle cx="15" cy="20" r="12" fill="url(#ornament-shine)" opacity="0.6" />
    <defs>
      <radialGradient id="ornament-shine">
        <stop offset="0%" stopColor="white" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
  </svg>
);

export const Bell = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 40 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 5 C12 5 8 10 8 20 L8 30 C8 35 12 40 20 40 C28 40 32 35 32 30 L32 20 C32 10 28 5 20 5 Z" fill="hsl(45 93% 47%)" />
    <ellipse cx="20" cy="5" rx="3" ry="2" fill="hsl(45 93% 47%)" />
    <circle cx="20" cy="42" r="3" fill="hsl(0 72% 50%)" className="animate-gentle-bounce" />
    <path d="M12 25 Q20 30 28 25" stroke="hsl(45 60% 30%)" strokeWidth="1" fill="none" opacity="0.3" />
  </svg>
);

export const Star = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M25 5 L28 18 L40 18 L30 25 L33 38 L25 31 L17 38 L20 25 L10 18 L22 18 Z" fill="hsl(45 93% 47%)" className="animate-twinkle" />
  </svg>
);

export const Holly = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 60 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="20" cy="20" rx="12" ry="15" fill="hsl(120 61% 34%)" transform="rotate(-20 20 20)" />
    <ellipse cx="40" cy="20" rx="12" ry="15" fill="hsl(120 61% 34%)" transform="rotate(20 40 20)" />
    <circle cx="25" cy="25" r="4" fill="hsl(0 72% 50%)" />
    <circle cx="32" cy="23" r="4" fill="hsl(0 72% 50%)" />
    <circle cx="28" cy="30" r="4" fill="hsl(0 72% 50%)" />
  </svg>
);

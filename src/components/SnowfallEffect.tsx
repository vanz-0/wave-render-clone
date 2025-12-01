export const SnowfallEffect = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="absolute text-white opacity-70 animate-snowfall"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-10vh`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${10 + Math.random() * 10}s`,
            fontSize: `${10 + Math.random() * 10}px`,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
};

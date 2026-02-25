import React, { useEffect, useState, useRef } from 'react';

interface StatCardProps {
  count: number;
  suffix: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ count, suffix, label }) => {
  const [currentCount, setCurrentCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !animated.current) {
        animated.current = true;
        let val = 0;
        const dur = 1600;
        const fps = 60;
        const step = count / (dur / 1000 * fps);
        const timer = setInterval(() => {
          val += step;
          if (val >= count) {
            setCurrentCount(count);
            clearInterval(timer);
          } else {
            setCurrentCount(Math.floor(val));
          }
        }, 1000 / fps);
      }
    }, { threshold: 0.4 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [count]);

  return (
    <div className="stat-c" ref={ref}>
      <div className="stat-n">{count === Infinity ? '∞' : `${currentCount}${suffix}`}</div>
      <div className="stat-l">{label}</div>
    </div>
  );
};

export default StatCard;

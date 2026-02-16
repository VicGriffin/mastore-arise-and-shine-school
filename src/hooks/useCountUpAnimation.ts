'use client';

import { useEffect, useRef, useState } from 'react';

interface UseCountUpAnimationProps {
  end: number;
  duration?: number;
  start?: number;
}

export function useCountUpAnimation({
  end,
  duration = 2000,
  start = 0,
}: UseCountUpAnimationProps) {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);

  useEffect(() => {
    const incrementPerMs = (end - start) / (duration / 16);
    let animationId: number;

    const animate = () => {
      countRef.current += incrementPerMs;

      if (countRef.current >= end) {
        setCount(end);
      } else {
        setCount(Math.floor(countRef.current));
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [end, start, duration]);

  return count;
}

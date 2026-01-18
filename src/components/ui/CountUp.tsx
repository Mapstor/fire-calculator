'use client';

import React, { useState, useEffect } from 'react';

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  start?: number;
}

export default function CountUp({ 
  end, 
  duration = 2, 
  prefix = '', 
  suffix = '',
  start = 0 
}: CountUpProps) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration * 1000;
    
    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (endTime - startTime), 1);
      
      // Easing function for smooth animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = start + (end - start) * easedProgress;
      
      setCount(Math.floor(currentCount));
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };
    
    const timer = requestAnimationFrame(updateCount);
    
    return () => cancelAnimationFrame(timer);
  }, [end, duration, start]);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <span>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
}
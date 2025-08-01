'use client';
import { useEffect, useRef } from 'react';

export default function SmoothScrollProvider({ children }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    let scrollInstance;

    const initScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;

      scrollInstance = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });
    };

    initScroll();

    return () => {
      if (scrollInstance) scrollInstance.destroy();
    };
  }, []);

  return <div ref={scrollRef}>{children}</div>;
}

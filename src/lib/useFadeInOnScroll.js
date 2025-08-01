// lib/useFadeInOnScroll.js
'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useFadeInOnScroll = (ref, {
  start = 'top 85%',
  duration = 1,
  y = 30,
  opacityFrom = 0,
  ease = 'power2.out',
  once = true,
} = {}) => {
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const anim = gsap.fromTo(
      el,
      { opacity: opacityFrom, y },
      {
        opacity: 1,
        y: 0,
        duration,
        ease,
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: once ? 'play none none none' : 'play none none reverse',
        },
      }
    );

    return () => {
      if (anim.scrollTrigger) anim.scrollTrigger.kill();
      anim.kill();
    };
  }, [ref, start, duration, y, opacityFrom, ease, once]);
};

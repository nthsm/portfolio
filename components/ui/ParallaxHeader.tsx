'use client'

import React, { useRef, useEffect, ReactNode } from 'react';
import { cn } from '@/lib/utils'; // Assuming you have this utility function

interface ParallaxHeaderProps {
  children: ReactNode;
  className?: string;
  speedFactor?: number; // How much slower the background scrolls (e.g., 0.5 = half speed)
}

export function ParallaxHeader({
  children,
  className,
  speedFactor = 0.5, // Default to half speed
}: ParallaxHeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const offset = window.scrollY;
        // Adjust backgroundPositionY based on scroll position and speed factor
        headerRef.current.style.backgroundPositionY = `${offset * speedFactor}px`;
      }
    };

    // Only apply effect if not on a touch device or if screen is wide enough
    // background-attachment: fixed has issues on some mobile browsers
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const screenWidth = window.innerWidth;

    if (!isTouchDevice && screenWidth > 768) { // Matches your CSS media query breakpoint
        window.addEventListener('scroll', handleScroll);
        // Initial call to set position correctly on load
        handleScroll();
    } else {
        // Ensure default behavior if effect is disabled
         if (headerRef.current) {
             headerRef.current.style.backgroundPositionY = 'center'; // Or your default
         }
    }


    // Cleanup listener on component unmount
    return () => {
       if (!isTouchDevice && screenWidth > 768) {
           window.removeEventListener('scroll', handleScroll);
       }
    };
  }, [speedFactor]); // Re-run effect if speedFactor changes

  return (
    <div
      ref={headerRef}
      className={cn('imon-parallax-header-js', className)} // Use a new base class name
    >
      {children}
    </div>
  );
}
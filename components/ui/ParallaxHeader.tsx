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

    // Apply effect on all devices
    window.addEventListener('scroll', handleScroll);
    // Initial call to set position correctly on load
    handleScroll();


    // Cleanup listener on component unmount
    return () => {
       window.removeEventListener('scroll', handleScroll);
    };
  }, [speedFactor]); // Re-run effect if speedFactor changes

  return (
    <div
      ref={headerRef}
      className={cn('imon-parallax-header-js', className)} // Use a new base class name
    >
      {/* This inner div constrains the content width AND centers it */}
      <div className="w-full max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
}

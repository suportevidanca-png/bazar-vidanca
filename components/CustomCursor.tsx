'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only show on desktop devices (rough check)
    if (window.innerWidth > 768) {
      setIsDesktop(true);
    }

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Verifica se o mouse está sobre botões, links ou inputs
      const target = e.target as HTMLElement;
      if (
        target.closest('a') || 
        target.closest('button') || 
        target.closest('input') || 
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button'
      ) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-50 transition-opacity duration-300 ease-out ${
        hidden ? 'opacity-0 scale-50' : 'opacity-100 scale-100'
      }`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        transition: 'transform 0.1s cubic-bezier(0.1, 0, 0.1, 1)',
      }}
    >
      <div className="w-24 h-24 animate-[spin_8s_linear_infinite] flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-blue-600/80 drop-shadow-sm font-bold tracking-[0.2em] uppercase text-[10px]">
          <path id="textPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
          <text>
            <textPath href="#textPath" startOffset="0%">
              INSTITUTO VIDANÇA • INSTITUTO VIDANÇA • 
            </textPath>
          </text>
        </svg>
      </div>
      {/* Ponto central */}
      <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-blue-600 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-sm"></div>
    </div>
  );
}

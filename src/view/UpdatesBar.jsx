import React, { useState, useEffect, useRef } from 'react';

const UpdatesBar = ({ updates }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const updateText = updates.join(' • ');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typically the breakpoint for medium screens
    };

    handleResize(); // Call once to set initial state
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const contentWidth = content.offsetWidth;
    const containerWidth = container.offsetWidth;
    const labelWidth = isMobile ? 0 : 112; // No label on mobile
    const visibleContentWidth = containerWidth - labelWidth;
    const duration = contentWidth / 50; // Adjust speed here

    container.style.setProperty('--content-width', `${contentWidth}px`);
    container.style.setProperty('--container-width', `${containerWidth}px`);
    container.style.setProperty('--visible-content-width', `${visibleContentWidth}px`);
    container.style.setProperty('--animation-duration', `${duration}s`);
  }, [updates, isMobile]);

  return (
    <div 
      className="w-full bg-yellow-400 overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={containerRef}
    >
      {!isMobile && (
        <div className="absolute left-0 top-0 bottom-0 z-10 flex items-center">
          <span className="font-bold text-green-700 bg-yellow-400 px-4">UPDATES</span>
        </div>
      )}
      <div className={`py-2 ${isMobile ? 'px-4' : 'pl-28'} whitespace-nowrap overflow-hidden`}>
        <div 
          ref={contentRef}
          className={`inline-block ${isHovered && !isMobile ? 'animate-none' : 'animate-scroll'}`}
        >
          <span className="inline-block px-4">{updateText}</span>
        </div>
      </div>
    </div>
  );
};

export default UpdatesBar;
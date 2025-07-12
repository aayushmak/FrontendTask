// src/components/AnimatedGrid.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimatedGrid = ({ rows = 10, cols = 26, interval = 2000, activeCount = 12 }) => {
  const cellsRef = useRef([]);

  useEffect(() => {
    const timer = setInterval(() => {
      const randomIndexes = [];
      while (randomIndexes.length < activeCount) {
        const idx = Math.floor(Math.random() * (rows * cols));
        if (!randomIndexes.includes(idx)) {
          randomIndexes.push(idx);
        }
      }

      cellsRef.current.forEach((cell, idx) => {
        if (cell) {
          if (randomIndexes.includes(idx)) {
            gsap.to(cell, {
              backgroundColor: '#7C3AED',
              duration: 0.5,
              ease: 'power1.inOut'
            });
          } else {
            gsap.to(cell, {
              backgroundColor: '#F3F4F6',
              duration: 0.5,
              ease: 'power1.inOut'
            });
          }
        }
      });
    }, interval);

    return () => clearInterval(timer);
  }, [rows, cols, interval, activeCount]);

  return (
    <div className="w-screen h-screen grid gap-[2px]"
         style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
      {Array.from({ length: rows * cols }).map((_, idx) => (
        <div
          key={idx}
          ref={(el) => (cellsRef.current[idx] = el)}
          className="bg-gray-100 w-full h-full"
        ></div>
      ))}
    </div>
  );
};

export default AnimatedGrid;

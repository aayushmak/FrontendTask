import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';

const useClusterFloatAnimation = () => {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);
  const [isActivated, setIsActivated] = useState(false);

  // Oval spread target positions 
  const targets = [
    { x: -200, y: -80 }, 
    { x: 0, y: -100 },  
    { x: 200, y: -100 },
    { x: -300, y: -50 },
    { x: 0, y: -50 },
    { x: 300, y: -40 },
    { x: -300, y: -30 },
    { x: -180,    y: -20 }, 
    { x: 0,  y: 0 }, 
    { x: 180,  y: -10 }, 
    { x: 200,    y: -20 }, 
  ];

  const setItemRef = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Initially cluster at bottom center
    gsap.set(itemsRef.current, { x:0, y:0, opacity:0 });

    const handleMouseMove = (e) => {
      const bounds = containerRef.current.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;
      const inside = x > 100 && x < bounds.width - 100 && y > 100 && y < bounds.height - 100;

      if (inside && !isActivated) {
        // spread outward to targets
        itemsRef.current.forEach((el, index) => {
          gsap.to(el, {
            x: targets[index % targets.length].x,
            y: targets[index % targets.length].y,
            opacity: 1,
            duration: 1,
            ease: "power2.out"
          });
          // float
          gsap.to(el, {
            y: `+=10`,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
        });
        setIsActivated(true);
      } 
      else if (!inside && isActivated) {
        // go back to bottom center
        gsap.killTweensOf(itemsRef.current);
        itemsRef.current.forEach((el) => {
          gsap.to(el, {
            x:0,
            y:300,
            opacity:0.8,
            duration: 1,
            ease: "power2.inOut"
          });
        });
        setIsActivated(false);
      }
    };

    containerRef.current?.addEventListener("mousemove", handleMouseMove);
    return () => containerRef.current?.removeEventListener("mousemove", handleMouseMove);
  }, [isActivated]);

  return { containerRef, setItemRef, isActivated };
};

export default useClusterFloatAnimation;

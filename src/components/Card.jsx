import React, { useRef, useEffect } from 'react';
import { logoFrame, whitePlus, arrowWhite, redPlus, clickArrow } from '../assets/images';
import gsap from 'gsap';

const Card = ({ isRed, onClick }) => {
  const cardRef = useRef();
  const logoRef = useRef();
  const btnRef = useRef();
  const verticalTextRef = useRef();
  const horizontalTextRef = useRef();
  const hoverRef = useRef();

  // Animate when isRed changes
  useEffect(() => {
    if (isRed) {
      // make red card active
      gsap.to(cardRef.current, { backgroundColor: '#c62828', duration: 0.5 });
      gsap.to(logoRef.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
      gsap.to(btnRef.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
      gsap.to(verticalTextRef.current, { rotate: -90, opacity: 0, duration: 0.4, ease: 'power2.inOut' });
      gsap.to(horizontalTextRef.current, { opacity: 1, duration: 0.4 });
    } else {
      // switch back to pink
      gsap.to(cardRef.current, { backgroundColor: '#fde2e2', duration: 0.5 });
      gsap.to(logoRef.current, { opacity: 0, y: -20, duration: 0.5, ease: 'power2.in' });
      gsap.to(btnRef.current, { opacity: 0, y: -20, duration: 0.5, ease: 'power2.in' });
      gsap.to(verticalTextRef.current, { rotate: -90, opacity: 1, duration: 0.4, ease: 'power2.inOut' });
      gsap.to(horizontalTextRef.current, { opacity: 0, duration: 0.3 });
    }
  }, [isRed]);

  const handleMouseEnter = () => {
    if (!isRed) {
      gsap.to(hoverRef.current, { opacity: 1, y: 0, duration: 0.3 });
    }
  };

  const handleMouseLeave = () => {
    if (!isRed) {
      gsap.to(hoverRef.current, { opacity: 0, y: -10, duration: 0.3 });
    }
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative ${isRed ? 'w-[592px] h-[461px] px-16 py-10' : 'w-[294px] h-[472px] p-6'} 
                  rounded-[30px] flex flex-col justify-between items-center mt-24  cursor-pointer`}
      style={{ fontFamily: 'Nohemi', backgroundColor: isRed ? '#c62828' : '#fde2e2' }}
    >
      {/* Hover overlay for pink */}
      {!isRed && (
        <div ref={hoverRef} className="absolute -top-14 flex flex-col items-center gap-2 opacity-0">
          <span className="text-black">Click me</span>
          <img src={clickArrow} alt="click arrow" className="w-12 h-auto" />
        </div>
      )}

      {/* Top button for red */}
      <div ref={btnRef} className="absolute top-6 right-6 flex items-center gap-2 opacity-0">
        <span className="text-white font-semibold text-lg">View all Courses</span>
        <img src={arrowWhite} alt="arrow" className="w-5 h-4" />
      </div>

      {/* Logos for red */}
      <div ref={logoRef} className="flex justify-center mt-16 opacity-0">
        <img src={logoFrame} alt="logos" width={isRed ? 495.52 : 0} height={isRed ? 93.36 : 0} />
      </div>

      {/* Vertical text for pink */}
      <div ref={verticalTextRef} className="flex flex-col items-center rotate-[-90deg] mt-6">
        <h2 className="text-red-700 text-4xl font-bold">Upcoming Courses</h2>
        <p className="text-red-700 text-lg mt-2 text-center leading-4 max-w-[180px]">
          exciting new courses waiting to boost your skills.
        </p>
      </div>

      {/* Bottom horizontal text for red */}
      <div ref={horizontalTextRef} className="flex items-end gap-6 -mt-20 opacity-0">
        <h1 className="text-[150px] text-white font-bold leading-none flex items-center -mb-4">
          23
          <img src={whitePlus} alt="plus" className="-mt-28 w-9 h-auto mb-4" />
        </h1>
        <div>
          <h2 className="text-white text-4xl font-bold">All Courses</h2>
          <p className="text-white text-lg">courses you’re powering through right now.</p>
        </div>
      </div>

      {/* Bottom number for pink */}
      {!isRed && (
        <div className="flex items-center -mt-24">
          <h1 className="text-[150px] font-bold text-red-700 leading-none">05</h1>
          <img src={redPlus} alt="plus" className="-mt-28 w-9 h-auto mb-4" />
        </div>
      )}
    </div>
  );
};

export default Card;

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const PageTwoCardRight = ({
  bgColor,
  title,
  subtitle,
  description,
  image,
  hoverImage, 
  imageHeight,
  imageWidth,
}) => {
  const imageRef = useRef(null);
  const cardRef = useRef(null);
  const hoverImageRef = useRef(null);

  useEffect(() => {
    // Floating image animation
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: 10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }

    // Initially hide the hover image
    gsap.set(hoverImageRef.current, { autoAlpha: 0 });
  }, []);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      x: 50, // Slide to the right
      autoAlpha: 0,
      duration: 2,
      ease: 'power2.out',
    });

    gsap.to(hoverImageRef.current, {
      autoAlpha: 1,
      scale: 1.05,
      duration: 2,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      x: 0,
      autoAlpha: 1,
      duration: 2,
      ease: 'power2.out',
    });

    gsap.to(hoverImageRef.current, {
      autoAlpha: 0,
      scale: 1,
      duration: 2,
      ease: 'power2.out',
    });
  };

  return (
    <div
      className="text-black relative mb-10"
      style={{ fontFamily: 'Nohemi', width: '592px', height: '341px' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Hover image background */}
      <div
        ref={hoverImageRef}
        className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden z-0"
      >
        <img
          src={hoverImage}
          alt="Hover Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main card content */}
      <div
        ref={cardRef}
        className={`relative flex w-full h-full ${bgColor} rounded-xl p-6 items-center gap-4 z-10`}
      >
        {/* Text content on the left */}
        <div className="text-white z-20 mr-auto w-[75%]">
          <h2 className="text-4xl mb-4 font-bold text-start">{title}</h2>
          <h3 className="text-2xl mb-4 font-semibold mt-1 text-start">{subtitle}</h3>
          <p className="text-lg mt-2 text-start">{description}</p>
        </div>

        {/* Floating Illustration */}
        <div
          ref={imageRef}
          className={`absolute bottom-[-60px] right-0 transform translate-x-[20%] translate-y-[5%] ${imageHeight} ${imageWidth} z-10`}
        >
          <img src={image} alt="Illustration" className="h-full w-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default PageTwoCardRight;

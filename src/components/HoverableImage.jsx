import { useRef } from 'react';
import { comment, review } from '../assets/images';
import gsap from 'gsap';

const HoverableImage = ({ src, alt, withHoverEffect = false }) => {
  const commentRef = useRef(null);
  const reviewRef = useRef(null);

  const handleMouseEnter = () => {
    if (withHoverEffect) {
      gsap.to(commentRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      });
      gsap.to(reviewRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      });
    }
  };

  const handleMouseLeave = () => {
    if (withHoverEffect) {
      gsap.to(commentRef.current, {
        x: -10,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in"
      });
      gsap.to(reviewRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in"
      });
    }
  };

  return (
    <div
      className={`relative flex flex-col items-center ${
        withHoverEffect ? 'cursor-pointer' : ''
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image with optional ring */}
      <img
        src={src}
        alt={alt}
        className={`min-w-24 max-w-28 rounded-4xl h-auto transition duration-300 ${
          withHoverEffect ? 'hover:ring-12 hover:ring-blue-300' : ''
        }`}
      />

      {/* Comment image: initially hidden and off to the left */}
      <img
        ref={commentRef}
        src={comment}
        alt="comment"
        className="absolute -right-4 top-4 w-[150px] opacity-0"
        style={{ }}
      />

      {/* Review image: initially hidden */}
      <img
        ref={reviewRef}
        src={review}
        alt="review"
        className="mt-2 w-[325px] opacity-0"
      />
    </div>
  );
};

export default HoverableImage;

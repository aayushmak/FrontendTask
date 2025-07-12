import { useEffect, useRef } from "react";
import { logo, task1, task2, task3 } from "../assets/images";
import gsap from "gsap";
import {useNavigate } from "react-router-dom"

const CoverPage = () => {
  const navigate = useNavigate();
  const imagesRef = useRef([]);

  useEffect(() => {
    // Add grow & shrink animation to all images
    imagesRef.current.forEach((img) => {
      gsap.to(img, {
        scale: 1.05,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut"
      });
    });
  }, []);

  return (
    <main
      className="text-black font-bold text-5xl w-full min-h-screen mt-0 flex flex-col"
      style={{
        background:
          "radial-gradient(53.75% 135.56% at 50% 50%, #0437B8 0%, #002687 100%)",
      }}
    >
      <div className="flex flex-1 pt-16 pl-12 gap-16">
        {/* Left side */}
        <div className="flex flex-col justify-between flex-1" style={{ fontFamily: 'Oakes Grotesk' }}>
          <div>
            <h1 className="text-[233.5px] text-white">Frontend</h1>
            <h2 className="text-white text-[70px] md:text-[172px]">Assesment</h2>
          </div>
          <div className="flex mt-16 gap-20 items-end">
            <img
              src={logo}
              alt="logo"
              className="min-w-[277px] h-auto self-center cursor-pointer"
              ref={el => imagesRef.current[0] = el}
              onClick={() => navigate('/motion-page')}
            />
            <img
              src={task3}
              alt=""
              className=" w-[637px] h-auto cursor-pointer"
              ref={el => imagesRef.current[1] = el}
              onClick={() => navigate('/page-three')}
            />
          </div>
        </div>

        {/* Right side */}
        <div className=" overflow-hidden flex flex-col justify-between">
          <img
            src={task2}
            alt=""
            className=" min-w-[553px] h-auto ml-24 mb-20 cursor-pointer "
            ref={el => imagesRef.current[2] = el}
            onClick={() => navigate('/page-two')}
          />
          <img
            src={task1}
            alt=""
            className=" w-[887.34px] h-auto cursor-pointer"
            ref={el => imagesRef.current[3] = el}
            onClick={() => navigate('/page-one')}
          />
        </div>
      </div>
    </main>
  );
};

export default CoverPage;

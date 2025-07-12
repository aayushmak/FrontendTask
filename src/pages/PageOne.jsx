import useClusterFloatAnimation from '../hooks/useClusterFloatAnimation';
import { person1, person2, person3, person4, person5, person6, arrowBlack } from '../assets/images';
import { emojiGif, favGif, trophyGif, likeGif } from '../assets/videos';
import GifImage from '../components/GifImage';
import HoverableImage from '../components/HoverableImage';

const PageOne = () => {
  const { containerRef, setItemRef, isActivated } = useClusterFloatAnimation();

  return (
    <main ref={containerRef} className='relative w-full h-screen '>
      <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center">
        <div className='flex'>
          <div ref={setItemRef}><HoverableImage src={person6} withHoverEffect={isActivated} /></div>
          <div ref={setItemRef}><GifImage src={likeGif} /></div>
          <div ref={setItemRef}><HoverableImage src={person1} /></div>
        </div>
        <div className="flex">
          <div ref={setItemRef}><HoverableImage src={person5} /></div>
          <div ref={setItemRef} className="flex flex-col items-center">
            <p className='text-2xl text-nowrap text-medium'>Hear How They Level Up Their Game!</p>
            <p className='text-4xl text-black font-bold'>Skill <span className='text-green-700'>Masters</span> Unite! 🤝</p>
            <div className='flex items-center'>
              <p className='text-xl font-semibold'>View all Testimonials </p>
              <img src={arrowBlack} alt="arrow" width={18} className='ml-1' />
            </div>
          </div>
          
            <div ref={setItemRef}><HoverableImage src={person2} /></div>
          </div>
          <div ref={setItemRef}><GifImage src={emojiGif} /></div>
          <div ref={setItemRef}><HoverableImage src={person4} /></div>
          <div ref={setItemRef}><GifImage src={trophyGif} /></div>
          <div ref={setItemRef}><HoverableImage src={person3} withHoverEffect={isActivated} /></div>
          <div ref={setItemRef}><GifImage src={favGif} /></div>
        </div>
     
    </main>
  );
};

export default PageOne;

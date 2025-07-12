import React, { useState } from 'react';
import Card from '../components/Card';

const PageThree = () => {
  const [activeRedIndex, setActiveRedIndex] = useState(0); // first card red initially

  return (
    <main>
      <p className='text-2xl text-nowrap text-medium'>Explore our classes and master trending skills!</p>
            <p className='text-4xl text-black font-bold'>Skill <span className='text-green-700'>Dive Into </span> What’s Hot Right Now! 🔥</p>
      <div className="flex justify-center p-10 gap-4 bottom-0 h-screen">
      {[0,1,2].map((index) => (
        <Card
          key={index}
          isRed={index === activeRedIndex}
          onClick={() => {
            if (index !== activeRedIndex) {
              setActiveRedIndex(index);
            }
          }}
        />
      ))}
    </div>
    </main>
  );
};

export default PageThree;

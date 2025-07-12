import React, { useState } from 'react';
import Card from '../components/Card';

const PageThree = () => {
  const [activeRedIndex, setActiveRedIndex] = useState(0); // first card red initially

  return (
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
  );
};

export default PageThree;

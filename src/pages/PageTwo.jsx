// pages/PageTwo.jsx
import React from 'react';
import { pageTwoData, pageTwoDataRight } from '../constants';
import PageTwoCardLeft from '../components/PageTwoCardLeft';
import PageTwoCardRight from '../components/PageTwoCardRight';

const PageTwo = () => {
  return (
    <main className=' justify-self-center  p-10'>
      <p className='text-2xl text-nowrap font-medium'>Your SkillShikshya Journey</p>
      <p className='text-4xl font-bold text-green-700'>Step <span className='text-black'>In. </span><span className='text-green-700'>Skill</span> <span className='text-black'>Up. </span><span className='text-green-700'>Stand </span><span className='text-black'>Out.🚀</span></p>
      <div className="flex gap-6">
        <div className="flex flex-col items-center gap-8 py-10">
          {pageTwoData.map((card) => (
            <PageTwoCardLeft key={card.id} {...card} />
          ))}
        </div>
        <div className="flex flex-col items-center gap-8 py-10">
          {pageTwoDataRight.map((card) => (
            <PageTwoCardRight key={card.id} {...card} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default PageTwo;

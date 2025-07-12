// pages/PageTwo.jsx
import React from 'react';
import { pageTwoData, pageTwoDataRight } from '../constants';
import PageTwoCardLeft from '../components/PageTwoCardLeft';
import PageTwoCardRight from '../components/PageTwoCardRight';

const PageTwo = () => {
  return (
    <main className='flex justify-self-center gap-10 p-10'>
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
    </main>
  );
};

export default PageTwo;

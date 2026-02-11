'use client';
import React from 'react';
import Marquee from 'react-fast-marquee';

function ShowcaseMarquee() {
  const marqueeItems = [
    { emoji: '🤑', text: 'Tip your favorite players' },
    { emoji: '🤑', text: 'Earn Rewards' },
    { emoji: '🤑', text: 'Win Prizes' },
  ];

  return (
    <div className="bg-[#053697]">
      <Marquee gradient={true} gradientColor="#053697" speed={40}>
        <div className="flex items-center py-4">
          {Array(12)
            .fill(marqueeItems)
            .flat()
            .map((item, index) => (
              <div
                key={index}
                className="flex gap-2 items-center justify-center mx-6"
              >
                <span className="text-2xl">{item.emoji}</span>
                <h1 className="text-white text-xl font-normal whitespace-nowrap">
                  {item.text}
                </h1>
              </div>
            ))}
        </div>
      </Marquee>
    </div>
  );
}

export default ShowcaseMarquee;

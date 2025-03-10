'use client';
import React from 'react';
import Marquee from 'react-fast-marquee';
import img from '@/Assets/download.png';
import Image from 'next/image';
function ShocaseMarquee() {
  return (
    <div className="bg-[#053697]">
      <Marquee gradient={true} gradientColor="#053697" speed={40}>
        <div className=" flex items-center justify-between py-8">
          <div className="text-[#fff] text-2xl font-semibold flex items-center justify-between w-full gap-6  md:gap-32">
            <div className="flex gap-2 items-end w-full justify-center">
              🤑
              <h1 className="text-[#fff] text-2xl font-semibold text-nowrap">
                Tip your favorite players
              </h1>
            </div>
            <div className="flex gap-2 items-end w-full justify-center">
              🤑
              <h1 className="text-[#fff] text-2xl font-semibold text-nowrap">
                Earn Rewards
              </h1>
            </div>
            <div className="flex gap-2 items-end w-full justify-center">
              🤑
              <h1 className="text-[#fff] text-2xl font-semibold text-nowrap mr-48 flex items-center gap-3">
                Win Prizes
              </h1>
            </div>
            <div className="flex gap-2 items-end w-full justify-center">
              🤑
              <h1 className="text-[#fff] text-2xl font-semibold text-nowrap">
                Tip your favorite players
              </h1>
            </div>
            <div className="flex gap-2 items-end w-full justify-center">
              🤑
              <h1 className="text-[#fff] text-2xl font-semibold text-nowrap">
                Earn Rewards
              </h1>
            </div>
            <div className="flex gap-2 items-end w-full justify-center">
              🤑
              <h1 className="text-[#fff] text-2xl font-semibold text-nowrap mr-48 flex items-center gap-3">
                Win Prizes
              </h1>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
}

export default ShocaseMarquee;

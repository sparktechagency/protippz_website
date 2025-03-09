'use client';
import React from 'react';
import Marquee from 'react-fast-marquee';
import img from '@/Assets/download.png';
import Image from 'next/image';
function ShocaseMarquee() {
  return (
    <div className="bg-[#fff]">
      <Marquee gradient={true} gradientColor="#fff" speed={40}>
        <div className=" flex items-center justify-between py-4">
          <div className="text-[#053697] font-semibold flex items-center justify-between w-full gap-32">
            <div className="flex gap-2 items-end w-full justify-center">
              <Image
                className="h-14 w-auto"
                src={img}
                alt="img"
                width={400}
                height={1200}
              />
              <h1 className="text-[#053697] font-semibold text-nowrap">
                Tip your favorite players
              </h1>
            </div>
            <div className="flex gap-2 items-end w-full justify-center">
              <Image
                className="h-14 w-auto"
                src={img}
                alt="img"
                width={400}
                height={200}
              />
              <h1 className="text-[#053697] font-semibold text-nowrap">
                Earn Rewards
              </h1>
            </div>
            <div className="flex gap-2 items-end w-full justify-center">
              <Image
                className="h-14 w-auto"
                src={img}
                alt="img"
                width={400}
                height={200}
              />
              <h1 className="text-[#053697] font-semibold text-nowrap mr-48 flex items-center gap-3">
                Win Prizes
              </h1>
            </div>
            <div className="flex gap-2 items-end w-full justify-center">
              <Image
                className="h-14 w-auto"
                src={img}
                alt="img"
                width={400}
                height={1200}
              />
              <h1 className="text-[#053697] font-semibold text-nowrap">
                Tip your favorite players
              </h1>
            </div>
            <div className="flex gap-2 items-end w-full justify-center">
              <Image
                className="h-14 w-auto"
                src={img}
                alt="img"
                width={400}
                height={200}
              />
              <h1 className="text-[#053697] font-semibold text-nowrap">
                Earn Rewards
              </h1>
            </div>
            <div className="flex gap-2 items-end w-full justify-center">
              <Image
                className="h-14 w-auto"
                src={img}
                alt="img"
                width={400}
                height={200}
              />
              <h1 className="text-[#053697] font-semibold text-nowrap mr-48 flex items-center gap-3">
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

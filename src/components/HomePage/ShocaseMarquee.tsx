'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import Marquee from 'react-fast-marquee';
import img from '@/Assets/logo2.png';
import Image from 'next/image';
function ShocaseMarquee() {
  const path = usePathname();
  if (path !== '/') {
    return;
  }
  return (
    <div className="bg-[#053697]">
      <Marquee
        gradient={true}
        gradientColor="#053697"
        speed={40}
      >
        <div className=" flex items-center justify-between py-4 mr-28">
          <div className="text-white font-semibold flex items-center justify-between w-full gap-48">
            <div className="flex gap-2 items-center">
              <Image src={img} alt="img" width={200} height={200} />
              <h1 className="text-white font-semibold text-nowrap">
                Choose a Player or Team ⛹️ ⛹️⛹️
              </h1>
            </div>
            <div className="flex gap-2 items-center">
              <Image src={img} alt="img" width={200} height={200} />
              <h1 className="text-white font-semibold text-nowrap">
                Send them Tippz 💸 💸 💸
              </h1>
            </div>
            <div className="flex gap-2 items-center">
              <Image src={img} alt="img" width={200} height={200} />
              <h1 className="text-white font-semibold text-nowrap mr-48 flex items-center gap-3">
                Earn Rewards & Win Prizes 🤑🤑🤑
              </h1>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
}

export default ShocaseMarquee;

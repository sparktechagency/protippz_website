import React from 'react';
import Image from 'next/image';
import SendTipsButton from './Client/RedeemButton';
import { RewardInterface } from '@/app/rewardz/page';
import { imageUrl } from '@/ApisRequests/server';



interface RewardCardsProps {
    item: RewardInterface;
}

const RewardzCards: React.FC<RewardCardsProps> = ({ item }) => {
    return (
        <div className="relative bg-white border border-green-300 rounded-lg shadow-md max-w-lg p-4 m-4 h-72 flex flex-col justify-between w-full mx-auto">
            {/* Player Details Section */}
            <div className="flex flex-col justify-between pr-20">
                <div className="text-left">
                    <p className="text-sm font-semibold text-green-500">Reward</p>
                    <p className="font-bold text-blue-900 text-lg">{item.name}</p>
                    <p className="text-sm font-semibold text-green-500 mt-2">Description</p>
                    <p className="text-blue-900 max-w-[300px]">{item.description}</p>
                    <p className="text-sm font-semibold text-green-500 mt-2">PointsRequired</p>
                    <p className="text-blue-900">{item.pointRequired}</p>
                </div>
            </div>
            <div className="absolute right-4 top-12 w-40 h-40">
                <Image
                    src={imageUrl(item.reward_image)}
                    alt={item.name}
                    width={130}
                    height={150}
                    className="object-cover rounded-md"
                />
            </div>

            <div className="flex justify-end mt-4">
                <SendTipsButton item={item} />
            </div>
        </div>
    );
};

export default RewardzCards;

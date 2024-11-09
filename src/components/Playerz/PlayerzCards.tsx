import React from 'react';
import Image from 'next/image';
import SendTipsButton from './Client/SendTipsButton';

interface Player {
    name: string;
    team: string;
    position: string;
    image: string;
    isFavorite: boolean;
    _id: string;
}

interface PlayerzCardsProps {
    item: Player;
}

const PlayerzCards: React.FC<PlayerzCardsProps> = ({ item }) => {
    return (
        <div className="relative bg-white border border-green-300 rounded-lg shadow-md max-w-lg p-4 m-4 h-72 flex flex-col justify-between w-full mx-auto">
            {/* Player Details Section */}
            <div className="flex flex-col justify-between pr-20">
                <div className="text-left">
                    <p className="text-sm font-semibold text-green-500">Name</p>
                    <p className="font-bold text-blue-900 text-lg">{item.name}</p>
                    <p className="text-sm font-semibold text-green-500 mt-2">Team</p>
                    <p className="text-blue-900">{item.team}</p>
                    <p className="text-sm font-semibold text-green-500 mt-2">Position</p>
                    <p className="text-blue-900">{item.position}</p>
                </div>
                <div className="absolute top-4 right-4 text-green-500 text-2xl">
                    <span>{item.isFavorite ? '★' : '☆'}</span>
                </div>
            </div>

            <div className="absolute right-4 top-12 w-40 h-40">
                <Image
                    src={item.image}
                    alt={item.name}
                    width={130}
                    height={150}
                    className="object-cover rounded-md"
                    unoptimized
                />
            </div>

            <div className="flex justify-end mt-4">
                <SendTipsButton item={item} />
            </div>
        </div>
    );
};

export default PlayerzCards;

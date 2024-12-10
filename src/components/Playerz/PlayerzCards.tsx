import React from 'react';
import Image from 'next/image';
import SendTipsButton from './Client/SendTipsButton';
import { Player } from '@/app/playerz/page';
import { imageUrl } from '@/ApisRequests/server';
import BookmarkButton from '../Shared/Client/BookmarkButton';
import bg from '@/Assets/bg.png'
import player from '@/Assets/player.png'

interface PlayerzCardsProps {
    item: Player;
}

const PlayerzCards: React.FC<PlayerzCardsProps> = ({ item }) => {

    return (
        <div
            className="relative border border-green-300 rounded-lg shadow-md max-w-lg m-4 flex flex-col justify-between w-full mx-auto"
        >
            <div className='absolute h-full w-full bg-white bg-opacity-45'>
                <Image
                    src={item?.player_bg_image ? imageUrl(item?.player_bg_image) : bg}
                    alt={item.name}
                    width={130}
                    height={150}
                    className="object-cover rounded-md h-full w-full"
                />
            </div>
            <div className='h-56 p-4 z-40'>
                <div className="flex flex-col justify-between pr-20 mt-6">
                    <div className="text-left">
                        <p className="text-sm font-semibold text-green-500">Name</p>
                        <p className="font-bold text-blue-900 text-lg">{item?.name}</p>
                        <p className="text-sm font-semibold text-green-500 mt-2">Team</p>
                        <p className="text-blue-900">{item?.team?.name}</p>
                        <p className="text-sm font-semibold text-green-500 mt-2">Position</p>
                        <p className="text-blue-900">{item.position}</p>
                    </div>
                    <div className="absolute top-4 right-4 text-green-500 text-2xl">
                        <BookmarkButton
                            _id={item?._id}
                            isBookmark={item?.isBookmark}
                            type="player"
                        />
                    </div>
                </div>

                <div className="absolute right-1 top-12 w-40 h-40">
                    <Image
                        src={item?.player_image ? imageUrl(item?.player_image) : player}
                        alt={item.name}
                        width={130}
                        height={150}
                        className="object-cover rounded-md"
                        unoptimized
                    />
                </div>
            </div>
            <div className="flex justify-end m-2 z-50">
                <SendTipsButton item={item} />
            </div>
        </div>
    );
};

export default PlayerzCards;

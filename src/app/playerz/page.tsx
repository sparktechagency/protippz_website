
import { get } from '@/ApisRequests/server';
import PlayerzCards from '@/components/Playerz/PlayerzCards';
import SearchAndSortComponent from '@/components/Playerz/SearchAndSortComponent';
import Teams from '@/components/Playerz/Teams'
import PaginationComponents from '@/components/Shared/Client/Pagination';
import Heading from '@/components/Shared/Heading';
import { SearchParams } from 'next/dist/server/request/search-params';
import { cookies } from 'next/headers';
import React from 'react'
export const metadata = {
    title: 'PROTIPPZ - PLAYERZ',
    description: 'Learn how to tip your favorite player/team, earn rewards, and win prizes with TIPPZ.',
};

export interface Player {
    "_id": string,
    "name": string,
    "league": {
        "_id": string,
        "name": string,
        "sport": string
    },
    "team": {
        "_id": string,
        "name": string
    },
    "position": string,
    "player_image": string,
    "player_bg_image": string,
    "totalTips": number,
    "paidAmount": number,
    "dueAmount": number,
    "isBookmark": false
}

interface ParamsProps {
    searchParams: Promise<{ [key: string]: string | undefined | null }>
}
const PlayerZPage = async ({ searchParams }: ParamsProps) => {
    const { searchTerm, name, position, page, league } = await searchParams
    const param = { searchTerm, name, position, page, league }
    const [data, meta] = await getPlayer(param)
    return (
        <div className='container mx-auto mt-10'>
            <Teams />
            <Heading
                headingText="PLAYERZ"
                subHeadingText="Select a Player"
            />
            <SearchAndSortComponent />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {
                    data?.map((item: Player) => <PlayerzCards item={item} key={item?._id} />)
                }
            </div>
            <div className='flex justify-center items-center'>
                <PaginationComponents
                    paginationData={meta}
                />
            </div>
        </div>
    )
}

export default PlayerZPage
export const getPlayer = async (param: SearchParams | {}) => {
    const cookie = cookies()
    const paramsUrl = Object.entries(param)
        .filter(([key, value]) => value !== undefined)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
    const res = await get(`/player/get-all?${paramsUrl}`, {
        headers: {
            'Authorization': `${(await cookie).get('token')?.value}`
        },
    })
    return [res.data?.result, res.data?.meta]
}
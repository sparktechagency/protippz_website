import { get } from '@/ApisRequests/server';
import PlayerzCards from '@/components/Playerz/PlayerzCards';
import SearchAndSortComponent from '@/components/Playerz/SearchAndSortComponent';
import GoToTop from '@/components/ui/GoToTop';
import PaginationComponents from '@/components/Shared/Client/Pagination';
import Heading from '@/components/Shared/Heading';
import { Empty } from 'antd';
import { cookies } from 'next/headers';
import React from 'react';
import Teams from '@/components/Playerz/Teams';

export const metadata = {
  title: 'PROTIPPZ - PLAYERZ',
  description:
    'Learn how to tip your favorite player/team, earn rewards, and win prizes with TIPPZ.',
};

export interface Player {
  _id: string;
  name: string;
  league: {
    _id: string;
    name: string;
    sport: string;
  };
  team: {
    _id: string;
    name: string;
  };
  position: string;
  player_image: string;
  jerceyNumber: string;
  experience: string;
  player_bg_image: string;
  totalTips: number;
  paidAmount: number;
  dueAmount: number;
  isBookmark: boolean;
}

interface ParamsProps {
  searchParams: Promise<any>;
}

const PlayerZPage = async ({ searchParams }: ParamsProps) => {
  const { searchTerm, sort, page, team } = await searchParams;

  const param = {
    searchTerm: searchTerm || undefined,
    sort: sort || undefined,
    // position: position || undefined,
    page: page || undefined,
    team: team || undefined,
  };
  const cookie = cookies();
  const token = (await cookie).get('token')?.value;

  const paramsUrl = Object.entries(param)
    .filter(([key, value]) => value !== undefined)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  const res = await get(`/player/get-all?${paramsUrl}&limit=100`, {
    headers: {
      Authorization: `${token}`,
    },
  });
  const data = res.data?.result;
  const meta = res.data?.meta;

  return (
    <div className="container mx-auto mt-10">
      <GoToTop />
      <Teams />

      <Heading headingText="PLAYERZ" subHeadingText="Select a Player" />
      <SearchAndSortComponent />
      {data?.length >= 1 ? (
        <>
          <div className="w-full flex px-2">
            <div className="w-full grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {data &&
                Array.isArray(data) &&
                data?.map((item: Player) => (
                  <PlayerzCards token={token} item={item} key={item?._id} />
                ))}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <PaginationComponents paginationData={meta} />
          </div>
        </>
      ) : (
        <div className="col-span-3">
          <Empty description="No Results Found. Search Again." />
        </div>
      )}
    </div>
  );
};

export default PlayerZPage;

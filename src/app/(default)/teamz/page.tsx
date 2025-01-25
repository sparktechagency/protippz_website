import { get } from "@/ApisRequests/server";
import PaginationComponents from "@/components/Shared/Client/Pagination";
import Heading from "@/components/Shared/Heading";
import SearchAndSortComponent from "@/components/Teamz/SearchAndSortComponent";
import Teams from "@/components/Teamz/Teams";
import TeamzCards from "@/components/Teamz/TeamzCards";
import GoToTop from "@/components/ui/GoToTop";
import { Empty } from "antd";
import { SearchParams } from "next/dist/server/request/search-params";
import { cookies } from "next/headers";
import React from "react";

export const metadata = {
  title: "PROTIPPZ - PLAYERZ",
  description:
    "Learn how to tip your favorite player/team, earn rewards, and win prizes with TIPPZ.",
};

export interface TeamInterface {
  _id: string;
  name: string;
  team_logo: string;
  league: {
    _id: string;
    name: string;
    sport: string;
  };
  team_bg_image: string;
  totalTips: number;
  paidAmount: number;
  dueAmount: number;
  isBookmark: boolean;
}

interface ParamsProps {
  searchParams: Promise<{ [key: string]: string | undefined | null }>;
}

const TeamPage = async ({ searchParams }: ParamsProps) => {
  const { searchTerm, name, page, league } = await searchParams;
  const param = { searchTerm, sort: name, page, league };
  const [data, meta] = await getTeam(param);
  const playersData = data as TeamInterface[];

  return (
    <div className="container mx-auto mt-10">
      <GoToTop />
      <Teams />
      <Heading headingText="TEAMZ" subHeadingText="Select a Team " />
      <SearchAndSortComponent />
      <div className="px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {playersData?.length > 0 ? (
          playersData?.map((item) => <TeamzCards item={item} key={item?._id} />)
        ) : (
          <div className="col-span-3 py-28">
            <Empty />
          </div>
        )}
      </div>
      {playersData?.length > 0 && (
        <div className="flex justify-center items-center">
          <PaginationComponents paginationData={meta} />
        </div>
      )}
    </div>
  );
};

export default TeamPage;

const getTeam = async (param: SearchParams | {}) => {
  const cookie = cookies();
  const paramsUrl = Object.entries(param)
    .filter(([key, value]) => value !== undefined)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  const res = await get(`/team/get-all?${paramsUrl}&limit=100`, {
    headers: {
      Authorization: `${(await cookie).get("token")?.value}`,
    },
  });
  return [res.data?.result, res.data?.meta];
};

"use client";

import { get, imageUrl } from "@/ApisRequests/server";
import bg from "@/Assets/bg.webp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Tooltip } from "antd";
import Image from "next/image";
import { useState } from "react";
import SetTemParams from './SetTemParams';

interface teamsType {
  _id: string;
  name: string;
  league_image: string;
  sport: string;
}

interface Props {
  initialTeams: teamsType[];
  initialMeta: any;
  limit: number;
}

const TeamCarouselClient = ({
  initialTeams,
  initialMeta,
  limit,
}: Props) => {
  const [teams, setTeams] = useState<teamsType[]>(initialTeams);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loadMore = async () => {
    // if (!hasMore || loading) return;
    setLoading(true);
    const nextPage = page + 1;

    const res = await get(
      `/team/get-all?page=${nextPage}&limit=${limit}`
    );

    const newTeams = res.data?.result || [];
    const meta = res.data?.meta;

    setTeams(prev => [...prev, ...newTeams]);
    setPage(nextPage);

    setLoading(false);
  };

  return (
    <Carousel className="w-full">
      <CarouselPrevious className="md:-left-4 left-0 z-50" />
      <CarouselContent className="flex items-center justify-start">
        {teams.map(team => (
          <CarouselItem
            key={team._id}
            className="basis-1/4 not-select cursor-pointer md:basis-1/7 lg:basis-1/12"
          >
            <Tooltip placement="top" title={team.name}>
              <div className="relative hover:bg-slate-100 flex items-center justify-center flex-col">
                <Image
                  src={
                    team.league_image
                      ? imageUrl(team.league_image)
                      : bg
                  }
                  alt={team.name}
                  className="w-[80px] h-[80px] object-contain"
                  height={100}
                  width={100}
                />
                <p className="text-sm">
                  {team.name.slice(0, 10)}..
                </p>
                <SetTemParams ParamKey="team" value={team._id} />
              </div>
            </Tooltip>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselNext
        className="md:-right-4 right-0"
        onClick={loadMore}
        loading={loading}
      />
    </Carousel>
  );
};

export default TeamCarouselClient;

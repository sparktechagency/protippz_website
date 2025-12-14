import { get, imageUrl } from "@/ApisRequests/server";
import league from "@/Assets/league.jpg";
import { Tooltip } from "antd";
import Image from "next/image";
import SetTemParams from "../Playerz/Client/SetTemParams";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

interface teamsType {
  _id: string;
  name: string;
  league_image: string;
  sport: string;
}

const Teams = async () => {
  const [data, meta] = await getTeam();

  return (
    <Carousel className="w-full">
      <CarouselPrevious className={`md:-left-4 left-0 z-50`} />
      <CarouselContent className="flex items-center justify-center">
        {data &&
          Array.isArray(data) &&
          data?.map((team: teamsType) => (
            <CarouselItem
              key={team._id}
              className="basis-1/4 md:basis-1/7 lg:basis-1/12 "
            >
              <Tooltip placement="top" title={team?.name}>
                <div className="relative hover:bg-slate-100 cursor-pointer flex items-center justify-center flex-col">
                  <Image
                    src={
                      team?.league_image ? imageUrl(team?.league_image) : league
                    }
                    alt={team.name}
                    className="w-[80px] h-[80px] object-contain"
                    height={100}
                    width={100}
                  />
                  <p className="text-sm">{team?.name?.slice(0, 10)}..</p>
                  <SetTemParams ParamKey="league" value={team?._id} />
                </div>
              </Tooltip>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselNext className={`md:-right-4 right-0`} />
    </Carousel>
  );
};

// kdhfdh

export default Teams;
const getTeam = async () => {
  const res = await get("/league/get-all?limit=100");
  return [res.data?.result, res.data?.meta];
};

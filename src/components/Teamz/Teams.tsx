import { get, imageUrl } from "@/ApisRequests/server";
import bgImageCircle from "@/Assets/circle.png";
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
              className="basis-1/4 md:basis-1/7 lg:basis-1/12 unselectable"
            >
              <Tooltip placement="top" title={<div className="flex flex-col items-center">
                <Image
                  src={
                    team?.league_image ? imageUrl(team?.league_image) : league
                  }
                  alt={team.name}
                  className=" w-[40px] h-[40px] object-contain unselectable"
                  height={40}
                  width={40}
                />
                <p className="text-center text-sm">{team?.name}</p>
              </div>}>
                <div
                  style={{ backgroundImage: `url("${bgImageCircle.src}")` }}
                  className="relative cursor-pointer bg-center bg-contain bg-no-repeat w-28 h-28 overflow-hidden flex items-center justify-center flex-col">
                  <Image
                    src={
                      team?.league_image ? imageUrl(team?.league_image) : league
                    }
                    alt={team.name}
                    className="w-[40px] h-[40px] object-contain unselectable"
                    height={100}
                    width={100}
                  />
                  <p className="text-sm unselectable">{team?.name?.slice(0, 10)}..</p>
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
  const res = await get("/league/get-all?limit=999");
  return [res.data?.result, res.data?.meta];
};

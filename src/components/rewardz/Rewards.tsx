import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import { get, imageUrl } from "@/ApisRequests/server";
import SetTemParams from "../Playerz/Client/SetTemParams";
interface RewardInterface {
  _id: string;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  deliveryOption: string;
}
const Rewards = async () => {
  const [data, pagination] = await getCategory();
  const teamLogos = data as RewardInterface[];
  return (
    <Carousel className="w-full">
      <CarouselPrevious className={`md:-left-4 left-0 z-50`} />
      <CarouselContent>
        {teamLogos &&
          Array.isArray(teamLogos) &&
          teamLogos.map((team) => (
            <CarouselItem
              key={team?._id}
              className="basis-1/4 md:basis-1/7 lg:basis-1/12 "
            >
              <div className="relative">
                <Image
                  src={imageUrl(team?.image)}
                  alt={team?.name}
                  className="w-[100px] h-[100px] object-contain"
                  height={100}
                  width={100}
                  unoptimized
                />
                <p className="text-center mt-2">{team.name}</p>
                <SetTemParams
                  key={team?._id}
                  ParamKey="category"
                  value={team?._id}
                />
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselNext className={`md:-right-4 right-0`} />
    </Carousel>
  );
};

export default Rewards;
const getCategory = async () => {
  const res = await get("/reward-category/get-all?limit=99999999", {});
  return [res?.data?.result, res?.data?.meta];
};

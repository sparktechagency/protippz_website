import React from "react";
import Image from "next/image";
import SendTipsButton from "./Client/SendTipsButton";
import { imageUrl } from "@/ApisRequests/server";
import BookmarkButton from "../Shared/Client/BookmarkButton";
import bg from "@/Assets/bg.png";
import league from "@/Assets/league.png";
import { TeamInterface } from "@/app/(default)/teamz/page";
interface TeamzCardsProps {
  item: TeamInterface;
}

const TeamzCards: React.FC<TeamzCardsProps> = ({ item }) => {
  return (
    <div className="relative border border-green-300 rounded-lg shadow-md max-w-lg m-4 h-72 flex flex-col justify-between w-full mx-auto">
      {/* Player Details Section */}
      <div className="absolute h-full w-full bg-white bg-opacity-45">
        <Image
          src={item?.team_bg_image ? imageUrl(item?.team_bg_image) : bg}
          alt={item.name}
          width={130}
          height={150}
          className="object-cover rounded-md h-full w-full"
        />
      </div>
      <div className="h-56 p-4 z-40">
        <div className="flex flex-col justify-between pr-20">
          <div className="text-left">
            <p className="text-sm font-semibold text-green-500">Name</p>
            <p className="font-bold text-blue-900 text-lg">{item.name}</p>
            <p className="text-sm font-semibold text-green-500 mt-2">Sport</p>
            <p className="text-blue-900">{item.league?.sport}</p>
          </div>
          <div className="absolute top-4 right-4 text-green-500 text-2xl">
            {/* <span>{item.isBookmark ? '★' : '☆'}</span> */}
            <BookmarkButton
              isBookmark={item?.isBookmark}
              type="team"
              _id={item?._id}
            />
          </div>
        </div>

        <div className="absolute right-4 top-12 w-40 h-40">
          <Image
            src={item?.team_logo ? imageUrl(item.team_logo) : league}
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

export default TeamzCards;

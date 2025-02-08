"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SendTipsButton from "./Client/SendTipsButton";
import { imageUrl } from "@/ApisRequests/server";
import BookmarkButton from "../Shared/Client/BookmarkButton";
import bg from "@/Assets/bg.png";
import player from "@/Assets/playerDefult.jpg";
import { Player } from "@/app/(default)/playerz/page";

interface PlayerzCardsProps {
  item: Player;
}

const textReveal = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
const cardReveal = {
  hidden: { y: "10%" },
  visible: {
    y: "0%",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const PlayerzCards: React.FC<PlayerzCardsProps> = ({ item }) => {
  return (
    <motion.div
      variants={cardReveal}
      initial="hidden"
      animate="visible"
      className="relative border overflow-hidden border-green-300 rounded-lg shadow-md max-w-lg m-4 flex flex-col justify-between w-full mx-auto"
    >
      <div className="absolute h-full w-full ">
        <Image
          src={item?.player_bg_image ? imageUrl(item?.player_bg_image) : bg}
          alt={item.name}
          width={130}
          height={150}
          className="object-cover  rounded-md h-full w-full"
        />
      </div>
      <div className="absolute h-full w-full bg-white bg-opacity-80"></div>
      <div className=" p-4 z-40 ">
        <div className="flex flex-col justify-between pr-20 mt-6">
          <div className="text-left">
            <motion.p
              className="text-sm font-semibold text-green-500"
              variants={textReveal}
              initial="hidden"
              animate="visible"
            >
              Name
            </motion.p>
            <motion.p
              className="font-bold text-[#053697] text-lg"
              variants={textReveal}
              initial="hidden"
              animate="visible"
            >
              {item?.name}
            </motion.p>
            <motion.p
              className="text-sm font-semibold text-green-500 mt-2"
              variants={textReveal}
              initial="hidden"
              animate="visible"
            >
              Team
            </motion.p>
            <motion.p
              className="text-[#053697] w-10/12"
              variants={textReveal}
              initial="hidden"
              animate="visible"
            >
              {item?.team?.name}
            </motion.p>
            <motion.div
              variants={textReveal}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-2"
            >
              <motion.p className="text-sm font-semibold text-green-500 mt-2">
                Position
              </motion.p>
              <motion.p className="text-sm mt-2 text-[#053697]">
                {item.position}
              </motion.p>
            </motion.div>
            <motion.div
              variants={textReveal}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-2"
            >
              <motion.p className="text-sm font-semibold text-green-500 mt-2">
                Jersey No.
              </motion.p>
              <motion.p className="text-sm mt-2 text-[#053697]">
                {item?.jerceyNumber || "N/A"}
              </motion.p>
            </motion.div>

            <motion.div
              variants={textReveal}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-2"
            >
              <motion.p className="text-sm font-semibold text-green-500 mt-2">
                Experience.
              </motion.p>
              <motion.p className="text-sm mt-2 text-[#053697]">
                {item?.experience || "N/A"}
              </motion.p>
            </motion.div>
          </div>
          <div className="absolute top-4 right-4 text-green-500 text-2xl">
            <BookmarkButton
              _id={item?._id}
              isBookmark={item?.isBookmark}
              type="player"
            />
          </div>
        </div>

        <div className="absolute -right-8 top-16 w-40 h-40 ">
          <Image
            src={item?.player_image ? imageUrl(item?.player_image) : player}
            alt={item.name}
            width={110}
            height={130}
            className="object-cover rounded-md"
            unoptimized
          />
        </div>
      </div>
      <div className="flex justify-end m-2 z-50">
        <SendTipsButton item={item} />
      </div>
    </motion.div>
  );
};

export default PlayerzCards;

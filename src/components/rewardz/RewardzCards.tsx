"use client";
import React from "react";
import Image from "next/image";
import SendTipsButton from "./Client/RedeemButton";
import { imageUrl } from "@/ApisRequests/server";
import { RewardInterface } from "@/app/(default)/rewardz/page";
import { motion } from "framer-motion";
interface RewardCardsProps {
  item: RewardInterface;
}

const RewardzCards: React.FC<RewardCardsProps> = ({ item }) => {
  const cardReveal = {
    hidden: { y: "10%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.div
      variants={cardReveal}
      initial="hidden"
      animate="visible"
      className="relative bg-white border  border-green-300 overflow-hidden rounded-lg shadow-md max-w-lg p-4 m-4  flex flex-col justify-between w-full mx-auto"
    >
      {/* Player Details Section */}
      <div className="flex flex-col justify-between pr-20">
        <div className="text-left">
          <p className="text-sm font-semibold text-green-500">Reward</p>
          <p className="font-bold text-[#053697] text-lg">{item.name}</p>
          <p className="text-sm font-semibold text-green-500 mt-2">
            Description
          </p>
          <p className="text-[#053697] max-w-[300px]">{item.description}</p>
          <p className="text-sm font-semibold text-green-500 mt-2">
            PointsRequired
          </p>
          <p className="text-[#053697]">{item.pointRequired}</p>
        </div>
      </div>
      <div className="absolute m-2 right-0 top-0">
        <Image
          src={imageUrl(item.reward_image)}
          alt={item.name}
          width={80}
          height={80}
          className="object-cover rounded-md"
        />
      </div>

      <div className="flex justify-end mt-4">
        <SendTipsButton item={item} />
      </div>
    </motion.div>
  );
};

export default RewardzCards;

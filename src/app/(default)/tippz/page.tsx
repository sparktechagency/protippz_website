import React from "react";
import Heading from "@/components/Shared/Heading";
import Cards from "@/components/Tippz/Cards";
import Money from "@/Assets/Money.png";
export const metadata = {
  title: "PROTIPPZ - TIPPZ",
  description:
    "Learn how to tip your favorite player/team, earn rewards, and win prizes with TIPPZ.",
};
import playstore from "@/Assets/playstore.png";
import appstore from "@/Assets/appsore.png";
import phoneImage2 from "@/Assets/phone_image2.png";
import Image from "next/image";


const cardData = [
  {
    _id: "1",
    image: Money,
    title: "Choose a Player or Team",
    description:
      "Select your favorite player or team from a variety of sports and leagues including professional and college.",
  },
  {
    _id: "2",
    image: "https://i.ibb.co.com/C9zMb8W/Group-1000006224.png",
    title: "Send them Tippz",
    description:
      "After selecting your player or team, you can show your support and love for their game by sending them tips.",
  },
  {
    _id: "3",
    videoUrl: "/videos/video.mp4",
    title: "Earn Rewards & Win Prizes",
    description:
      "You are eligible to earn rewards and win prizes when you send Tippz. Rewards and prizes include exclusive sports merchandise, tickets, and more.",
  },
];

const TipsPage = () => {
  return (
    <>
      <div className="container mx-auto sm:p-0 px-2">
        <Heading
          headingText="TIPPZ"
          subHeadingText="Tip your favorite player/team, earn rewards, and win prizes."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {cardData &&
            Array.isArray(cardData) &&
            cardData?.map((card) => <Cards key={card._id} data={card} />)}
        </div>
      </div>
      <hr className="h-[4px] w-full mt-6 bg-[#2FC191]" />
      <hr className="h-[4px] w-full mb-6 -mt-[1px] bg-[#053697]" />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-[#053697] mb-4">
          Download Today
        </h2>
        <div className="flex gap-4 mb-8">
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={playstore}
              alt="Google Play Store"
              width={120}
              height={40}
            />
          </a>
          <a href="https://apple.com" target="_blank" rel="noopener noreferrer">
            <Image
              src={appstore}
              alt="Apple App Store"
              width={120}
              height={40}
            />
          </a>
        </div>
        <div className="relative w-full max-w-xs md:max-w-sm">
          <Image
            src={phoneImage2}
            alt="App Preview"
            layout="responsive"
            width={300}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </>
  );
};

export default TipsPage;

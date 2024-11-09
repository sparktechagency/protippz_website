import Rewards from '@/components/rewardz/Rewards';
import RewardzCards from '@/components/rewardz/RewardzCards';
import SearchAndSortComponent from '@/components/rewardz/SearchAndSortComponent';
import Heading from '@/components/Shared/Heading';
import rewardbg from '@/Assets/rewardbg.png'
import React from 'react'
import { Typography, Button, List } from 'antd';
import Image from 'next/image';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Link from 'next/link';
const { Title, Text } = Typography;
interface Player {
    Reward: string;
    Description: string;
    PointsRequired: string;
    image: string;
    _id: string;
}

const playersData: Player[] = [
    {
        Reward: "Gift Card",
        Description: "Redeemable gift card for popular stores.",
        PointsRequired: "500",
        image: "https://i.ibb.co/7GFw0Vd/pngegg-9-1.png",
        _id: "1",
    },
    {
        Reward: "Discount Coupon",
        Description: "10% discount coupon for your next purchase.",
        PointsRequired: "300",
        image: "https://i.ibb.co/GRG51XT/clipart3163494-1.png",
        _id: "2",
    },
    {
        Reward: "Free Coffee",
        Description: "Get a free coffee at any participating cafe.",
        PointsRequired: "150",
        image: "https://i.ibb.co/wLHjpTn/pngwing-com-2-1.png",
        _id: "3",
    },
    {
        Reward: "Movie Ticket",
        Description: "One movie ticket at selected cinemas.",
        PointsRequired: "400",
        image: "https://i.ibb.co/S7Lgx7q/Pik-Png-com-networking-png-2454917-1.png",
        _id: "4",
    },
    {
        Reward: "Fitness Class",
        Description: "One free fitness class at partnered gyms.",
        PointsRequired: "600",
        image: "https://i.ibb.co/Rv1Z8zS/pngwing-com-1-1.png",
        _id: "5",
    },
    {
        Reward: "Music Subscription",
        Description: "One-month premium music subscription.",
        PointsRequired: "700",
        image: "https://i.ibb.co/zJZSFMy/pngegg-8-1.png",
        _id: "6",
    },
    {
        Reward: "Gift Card",
        Description: "Redeemable gift card for popular stores.",
        PointsRequired: "500",
        image: "https://i.ibb.co/7GFw0Vd/pngegg-9-1.png",
        _id: "7",
    },
    {
        Reward: "Discount Coupon",
        Description: "10% discount coupon for your next purchase.",
        PointsRequired: "300",
        image: "https://i.ibb.co/GRG51XT/clipart3163494-1.png",
        _id: "8",
    },
    {
        Reward: "Free Coffee",
        Description: "Get a free coffee at any participating cafe.",
        PointsRequired: "150",
        image: "https://i.ibb.co/wLHjpTn/pngwing-com-2-1.png",
        _id: "9",
    },
    {
        Reward: "Movie Ticket",
        Description: "One movie ticket at selected cinemas.",
        PointsRequired: "400",
        image: "https://i.ibb.co/S7Lgx7q/Pik-Png-com-networking-png-2454917-1.png",
        _id: "10",
    },
    {
        Reward: "Fitness Class",
        Description: "One free fitness class at partnered gyms.",
        PointsRequired: "600",
        image: "https://i.ibb.co/Rv1Z8zS/pngwing-com-1-1.png",
        _id: "11",
    },
    {
        Reward: "Music Subscription",
        Description: "One-month premium music subscription.",
        PointsRequired: "700",
        image: "https://i.ibb.co/zJZSFMy/pngegg-8-1.png",
        _id: "12",
    },
    {
        Reward: "Gift Card",
        Description: "Redeemable gift card for popular stores.",
        PointsRequired: "500",
        image: "https://i.ibb.co/7GFw0Vd/pngegg-9-1.png",
        _id: "13",
    },
    {
        Reward: "Discount Coupon",
        Description: "10% discount coupon for your next purchase.",
        PointsRequired: "300",
        image: "https://i.ibb.co/GRG51XT/clipart3163494-1.png",
        _id: "14",
    },
    {
        Reward: "Free Coffee",
        Description: "Get a free coffee at any participating cafe.",
        PointsRequired: "150",
        image: "https://i.ibb.co/wLHjpTn/pngwing-com-2-1.png",
        _id: "15",
    },
    {
        Reward: "Movie Ticket",
        Description: "One movie ticket at selected cinemas.",
        PointsRequired: "400",
        image: "https://i.ibb.co/S7Lgx7q/Pik-Png-com-networking-png-2454917-1.png",
        _id: "16",
    },
    {
        Reward: "Fitness Class",
        Description: "One free fitness class at partnered gyms.",
        PointsRequired: "600",
        image: "https://i.ibb.co/Rv1Z8zS/pngwing-com-1-1.png",
        _id: "17",
    },
    {
        Reward: "Music Subscription",
        Description: "One-month premium music subscription.",
        PointsRequired: "700",
        image: "https://i.ibb.co/zJZSFMy/pngegg-8-1.png",
        _id: "18",
    },
    {
        Reward: "Gift Card",
        Description: "Redeemable gift card for popular stores.",
        PointsRequired: "500",
        image: "https://i.ibb.co/7GFw0Vd/pngegg-9-1.png",
        _id: "19",
    },
    {
        Reward: "Discount Coupon",
        Description: "10% discount coupon for your next purchase.",
        PointsRequired: "300",
        image: "https://i.ibb.co/GRG51XT/clipart3163494-1.png",
        _id: "20",
    },
];

const RewardzPage = () => {
    return (
        <>
            <div className='container mx-auto mt-10'>
                <Rewards />
                <Heading
                    headingText="REWARDZ"
                    subHeadingText="Select a Reward"
                />
                <SearchAndSortComponent />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {
                        playersData?.map(item => <RewardzCards item={item} key={item?._id} />)
                    }
                </div>
            </div>
            <div style={{
                backgroundImage: `url(${rewardbg.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }} className="flex flex-col items-center justify-between mb-10 box-border w-full">
                <div className="w-full md:flex md:items-center md:justify-between container mx-auto  min-h-[600px]">
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-blue-900 mb-4">
                            Send Tippz. Earn Rewardz! Win Prizes!!
                        </h2>
                        <p className="text-lg text-gray-700 mb-4">
                            When you send Tippz you will earn reward points that can be redeemed for exclusive prizes and you will be entered into weekly drawings.
                        </p>
                        <ul className="mt-4 space-y-2">
                            {['Sports Merchandise', 'Cash Prizes', 'Tickets & More'].map((item, index) => (
                                <li key={index} className="flex items-center text-gray-700 justify-center md:justify-start">
                                    <FaLongArrowAltRight className="text-blue-700 mr-2" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 flex justify-center md:justify-start">
                            <a href="#" className="text-blue-700 font-semibold flex items-center">
                                Download Today <FaLongArrowAltRight className="ml-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RewardzPage

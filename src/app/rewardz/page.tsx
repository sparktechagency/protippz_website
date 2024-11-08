import Rewards from '@/components/rewardz/Rewards';
import RewardzCards from '@/components/rewardz/RewardzCards';
import SearchAndSortComponent from '@/components/rewardz/SearchAndSortComponent';
import Heading from '@/components/Shared/Heading';
import React from 'react'
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
    )
}

export default RewardzPage

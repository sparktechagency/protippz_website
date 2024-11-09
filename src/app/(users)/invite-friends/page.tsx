import React from 'react';
import { Button } from 'antd';

const InviteFriendsPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-center text-[#053697] text-4xl font-bold mb-2">
                Invite Friends
            </h2>
            <p className="text-center text-green-500 mb-8">
                Bring Friends, Earn Rewards!
            </p>

            <div className="mb-12">
                <h3 className="text-[#333] text-2xl font-semibold">
                    Introduction
                </h3>
                <p className="text-gray-700">
                    At PROTIPPZ, we believe sports are better with friends. Now you can share the fun of Tippzing, earn rewards together, and celebrate every win as a team. Invite your friends to join PROTIPPZ and unlock exclusive bonuses for each friend who signs up!
                </p>
            </div>
            <div className="mb-12">
                <h3 className="text-[#333] text-2xl font-semibold">
                    How It Works
                </h3>
                <div className="mb-4">
                    <p className="font-bold">1. Invite</p>
                    <p className="text-gray-700 ml-4">
                        Use the “Invite Friends” button below to share your unique referral link via text, email, or social media.
                    </p>
                </div>
                <div className="mb-4">
                    <p className="font-bold">2. Sign Up</p>
                    <p className="text-gray-700 ml-4">
                        When your friends sign up using your link, they’ll join the PROTIPPZ community where they can Tippz, win rewards, and participate in exclusive fan events.
                    </p>
                </div>
                <div className="mb-4">
                    <p className="font-bold">3. Earn Rewards</p>
                    <p className="text-gray-700 ml-4">
                        For each friend who joins, you’ll earn 100 points/credits that you can redeem for special rewards, exclusive gear, or event tickets.
                    </p>
                </div>
            </div>
            <div className="text-center mb-12">
                <h3 className="text-[#333] text-2xl font-semibold">
                    Ready to Get Started?
                </h3>
                <p className="font-semibold mb-2">Invite Friends Now</p>
                <p className="text-gray-700 mb-6">
                    Click below to start inviting friends and watch your rewards grow!
                </p>
                <Button type="primary" className="bg-green-500 h-[42px] text-white font-semibold px-8 py-2 rounded-md">
                    Invite Friends
                </Button>
            </div>
        </div>
    );
};

export default InviteFriendsPage;

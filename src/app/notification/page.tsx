import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';

const notifications = [
    {
        title: "Payment successfully completed",
        message: "$500 has been added to your account. Start Tipping and cheer for your favorite teams.",
        date: "24 July 2024 at 8:32 PM"
    },
    {
        title: "Congratulations! 🎁",
        message: "You've earned enough points to redeem sports shoe. Visit the Rewards section to claim it now.",
        date: "22 July 2024 at 8:32 PM"
    },
    {
        title: "Don't miss out!",
        message: "Add funds to your account to keep sending Tippz and boost your favorite players.",
        date: "17 July 2024 at 8:32 PM"
    },
    {
        title: "🎉 Start Tippzing Today!",
        message: "Show your support for your favorite players and teams by sending Tippz. Earn rewards and win exciting prizes!",
        date: "12 July 2024 at 8:32 PM"
    },
    {
        title: "Keep your streak alive!",
        message: "You’ve Tippzed every day this week. Tippz today to extend your streak and earn bonus points.",
        date: "10 July 2024 at 8:32 PM"
    }
];

const NotificationPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-blue-700 mb-12 text-center">Notifications</h1>
            <div className="space-y-4">
                {notifications.map((notification, index) => (
                    <div key={index} className="flex justify-between items-start border-b pb-4">
                        <div>
                            <h2 className="text-lg font-semibold text-blue-700">{notification.title}</h2>
                            <p className="text-green-600">{notification.message}</p>
                        </div>
                        <div className="flex items-center text-green-500 space-x-2">
                            <AiOutlineClockCircle className="text-xl" />
                            <span className="text-sm">{notification.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotificationPage;

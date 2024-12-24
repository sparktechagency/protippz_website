'use client'
interface Tip {
    date: string;
    fanName: string;
    amount: string;
    avatar: string;
}
const tipsData: Tip[] = [
    { date: '12/06/24', fanName: 'Devon Lane', amount: '$100', avatar: 'https://placehold.co/400' },
    { date: '10/06/24', fanName: 'Marvin McKinney', amount: '$5', avatar: 'https://placehold.co/400' },
    { date: '10/06/24', fanName: 'Guy Hawkins', amount: '$25', avatar: 'https://placehold.co/400' },
    { date: '05/06/24', fanName: 'Floyd Miles', amount: '$150', avatar: 'https://placehold.co/400' },
    { date: '04/06/24', fanName: 'Eleanor Pena', amount: '$50', avatar: 'https://placehold.co/400' },
    { date: '04/06/24', fanName: 'Jerome Bell', amount: '$10', avatar: 'https://placehold.co/400' },
    { date: '04/06/24', fanName: 'Floyd Miles', amount: '$100', avatar: 'https://placehold.co/400' },
    { date: '04/06/24', fanName: 'Robert Fox', amount: '$200', avatar: 'https://placehold.co/400' },
];

const myTipHistoryPage = () => {
    return (
        <div className="flex flex-col items-center justify-center  w-full max-w-2xl py-5">
            <p className='w-full text-[#053697] text-5xl text-center mb-4'>Tippz History</p>
            <div className="flex justify-center items-center ">
                <div className="w-full overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        {/* Table Header */}
                        <thead className="bg-green-100">
                            <tr>
                                <th className="p-4 text-sm font-medium text-gray-600">Date</th>
                                <th className="p-4 text-sm font-medium text-gray-600">Fan's Name</th>
                                <th className="p-4 text-sm font-medium text-gray-600">Tippz Amount</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            {tipsData.map((tip, index) => (
                                <tr key={index} className="border-t">
                                    <td className="p-4 text-gray-700">{tip.date}</td>
                                    <td className="p-4 text-gray-700 flex items-center">
                                        <img
                                            src={tip.avatar}
                                            alt={tip.fanName}
                                            className="w-8 h-8 rounded-full mr-3"
                                        />
                                        {tip.fanName}
                                    </td>
                                    <td className="p-4 text-gray-700">{tip.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default myTipHistoryPage

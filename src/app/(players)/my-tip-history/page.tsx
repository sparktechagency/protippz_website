// "use client";
// interface Tip {
//   date: string;
//   fanName: string;
//   amount: string;
//   avatar: string;
// }
// const tipsData: Tip[] = [
//   {
//     date: "12/06/24",
//     fanName: "Devon Lane",
//     amount: "$100",
//     avatar: "https://placehold.co/400",
//   },
//   {
//     date: "10/06/24",
//     fanName: "Marvin McKinney",
//     amount: "$5",
//     avatar: "https://placehold.co/400",
//   },
//   {
//     date: "10/06/24",
//     fanName: "Guy Hawkins",
//     amount: "$25",
//     avatar: "https://placehold.co/400",
//   },
//   {
//     date: "05/06/24",
//     fanName: "Floyd Miles",
//     amount: "$150",
//     avatar: "https://placehold.co/400",
//   },
//   {
//     date: "04/06/24",
//     fanName: "Eleanor Pena",
//     amount: "$50",
//     avatar: "https://placehold.co/400",
//   },
//   {
//     date: "04/06/24",
//     fanName: "Jerome Bell",
//     amount: "$10",
//     avatar: "https://placehold.co/400",
//   },
//   {
//     date: "04/06/24",
//     fanName: "Floyd Miles",
//     amount: "$100",
//     avatar: "https://placehold.co/400",
//   },
//   {
//     date: "04/06/24",
//     fanName: "Robert Fox",
//     amount: "$200",
//     avatar: "https://placehold.co/400",
//   },
// ];

// const myTipHistoryPage = () => {
//   return (
//     <div className="flex flex-col items-center justify-center  w-full max-w-2xl py-5">
//       <p className="w-full text-[#053697] text-5xl text-center mb-4">
//         Tippz History
//       </p>
//       <div className="flex justify-center items-center ">
//         <div className="w-full overflow-hidden">
//           <table className="w-full text-left border-collapse">
//             {/* Table Header */}
//             <thead className="bg-green-100">
//               <tr>
//                 <th className="p-4 text-sm font-medium text-gray-600">Date</th>
//                 <th className="p-4 text-sm font-medium text-gray-600">
//                   Fan's Name
//                 </th>
//                 <th className="p-4 text-sm font-medium text-gray-600">
//                   Tippz Amount
//                 </th>
//               </tr>
//             </thead>

//             {/* Table Body */}
//             <tbody>
//               {tipsData &&
//                 Array.isArray(tipsData) &&
//                 tipsData?.map((tip, index) => (
//                   <tr key={index} className="border-t">
//                     <td className="p-4 text-gray-700">{tip.date}</td>
//                     <td className="p-4 text-gray-700 flex items-center">
//                       <img
//                         src={tip.avatar}
//                         alt={tip.fanName}
//                         className="w-8 h-8 rounded-full mr-3"
//                       />
//                       {tip.fanName}
//                     </td>
//                     <td className="p-4 text-gray-700">{tip.amount}</td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default myTipHistoryPage;
"use client";
import React, { useEffect, useState } from "react";
import { Table, Typography, Avatar } from "antd";
import { get, imageUrl } from "@/ApisRequests/server";

interface Player {
  key: string;
  date: string;
  player: { name: string; avatar: string };
  amount: string;
  points: number;
}

const { Title } = Typography;

interface TipHistoryInterface {
  _id: string;
  user: {
    _id: string;
    name: string;
    user: string;
    email: string;
    profile_image: string;
  };
  entityId: string;
  entityType: string;
  point: number;
  amount: number;
  paymentStatus: string;
  tipBy: string;
  entity: {
    name: string;
    position: string;
    player_image: string;
  };
  createdAt: string;
}
interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}
const TippzHistoryPage = () => {
  const [tipHistory, setTipHistory] = useState<TipHistoryInterface[]>([]);
  const [pagination, setPagination] = useState<Pagination>();
  const [page, setPage] = useState(1);
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (_: any, record: TipHistoryInterface) => (
        <span>{record?.createdAt?.split("T")?.[0]}</span>
      ),
    },
    {
      title: "Fan's Name",
      dataIndex: "user",
      key: "user",
      render: (_: any, record: TipHistoryInterface) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar
            src={imageUrl(record?.user?.user)}
            alt={record?.user?.profile_image}
            style={{ marginRight: 8 }}
          />
          <span>{record?.entity?.name}</span>
        </div>
      ),
    },
    {
      title: "Tippz Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount: number) => <span>${amount}</span>,
    },
    // {
    //   title: "Points",
    //   dataIndex: "point",
    //   key: "point",
    // },
  ];

  useEffect(() => {
    const getMyTip = async () => {
      const res = await get(`/tip/my-tips?page=${page}`, {
        headers: {
          Authorization: `${
            typeof localStorage === "undefined"
              ? ""
              : localStorage.getItem("token")
          }`,
        },
      });
      setTipHistory(res.data?.result);
      setPagination(res.data?.meta);
    };
    getMyTip();
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <Title level={2} style={{ color: "#1A73E8" }}>
        Tippz History
      </Title>
      <Table
        columns={columns}
        dataSource={tipHistory}
        pagination={{
          pageSize: pagination?.limit,
          total: pagination?.total,
          onChange: (page) => setPage(page),
        }}
        bordered
        style={{ maxWidth: "800px", margin: "auto", marginTop: "20px" }}
        rowClassName={(record, index) =>
          index % 2 === 0 ? "even-row" : "odd-row"
        }
      />
    </div>
  );
};

export default TippzHistoryPage;

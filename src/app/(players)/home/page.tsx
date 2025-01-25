"use client";
import EmailVerfiyModal from "@/components/UserEmail/EmailVerifyModal";
import { useContextData } from "@/provider/ContextProvider";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoChevronBack, IoChevronForwardSharp } from "react-icons/io5";

const PlayerHomePage = () => {
  const data = useContextData();
  const verifyEmail = data?.userData?.user?.email;
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!verifyEmail) {
      setShowModal(true);
    }
  }, [verifyEmail]);

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <EmailVerfiyModal />
        </div>
      )}

      {/* Main Content */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-4">
          <div className="px-12 py-4 flex flex-col items-center justify-center rounded-md bg-slate-200 ">
            <h1 className="text-lg font-medium text-[#2FC191]">
              Amount of Tippz
            </h1>
            <span className="text-[#053697] text-2xl">
              $ {data?.userData?.dueAmount?.toString() || 0}
            </span>
          </div>
          <div className="px-12 py-4 flex flex-col items-center justify-center rounded-md bg-slate-200 ">
            <h1 className="text-lg font-medium  text-[#2FC191]">
              Current Balance
            </h1>
            <span className="text-[#053697] text-2xl">
              $ {data?.userData?.totalTips?.toString() || 0}
            </span>
          </div>
        </div>
        <Link
          href={`/player-withdraw`}
          className="mt-4 block px-6 py-2 bg-[#053697] text-white font-medium rounded-lg hover:bg-blue-700 transition"
        >
          Withdraw Now
        </Link>
      </div>

      <div className="w-full max-w-xl bg-white  rounded-lg p-6">
        <div className="mb-4 flex justify-between items-center border  p-2 py-0 rounded-md border-[#2FC191]">
          <p className="block text-sm font-medium text-[#053697]">
            Player Name:
          </p>
          <p className=" rounded-md px-3 py-2 text-[#2FC191]">
            {data?.userData?.name || "N/A"}
          </p>
        </div>
        <div className="mb-4 flex justify-between items-center border  p-2 py-0 rounded-md border-[#2FC191]">
          <p className="block text-sm font-medium text-[#053697]">email:</p>
          <p className=" rounded-md px-3 py-2 text-[#2FC191]">
            {data?.userData?.user?.email || "N/A"}
          </p>
        </div>
        <div className="mb-4 flex justify-between items-center border  p-2 py-0 rounded-md border-[#2FC191]">
          <p className="block text-sm font-medium text-[#053697]">Address:</p>
          <p className=" rounded-md px-3 py-2 text-[#2FC191]">
            1901 Thornridge Cir. Shiloh, Hawaii 81063, New York
            <Link
              href={`/address`}
              className="text-[#053697] hover:underline text-sm ml-5"
            >
              ✏️
            </Link>
          </p>
        </div>

        {/* Tippz History */}
        <div className="mb-4 p-2  rounded-md border border-[#2FC191]">
          <Link
            href={`/my-tip-history`}
            className="w-full text-left text-[#053697] font-medium hover:underline flex justify-between items-center"
          >
            Tippz History <IoChevronForwardSharp />
          </Link>
        </div>

        {/* Tax Information */}
        <div className=" p-2  rounded-md border border-[#2FC191]">
          <Link
            href={`/tax-information`}
            className="w-full text-left text-[#053697] font-medium hover:underline flex justify-between items-center"
          >
            Tax Information <IoChevronForwardSharp />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlayerHomePage;

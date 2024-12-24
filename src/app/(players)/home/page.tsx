import Link from 'next/link'
import React from 'react'
import { IoChevronBack, IoChevronForwardSharp } from 'react-icons/io5'

const PlayerHomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="text-center mb-6">
                <h1 className="text-lg font-medium text-[#2FC191]">
                    Amount of Tippz: <span className="text-[#053697] text-2xl">$2550</span>
                </h1>
                <Link href={`/player-withdraw`} className="mt-4 block px-6 py-2 bg-[#053697] text-white font-medium rounded-lg hover:bg-blue-700 transition">
                    Withdraw Now
                </Link>
            </div>

            <div className="w-full max-w-xl bg-white  rounded-lg p-6">
                <div className="mb-4 flex justify-between items-center border  p-2 py-0 rounded-md border-[#2FC191]">
                    <p className="block text-sm font-medium text-[#053697]">Player Name:</p>
                    <p className=" rounded-md px-3 py-2 text-[#2FC191]">
                        Robert Smith
                    </p>
                </div>
                <div className="mb-4 flex justify-between items-center border  p-2 py-0 rounded-md border-[#2FC191]">
                    <p className="block text-sm font-medium text-[#053697]">Team Name:</p>
                    <p className=" rounded-md px-3 py-2 text-[#2FC191]">
                        New York Liberty
                    </p>
                </div>
                <div className="mb-4 flex justify-between items-center border  p-2 py-0 rounded-md border-[#2FC191]">
                    <p className="block text-sm font-medium text-[#053697]">Address:</p>
                    <p className=" rounded-md px-3 py-2 text-[#2FC191]">
                        1901 Thornridge Cir. Shiloh, Hawaii 81063, New York
                        <Link href={`/address`} className="text-blue-500 hover:underline text-sm ml-5">✏️</Link>
                    </p>
                </div>


                {/* Tippz History */}
                <div className="mb-4 p-2  rounded-md border border-[#2FC191]">
                    <Link href={`/my-tip-history`} className="w-full text-left text-[#053697] font-medium hover:underline flex justify-between items-center">
                        Tippz History <IoChevronForwardSharp />
                    </Link>
                </div>

                {/* Tax Information */}
                <div className=' p-2  rounded-md border border-[#2FC191]'>
                    <Link href={`/`} className="w-full text-left text-[#053697] font-medium hover:underline flex justify-between items-center">
                        Tax Information <IoChevronForwardSharp />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PlayerHomePage

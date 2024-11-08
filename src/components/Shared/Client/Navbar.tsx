'use client'
import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { IoMdMenu } from 'react-icons/io';
import logo from '@/Assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
    const [drawerVisible, setDrawerVisible] = useState(false);

    const showDrawer = () => {
        setDrawerVisible(true);
    };

    const closeDrawer = () => {
        setDrawerVisible(false);
    };

    return (
        <div className='p-4 bg-white shadow-md'>
            <nav className="flex items-center justify-between container mx-auto">
                <Link href={`/`}>
                    <Image src={logo} height={900} width={900} alt='logo' className='w-fit h-14' />
                </Link>

                <ul className="hidden md:flex space-x-6 text-blue-500">
                    <li>
                        <Link href="/tippz" className="hover:text-[#053697] cursor-pointer">TIPPZ</Link>
                    </li>
                    <li>
                        <Link href="/playerz" className="hover:text-[#053697] cursor-pointer">PLAYERZ</Link>
                    </li>
                    <li>
                        <Link href="/teamz" className="hover:text-[#053697] cursor-pointer">TEAMZ</Link>
                    </li>
                    <li>
                        <Link href="/rewardz" className="hover:text-[#053697] cursor-pointer">REWARDZ</Link>
                    </li>
                    <li>
                        <Link href="/store" className="hover:text-[#053697] cursor-pointer">STORE</Link>
                    </li>
                </ul>

                <Link href={`/sign-in`} className="hidden md:inline-block bg-[#2FC191] hover:bg-[#55ddb0] p-[6px] px-4 rounded-md text-white transition-all">
                    Sign In
                </Link>

                <div className="md:hidden flex items-center">
                    <Button icon={<IoMdMenu />} onClick={showDrawer} />
                </div>

                <Drawer
                    title={<Image src={logo} height={900} width={900} alt='logo' className='w-fit h-14' />}
                    placement="right"
                    onClose={closeDrawer}
                    open={drawerVisible}
                    className="text-blue-500"
                >
                    <ul className="space-y-4">
                        <li>
                            <Link href="/tippz" className="hover:text-[#053697] cursor-pointer">TIPPZ</Link>
                        </li>
                        <li>
                            <Link href="/playerz" className="hover:text-[#053697] cursor-pointer">PLAYERZ</Link>
                        </li>
                        <li>
                            <Link href="/teamz" className="hover:text-[#053697] cursor-pointer">TEAMZ</Link>
                        </li>
                        <li>
                            <Link href="/rewardz" className="hover:text-[#053697] cursor-pointer">REWARDZ</Link>
                        </li>
                        <li>
                            <Link href="/store" className="hover:text-[#053697] cursor-pointer">STORE</Link>
                        </li>
                    </ul>
                    <Link href={`/sign-in`} onClick={closeDrawer} className="md:hidden block w-full mt-3 bg-[#2FC191] hover:bg-[#55ddb0] p-[6px] px-4 rounded-md text-white transition-all">
                        Sign In
                    </Link>
                </Drawer>
            </nav>
        </div>
    );
};

export default Navbar;

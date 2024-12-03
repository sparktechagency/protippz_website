'use client'
import React, { useState } from 'react';
import { Button, Drawer, Dropdown, Menu } from 'antd';
import { IoIosNotificationsOutline, IoMdMenu } from 'react-icons/io';
import logo from '@/Assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { FaDollarSign, FaRegUserCircle, FaStar } from 'react-icons/fa';

const Navbar: React.FC = () => {
    const [drawerVisible, setDrawerVisible] = useState(false);

    const showDrawer = () => {
        setDrawerVisible(true);
    };

    const closeDrawer = () => {
        setDrawerVisible(false);
    };

    // Dropdown menu for user options
    const userMenu = (
        <Menu>
            <Menu.Item key="1">
                <Link href="/profile">My Profile</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link href="/deposit">Deposit Funds</Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link href="/withdraw">Withdraw Funds</Link>
            </Menu.Item>
            <Menu.Item key="4">
                <Link href="/tippz-history">TIPPZ HISTORY</Link>
            </Menu.Item>
            <Menu.Item key="5">
                <Link href="/transaction-log">Transaction Log</Link>
            </Menu.Item>
            <Menu.Item key="6">
                <Link href="/favorites">Favorites</Link>
            </Menu.Item>
            <Menu.Item key="7">
                <Link href="/faqs">FAQs</Link>
            </Menu.Item>
            <Menu.Item key="8">
                <Link href="/settings">Settings</Link>
            </Menu.Item>
            <Menu.Item key="9">
                <Link href="/invite-friends">Invite Friends</Link>
            </Menu.Item>
            <Menu.Item key="10">
                <Link href="/contact">Contact Us</Link>
            </Menu.Item>
            <Menu.Item key="11">
                <Link href="/sign-out">Sign out</Link>
            </Menu.Item>
        </Menu>
    );

    return (
        <div className='p-4 bg-white shadow-md'>
            <nav className="flex items-center justify-between container mx-auto">
                <Link href={`/`}>
                    <Image src={logo} height={900} width={900} alt='logo' className='w-fit h-14' />
                </Link>

                {/* Desktop Navigation Links */}
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

                {/* Action Buttons for Desktop */}
                <div className="hidden md:flex items-center space-x-4">
                    <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-green-100">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white border border-green-500">
                                {/* <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" stroke="#38A169" strokeWidth="2" />
                                    <text x="12" y="16" textAnchor="middle" fontSize="12" fill="#38A169" fontWeight="bold">$</text>
                                </svg> */}
                                <FaDollarSign className='text-green-500' />
                            </span>
                            <span className="text-green-800 font-semibold">1500</span>
                        </div>
                        <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-green-100">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white border border-green-500">
                                {/* <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" stroke="#38A169" strokeWidth="2" />
                                    <text x="12" y="16" textAnchor="middle" fontSize="12" fill="#38A169" fontWeight="bold">*</text>
                                </svg> */}
                                <FaStar className='text-green-500' />
                            </span>
                            <span className="text-green-800 font-semibold">1200</span>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <Link href={`/notification`} className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                            <IoIosNotificationsOutline className="text-green-500" style={{ fontSize: '18px' }} />
                        </Link>
                        <Dropdown overlay={userMenu} trigger={['click']}>
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 cursor-pointer">
                                <FaRegUserCircle className="text-green-500" style={{ fontSize: '18px' }} />
                            </div>
                        </Dropdown>
                    </div>
                    <Link href={`/sign-in`} className="bg-[#2FC191] hover:bg-[#55ddb0] p-[6px] px-4 rounded-md text-white transition-all whitespace-nowrap">
                        Sign In
                    </Link>
                </div>

                {/* Drawer for Mobile */}
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
                    <div className="flex items-center space-x-4 mt-4">
                        <Link href={`/notification`} className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                            <IoIosNotificationsOutline className="text-green-500" style={{ fontSize: '18px' }} />
                        </Link>
                        <Dropdown overlay={userMenu} trigger={['click']}>
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 cursor-pointer">
                                <FaRegUserCircle className="text-green-500" style={{ fontSize: '18px' }} />
                            </div>
                        </Dropdown>
                    </div>
                    <Link href={`/sign-in`} onClick={closeDrawer} className="block w-full mt-3 bg-[#2FC191] hover:bg-[#55ddb0] p-[6px] px-4 rounded-md text-white transition-all">
                        Sign In
                    </Link>
                </Drawer>
            </nav>
        </div>
    );
};

export default Navbar;

'use client';

import React, { useState } from 'react';
import { Form, Radio, Input, Button } from 'antd';
import Image from 'next/image';
import ach from "@/Assets/ach.png";
import check2 from "@/Assets/check2.png";
import { useContextData } from '@/provider/ContextProvider';
import toast from 'react-hot-toast';

const WithdrawFundForm = () => {
    const data = useContextData()
    const [paymentMethod, setPaymentMethod] = useState('ach');
    const [amount, setAmount] = useState(data?.userData?.totalAmount || 0);
    return (
        <div style={{
            width: '100vw'
        }} className='w-full container mx-auto'>
            <div className="w-full p-8 bg-white rounded-lg max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-3 text-blue-900"> Withdraw Funds</h2>
                <h2 className="text-3xl font-semibold text-center mb-6 text-blue-900"> <span className='text-[#2FC191]'>Total Funds : </span> ${data?.userData?.totalAmount}</h2>
                <Form.Item
                    name={`amount`}
                >
                    <div className='flex justify-center items-center gap-3 max-w-[400px] mx-auto md:flex-row flex-col'>
                        <p className='text-blue-900 text-2xl whitespace-nowrap'>Enter amount</p>
                        <Input value={amount} onChange={(e) => {
                            toast.dismiss()
                            if (!data?.userData?.totalAmount) {
                                return toast.error('insufficient balance')
                            }
                            if (Number(e.target.value) > data?.userData?.totalAmount) {
                                return toast.error('insufficient balance')
                            }
                            setAmount(Number(e.target.value))
                        }} type='number' placeholder='Enter Your Amount' />
                    </div>
                </Form.Item>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-2/5 p-4 border rounded-lg ">
                        <Form.Item>
                            <Radio.Group
                                value={paymentMethod}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                className="w-full"
                            >
                                <div className="flex items-center p-3 border rounded-lg border-green-400">
                                    <Radio value="ach" className="flex items-center">
                                        <div className='flex flex-nowrap gap-3 items-center justify-between'>
                                            <span className="font-medium text-lg text-blue-900">ACH</span>
                                            <Image alt="ACH" height={400} width={800} src={ach} className="w-[100px]" />
                                        </div>
                                    </Radio>
                                </div>
                                <div className="flex items-center p-3 border rounded-lg border-green-400 mt-4">
                                    <Radio value="check" className="flex items-center">
                                        <div className='flex flex-nowrap gap-3 items-center justify-between'>
                                            <span className="font-medium text-lg text-blue-900">Check</span>
                                            <Image alt="Check" height={100} width={100} src={check2} className="w-[50px]" />
                                        </div>
                                    </Radio>
                                </div>
                            </Radio.Group>
                        </Form.Item>
                    </div>
                    <div className="w-full md:w-3/5 p-4 bg-gray-50 rounded-lg">
                        {paymentMethod === 'ach' ? (
                            <Form layout='vertical'>
                                <Form.Item label={<span className="text-lg font-medium text-blue-900">Bank Account Number</span>} className="mt-4">
                                    <Input
                                        placeholder="Name here"
                                        className="rounded-lg border border-green-400"
                                    />
                                </Form.Item>

                                <Form.Item label={<span className="text-lg font-medium text-blue-900">Routing Number</span>} className="mt-4">
                                    <Input
                                        placeholder="Name here"
                                        className="rounded-lg border border-green-400"
                                    />
                                </Form.Item>

                                <Form.Item label={<span className="text-lg font-medium text-blue-900">Account Type</span>} className="mt-4">
                                    <Input
                                        placeholder="Name here"
                                        className="rounded-lg border border-green-400"
                                    />
                                </Form.Item>

                                <Form.Item label={<span className="text-lg font-medium text-blue-900">Bank Name</span>} className="mt-4">
                                    <Input
                                        placeholder="Name here"
                                        className="rounded-lg border border-green-400"
                                    />
                                </Form.Item>

                                <Form.Item label={<span className="text-lg font-medium text-blue-900">Account Holder Name</span>} className="mt-4">
                                    <Input
                                        placeholder="Name here"
                                        className="rounded-lg border border-green-400"
                                    />
                                </Form.Item>
                            </Form>
                        ) : (
                            <Form layout='vertical'>
                                <Form.Item label={<span className="text-lg font-medium text-blue-900">Full Name</span>} className="mt-4">
                                    <Input
                                        placeholder="Name here"
                                        className="rounded-lg border border-green-400"
                                    />
                                </Form.Item>

                                <Form.Item label={<span className="text-lg font-medium text-blue-900">Mailing Address</span>} className="mt-4">
                                    <Form.Item label="Street Address" className="mb-2">
                                        <Input
                                            placeholder="Name here"
                                            className="rounded-lg border border-green-400"
                                        />
                                    </Form.Item>
                                    <Form.Item label="City" className="mb-2">
                                        <Input
                                            placeholder="Name here"
                                            className="rounded-lg border border-green-400"
                                        />
                                    </Form.Item>
                                    <Form.Item label="State" className="mb-2">
                                        <Input
                                            placeholder="Name here"
                                            className="rounded-lg border border-green-400"
                                        />
                                    </Form.Item>
                                    <Form.Item label="Zip Code" className="mb-2">
                                        <Input
                                            placeholder="Name here"
                                            className="rounded-lg border border-green-400"
                                        />
                                    </Form.Item>
                                </Form.Item>

                            </Form>
                        )}
                        <Form.Item className="mt-6">
                            <Button type="primary" htmlType="submit" className="w-full bg-[#053697] h-[42px] text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                                Withdraw Now
                            </Button>
                        </Form.Item>
                    </div>
                </div>
            </div>
        </div>
    );
};

const WithdrawCheckout = () => {
    return (
        <div className="my-10">
            <WithdrawFundForm />
        </div>
    );
};

export default WithdrawCheckout;

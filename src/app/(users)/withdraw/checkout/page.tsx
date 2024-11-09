'use client';

import React, { useState } from 'react';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import { Form, Radio, Input, Button } from 'antd';
import Image from 'next/image';
import cards from "@/Assets/cards.png";
import ach from "@/Assets/ach.png";
import check2 from "@/Assets/check2.png";

const stripePromise: Promise<Stripe | null> = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || '');

const WithdrawFundForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentMethod, setPaymentMethod] = useState('credit');
    const [amount, setAmount] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (paymentMethod === 'credit' && stripe && elements) {
            const cardElement = elements.getElement(CardElement);
            const { error, paymentIntent } = await stripe.confirmCardPayment(
                'YOUR_CLIENT_SECRET',
                {
                    payment_method: {
                        card: cardElement!,
                        billing_details: {
                            name: 'Customer Name',
                        },
                    },
                }
            );
            if (error) {
                console.error(error);
            } else {
                console.log('Payment success:', paymentIntent);
            }
        } else if (paymentMethod === 'paypal') {
            console.log('Process PayPal payment');
        }
    };
    return (
        <div style={{
            width: '100vw'
        }} className='w-full container mx-auto'>
            <Form onSubmitCapture={handleSubmit} layout="vertical" className="w-full p-8 bg-white rounded-lg max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-3 text-blue-900"> Withdraw Funds</h2>
                <h2 className="text-3xl font-semibold text-center mb-6 text-blue-900"> <span className='text-[#2FC191]'>Total Funds:</span> $1500</h2>
                <Form.Item
                    name={`amount`}
                >
                    <div className='flex justify-center items-center gap-3 max-w-[400px] mx-auto md:flex-row flex-col'>
                        <p className='text-blue-900 text-2xl whitespace-nowrap'>Enter amount</p>
                        <Input type='number' placeholder='Enter Your Amount' />
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
                                <div className="flex items-center mb-4 p-3 border rounded-lg border-green-400">
                                    <Radio value="credit" className="flex items-center ">
                                        <div className='flex flex-nowrap gap-3 items-center'>
                                            <p className="font-medium text-lg text-blue-900 whitespace-nowrap">Credit Card</p>
                                            <Image alt="Credit Card Logos" height={400} width={800} src={cards} className="w-[140px]" />
                                        </div>
                                    </Radio>
                                </div>
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
                        {paymentMethod === 'credit' ? (
                            <>
                                <Form.Item label={<span className="text-lg font-medium text-blue-900">Card Holder’s Name</span>} className="mb-4">
                                    <Input placeholder="Name here" className="rounded-lg border border-green-400" />
                                </Form.Item>
                                <Form.Item label={<span className="text-lg font-medium text-blue-900">Card Number</span>} className="mb-4">
                                    <CardElement options={{ style: { base: { fontSize: '16px', color: '#424770', '::placeholder': { color: '#9ca3af' } } } }} className="border border-green-400 rounded-lg p-2" />
                                </Form.Item>
                                <div className="flex gap-4">
                                    <Form.Item label={<span className="text-lg font-medium text-blue-900">Expire Date</span>} className="flex-1 mb-4">
                                        <Input placeholder="MM/YY" className="rounded-lg border border-green-400" />
                                    </Form.Item>
                                    <Form.Item label={<span className="text-lg font-medium text-blue-900">CVV</span>} className="flex-1 mb-4">
                                        <Input placeholder="CVV" className="rounded-lg border border-green-400" />
                                    </Form.Item>
                                </div>
                            </>
                        ) : paymentMethod === 'ach' ? (
                            <div>
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
                            </div>
                        ) : (
                            <div>
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

                            </div>
                        )}
                        <Form.Item className="mt-6">
                            <Button type="primary" htmlType="submit" className="w-full bg-[#053697] h-[42px] text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                                Withdraw Now
                            </Button>
                        </Form.Item>
                    </div>
                </div>
            </Form>
        </div>
    );
};

const WithdrawCheckout = () => {
    return (
        <div className="my-10">
            <Elements stripe={stripePromise}>
                <WithdrawFundForm />
            </Elements>
        </div>
    );
};

export default WithdrawCheckout;

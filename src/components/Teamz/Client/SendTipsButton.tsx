'use client'
import React, { useState } from 'react';
import { Modal, Form, Input, Radio, Button } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Player {
    name: string;
    sport: string;
    image: string;
    isFavorite: boolean;
    _id: string;
}

interface SendTipsButtonProps {
    item: Player;
}

const SendTipsButton: React.FC<SendTipsButtonProps> = ({ item }) => {
    const router = useRouter()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const [isOopsModalOpen, setIsOopsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setIsPaymentModalOpen(false);
        setIsOopsModalOpen(false);
    };

    const handleFormSubmit = (values: any) => {
        console.log('Submitted values:', values);
        setIsModalOpen(false);
        setIsPaymentModalOpen(true); // Open payment modal
    };

    const handlePaymentSubmit = () => {
        console.log('Payment method selected');
        setIsPaymentModalOpen(false); // Close payment modal
        setIsOopsModalOpen(true); // Open "Oops!" modal
    };

    return (
        <>
            <button onClick={showModal} className="bg-[#053697] text-white font-bold py-2 px-4 rounded-md hover:bg-[#184eb9] focus:outline-none">
                Send Tippz
            </button>
            <Modal
                title=""
                visible={isModalOpen}
                onCancel={handleCancel}
                footer={null}
                centered
                width={400}
            >
                <div className="text-center">
                    <Image
                        src={item.image}
                        alt={item.name}
                        width={100}
                        height={100}
                        className="rounded-full mx-auto mb-4"
                        unoptimized
                    />
                    <h2 className="text-xl font-bold text-blue-900">{item.name}</h2>
                    <p><span className="text-green-500 font-semibold">League:</span> {item.name}</p>
                    <p><span className="text-green-500 font-semibold">Sport:</span> {item.sport}</p>
                </div>
                <Form
                    onFinish={handleFormSubmit}
                    layout="vertical"
                    className="mt-6"
                >
                    <Form.Item label="Select Your Amount" name="amountOption">
                        <Radio.Group>
                            <Radio value={5}>$5</Radio>
                            <Radio value={25}>$25</Radio>
                            <Radio value={100}>$100</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item label="Enter Your Amount" name="customAmount">
                        <Input placeholder="Enter amount" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="bg-[#053697] w-full">
                            Send Tippz
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>

            {/* Payment Method Modal */}
            <Modal
                title="Select your payment method"
                visible={isPaymentModalOpen}
                onCancel={handleCancel}
                footer={null}
                centered
                width={400}
            >
                <Form onFinish={handlePaymentSubmit} layout="vertical">
                    <Form.Item name="paymentMethod">
                        <Radio.Group className="w-full">
                            <Radio value="deposit">Send From Deposit Account</Radio>
                            <Radio value="credit">Send From Credit Card/Paypal</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="bg-[#053697] w-full">
                            Continue
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>

            {/* Oops Modal */}
            <Modal
                title="Oops!"
                visible={isOopsModalOpen}
                onCancel={handleCancel}
                footer={null}
                centered
                width={400}
            >
                <div className="text-center">
                    <p className="text-green-500 font-semibold">
                        You don’t have enough funds to continue payment.
                        <br />
                        Please deposit fund to continue.
                    </p>
                    <Button type="primary" onClick={() => router.push('/deposit')} className="bg-[#053697] w-full mt-4">
                        Deposit Fund
                    </Button>
                </div>
            </Modal>
        </>
    );
};

export default SendTipsButton;

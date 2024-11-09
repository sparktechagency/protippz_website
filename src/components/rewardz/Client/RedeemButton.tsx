'use client'
import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';
import check from '@/Assets/check.png'
import Image from 'next/image';

interface SendTipsButtonProps {
    _id: string;
}

const RedeemButton: React.FC<SendTipsButtonProps> = ({ _id }) => {
    const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
    const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
    const [isThirdModalOpen, setIsThirdModalOpen] = useState(false);

    const showFirstModal = () => {
        setIsFirstModalOpen(true);
    };

    const handleFirstModalOk = () => {
        setIsFirstModalOpen(false);
        setIsSecondModalOpen(true);
    };

    const handleFirstModalCancel = () => {
        setIsFirstModalOpen(false);
    };

    const handleSecondModalOk = () => {
        setIsSecondModalOpen(false);
        setIsThirdModalOpen(true);
    };

    const handleSecondModalCancel = () => {
        setIsSecondModalOpen(false);
    };

    const handleThirdModalOk = () => {
        setIsThirdModalOpen(false);
    };

    return (
        <>
            <button onClick={showFirstModal} className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none">
                Redeem
            </button>
            <Modal
                centered
                title="How to receive the prize"
                visible={isFirstModalOpen}
                onOk={handleFirstModalOk}
                onCancel={handleFirstModalCancel}
                footer={[
                    <button onClick={handleFirstModalOk} className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none">
                        Redeem
                    </button>
                ]}
            >
                <p><strong>Verify Your Email Address:</strong> Enter your email address in the provided field and click “Verify.” A verification link will be sent to your email. Open the email and click on the link to confirm your email address. This step is required for digital prizes such as tickets or cash.</p>
                <p className='my-3'><strong>Verify Your Name and Mailing Address:</strong> For physical prizes like gear or merchandise, you will need to provide your full name and mailing address. Enter the required information in the designated fields and click “Submit.” Ensure that the details are accurate to avoid any delivery issues.</p>
                <p><strong>Confirmation:</strong> Once your information is verified, you will receive a confirmation message. For digital prizes, the tickets or cash will be sent to your verified email address. For physical prizes, the items will be shipped to your provided mailing address.</p>
            </Modal>
            <Modal
                centered
                title="Verify Email Address"
                visible={isSecondModalOpen}
                onOk={handleSecondModalOk}
                onCancel={handleSecondModalCancel}
                footer={[
                    <Button key="verify" type="primary" onClick={handleSecondModalOk}>
                        Verify Email
                    </Button>,
                ]}
            >
                <Form layout="vertical">
                    <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
                        <Input className='h-[42px]' placeholder="Your email" />
                    </Form.Item>
                </Form>
            </Modal>
            <Modal
                centered
                visible={isThirdModalOpen}
                onOk={handleThirdModalOk}
                onCancel={handleThirdModalOk}
                footer={null}
            >
                <div className="flex justify-center items-center gap-3 flex-col py-10">
                    <Image src={check} alt='check' height={100} width={100}/>
                    <p className="text-lg font-semibold mt-4">Your email is successfully verified.</p>
                </div>
            </Modal>
        </>
    );
};

export default RedeemButton;

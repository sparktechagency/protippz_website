
'use client'
import React from 'react';
import { Form, Input, Button, Upload } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, HomeOutlined, CameraOutlined } from '@ant-design/icons';
import Image from 'next/image';

interface ProfileFormValues {
    fullName: string;
    email: string;
    username: string;
    phoneNumber: string;
    address: string;
}


const UpdateProfileForm: React.FC = () => {
    const onFinish = (values: ProfileFormValues) => {
        console.log('Form values:', values);
    };

    return (
        <div className="container mx-auto p-8 text-center w-full">
            <h1 className="text-4xl font-bold text-blue-700 mb-8">Edit Profile</h1>

            <div className="flex flex-col items-center mb-6 relative">
                <Upload showUploadList={false}>
                    <Image
                        width={100}
                        height={100}
                        unoptimized
                        src="https://i.ibb.co.com/f4tzYw2/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"
                        alt="Profile"
                        className="w-32 h-32 rounded-full object-cover mb-4"
                    />
                    <div className="text-green-500 text-lg absolute bottom-5 sm:right-32 right-24 bg-white rounded-full p-2 px-3 shadow-lg cursor-pointer">
                        <CameraOutlined />
                    </div>
                </Upload>
            </div>

            <Form<ProfileFormValues>
                layout="vertical"
                onFinish={onFinish}
                className="max-w-lg w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4"
            >
                <Form.Item
                    label="Full Name"
                    name="fullName"
                    initialValue="Robert Smith"
                    rules={[{ required: true, message: 'Please enter your full name' }]}
                >
                    <Input
                        className="custom-input"
                        placeholder="Full Name"
                    />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    initialValue="robertsmithctg23@gmail.com"
                    rules={[
                        { required: true, message: 'Please enter your email' },
                        { type: 'email', message: 'Please enter a valid email' },
                    ]}
                >
                    <Input  className="custom-input" placeholder="Email" prefix={<MailOutlined />} />
                </Form.Item>

                <Form.Item
                    label="User Name"
                    name="username"
                    initialValue="Robert@234"
                    rules={[{ required: true, message: 'Please enter your username' }]}
                >
                    <Input placeholder="User Name" className="custom-input" prefix={<UserOutlined />} />
                </Form.Item>

                <Form.Item
                    label="Phone Number"
                    name="phoneNumber"
                    initialValue="+54645674567"
                    rules={[{ required: true, message: 'Please enter your phone number' }]}
                >
                    <Input className="custom-input" placeholder="Phone Number" prefix={<PhoneOutlined />} />
                </Form.Item>

                <Form.Item
                    label="Address"
                    name="address"
                    initialValue="1901 Thornridge Cir. Shiloh, Hawaii 81063, New York"
                    rules={[{ required: true, message: 'Please enter your address' }]}
                    className="col-span-2"
                >
                    <Input className="custom-input" placeholder="Address" prefix={<HomeOutlined />} />
                </Form.Item>

                <Form.Item className="col-span-2">
                    <Button type="primary" htmlType="submit" className="w-full bg-blue-700 hover:bg-blue-800">
                        Save
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};


export default UpdateProfileForm

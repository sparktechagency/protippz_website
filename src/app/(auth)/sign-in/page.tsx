'use client';

import React, { useState } from 'react';
import { Button, Input, Checkbox, Typography, Form } from 'antd';
import { FaGoogle } from 'react-icons/fa6';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import Image from 'next/image';
import logo from '@/Assets/logo.png';
import logo_bg from '@/Assets/logo_bg.png';
import Link from 'next/link';

const { Title, Text } = Typography;

const SignInPage: React.FC = () => {
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
        termsAccepted: false,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleCheckboxChange = (e: CheckboxChangeEvent) => {
        setFormValues({
            ...formValues,
            termsAccepted: e.target.checked,
        });
    };

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div
            className="w-full min-h-screen flex justify-center items-center"
            style={{
                backgroundImage: `url(${logo_bg.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="flex flex-col items-center p-8 rounded-lg max-w-lg w-full bg-white shadow-lg">
                <Image src={logo} alt="logo" height={100} width={200} />

                <Title level={3} className="text-center text-[#053697] text-3xl mt-4">
                    Sign up
                </Title>

                <Button
                    icon={<FaGoogle />}
                    className="w-full mb-4 bg-white text-[#053697] h-[42px] border border-gray-300"
                >
                    Sign up with Google
                </Button>

                <Form
                    name="signin"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout="vertical"
                    className="w-full"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: 'Please enter your email' },
                            { type: 'email', message: 'Please enter a valid email' },
                        ]}
                    >
                        <Input
                            placeholder="Email"
                            name="email"
                            onChange={handleInputChange}
                            className="h-[42px]"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            { required: true, message: 'Please enter your password' },
                        ]}
                    >
                        <Input.Password
                            placeholder="Password"
                            name="password"
                            onChange={handleInputChange}
                            className="h-[42px]"
                            iconRender={(visible) => (visible ? <FaEye /> : <FaEyeSlash />)}
                        />
                    </Form.Item>

                    {/* Uncomment if terms checkbox is needed */}
                    {/* <Form.Item name="terms" valuePropName="checked">
                        <Checkbox onChange={handleCheckboxChange} className="text-[#053697]">
                            I agree to the <Text underline>Terms and Privacy Policy</Text>
                        </Checkbox>
                    </Form.Item> */}

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="w-full bg-[#053697] hover:bg-[#467eee] h-[42px]"
                        >
                            Sign In
                        </Button>
                    </Form.Item>
                </Form>

                <Link href={`/sign-up`} className="text-[#053697] cursor-pointer mt-2">
                    Sign Up
                </Link>
                <Link href={`/forget-password`} className="text-[#2FC191] cursor-pointer mt-2">
                    Forgot your password?
                </Link>
            </div>
        </div>
    );
};

export default SignInPage;

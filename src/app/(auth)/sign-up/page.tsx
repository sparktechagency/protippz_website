'use client';

import React, { useState } from 'react';
import { Button, Input, Checkbox, Typography, Form, Spin } from 'antd';
import { FaGoogle } from 'react-icons/fa6';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import Image from 'next/image';
import Link from 'next/link';
import logo_green from '@/Assets/logo_green.png';
import phoneImage from '@/Assets/phone_image.png';
import { signUpHandler } from '@/ApisRequests/Auth';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
const { Title, Text } = Typography;

const SignUpPage: React.FC = () => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const [formValues, setFormValues] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        username: '',
        address: '',
        password: '',
        confirmPassword: '',
        termsAccepted: false,
    });

    const handleCheckboxChange = (e: CheckboxChangeEvent) => {
        setFormValues({
            ...formValues,
            termsAccepted: e.target.checked,
        });
    };

    const onFinish = async (values: any) => {
        setLoading(true)
        const data = {
            "password": values?.password,
            "confirmPassword": values?.confirmPassword,
            "userData": {
                "name": values?.fullName,
                "username": values?.username,
                "phone": values?.phoneNumber,
                "email": values?.email,
                "address": values?.address

            }
        }
        const res = await signUpHandler(data)
        setLoading(false)
        if (res?.success) {
            localStorage.setItem('email', values?.email)
            toast.success(res?.message || 'Please check your email')
            router.push('/otp')
        } else {
            toast.error(res?.message || 'something went wrong')
        }

    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>

            <div className="flex flex-col items-center bg-[#2FC191] p-8 rounded-lg max-w-2xl mt-10 w-full">
                <Image src={logo_green} alt="logo" height={100} width={200} />

                <Title level={3} className="text-center text-[#053697] text-3xl">Sign up</Title>

                <Button
                    icon={<FaGoogle />}
                    className="w-full mb-4 bg-white text-[#053697] h-[42px]"
                >
                    Sign up with Google
                </Button>

                <hr className="h-[2px] mb-4 w-full bg-white" />

                <Form
                    name="signup"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout="vertical"
                    className="w-full"
                >
                    <Form.Item
                        label="Full Name"
                        name="fullName"
                        rules={[{ required: true, message: 'Please enter your full name' }]}
                    >
                        <Input placeholder="Full Name" className="h-[42px]" />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: 'Please enter your email' },
                            { type: 'email', message: 'Please enter a valid email' },
                        ]}
                    >
                        <Input placeholder="Email" className="h-[42px]" />
                    </Form.Item>

                    <Form.Item
                        label="Phone Number"
                        name="phoneNumber"
                        rules={[{ required: true, message: 'Please enter your phone number' }]}
                    >
                        <Input placeholder="Phone Number" className="h-[42px]" />
                    </Form.Item>

                    <Form.Item
                        label="User Name"
                        name="username"
                        rules={[{ required: true, message: 'Please enter a username' }]}
                    >
                        <Input placeholder="User Name" className="h-[42px]" />
                    </Form.Item>

                    <Form.Item
                        label="Address"
                        name="address"
                        rules={[{ required: true, message: 'Please enter your address' }]}
                    >
                        <Input placeholder="Address" className="h-[42px]" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please enter your password' }]}
                    >
                        <Input.Password
                            placeholder="Password"
                            className="h-[42px]"
                            iconRender={(visible) => (visible ? <FaEye /> : <FaEyeSlash />)}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Confirm Password"
                        name="confirmPassword"
                        dependencies={['password']}
                        rules={[
                            { required: true, message: 'Please confirm your password' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords do not match'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password
                            placeholder="Confirm Password"
                            className="h-[42px]"
                            iconRender={(visible) => (visible ? <FaEye /> : <FaEyeSlash />)}
                        />
                    </Form.Item>

                    <Form.Item
                        name="termsAccepted"
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_, value) =>
                                    value ? Promise.resolve() : Promise.reject(new Error('You must accept the terms and privacy policy')),
                            },
                        ]}
                    >
                        <Checkbox className="text-white">
                            I agree to the <Text underline>Terms and Privacy Policy</Text>
                        </Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="w-full mb-3 bg-[#053697] hover:bg-[#467eee] h-[42px]"
                        >
                            {loading ? <Spin size='small' /> : ' Sign up'}
                        </Button>
                    </Form.Item>
                </Form>

                <Link href="/sign-in" className="text-white cursor-pointer mt-2">
                    Sign In
                </Link>
            </div>
            <hr className='h-[4px] w-full mt-6 bg-[#2FC191]' />
            <hr className='h-[4px] w-full mb-6 -mt-[1px] bg-[#053697]' />
            <section className="container mx-auto px-4 py-10">
                <h2 className="text-2xl md:text-3xl font-bold text-[#053697] mb-2">
                    How TIPPZ works
                </h2>
                <p className="text-[#2FC191] mb-8">
                    Instructions for signing up, verifying your identity, funding your account, and sending Tippz.
                </p>

                <div className="flex flex-col-reverse md:flex-row items-start md:space-x-10">
                    {/* Left side steps */}
                    <div className="flex-1 space-y-8">
                        <div className="flex space-x-4">
                            <h3 className="text-4xl font-bold text-[#053697]">01</h3>
                            <div>
                                <h4 className="text-xl font-semibold text-[#053697]">Register your account</h4>
                                <p className="text-gray-600">
                                    When you first register for an account, you’ll be asked to provide your name, email address, date of birth, address, username, password, etc.
                                </p>
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            <h3 className="text-4xl font-bold text-[#053697]">02</h3>
                            <div>
                                <h4 className="text-xl font-semibold text-[#053697]">Verify your identity</h4>
                                <p className="text-gray-600">
                                    Privacy and user data protection is very important to us. Our verification process allows us to confirm and authenticate your identity, comply with applicable laws, and prevent fraud. Once verified you are able to start using PROTIPPZ.
                                </p>
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            <h3 className="text-4xl font-bold text-[#053697]">03</h3>
                            <div>
                                <h4 className="text-xl font-semibold text-[#053697]">Fund your account</h4>
                                <p className="text-gray-600">
                                    Once you pass through the verification process, you’ll be able to deposit funds and start sending Tippz to your favorite players and teams.
                                </p>
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            <h3 className="text-4xl font-bold text-[#053697]">04</h3>
                            <div>
                                <h4 className="text-xl font-semibold text-[#053697]">Sending Tippz</h4>
                                <p className="text-gray-600">
                                    After your account is funded, you’re now able to select a player or team and start sending them Tippz. In exchange for sending Tippz you will earn rewards and potentially win prizes.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right side image */}
                    <div className="mt-8 md:mt-0 flex-1 flex justify-center md:justify-end w-full">
                        <Image src={phoneImage} alt="Phone displaying PROTIPPZ" width={600} height={600} className="rounded-lg shadow-lg" />
                    </div>
                </div>
            </section>

        </>
    );
};

export default SignUpPage;

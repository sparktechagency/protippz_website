"use client";

import React, { useState } from "react";
import { Button, Input, Checkbox, Typography, Form, Spin } from "antd";
import { FaGoogle } from "react-icons/fa6";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import Image from "next/image";
import logo from "@/Assets/logo.png";
import logo_bg from "@/Assets/logo_bg.png";
import Link from "next/link";
import { useGoogleLogin } from "@react-oauth/google";
import { SignInHandler } from "@/ApisRequests/Auth";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { post } from "@/ApisRequests/server";
const { Title, Text } = Typography;
const SignInPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const response = await fetch(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${tokenResponse?.access_token}`,
          },
        }
      );

      if (!response.ok) {
        toast.error("Failed to fetch user info");
      }
      const { name, picture, email } = await response.json();
      const data = { name, picture, email, username: name };
      const res = await post("/auth/google-login", data);
      if (res?.success) {
        Cookies.remove("token");
        localStorage.setItem("token", res?.data?.accessToken);
        Cookies.set("token", res?.data?.accessToken);
        if (Cookies.get("token")) {
          toast.success(res?.message || "logged in successfully");
          window.location.href = "/";
        } else {
          toast.custom(
            (t) => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "#fff",
                  color: "#000",
                  padding: "12px 16px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  width: "350px",
                }}
              >
                <span style={{ flex: 1, marginRight: "8px" }}>
                  ⚠️ Logged in successfully, but cookies are disabled in your
                  browser. Some features may not work as expected.
                </span>
                <button
                  style={{
                    background: "#f27405",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    padding: "4px 8px",
                    cursor: "pointer",
                  }}
                  onClick={() => toast.dismiss(t.id)} // Manually dismiss the toast
                >
                  Close
                </button>
              </div>
            ),
            {
              duration: 5000,
              position: "top-center",
            }
          );
          window.location.href = "/";
        }
      } else {
        toast.error(res?.message || "something went wrong");
      }
    },
    onError: (err) => console.log(err),
  });
  const onFinish = async (values: any) => {
    setLoading(true);
    const res = await SignInHandler(values);
    setLoading(false);
    if (res?.success) {
      Cookies.remove("token");
      localStorage.setItem("token", res?.data?.accessToken);
      Cookies.set("token", res?.data?.accessToken);
      if (Cookies.get("token")) {
        toast.success(res?.message || "logged in successfully");
        window.location.href = "/";
      } else {
        toast.custom(
          (t) => (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "#fff",
                color: "#000",
                padding: "12px 16px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                width: "350px",
              }}
            >
              <span style={{ flex: 1, marginRight: "8px" }}>
                ⚠️ Logged in successfully, but cookies are disabled in your
                browser. Some features may not work as expected.
              </span>
              <button
                style={{
                  background: "#f27405",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  padding: "4px 8px",
                  cursor: "pointer",
                }}
                onClick={() => toast.dismiss(t.id)} // Manually dismiss the toast
              >
                Close
              </button>
            </div>
          ),
          {
            duration: 5000,
            position: "top-center",
          }
        );
        window.location.href = "/";
      }
    } else {
      toast.error(res?.message || "something went wrong");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      className="w-full min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${logo_bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center p-8 rounded-lg max-w-lg w-full bg-white shadow-lg">
        <Image src={logo} alt="logo" height={100} width={200} />

        <Title level={3} className="text-center text-[#053697] text-3xl mt-4">
          Sign up
        </Title>

        <Button
          onClick={() => login()}
          icon={<FaGoogle />}
          className="w-full mb-4 bg-white text-[#053697] h-[42px] border border-gray-300"
        >
          Sign in with Google
        </Button>

        <Form
          name="signin"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
          className="w-full"
        >
          <Form.Item
            label="Email or Username"
            name="userNameOrEmail"
            rules={[
              {
                required: true,
                message: "Please enter your email or username",
              },
              // { type: 'email', message: 'Please enter a valid email' },
            ]}
          >
            <Input placeholder="Email or username" className="h-[42px]" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password
              placeholder="Password"
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
              {loading ? <Spin /> : "Sign In"}
            </Button>
          </Form.Item>
        </Form>

        <Link href={`/sign-up`} className="text-[#053697] cursor-pointer mt-2">
          Sign Up
        </Link>
        <Link
          href={`/forget-password`}
          className="text-[#2FC191] cursor-pointer mt-2"
        >
          Forgot your password?
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;

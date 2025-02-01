"use client";
import React, { useEffect, useState } from "react";
import { Form, Input, Button, Upload } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  HomeOutlined,
  CameraOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { useContextData } from "@/provider/ContextProvider";
import { imageUrl, patch } from "@/ApisRequests/server";
import toast from "react-hot-toast";

interface ProfileFormValues {
  fullName: string;
  email: string;
  username: string;
  phoneNumber: string;
  address: string;
}

const UpdateProfileForm: React.FC = () => {
  const [fileList, setFileList] = useState<any>(null);
  const [form] = Form.useForm();
  const data = useContextData();

  const onFinish = async (values: ProfileFormValues) => {
    const { email, username, ...otherValues } = values;
    const formData = new FormData();
    const formattedData = {
      data: JSON.stringify(otherValues),
      profile_image:
        fileList?.[0]?.originFileObj || data?.userData?.profile_image,
    };
    Object.keys(formattedData).forEach((key) => {
      const value = formattedData[key as keyof typeof formattedData];
      formData.append(key, value);
    });

    const res = await patch("/normal-user/update-profile", formData, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    if (res?.success) {
      toast.success("Profile updated successfully");
    } else {
      toast.error("Fail updated Profile");
    }
  };

  useEffect(() => {
    form.setFieldsValue({
      address: data?.userData?.address,
      email: data?.userData?.email,
      name: data?.userData?.name,
      phone: data?.userData?.phone,
      username: data?.userData?.username,
    });
  }, [data]);

  const handleUploadChange = (info: any) => {
    if (info.file.status === "done") {
      toast.success("Image uploaded successfully");
    } else if (info.file.status === "error") {
      toast.error("Image upload failed");
    }
    setFileList(info.fileList);
  };
  return (
    <div className="container mx-auto p-8 text-center w-full">
      <h1 className="text-4xl font-bold text-[#053697] mb-8">Edit Profile</h1>

      <div className="flex flex-col items-center mb-6 relative">
        <Upload
          showUploadList={false}
          onChange={handleUploadChange}
          beforeUpload={() => false} 
        >
          <Image
            width={100}
            height={100}
            unoptimized
            src={
              fileList
                ? URL.createObjectURL(fileList[0]?.originFileObj)
                : imageUrl(data?.userData?.profile_image || "") ||
                  "https://i.ibb.co.com/f4tzYw2/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"
            }
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <div className="text-green-500 text-lg absolute bottom-5 sm:right-32 right-24 bg-white rounded-full p-2 px-3 shadow-lg cursor-pointer">
            <CameraOutlined />
          </div>
        </Upload>
      </div>

      <Form<ProfileFormValues>
        requiredMark={false}
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="max-w-lg w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <Form.Item
          label="Full Name"
          name="name"
          initialValue="Robert Smith"
          rules={[{ required: true, message: "Please enter your full name" }]}
        >
          <Input className="custom-input" placeholder="Full Name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          initialValue="robertsmithctg23@gmail.com"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input
            disabled
            className="custom-input"
            placeholder="Email"
            prefix={<MailOutlined />}
          />
        </Form.Item>

        <Form.Item
          label="User Name"
          name="username"
          initialValue="siyam"
          rules={[{ required: true, message: "Please enter your username" }]}
        >
          <Input
            disabled
            placeholder="User Name"
            className="custom-input"
            prefix={<UserOutlined />}
          />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phone"
          initialValue="+54645674567"
          rules={[
            { required: true, message: "Please enter your phone number" },
          ]}
        >
          <Input
            className="custom-input"
            placeholder="Phone Number"
            prefix={<PhoneOutlined />}
          />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          initialValue="1901 Thornridge Cir. Shiloh, Hawaii 81063, New York"
          rules={[{ required: true, message: "Please enter your address" }]}
          className="col-span-2"
        >
          <Input
            className="custom-input"
            placeholder="Address"
            prefix={<HomeOutlined />}
          />
        </Form.Item>

        <Form.Item className="col-span-2">
          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-[#053697] hover:bg-[#053697]/90"
          >
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateProfileForm;

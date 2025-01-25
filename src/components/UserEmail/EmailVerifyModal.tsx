import React from "react";
import { Button, Form, Input, Typography } from "antd";
const { Title, Text } = Typography;
function EmailVerfiyModal() {
  return (
    <div className="bg-white rounded-lg p-6 w-11/12 max-w-md">
      <div className="flex flex-col items-center">
        <Title level={3} className="text-center text-[#053697] text-3xl mt-4">
          Enter Your Email Address
        </Title>

        <Form
          requiredMark={false}
          name="signin"
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          layout="vertical"
          className="w-full"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password
              placeholder="Enter your email"
              name="email"
              // onChange={handleInputChange}
              className="h-[42px]"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-[#053697] hover:bg-[#467eee] h-[42px]"
            >
              Set New Password
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default EmailVerfiyModal;

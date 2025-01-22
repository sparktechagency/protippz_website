"use client";

import { patch } from "@/ApisRequests/server";
import { useContextData } from "@/provider/ContextProvider";
import { Form, FormProps } from "antd";
import { useEffect } from "react";
import toast from "react-hot-toast";

interface IValue {
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
}
const AddressPage = () => {
  const [form] = Form.useForm();
  const data = useContextData();
  const onFinish: FormProps<IValue>["onFinish"] = async (values) => {
    const res = await patch(
      `/player/edit-address-tax`,
      { address: values },
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    );
    if (res?.success) {
      toast.success(res?.message);
    } else {
      toast.error(res?.message);
    }
  };
  useEffect(() => {
    if (data?.userData?.address) {
      form.setFieldsValue(data?.userData?.address);
    }
  }, [data?.userData]);
  return (
    <div className="flex flex-col items-center justify-center  w-full max-w-2xl">
      <p className="w-full text-[#053697] text-5xl text-center mb-4">
        Edit Address
      </p>
      <Form
        requiredMark={false}
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="grid md:grid-cols-2 grid-cols-1 w-full gap-3"
      >
        <Form.Item<IValue>
          name={`streetAddress`}
          label={`Street Address`}
          rules={[
            {
              required: true,
              message: "street address is required",
            },
          ]}
        >
          <input className="w-full h-[38px] border border-[#2FC191] outline-none rounded-md p-2" />
        </Form.Item>
        <Form.Item<IValue>
          name={`city`}
          label={`City`}
          rules={[
            {
              required: true,
              message: "city is required",
            },
          ]}
        >
          <input className="w-full h-[38px] border border-[#2FC191] outline-none rounded-md p-2" />
        </Form.Item>
        <Form.Item<IValue>
          name={`state`}
          label={`State`}
          rules={[
            {
              required: true,
              message: "state is required",
            },
          ]}
        >
          <input className="w-full h-[38px] border border-[#2FC191] outline-none rounded-md p-2" />
        </Form.Item>
        <Form.Item<IValue>
          name={`zipCode`}
          label={`Zip Code`}
          rules={[
            {
              required: true,
              message: "zip code is required",
            },
          ]}
        >
          <input className="w-full h-[38px] border border-[#2FC191] outline-none rounded-md p-2" />
        </Form.Item>
        <div className="col-span-2 flex justify-center items-center">
          <button className=" px-6 py-2 bg-[#053697] text-white font-medium rounded-lg hover:bg-blue-700 transition">
            Save
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AddressPage;

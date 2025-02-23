'use client';

import { patch } from '@/ApisRequests/server';
import BackButton from '@/components/ui/BackButton';
import { useContextData } from '@/provider/ContextProvider';
import { Form, FormProps, Spin } from 'antd';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

interface IValue {
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
}
const AddressPage = () => {
  const [form] = Form.useForm();
  const data = useContextData();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const onFinish: FormProps<IValue>['onFinish'] = async (values) => {
    setLoading(true);
    const res = await patch(
      `/player/edit-address-tax`,
      { address: values },
      {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
      }
    );
    if (res?.success) {
      toast.success(res?.message);
      window.location.href = '/home';
      setLoading(false);
    } else {
      toast.error(res?.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (data?.userData?.address) {
      form.setFieldsValue(data?.userData?.address);
    }
  }, [data?.userData]);
  return (
    <div className="flex flex-col items-center justify-center  w-full max-w-2xl">
      <div className="justify-start mb-3 w-full">
        <BackButton />
      </div>
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
              message: 'street address is required',
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
              message: 'city is required',
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
              message: 'state is required',
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
              message: 'zip code is required',
            },
          ]}
        >
          <input className="w-full h-[38px] border border-[#2FC191] outline-none rounded-md p-2" />
        </Form.Item>
        <div className="col-span-2 flex justify-center items-center">
          <button
            disabled={loading}
            className={` ${
              loading
                ? 'cursor-not-allowed bg-gray-600'
                : 'bg-[#053697] hover:bg-[#053697]/90'
            } px-6 py-2  text-white font-medium rounded-lg  transition`}
          >
            {loading ? <Spin className=" !text-white" size="small" /> : 'Save'}
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AddressPage;

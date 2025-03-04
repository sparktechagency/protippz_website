'use client';

import { patch } from '@/ApisRequests/server';
import BackButton from '@/components/ui/BackButton';
import { useContextData } from '@/provider/ContextProvider';
import { Form, FormProps, Radio, Space } from 'antd';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

interface IValue {
  fullname: string;
  taxId: string;
  address: string;
  residentialStatus: string;
}

const TaxInformationPage = () => {
  const [form] = Form.useForm();
  const data = useContextData();
  const onFinish: FormProps<IValue>['onFinish'] = async (values) => {
    const res = await patch(
      `/player/edit-address-tax`,
      { taxInfo: values },
      {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
      }
    );
    if (res?.success) {
      toast.success(res?.message);
      window.location.href = '/home';
    } else {
      toast.error(res?.message);
    }
  };
  useEffect(() => {
    if (data?.userData?.taxInfo) {
      form.setFieldsValue(data?.userData?.taxInfo);
    }
  }, [data?.userData]);
  return (
    <>
      <div className='justify-start w-full max-w-screen-sm'>
        <BackButton />
      </div>
      <div className="flex flex-col items-center justify-center  w-full max-w-2xl">
        <p className="w-full text-[#053697] text-5xl text-center mb-4">
          Tax Information
        </p>
        <Form
          requiredMark={false}
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className=" w-full gap-3"
        >
          <Form.Item<IValue>
            name={`fullname`}
            label={`Full Name`}
            rules={[
              {
                required: true,
                message: 'name is required',
              },
            ]}
          >
            <input className="w-full h-[38px] border border-[#2FC191] outline-none rounded-md p-2" />
          </Form.Item>
          <Form.Item<IValue>
            name={`taxId`}
            label={`Tax ID`}
            rules={[
              {
                required: true,
                message: 'Tax ID is required',
              },
            ]}
          >
            <input className="w-full h-[38px] border border-[#2FC191] outline-none rounded-md p-2" />
          </Form.Item>
          <Form.Item<IValue>
            name={`address`}
            label={`Address`}
            rules={[
              {
                required: true,
                message: 'address is required',
              },
            ]}
          >
            <input className="w-full h-[38px] border border-[#2FC191] outline-none rounded-md p-2" />
          </Form.Item>
          <Form.Item<IValue>
            name={`residentialStatus`}
            label={`Residential Status`}
            rules={[
              {
                required: true,
                message: 'Residential Status is required',
              },
            ]}
          >
            <Radio.Group onChange={(value) => {}}>
              <Space direction="vertical">
                <Radio value={'Resident'}>Resident</Radio>
                <Radio value={'Non Resident'}>Non-Resident</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
          <div className="col-span-2 flex justify-center items-center">
            <button className=" px-6 py-2 bg-[#053697] text-white font-medium rounded-lg hover:bg-[#053697]/90 transition">
              Save
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default TaxInformationPage;

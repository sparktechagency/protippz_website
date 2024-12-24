'use client'

import { Form, FormProps, Input, Radio, Space } from "antd";

interface IValue {
    name: string;
    taxId: string;
    address: string;
    residentialStatus: string;
}

const TaxInformationPage = () => {
    const onFinish: FormProps<IValue>['onFinish'] = (values) => {

    }
    return (
        <div className="flex flex-col items-center justify-center  w-full max-w-2xl">
            <p className='w-full text-[#053697] text-5xl text-center mb-4'>Tax Information</p>
            <Form
                layout="vertical"
                onFinish={onFinish}
                className=' w-full gap-3'>
                <Form.Item<IValue>
                    name={`name`}
                    label={`Full Name`}
                    rules={[
                        {
                            required: true,
                            message: 'name is required'
                        }
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
                            message: 'Tax ID is required'
                        }
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
                            message: 'address is required'
                        }
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
                            message: 'Residential Status is required'
                        }
                    ]}
                >
                    <Radio.Group onChange={(value) => console.log(value)}>
                        <Space direction="vertical">
                            <Radio value={'Resident'}>Resident</Radio>
                            <Radio value={'Non-Resident'}>Non-Resident</Radio>
                        </Space>
                    </Radio.Group>
                </Form.Item>
                <div className="col-span-2 flex justify-center items-center">
                    <button className=" px-6 py-2 bg-[#053697] text-white font-medium rounded-lg hover:bg-blue-700 transition">
                        Save
                    </button>
                </div>
            </Form>
        </div>
    )
}

export default TaxInformationPage

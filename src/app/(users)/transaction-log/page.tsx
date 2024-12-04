'use client'
import React, { useEffect, useState } from 'react';
import { Table, Typography } from 'antd';
import { get } from '@/ApisRequests/server';

const { Title } = Typography;
interface TransitionLog {
    amount: number,
    createdAt: string,
    transactionType: string
    status: string
}
interface Pagination {
    "page": number,
    "limit": number,
    "total": number,
    "totalPage": number
}
const TransactionLogPage = () => {
    const [page, setPage] = useState(1)
    const [transition, setTransition] = useState<TransitionLog[]>()
    const [pagination, setPagination] = useState<Pagination>();
    const columns = [
        {
            title: 'Type',
            dataIndex: 'transactionType',
            key: 'transactionType',
            render: (transactionType: string) => <span>{transactionType}</span>
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Date',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (createdAt: string) => <span>{createdAt?.split('T')?.[0]}</span>
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            render: (amount: string) => <span>${amount}</span>
        },
    ];
    useEffect(() => {
        const getMyTip = async () => {
            const res = await get(`/transaction/my-transactions?page=${page}`, {
                headers: {
                    'Authorization': `${typeof localStorage === 'undefined' ? '' : localStorage.getItem('token')}`,
                },
            });
            setTransition(res?.data?.result)
            setPagination(res.data?.meta)
        };
        getMyTip();
    }, []);
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <Title level={2} style={{ color: '#1A73E8' }}>Transaction Log</Title>
            <Table
                columns={columns}
                dataSource={transition}
                pagination={{
                    pageSize: pagination?.limit,
                    total: pagination?.total,
                    onChange: (page) => setPage(page)
                }}
                bordered
                style={{ maxWidth: '800px', margin: 'auto', marginTop: '20px' }}
                rowClassName={(record, index) => (index % 2 === 0 ? 'even-row' : 'odd-row')}
            />
        </div>
    );
};

export default TransactionLogPage;

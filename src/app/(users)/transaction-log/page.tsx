'use client'
import React from 'react';
import { Table, Typography } from 'antd';

const { Title } = Typography;

const TransactionLogPage = () => {
    const data = [
        { key: '1', type: 'Withdraw Funds', description: 'Withdraw to Account No. ********4364', amount: '$45' },
        { key: '2', type: 'Deposit Funds', description: 'Deposit from Account No. ********4364', amount: '$125' },
        { key: '3', type: 'Withdraw Funds', description: 'Withdraw to Account No. ********4364', amount: '$55' },
        { key: '4', type: 'Withdraw Funds', description: 'Withdraw to Account No. ********4364', amount: '$55' },
        { key: '5', type: 'Deposit Funds', description: 'Deposit from Account No. ********4364', amount: '$55' },
        { key: '6', type: 'Withdraw Funds', description: 'Withdraw to Account No. ********4364', amount: '$55' },
        { key: '7', type: 'Withdraw Funds', description: 'Withdraw to Account No. ********4364', amount: '$55' },
        { key: '8', type: 'Deposit Funds', description: 'Deposit from Account No. ********4364', amount: '$55' },
    ];
    const columns = [
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
        },
    ];

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <Title level={2} style={{ color: '#1A73E8' }}>Transaction Log</Title>
            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                bordered
                style={{ maxWidth: '800px', margin: 'auto', marginTop: '20px' }}
                rowClassName={(record, index) => (index % 2 === 0 ? 'even-row' : 'odd-row')}
            />
        </div>
    );
};

export default TransactionLogPage;

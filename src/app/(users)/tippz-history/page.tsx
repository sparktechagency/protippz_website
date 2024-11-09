'use client'
import React from 'react';
import { Table, Typography, Avatar } from 'antd';
interface player {
    key: string,
    date: string,
    player: { name: string, avatar: string },
    amount: string,
    points: number,
}
const { Title } = Typography;

const TippzHistoryPage = () => {
    const data: player[] = [
        {
            key: '1',
            date: '12/06/24',
            player: { name: 'New York Liberty', avatar: 'https://i.ibb.co.com/f4tzYw2/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg' },
            amount: '$100',
            points: 200,
        },
        {
            key: '2',
            date: '10/06/24',
            player: { name: 'Devon Lane', avatar: 'https://i.ibb.co.com/f4tzYw2/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg' },
            amount: '$5',
            points: 20,
        },
        {
            key: '3',
            date: '10/06/24',
            player: { name: 'Los Angeles Sparks', avatar: 'https://i.ibb.co.com/f4tzYw2/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg' },
            amount: '$25',
            points: 50,
        },
        {
            key: '4',
            date: '05/06/24',
            player: { name: 'Devon Lane', avatar: 'https://i.ibb.co.com/f4tzYw2/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg' },
            amount: '$150',
            points: 250,
        },
        {
            key: '5',
            date: '04/06/24',
            player: { name: 'Los Angeles Sparks', avatar: 'https://i.ibb.co.com/f4tzYw2/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg' },
            amount: '$50',
            points: 100,
        },
        {
            key: '6',
            date: '04/06/24',
            player: { name: 'Floyd Miles', avatar: 'https://i.ibb.co.com/f4tzYw2/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg' },
            amount: '$10',
            points: 30,
        },
        {
            key: '7',
            date: '04/06/24',
            player: { name: 'Indiana Fever', avatar: 'https://i.ibb.co.com/f4tzYw2/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg' },
            amount: '$100',
            points: 150,
        },
        {
            key: '8',
            date: '04/06/24',
            player: { name: 'Floyd Miles', avatar: 'https://i.ibb.co.com/f4tzYw2/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg' },
            amount: '$200',
            points: 250,
        },
    ];

    const columns = [
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Team/Player',
            dataIndex: 'player',
            key: 'player',
            render: (_: any, record: player) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src={record?.player?.avatar} alt={record?.player?.name} style={{ marginRight: 8 }} />
                    <span>{record?.player?.name}</span>
                </div>
            ),
        },
        {
            title: 'Tippz Amount',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Points',
            dataIndex: 'points',
            key: 'points',
        },
    ];

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <Title level={2} style={{ color: '#1A73E8' }}>Tippz History</Title>
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

export default TippzHistoryPage;

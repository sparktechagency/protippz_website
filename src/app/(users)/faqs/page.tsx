'use client'
import React from 'react';
import { Collapse, Typography } from 'antd';
import Heading from '@/components/Shared/Heading';

const { Panel } = Collapse;
const { Title, Text } = Typography;

const FAQPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <Heading 
            headingText='Frequently Asked Questions'
            subHeadingText='Common Queries, Clear Solutions'
            />
            <Collapse
                accordion
                bordered={false}
                expandIconPosition="end"
                className="custom-collapse"
                expandIcon={({ isActive }) => (
                    <span
                        style={{
                            fontSize: '20px',
                            color: isActive ? '#1a73e8' : '#1a73e8',
                        }}
                    >
                        {isActive ? '−' : '+'}
                    </span>
                )}
            >
                <Panel
                    header={<span className="text-blue-900 font-semibold">What is PROTIPPZ?</span>}
                    key="1"
                    className="custom-panel"
                >
                    <Text className="text-green-600">PROTIPPZ is a platform that allows you to interact with your favorite players and teams.</Text>
                </Panel>
                <Panel
                    header={<span className="text-blue-900 font-semibold">How do I sign up for PROTIPPZ?</span>}
                    key="2"
                    className="custom-panel"
                >
                    <Text className="text-green-600">
                        Click the “Sign Up” button on the homepage. You can sign up using your Google account or by providing your name, email, username, and password.
                    </Text>
                </Panel>
                <Panel
                    header={<span className="text-blue-900 font-semibold">How can I tip a player or team?</span>}
                    key="3"
                    className="custom-panel"
                >
                    <Text className="text-green-600">To tip a player or team, navigate to their profile and use the “Tip” button.</Text>
                </Panel>
                <Panel
                    header={<span className="text-blue-900 font-semibold">What rewards can I earn on PROTIPPZ?</span>}
                    key="4"
                    className="custom-panel"
                >
                    <Text className="text-green-600">You can earn points, badges, and exclusive rewards based on your interaction and tips.</Text>
                </Panel>
                <Panel
                    header={<span className="text-blue-900 font-semibold">How can I contact support?</span>}
                    key="5"
                    className="custom-panel"
                >
                    <Text className="text-green-600">You can contact support through the “Help” section on the platform, or by emailing support@protippz.com.</Text>
                </Panel>
            </Collapse>
        </div>
    );
};

export default FAQPage;

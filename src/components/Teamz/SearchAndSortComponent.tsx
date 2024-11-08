'use client'
import React, { useState, Suspense } from 'react';
import { Select, Input, Button, Typography } from 'antd';

import { FaSearch } from 'react-icons/fa';

const { Option } = Select;
const { Text } = Typography;

const SearchAndSortComponent: React.FC = () => {
    const [sortBy, setSortBy] = useState('Name');
    const [order, setOrder] = useState('A to Z');
    const [search, setSearch] = useState('');

    const handleSortByChange = (value: string) => {
        setSortBy(value);
    };

    const handleOrderChange = (value: string) => {
        setOrder(value);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const handleSearch = () => {
        setSearch(search);
    };

    return (
        <div className="w-full flex flex-col gap-4 p-4 md:flex-row md:justify-between md:items-center">
            {/* Sorting Section */}
            <div className="flex flex-col items-start gap-2 w-full md:flex-row md:items-center md:w-auto">
                <Text strong className="text-[#2A3E98]">Sort By:</Text>
                <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                    <Select
                        className="border-2 border-[#2FC191] focus:border-[#2FC191] rounded-lg h-[42px] w-full md:w-32"
                        value={sortBy}
                        onChange={handleSortByChange}
                    >
                        <Option value="Name">Name</Option>
                        <Option value="Date">Date</Option>
                        <Option value="Rating">Rating</Option>
                    </Select>
                    <Select
                        className="border-2 border-[#2FC191] focus:border-[#2FC191] rounded-lg h-[42px] w-full md:w-32"
                        value={order}
                        onChange={handleOrderChange}
                    >
                        <Option value="A to Z">A to Z</Option>
                        <Option value="Z to A">Z to A</Option>
                        <Option value="Newest">Newest</Option>
                        <Option value="Oldest">Oldest</Option>
                    </Select>
                </div>
            </div>

            {/* Search Section */}
            <div className="flex flex-col sm:flex-row items-center gap-2 w-full md:w-auto">
                <Input
                    className="border-2 border-[#2FC191] focus:border-[#2FC191] rounded-md w-full md:w-48"
                    placeholder="Type here to search"
                    prefix={<FaSearch />}
                    value={search}
                    onChange={handleSearchChange}
                    style={{ height: 42 }}
                />
                <Button
                    type="primary"
                    className="bg-[#053697] text-white w-full sm:w-auto md:h-[42px]"
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </div>
        </div>
    );
};

export default SearchAndSortComponent;

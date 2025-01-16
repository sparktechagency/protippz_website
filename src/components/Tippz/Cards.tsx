import React from 'react';
import Image from 'next/image';

interface Props {
    data: {
        _id: string;
        image: string;
        title: string;
        description: string;
    };
}

const Cards: React.FC<Props> = ({ data }) => {
    return (
        <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg bg-white">
            <div className="relative h-60 w-full">
                <Image
                    src={data.image}
                    alt={data.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                    unoptimized
                />
            </div>

            {/* Text Content Section */}
            <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-[#053697]">
                    {data.title}
                </h3>
                <p className="text-sm text-[#2FC191] mt-2">
                    {data.description}
                </p>
            </div>
        </div>
    );
};

export default Cards;

// SendTipsButton.tsx
import React from 'react';

interface SendTipsButtonProps {
    _id: string;
}

const SendTipsButton: React.FC<SendTipsButtonProps> = ({ _id }) => {
    return (
        <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none">
            Send Tippz
        </button>
    );
};

export default SendTipsButton;

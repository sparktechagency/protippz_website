'use client';

import { useRouter } from 'next/navigation';
import { FaArrowLeftLong } from 'react-icons/fa6';

function BackButton({ text = 'Back' }) {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <button className='flex items-center mb-3 justify-start gap-2' onClick={handleClick}>
      <FaArrowLeftLong />
      {text}
    </button>
  );
}

export default BackButton;

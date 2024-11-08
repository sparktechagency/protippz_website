import Link from 'next/link';
import React from 'react';
const Banner = () => {
    return (
        <>
            <div
                className="relative w-full h-[500px] bg-cover bg-center flex items-center"
                style={{
                    backgroundImage: 'url(https://i.ibb.co.com/cXf1gL5/image-1.png)',
                }}
            >
                <div className='absolute w-full h-full bg-black opacity-50 z-10'>

                </div>
                <div className="container mx-auto text-left text-white z-30 md:p-0 p-2">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Start Tipping</h1>
                    <p className="text-lg md:text-xl mb-6 max-w-md">
                        Tip your favorite players and teams, earn rewards, win prizes, and join a community of passionate sports lovers.
                    </p>
                    <Link href={`/sign-up`} className="bg-[#053697] hover:bg-[#6491eb] text-white font-semibold py-3 px-6 rounded-lg transition-all">
                        Sign up Now
                    </Link>
                </div>
            </div>
            {/* <div className='container mx-auto center-center mt-10 md:p-0 p-2 relative'>
                <Image src={download} alt='download' height={5000} width={5000} className='w-full' />
                <div className='w-[0px] h-[150px] bg-white p-2 rounded-md absolute left-[30%] translate-x-[-70%] bottom-[10%]'>
                    <Image src={qrcode} alt='download' height={5000} width={5000} className='w-full' />
                </div>
            </div> */}
        </>
    );
};
export default Banner;

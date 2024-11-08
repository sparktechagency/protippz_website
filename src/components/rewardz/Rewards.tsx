import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import Image from 'next/image';
const Rewards = () => {
    const teamLogos = [
        { id: 1, name: 'Tickets', logo: 'https://i.ibb.co/QcrPfJx/image-7.png' },
        { id: 2, name: 'Shoes', logo: 'https://i.ibb.co/TWVRn2h/image-6.png' },
        { id: 3, name: 'Cash', logo: 'https://i.ibb.co/RSCQxxS/image-5.png' },
        { id: 4, name: 'Vouchers', logo: 'https://i.ibb.co/c14Rpwk/image-4.png' },
        { id: 5, name: 'Meet & Greet', logo: 'https://i.ibb.co/3F88WBq/image-3.png' },
        { id: 6, name: 'Signed Gear', logo: 'https://i.ibb.co/BZV30JN/image-2.png' },
        { id: 7, name: 'Merchandise', logo: 'https://i.ibb.co/f0V7cKp/image-1.png' },
        { id: 8, name: 'Exclusive Event', logo: 'https://i.ibb.co/C6gr9pL/image.png' },
        { id: 9, name: 'Tickets', logo: 'https://i.ibb.co/QcrPfJx/image-7.png' },
        { id: 10, name: 'Shoes', logo: 'https://i.ibb.co/TWVRn2h/image-6.png' },
        { id: 11, name: 'Cash', logo: 'https://i.ibb.co/RSCQxxS/image-5.png' },
        { id: 12, name: 'Vouchers', logo: 'https://i.ibb.co/c14Rpwk/image-4.png' },
        { id: 13, name: 'Meet & Greet', logo: 'https://i.ibb.co/3F88WBq/image-3.png' },
        { id: 14, name: 'Signed Gear', logo: 'https://i.ibb.co/BZV30JN/image-2.png' },
        { id: 15, name: 'Merchandise', logo: 'https://i.ibb.co/f0V7cKp/image-1.png' },
        { id: 16, name: 'Exclusive Event', logo: 'https://i.ibb.co/C6gr9pL/image.png' },
        { id: 17, name: 'Tickets', logo: 'https://i.ibb.co/QcrPfJx/image-7.png' },
        { id: 18, name: 'Shoes', logo: 'https://i.ibb.co/TWVRn2h/image-6.png' },
        { id: 19, name: 'Cash', logo: 'https://i.ibb.co/RSCQxxS/image-5.png' },
        { id: 20, name: 'Vouchers', logo: 'https://i.ibb.co/c14Rpwk/image-4.png' },
        { id: 21, name: 'Meet & Greet', logo: 'https://i.ibb.co/3F88WBq/image-3.png' },
        { id: 22, name: 'Signed Gear', logo: 'https://i.ibb.co/BZV30JN/image-2.png' },
        { id: 23, name: 'Merchandise', logo: 'https://i.ibb.co/f0V7cKp/image-1.png' },
        { id: 24, name: 'Exclusive Event', logo: 'https://i.ibb.co/C6gr9pL/image.png' },
    ];
    return (
        <Carousel className='w-full'>
            <CarouselPrevious className={`md:-left-4 left-0 z-50`} />
            <CarouselContent>
                {teamLogos.map((team) => (
                    <CarouselItem key={team.id} className="basis-1/4 md:basis-1/7 lg:basis-1/12 ">
                        <Image src={team.logo} alt={team.name} className="w-full h-auto" height={100} width={100} unoptimized />
                        <p className="text-center mt-2">{team.name}</p>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselNext className={`md:-right-4 right-0`} />
        </Carousel>
    );
};

export default Rewards;


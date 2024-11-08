import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import Image from 'next/image';
const Teams = () => {
    const teamLogos = [
        { id: 1, name: 'NBA', logo: 'https://i.ibb.co/vvGdXq1/image-5.png' },
        { id: 2, name: 'NFL', logo: 'https://i.ibb.co/9Ws4cnD/image-4.png' },
        { id: 3, name: 'WNBA', logo: 'https://i.ibb.co/mvPTybN/image-3.png' },
        { id: 4, name: 'NCAA', logo: 'https://i.ibb.co/6yzMZck/image-11.png' },
        { id: 5, name: 'NHL', logo: 'https://i.ibb.co/XYqGqjz/image-9.png' },
        { id: 6, name: 'MLS', logo: 'https://i.ibb.co/sbMbVn7/image-8.png' },
        { id: 7, name: 'MLB', logo: 'https://i.ibb.co/rHgSJPc/image-7.png' },
        { id: 8, name: 'UFC', logo: 'https://i.ibb.co/zbXBjTp/image-6.png' },
        { id: 1, name: 'NBA', logo: 'https://i.ibb.co/vvGdXq1/image-5.png' },
        { id: 2, name: 'NFL', logo: 'https://i.ibb.co/9Ws4cnD/image-4.png' },
        { id: 3, name: 'WNBA', logo: 'https://i.ibb.co/mvPTybN/image-3.png' },
        { id: 4, name: 'NCAA', logo: 'https://i.ibb.co/6yzMZck/image-11.png' },
        { id: 5, name: 'NHL', logo: 'https://i.ibb.co/XYqGqjz/image-9.png' },
        { id: 6, name: 'MLS', logo: 'https://i.ibb.co/sbMbVn7/image-8.png' },
        { id: 7, name: 'MLB', logo: 'https://i.ibb.co/rHgSJPc/image-7.png' },
        { id: 8, name: 'UFC', logo: 'https://i.ibb.co/zbXBjTp/image-6.png' },
        { id: 1, name: 'NBA', logo: 'https://i.ibb.co/vvGdXq1/image-5.png' },
        { id: 2, name: 'NFL', logo: 'https://i.ibb.co/9Ws4cnD/image-4.png' },
        { id: 3, name: 'WNBA', logo: 'https://i.ibb.co/mvPTybN/image-3.png' },
        { id: 4, name: 'NCAA', logo: 'https://i.ibb.co/6yzMZck/image-11.png' },
        { id: 5, name: 'NHL', logo: 'https://i.ibb.co/XYqGqjz/image-9.png' },
        { id: 6, name: 'MLS', logo: 'https://i.ibb.co/sbMbVn7/image-8.png' },
        { id: 7, name: 'MLB', logo: 'https://i.ibb.co/rHgSJPc/image-7.png' },
        { id: 8, name: 'UFC', logo: 'https://i.ibb.co/zbXBjTp/image-6.png' },
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

export default Teams;

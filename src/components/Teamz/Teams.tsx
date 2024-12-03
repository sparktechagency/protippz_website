import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import Image from 'next/image';
import { get, imageUrl } from '@/ApisRequests/server';
import SetTemParams from '../Playerz/Client/SetTemParams';
interface teamsType {
    "_id": string,
    "name":  string,
    "league_image": string,
    "sport":  string,
}
const Teams = async () => {
    const [data, meta] = await getTeam()
    return (
        <Carousel className='w-full'>
            <CarouselPrevious className={`md:-left-4 left-0 z-50`} />
            <CarouselContent>
                {data.map((team: teamsType) => (
                    <CarouselItem key={team._id} className="basis-1/4 md:basis-1/7 lg:basis-1/12 ">
                        <div className='relative'>
                            <Image src={imageUrl(team.league_image)} alt={team.name} className="w-[100px] h-[100px] object-contain" height={100} width={100} />
                            <SetTemParams
                                ParamKey='league'
                                value={team?._id}
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselNext className={`md:-right-4 right-0`} />
        </Carousel>
    );
};

export default Teams;
const getTeam = async () => {
    const res = await get('/league/get-all?limit=999999999')
    return [res.data?.result, res.data?.meta]
}
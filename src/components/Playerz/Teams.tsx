import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import Image from 'next/image';
import { get, imageUrl } from '@/ApisRequests/server';
import SetTemParams from './Client/SetTemParams';
interface teamsType {
    "_id": string,
    "name": string,
    "team_logo": string,
    "league": {
        "_id": string,
        "name": string,
        "sport": string,
    },
    "team_bg_image": string,
    "totalTips": number,
    "paidAmount": number,
    "dueAmount": number,
    "isBookmark": false
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
                            <Image src={imageUrl(team.team_logo)} alt={team.name} className="w-full h-auto" height={100} width={100} />
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
    const res = await get('/team/get-all?limit=999999999')
    return [res.data?.result, res.data?.meta]
}
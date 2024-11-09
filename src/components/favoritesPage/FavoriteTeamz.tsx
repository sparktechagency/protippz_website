import React from 'react'
import TeamzCards from '../Teamz/TeamzCards';
interface Player {
    name: string;
    sport: string;
    image: string;
    isFavorite: boolean;
    _id: string;
}

const playersData: Player[] = [
    {
        name: "Robert Smith",
        sport: "Football",
        image: "https://i.ibb.co/df6wnq6/image-3.png",
        isFavorite: true,
        _id: "1",
    },
    {
        name: "John Doe",
        sport: "Basketball",
        image: "https://i.ibb.co/3FDPTBj/pngegg-17-1.png",
        isFavorite: false,
        _id: "2",
    },
    {
        name: "James Brown",
        sport: "Tennis",
        image: "https://i.ibb.co/zZv1Hbr/pngegg-16-1.png",
        isFavorite: true,
        _id: "3",
    },
    {
        name: "Lucas White",
        sport: "Cricket",
        image: "https://i.ibb.co/MMRJcSB/pngegg-15-1.png",
        isFavorite: false,
        _id: "4",
    },
    {
        name: "David Black",
        sport: "Rugby",
        image: "https://i.ibb.co/QnKwB14/pngegg-14-1.png",
        isFavorite: true,
        _id: "5",
    },
    {
        name: "Chris Green",
        sport: "Baseball",
        image: "https://i.ibb.co/tKJ6hTT/pngegg-13-1.png",
        isFavorite: false,
        _id: "6",
    },
    {
        name: "Matt Blue",
        sport: "Football",
        image: "https://i.ibb.co/df6wnq6/image-3.png",
        isFavorite: true,
        _id: "7",
    },
    {
        name: "Nick Gray",
        sport: "Basketball",
        image: "https://i.ibb.co/3FDPTBj/pngegg-17-1.png",
        isFavorite: false,
        _id: "8",
    },
    {
        name: "Tom Silver",
        sport: "Tennis",
        image: "https://i.ibb.co/zZv1Hbr/pngegg-16-1.png",
        isFavorite: true,
        _id: "9",
    },
    {
        name: "Jake Violet",
        sport: "Cricket",
        image: "https://i.ibb.co/MMRJcSB/pngegg-15-1.png",
        isFavorite: false,
        _id: "10",
    },
    {
        name: "Paul Yellow",
        sport: "Rugby",
        image: "https://i.ibb.co/QnKwB14/pngegg-14-1.png",
        isFavorite: true,
        _id: "11",
    },
    {
        name: "Rick Orange",
        sport: "Baseball",
        image: "https://i.ibb.co/tKJ6hTT/pngegg-13-1.png",
        isFavorite: false,
        _id: "12",
    },
    {
        name: "Mark Gold",
        sport: "Football",
        image: "https://i.ibb.co/df6wnq6/image-3.png",
        isFavorite: true,
        _id: "13",
    },
    {
        name: "Gary Bronze",
        sport: "Basketball",
        image: "https://i.ibb.co/3FDPTBj/pngegg-17-1.png",
        isFavorite: false,
        _id: "14",
    },
    {
        name: "Simon Copper",
        sport: "Tennis",
        image: "https://i.ibb.co/zZv1Hbr/pngegg-16-1.png",
        isFavorite: true,
        _id: "15",
    },
    {
        name: "Ethan Steele",
        sport: "Cricket",
        image: "https://i.ibb.co/MMRJcSB/pngegg-15-1.png",
        isFavorite: false,
        _id: "16",
    },
    {
        name: "Liam Jade",
        sport: "Rugby",
        image: "https://i.ibb.co/QnKwB14/pngegg-14-1.png",
        isFavorite: true,
        _id: "17",
    },
    {
        name: "Owen Brass",
        sport: "Baseball",
        image: "https://i.ibb.co/tKJ6hTT/pngegg-13-1.png",
        isFavorite: false,
        _id: "18",
    },
    {
        name: "Tyler Iron",
        sport: "Football",
        image: "https://i.ibb.co/df6wnq6/image-3.png",
        isFavorite: true,
        _id: "19",
    },
    {
        name: "Leo Pearl",
        sport: "Basketball",
        image: "https://i.ibb.co/3FDPTBj/pngegg-17-1.png",
        isFavorite: false,
        _id: "20",
    },
];
const FavoriteTeamz = () => {
    return playersData?.map(item => <TeamzCards item={item} key={item?._id} />)
}

export default FavoriteTeamz

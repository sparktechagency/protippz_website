import PlayerzCards from "../Playerz/PlayerzCards";

interface Player {
    name: string;
    team: string;
    position: string;
    image: string;
    isFavorite: boolean;
    _id: string;
}

const playersData: Player[] = [
    {
        name: "Robert Smith",
        team: "Inter Milan",
        position: "Forward",
        image: "https://i.ibb.co/h98pv90/pngwing-com-1-1.png",
        isFavorite: true,
        _id: "1",
    },
    {
        name: "John Doe",
        team: "Manchester United",
        position: "Defender",
        image: "https://i.ibb.co/5BnGTQk/pngegg-11-1.png",
        isFavorite: false,
        _id: "2",
    },
    {
        name: "James Brown",
        team: "Chelsea",
        position: "Midfielder",
        image: "https://i.ibb.co/z2SSsNL/pngegg-10-1.png",
        isFavorite: true,
        _id: "3",
    },
    {
        name: "Lucas White",
        team: "Arsenal",
        position: "Goalkeeper",
        image: "https://i.ibb.co/2vK5rbh/pngegg-12-1.png",
        isFavorite: false,
        _id: "4",
    },
    {
        name: "David Black",
        team: "Liverpool",
        position: "Forward",
        image: "https://i.ibb.co/F5GVnxX/klipartz-com-1.png",
        isFavorite: true,
        _id: "5",
    },
    {
        name: "Chris Green",
        team: "Manchester City",
        position: "Defender",
        image: "https://i.ibb.co/h98pv90/pngwing-com-1-1.png",
        isFavorite: false,
        _id: "6",
    },
    {
        name: "Matt Blue",
        team: "Tottenham",
        position: "Midfielder",
        image: "https://i.ibb.co/4j4JBkm/image-11.png",
        isFavorite: true,
        _id: "7",
    },
    {
        name: "Nick Gray",
        team: "Leicester City",
        position: "Goalkeeper",
        image: "https://i.ibb.co/5BnGTQk/pngegg-11-1.png",
        isFavorite: false,
        _id: "8",
    },
    {
        name: "Tom Silver",
        team: "Everton",
        position: "Forward",
        image: "https://i.ibb.co/z2SSsNL/pngegg-10-1.png",
        isFavorite: true,
        _id: "9",
    },
    {
        name: "Jake Violet",
        team: "Wolves",
        position: "Defender",
        image: "https://i.ibb.co/2vK5rbh/pngegg-12-1.png",
        isFavorite: false,
        _id: "10",
    },
    {
        name: "Paul Yellow",
        team: "Southampton",
        position: "Midfielder",
        image: "https://i.ibb.co/F5GVnxX/klipartz-com-1.png",
        isFavorite: true,
        _id: "11",
    },
    {
        name: "Rick Orange",
        team: "Aston Villa",
        position: "Goalkeeper",
        image: "https://i.ibb.co/h98pv90/pngwing-com-1-1.png",
        isFavorite: false,
        _id: "12",
    },
    {
        name: "Mark Gold",
        team: "Newcastle",
        position: "Forward",
        image: "https://i.ibb.co/4j4JBkm/image-11.png",
        isFavorite: true,
        _id: "13",
    },
    {
        name: "Gary Bronze",
        team: "West Ham",
        position: "Defender",
        image: "https://i.ibb.co/5BnGTQk/pngegg-11-1.png",
        isFavorite: false,
        _id: "14",
    },
    {
        name: "Simon Copper",
        team: "Brighton",
        position: "Midfielder",
        image: "https://i.ibb.co/z2SSsNL/pngegg-10-1.png",
        isFavorite: true,
        _id: "15",
    },
    {
        name: "Ethan Steele",
        team: "Crystal Palace",
        position: "Goalkeeper",
        image: "https://i.ibb.co/2vK5rbh/pngegg-12-1.png",
        isFavorite: false,
        _id: "16",
    },
    {
        name: "Liam Jade",
        team: "Burnley",
        position: "Forward",
        image: "https://i.ibb.co/F5GVnxX/klipartz-com-1.png",
        isFavorite: true,
        _id: "17",
    },
    {
        name: "Owen Brass",
        team: "Fulham",
        position: "Defender",
        image: "https://i.ibb.co/h98pv90/pngwing-com-1-1.png",
        isFavorite: false,
        _id: "18",
    },
    {
        name: "Tyler Iron",
        team: "Leeds United",
        position: "Midfielder",
        image: "https://i.ibb.co/4j4JBkm/image-11.png",
        isFavorite: true,
        _id: "19",
    },
    {
        name: "Leo Pearl",
        team: "Sheffield United",
        position: "Goalkeeper",
        image: "https://i.ibb.co/5BnGTQk/pngegg-11-1.png",
        isFavorite: false,
        _id: "20",
    },
];


const FavoritePlayerz = () => {
    return playersData?.map(item => <PlayerzCards item={item} key={item?._id} />)
}

export default FavoritePlayerz

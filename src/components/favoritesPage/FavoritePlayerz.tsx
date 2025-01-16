import { useEffect, useState } from "react";
import PlayerzCards from "../Playerz/PlayerzCards";
import { get } from "@/ApisRequests/server";
import { Player } from "@/app/(default)/playerz/page";

const FavoritePlayerz = () => {
  const [playersData, setPlayersData] = useState<Player[]>([]);
  useEffect(() => {
    get("/player-bookmark/my-bookmark?limit=9999999", {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      const player = res?.data?.map((item: any) => ({
        ...item?.player,
        isBookmark: true,
      }));
      setPlayersData(player);
    });
  }, []);
  return playersData?.map((item) => (
    <PlayerzCards item={item} key={item?._id} />
  ));
  // return <></>
};

export default FavoritePlayerz;

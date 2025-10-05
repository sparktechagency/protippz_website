'use client'
import { useEffect, useState } from "react";
import PlayerzCards from "../Playerz/PlayerzCards";
import { get } from "@/ApisRequests/server";
import { Player } from "@/app/(default)/playerz/page";

const FavoritePlayerz = () => {
  const [playersData, setPlayersData] = useState<Player[]>([]);
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
  useEffect(() => {
    get("/player-bookmark/my-bookmark?limit=9999999", {
      headers: {
        Authorization: `${token}`,
      },
    }).then((res) => {
      const player = res?.data?.map((item: any) => ({
        ...item?.player,
        isBookmark: true,
      }));
      setPlayersData(player);
    });
  }, [token]);
  return playersData?.map((item) => (
    <PlayerzCards item={item} key={item?._id} token={token} />
  ));
  // return <></>
};

export default FavoritePlayerz;

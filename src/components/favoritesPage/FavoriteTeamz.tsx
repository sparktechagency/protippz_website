'use client'
import React, { useEffect, useState } from "react";
import TeamzCards from "../Teamz/TeamzCards";
import { get } from "@/ApisRequests/server";
import { TeamInterface } from "@/app/(default)/teamz/page";

const FavoriteTeamz = () => {
  const [teamsData, setTeamsData] = useState<TeamInterface[]>([]);
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
  useEffect(() => {
    get("/team-bookmark/my-bookmark?limit=9999999", {
      headers: {
        Authorization: `${token}`,
      },
    }).then((res) => {
      const teams = res?.data?.map((item: any) => ({
        ...item?.team,
        isBookmark: true,
      }));
      setTeamsData(teams);
    });
  }, []);
  return teamsData?.map((item) => <TeamzCards item={item} key={item?._id} token={token} />);
};

export default FavoriteTeamz;

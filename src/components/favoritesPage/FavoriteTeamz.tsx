import React, { useEffect, useState } from "react";
import TeamzCards from "../Teamz/TeamzCards";
import { get } from "@/ApisRequests/server";
import { TeamInterface } from "@/app/(default)/teamz/page";

const FavoriteTeamz = () => {
  const [teamsData, setTeamsData] = useState<TeamInterface[]>([]);
  useEffect(() => {
    get("/team-bookmark/my-bookmark?limit=9999999", {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      const teams = res?.data?.map((item: any) => ({
        ...item?.team,
        isBookmark: true,
      }));
      setTeamsData(teams);
    });
  }, []);
  return teamsData?.map((item) => <TeamzCards item={item} key={item?._id} />);
};

export default FavoriteTeamz;

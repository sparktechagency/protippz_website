import { get } from "@/ApisRequests/server";
import PlayerCarouselClient from './Client/PlayerCarouselClient';

interface teamsType {
  _id: string;
  name: string;
  team_logo: string;
  sport: string;
}

const LIMIT = 15;

const getTeamsServer = async () => {
  const res = await get(`/team/get-all?page=1&limit=${LIMIT}`);
  return {
    teams: res.data?.result || [],
    meta: res.data?.meta,
  };
};

const Players = async () => {
  const { teams, meta } = await getTeamsServer();

  return (
    <PlayerCarouselClient
      initialTeams={teams}
      initialMeta={meta}
      limit={LIMIT}
    />
  );
};

export default Players;

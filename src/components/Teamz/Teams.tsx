import { get } from "@/ApisRequests/server";
import TeamCarouselClient from '../Playerz/Client/TeamCarouselClient';

const LIMIT = 15;

const getPlayerServer = async () => {
  const res = await get(`/league/get-all?page=1&limit=${LIMIT}`);

  return {
    players: res.data?.result || [],
    meta: res.data?.meta,
  };
};
const Teams = async () => {
  const { players, meta } = await getPlayerServer();

  return (
    <TeamCarouselClient
      initialTeams={players}
      initialMeta={meta}
      limit={LIMIT}
    />
  );
};

export default Teams;

import { NoContent, Ok } from "../interface/IHttpResponse";
import * as findPlayers from "../repositories/players-repositories";

export const getPlayersServices = async () => {
  //const vDataPlayer = { player: "Ronaldo Gaúcho" };
  const vDataPlayer = await findPlayers.findAllPlayers;

  let Response: any;
  if (!vDataPlayer) {
    Response = await Ok(vDataPlayer);
  } else {
    Response = await NoContent();
  }
  return Response;
};

import { Request, Response } from "express";
import { getPlayersServices } from "../services/players-services";

export const getPlayers = async (req: Request, res: Response) => {
  const Response = await getPlayersServices();

  res.status(Response.statusCode).json(Response.body);
};

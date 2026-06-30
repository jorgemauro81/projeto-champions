import { IPlayersRepository } from "../interface/IPlayersRepository";

const database: IPlayersRepository[] = [
  { id: 1, nome: "Ronaldo" },
  { id: 2, nome: "Messi" },
];

export const findAllPlayers = async (): Promise<IPlayersRepository[]> => {
  return database;
};

export const findPlayersById = async (
  id: number,
): Promise<IPlayersRepository | undefined> => {
  return database.find((player) => player.id === id);
};

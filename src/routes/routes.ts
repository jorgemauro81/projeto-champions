import { Router, Request, Response } from "express";
import { getPlayers } from "../controllers/player-controllers";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ status: "API on line" });
});

router.get("/Players", getPlayers);

export default router;

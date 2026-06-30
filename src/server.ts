import express, { json, Request, Response } from "express";
import createApp from "./app";

//const routes = express();
const routes = createApp();
const port = process.env.PORT;

//routes.use(json());

// routes.get("/", (req: Request, res: Response) => {
//   res.status(200).json({ Message: "Hello Word" });
// });

routes.listen(port, () => {
  console.log(`Aplicação funcionando na porta ${port}`);
});

import express from "express";

import router from "./routes/routes";

import cors from "cors";

export default function createApp() {
  const app = express();

  app.use(express.json());
  app.use("/api", router);

  const corsOption = {
    origin: "*", //Pode colocar os sites que podem acessar
    methods: ["GET"], //Tipo de método que pode usar
  };
  app.use(cors(corsOption));

  return app;
}

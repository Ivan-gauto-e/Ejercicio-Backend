import express from "express";
import cors from "cors";
import userRouters from "./routes/user.routes.js";

export function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get("/", (req, res) => {
    res.json({
      piolanga: true,
      mensaje: "La API de usuarios funciona pipicucu",
    });
  });

  app.use("/api/users", userRouters);

  return app;
}
export default createApp;

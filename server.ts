import express, { Application } from "express";
import Server from "./src";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();
const server: Server = new Server(app);
const port: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;

app
  .listen(port, "localhost", () => {
    console.log(`Server started on port ${port}`);
  })
  .on("error", (err:any) => {
    if (err.code === "EADDRINUSE") console.error(`Port ${port} is already in use`);
    else 
    console.error(err);
  });

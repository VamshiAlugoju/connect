import express, { Request, Response } from "express";
import { Server } from "socket.io";
import { createServer } from "http";

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
  socket.on("play", (data) => {
    console.log(data);
    socket.emit("play");
  });
});

app.get("/", (req: Request, res: Response) => {
  return res.json("helos");
});

server.listen(3000, () => {
  console.log("listening on some port");
});

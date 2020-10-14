const express = require("express");
const server = express();
const cors = require("cors");
const logger = require("morgan");
const helmet = require("helmet");

//~~~~~~~~~~Routers~~~~~~~~~~~~~~~~~~~~
// const userRouter = require('./routes/userRouter.js')


server.use(express.json());
server.use(helmet());
server.use(
  cors({
    origin: "*",
  })
);
server.use(logger("dev"));

// server.use('/users', userRouter) TODO -- implemnent userRouter

server.get("/", (req, res) => {
  res.status(200).json({ api: "up", timestamp: Date.now() });
});

module.exports = server;

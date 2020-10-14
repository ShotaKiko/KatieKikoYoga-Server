const express = require("express");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up", timestamp: Date.now() });
});

module.exports = server;

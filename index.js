require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3001;

app.get("/auth/google", (req, res) => {
  res.send("auth/google route");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

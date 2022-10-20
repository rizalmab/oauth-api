const express = require("express");

const router = express.Router();

router.get("/login", (req, res) => {
  res.send("On login route");
});

export default router;

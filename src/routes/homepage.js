import express from "express"

const router = express.Router();

import HomePage from "../pages/home.js"

router.get("/", (req, res) => {
  res.send(HomePage);
});

export default router;
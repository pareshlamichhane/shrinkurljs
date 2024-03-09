import { ShrinkItNow } from "../connect.js"

import express from "express"
const baseurl = process.env.BASEURL;

const router = express.Router();

router.post('/', (req, res) => {
    console.log("link");
    // Process the submitted URL here
    var shrunk = ShrinkItNow(req.body.url);
    let link = baseurl +"/r/"+ shrunk;
    console.log(link);
    res.send(`Hello there , your url has been shrinked, you can find it here: <a href='${link}' target='_blank'>${link}</a> , happy shrinking ;)!`);
});

export default router;
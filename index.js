import express from "express"
import  dotenv from "dotenv";

const port = process.env.PORT;
console.log(port)
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));

import homeRoute from "./src/routes/homepage.js"
import redirectRoute from "./src/routes/redirect.js"
import submitRoute from "./src/routes/submit.js"



app.use("/", homeRoute);
app.use("/r/", redirectRoute);
app.use("/submit", submitRoute);

app.listen(port, () => {
  console.log(`ShrinkURL app listening at http://localhost:${port}`);
});
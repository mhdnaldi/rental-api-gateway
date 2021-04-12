require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./src/router/index");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);

app.listen(process.env.PORT, (req, res) => {
  console.log(`LISTENING REQUEST FROM PORT ${process.env.PORT}`);
});

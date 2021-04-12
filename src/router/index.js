const router = require("express").Router();
const users = require("./users/users");

router.use("/", users);

module.exports = router;

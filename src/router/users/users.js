const route = require("express").Router();
const { register } = require("../../controller/users/users");

route.post("/users/register", register);
route.post("/users/login");
route.patch("/:id");
route.delete("/:id");

module.exports = route;

const express = require("express");
const userRoutes = express.Router();
const {
    addNewUser,
    getAllusers,
    getuser,
    replaceuser,
    updateuser,
    deleteuser
} = require("../controller/user.controller");

userRoutes.post("/", addNewUser);

userRoutes.get("/", getAllusers);

userRoutes.get("/:id", getuser);

userRoutes.put("/:id", replaceuser);

userRoutes.patch("/:id", updateuser);

userRoutes.delete("/:id", deleteuser);

module.exports = userRoutes;
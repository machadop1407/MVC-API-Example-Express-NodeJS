const express = require("express");
const router = express.Router();

const { GetAllUsers, GetUser, DeleteUser } = require("../controllers/User");

router.get("/all", GetAllUsers);
router.get("/byId/:id", GetUser);
router.delete("/:id", DeleteUser);

module.exports = router;

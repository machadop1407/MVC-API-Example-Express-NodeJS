import { Router } from "express";
const router = Router();

import { GetAllUsers, GetUser, DeleteUser, UpdateUser } from "../controllers/User.js";

router.get("/all", GetAllUsers);
router.get("/byId/:id", GetUser);
router.delete("/:id", DeleteUser);
router.get("/create", UpdateUser);

export default router;

import { Router } from "express";
const router = Router();

import { GetAllUsers, GetUser, DeleteUser } from "../controllers/User.js";

router.get("/all", GetAllUsers);
router.get("/byId/:id", GetUser);
router.delete("/:id", DeleteUser);

export default router;

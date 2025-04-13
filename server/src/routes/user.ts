import { Router } from "express";
import { getUser, getUserProfile } from "../controllers/user";

const router = Router();

router.get("/", getUser);
router.get("/profile", getUserProfile);

export default router;

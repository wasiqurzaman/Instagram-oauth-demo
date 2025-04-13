import { Router } from "express";
import { getUser, getUserProfile } from "../controllers/user";
import { getAllMedia } from "../controllers/media";

const router = Router();

router.get("/", getAllMedia);
router.get("/:id", getUserProfile);

export default router;

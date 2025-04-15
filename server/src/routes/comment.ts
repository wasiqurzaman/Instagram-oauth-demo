import { Router } from "express";
import { getAllComments } from "../controllers/comment";

const router = Router();

router.get("/", getAllComments);
// router.get("/")

export default router;

import { Router } from "express";
import { handleLogin } from "../controllers/auth";

const router = Router();

router.post("/login", handleLogin);

export default router;

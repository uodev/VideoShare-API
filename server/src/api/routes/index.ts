import { Router} from "express";
import videoRoutes from './video/index'
import authRoutes from "./auth/index"
const router = Router();

router.use("/videos", videoRoutes)
router.use("/auth", authRoutes)
export default router;
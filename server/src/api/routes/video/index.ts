import {Router,Response,Request} from "express";
import {videoUploader,getAllVideos} from "../../controllers/videoController"
const router = Router();
import {errorWrapper} from "../../middlewares/errors/errorHandling";

router.get("/", errorWrapper(getAllVideos))
router.post("/",errorWrapper(videoUploader))

export default router
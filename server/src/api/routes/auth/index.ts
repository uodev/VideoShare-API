import {Router} from "express";
import {userLogin, userRegister} from "../../controllers/userController";
import {errorWrapper} from "../../middlewares/errors/errorHandling";

const router = Router()

router.post("/signup", errorWrapper(userRegister))
router.post("/signin", errorWrapper(userLogin))

export default router
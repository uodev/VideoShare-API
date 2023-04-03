import {Response, Request} from "express";
import User from "../../domain/models/UserModel";
import {comparePassword, hashPassword} from "../middlewares/helper/bcryptHelper";
import {sendHttpCreated, sendHttpOk} from "../../infrastructure/utils/response/sendHttpResponse";
import {createToken} from "../middlewares/helper/jwtHepler";
import {CustomError} from "../../infrastructure/utils/errors/customError";
import {StatusCode} from "../../infrastructure/utils/response/statusCode";

export const userRegister = async (req: Request, res: Response) => {
    const {username, password, email} = req.body
    const hashPasswordUser = await hashPassword(password)
    const user = await User.create({
        email, username, password: hashPasswordUser
    })
    await user.save()
    const token = createToken(user._id.toString())
    res.cookie("jwt", token, {expires: new Date(Date.now() + 5 * 10000)})
    sendHttpCreated(res, {user, token})
}

export const userLogin = async (req: Request, res: Response) => {
    const {email, password} = req.body
    const findUser = await User.findOne({email})
    if (!findUser) throw new CustomError(StatusCode.NOT_FOUND,"UserNotFound")

    const comparePasswordUser = await comparePassword(password, findUser.password)
    if (!comparePasswordUser) throw new CustomError(StatusCode.BAD_REQUEST,"WrongPassword")

    const token = createToken(findUser._id.toString())
    res.cookie("jwt", token, {expires: new Date(Date.now() + 5 * 10000)})
    sendHttpOk(res, {token})
}
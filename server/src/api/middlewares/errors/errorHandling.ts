import {Request, Response, NextFunction} from "express";
import {CustomError} from "../../../infrastructure/utils/errors/customError"

export const errorWrapper = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next)
}

export const errorHandlinig = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
    console.log(err)
    const statusCode = err.statusCode || 500
    let message = err.message || 'Internal Server Error'
    if(message==="UserNotFound") message="Kullanıcı Bulunamadı"
    if(message==="WrongPassword") message="Şifre Hatalı"
    res.status(statusCode).json({
        statusCode,
        status: "error",
        message
    })
}
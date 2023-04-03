import { Response } from "express"
import { StatusCode } from "./statusCode"

const sendHttpResponse = (res:Response,statusCode:StatusCode,message?:string,data?:any): void => {
    res.status(statusCode).json({
        statusCode,message: message || "" ,data: data || {}
})
}

//*
// * @param res
// * @param data?
// * If response is success then send 200
// */
export const sendHttpOk = (res:Response,data?:any): void => {
    sendHttpResponse(res,StatusCode.OK,"success",data)
}

//*
// * @param res
// * @param data?
// * If response is created then send 201
// */
export const sendHttpCreated = (res:Response,data?:any): void => {
    sendHttpResponse(res,StatusCode.CREATED,"Created",data)
}

//*
// * @param res
// * If there is no content then send 204
// */
export const sendHttpNoContent = (res:Response): void => {
    sendHttpResponse(res,StatusCode.NO_CONTENT,"No Content")
}

//*
// * @param res
// * @param data?
// * If response is bad request then send 400
// */
export const sendHttpBadRequest = (res:Response,data?:any): void => {
    sendHttpResponse(res,StatusCode.BAD_REQUEST,"Bad Request",data)
}

//*
// * @param res
// * @param data?
// * If response is unauthorized then send 401
// */
export const sendHttpUnauthorized = (res:Response,data?:any): void => {
    sendHttpResponse(res,StatusCode.UNAUTHORIZED,"Unauthorized",data)
}

//*
// * @param res
// * @param data?
// * If response is forbidden then send 403
// */
export const sendHttpForbidden = (res:Response,data?:any): void => {
    sendHttpResponse(res,StatusCode.FORBIDDEN,"Forbidden",data)
}

//*
// * @param res
// * @param data
// * If data can't find then send 404
// */
export const sendHttpNotFound = (res:Response,data?:any): void => {
    sendHttpResponse(res,StatusCode.NOT_FOUND,"Not Found",data)
}

//*
// * @param res
// * @param data?
// * If data is conflict then send 409
// */
export const sendHttpConflict = (res:Response,data?:any): void => {
    sendHttpResponse(res,StatusCode.CONFLICT,"Conflict",data)
}

//*
// * @param res
// * @param data?
// * If there is internal server error then send 500
// */
export const sendHttpInternalServerError = (res:Response,data?:any): void => {
    sendHttpResponse(res,StatusCode.INTERNAL_SERVER_ERROR,"Internal Server Error",data)
}

//*
// * @param res
// * @param data?
// * If there is bad gateway then send 502
// */
export const sendHttpBadGateway = (res:Response,data?:any): void => {
    sendHttpResponse(res,StatusCode.BAD_GATEWAY,"Bad Gateway",data)
}



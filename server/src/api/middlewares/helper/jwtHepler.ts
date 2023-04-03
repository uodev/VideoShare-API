import jwt from "jsonwebtoken"

export const createToken = (userId: string): string => {
    const secret= process.env.JWT_SECRET
    return jwt.sign({userId}, secret!.toString(), {expiresIn: "7 days"})
}

export const verifyToken = (token: string): { userId: string } | null => {
    try {
        const secret= process.env.JWT_SECRET
        const decoded = jwt.verify(token, secret!.toString())
        return decoded as { userId: string }
    } catch (e) {
        return null
    }
}
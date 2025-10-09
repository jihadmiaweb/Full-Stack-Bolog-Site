import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";


export const authChake = (req: Request, res: Response, next: NextFunction) => {
    const accasstoken = req.cookies?.accasstoken

    if (!accasstoken) {
        res.status(400).json({
            status: "error",
            masseas: "token not funt"
        })
    }

    const ChickTokin = jwt.verify(accasstoken, "secret")
    console.log(ChickTokin);

    next()

}
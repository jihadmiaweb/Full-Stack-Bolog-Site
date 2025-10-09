import type { Response } from "express";
import { User } from "../user/user.model.js";
import type { IAuth } from "./auth.interface.js"
import jwt from "jsonwebtoken";

import bcrypt from "bcryptjs";
// import { jwt } from "zod";

const login = async (payload: IAuth, res: Response) => {
    const { email, password } = payload;

    const isUserExist = await User.findOne({ email })

    if (!isUserExist) {
        res.status(400).json({
            status: "error",
            // message: "user doesn't exist",
            message: "email doesn't match"
        })
    }

    const isPasswordMatch = await bcrypt.compare(password, (isUserExist?.password as string));

    if (!isPasswordMatch) {
        res.status(400).json({
            status: "error",
            // message: "user doesn't exist",
            message: "password doesn't match"
        })
    }


    const tokenpaylode = {
        name: isUserExist?.name,
        email: isUserExist?.email,
        avatar: isUserExist?.avatar,
        isVerified: isUserExist?.isVerified,
        isPremium: isUserExist?.isPremium

    }

    const accasstoken = jwt.sign(tokenpaylode, "secret", {
        expiresIn: "15h"
    })
    res.cookie("accasstoken", accasstoken)


    return {
        accasstoken
    };


}


export const AuthServices = {
    login
}
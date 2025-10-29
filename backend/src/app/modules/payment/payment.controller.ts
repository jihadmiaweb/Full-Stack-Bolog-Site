import httpStatus from "http-status-codes"
import type { NextFunction, Request, Response } from "express"

import catchAsync from "../../utils/catchAsync.js"
import { paymentServices } from "./payment.services.js";

const success = catchAsync(async (req: Request, res: Response, next: NextFunction) => {


    const email = req.query.email

    const uodateuserinfo = await paymentServices.success(email as string)
    res.status(httpStatus.OK).json(uodateuserinfo)



})

export const paymentController = {
    success
}

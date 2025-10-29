import httpStatus from "http-status-codes";
import catchAsync from "../../utils/catchAsync.js";
import { paymentServices } from "./payment.services.js";
const success = catchAsync(async (req, res, next) => {
    const email = req.query.email;
    const uodateuserinfo = await paymentServices.success(email);
    res.status(httpStatus.OK).json(uodateuserinfo);
});
export const paymentController = {
    success
};
//# sourceMappingURL=payment.controller.js.map
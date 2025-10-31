import { CategoriesServices } from "./Categories.servics.js";
import catchAsync from "../../utils/catchAsync.js";
import httpStatus from "http-status-codes";
const Create = catchAsync(async (req, res, next) => {
    const data = await CategoriesServices.Create(req.body); // ✅ sending body only
    res.status(httpStatus.CREATED).json({
        status: "success",
        message: "Category created successfully",
        data,
    });
});
export const CategoriesContoller = { Create };
//# sourceMappingURL=Categories.controller.js.map
import { Router } from "express";
import { authCheck } from "../../middleware/authCheck.js";
import { CategoriesContoller } from "./Categories.controller.js";
const router = Router();
router.post('/Creates', CategoriesContoller.Create);
export const CategoriesRoute = router;
//# sourceMappingURL=Categories.router.js.map
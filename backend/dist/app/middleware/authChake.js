import jwt from "jsonwebtoken";
export const authChake = (req, res, next) => {
    const accasstoken = req.cookies?.accasstoken;
    if (!accasstoken) {
        res.status(400).json({
            status: "error",
            masseas: "token not funt"
        });
    }
    const ChickTokin = jwt.verify(accasstoken, "secret");
    console.log(ChickTokin);
    next();
};
//# sourceMappingURL=authChake.js.map
import jwt from "jsonwebtoken";
export const creaeAccessToken = (payload) => {
    return jwt.sign(payload, "my_secret", {
        expiresIn: "1h",
    });
};
export const VerifiedAccessToken = (token) => {
    return jwt.verify(token, "my_secret");
};
//# sourceMappingURL=accassToken.js.map
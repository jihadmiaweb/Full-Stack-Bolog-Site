import jwt from "jsonwebtoken"

export const creaeAccessToken = (payload: any) => {
    return jwt.sign(payload, "my_secret", {
        expiresIn: "1h",
    })
}

export const VerifiedAccessToken = (token: string) => {
    return jwt.verify(token, "my_secret")
}
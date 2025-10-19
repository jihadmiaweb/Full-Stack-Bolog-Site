import dotenv from "dotenv";
dotenv.config();
const envVarsFn = () => {
    const requiredEnvVariables = [
        "PORT",
        "DB_URI",
        "SPMT_HOST",
        "SPMT_PORT",
        "SPMT_USERNAME",
        "SPMT_PASS"
    ];
    requiredEnvVariables.forEach((key) => {
        if (!process.env[key]) {
            throw new Error(`Missing required environment variable ${key}`);
        }
    });
    return {
        PORT: process.env.PORT,
        DB_URI: process.env.DB_URI,
        EMAIL: {
            SPMT_HOST: process.env.SPMT_HOST,
            SPMT_PORT: process.env.SPMT_PORT,
            SPMT_USERNAME: process.env.SPMT_USERNAME,
            SPMT_PASS: process.env.SPMT_PASS,
        }
    };
};
export const envVars = envVarsFn();
//# sourceMappingURL=env.js.map
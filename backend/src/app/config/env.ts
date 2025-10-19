import dotenv from "dotenv";

dotenv.config();

type EnvType = {
    PORT: string;
    DB_URI: string;
    EMAIL: {
        SPMT_HOST: string
        SPMT_PORT: string
        SPMT_USERNAME: string
        SPMT_PASS: string
    }

}

const envVarsFn = (): EnvType => {
    const requiredEnvVariables: string[] = [
        "PORT",
        "DB_URI",
        "SPMT_HOST",
        "SPMT_PORT",
        "SPMT_USERNAME",
        "SPMT_PASS"
    ];

    requiredEnvVariables.forEach((key: string) => {
        if (!process.env[key]) {
            throw new Error(`Missing required environment variable ${key}`);
        }
    })

    return {
        PORT: process.env.PORT as string,
        DB_URI: process.env.DB_URI as string,
        EMAIL: {
            SPMT_HOST: process.env.SPMT_HOST as string,
            SPMT_PORT: process.env.SPMT_PORT as string,
            SPMT_USERNAME: process.env.SPMT_USERNAME as string,
            SPMT_PASS: process.env.SPMT_PASS as string,
        }
    };
}


export const envVars = envVarsFn();


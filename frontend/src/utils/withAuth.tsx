

import { useMeQuery } from "@/redux/modules/auth/auth.api";
import type { ComponentType } from "react";
import { Navigate, } from "react-router";

type MeResponse = {
    status: string;
    user: {
        id: string;
        name: string;
        email: string;
    };
};

export const withAuth = (Component: ComponentType) => {
    return function Com() {
        const { data, isLoading } = useMeQuery(undefined) as {
            data?: MeResponse;
            isLoading: boolean;
        };

        if (isLoading) {
            return <p>loding ...</p>;
        }

        if (data?.status === "success") {
            return <Component />;
        }

        return <Navigate to={"/login"} replace />
    };
};

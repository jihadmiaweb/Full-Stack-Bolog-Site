import { User } from "../user/user.model.js";



const success = async (email: string) => {

    const updateUser = await User.updateOne(
        {
            email
        }, {
        isPremium: true
    }

    );

    return {
        status: "success",
        message: "payment addd successfully",
    }
};

export const paymentServices = {
    success
}
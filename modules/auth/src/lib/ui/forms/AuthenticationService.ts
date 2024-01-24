import { useForgotPasswordMutation } from "@productize-v1.0.0/modules/shared/redux";

export const AuthenticationService = () => {
    const [forgotPassword, forgotPasswordStatus] = useForgotPasswordMutation();
    return { forgotPasswordService: { forgotPassword, forgotPasswordStatus } };
};

import { useForgotPasswordMutation } from "@productize/redux";


export const AuthenticationService = () => {
    const [forgotPassword, forgotPasswordStatus] = useForgotPasswordMutation();
    return { forgotPasswordService: { forgotPassword, forgotPasswordStatus } };
};

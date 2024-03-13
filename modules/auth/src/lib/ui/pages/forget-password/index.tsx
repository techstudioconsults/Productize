
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {AuthBackground} from "../../template-views/Auth-background";
import {AuthFormTemplateLogin} from "../../template-views/Auth-form-template";
import {ForgotPassowrdForm} from "../../forms/ForgotPassword";
import {ResetPassword} from "../../forms/ResetPassword";
import {VerifyEmailTemplate} from "../../template-views/VerifyEmailTemplate";
import { selectEmailConfirmation } from "@productize/redux";

export const ForgotPassword = () => {
    const emailConfirmation = useSelector(selectEmailConfirmation);
    const [FPToken, setFPToken] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    // MAKE THIS A HOOK (USE IN PERLOADER AND HERE!)
    useEffect(() => {
        // Get the URL from the browser's address bar
        const url = window.location.href;
        // Use the URLSearchParams API to parse the query string
        const queryParams = new URLSearchParams(new URL(url).search);
        // Get the value of the 'code' parameter
        const token = queryParams.get("token");
        const email = queryParams.get("email");
        // Check if 'code' parameter exists and has a value
        if (token && email) {
            setEmail(email);
            setFPToken(token);
        } else {
            console.log("Code parameter not found in the URL.");
        }
    }, []);

    return (
        <AuthBackground isLogin={true}>
            {!emailConfirmation.emailSent && !FPToken && (
                <AuthFormTemplateLogin title="Forgot password" subTitle="Enter your email address to reset your password.">
                    <ForgotPassowrdForm/>
                </AuthFormTemplateLogin>
            )}
            {/*check email or varify email temlate*/}
            {emailConfirmation.emailSent && !FPToken && (
                <AuthFormTemplateLogin
                    title="Check your mail"
                    subTitle="We have sent a password recovery instructions to your email."
                >
                    <VerifyEmailTemplate/>
                </AuthFormTemplateLogin>
            )}
            {/* change password or change forgot password */}
            {emailConfirmation.emailSent && FPToken && (
                <AuthFormTemplateLogin title="Reset Password" subTitle="Enter your new password.">
                    <ResetPassword email={email} token={FPToken}/>
                </AuthFormTemplateLogin>
            )}
        </AuthBackground>
    );
};

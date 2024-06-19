import { SignupForm } from "../../forms/signup-form/SignupForm";
import { AuthBackground } from "../../template-views/Auth-background";
import { AuthFormTemplateSignup } from "../../template-views/Auth-form-template";

export const Signup = () => {
    return (
        <AuthBackground isLogin={false}>
            <AuthFormTemplateSignup>
                <SignupForm />
            </AuthFormTemplateSignup>
        </AuthBackground>
    );
};

import { LoginForm } from '../../forms/LogininForm';
import { AuthBackground } from '../../template-views/Auth-background';
import { AuthFormTemplateLogin } from '../../template-views/Auth-form-template';

export const Login = () => {
    return (
        <AuthBackground isLogin={true}>
            <AuthFormTemplateLogin
                title="Sign In"
                subTitle="Enter your email and password to continue monetizing your
            ideas"
            >
                <LoginForm />
            </AuthFormTemplateLogin>
        </AuthBackground>
    );
};

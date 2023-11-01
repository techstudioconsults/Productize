import { LoginForm } from '@productize-v1.0.0/modules/auth/feature';
import { AuthBackground } from '../../lib/Auth-background';
import { AuthFormTemplateLogin } from '../../lib/Auth-form-template';

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



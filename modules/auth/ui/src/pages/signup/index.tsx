
import { SignupForm } from '@productize-v1.0.0/modules/auth/feature';
import { AuthBackground } from '../../lib/Auth-background';
import { AuthFormTemplateSignup } from '../../lib/Auth-form-template';

export const Signup = () => {
  return (
    <AuthBackground isLogin={false}>
      <AuthFormTemplateSignup>
        <SignupForm />
      </AuthFormTemplateSignup>
    </AuthBackground>
  );
};



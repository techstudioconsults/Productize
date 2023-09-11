import { LoginForm } from '@productize/auth-lib/feature';
import { AuthBackground, AuthFormTemplateLogin } from '@productize/auth-lib/ui';
import React from 'react';

const Login = () => {
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

export default Login;
